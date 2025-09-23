import { useEffect, useRef, useState } from "react";

export default function BowmanShooter() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [tension, setTension] = useState(50);
  const [shotResult, setShotResult] = useState("");
  const [trainerFeedback, setTrainerFeedback] = useState("");
  const [isFlying, setIsFlying] = useState(false);
  const [landedTipX, setLandedTipX] = useState<number | null>(null);

  const animRef = useRef<number | null>(null);
  const startTipXRef = useRef(0);
  const destTipXRef = useRef(0);
  const startTimeRef = useRef(0);

  // --- Slider mapping (internally pixels; percent for the user)
  const min_slider = 10;
  const max_slider = 1000;

  const toPercent = (val: number) =>
    Math.round(((val - min_slider) / (max_slider - min_slider)) * 100);
  const toReal = (percent: number) =>
    Math.round(min_slider + ((max_slider - min_slider) * percent) / 100);

  // --- Responsive sizes derived from canvas client size
  const getCanvasCSSSize = () => {
    const c = canvasRef.current;
    if (!c) return { W: 700, H: 400 }; // fallback
    return { W: c.clientWidth, H: c.clientHeight };
  };

  // Base layout is anchored to width/height at draw time:
  const metrics = () => {
    const { W, H } = getCanvasCSSSize();
    // Positions based on original proportions: 100/700, 500/700, 200/400
    const bowmanX = W * (100 / 700);
    const targetX = W * (500 / 700);
    const targetY = H * 0.5;
    // scaling tuned so original look at ~700px stays similar.
    const scaling = W / 350; // 2 at ~700px width
    return { W, H, bowmanX, targetX, targetY, scaling };
  };

  // Visual offset for pre-shot arrow position (reversed mapping)
  const getVisualOffset = () => {
    const minT = min_slider;
    const maxT = max_slider;
    const { scaling } = metrics();
    const minV = -20 * scaling;
    const maxV = 20 * scaling;
    const ratio = (tension - minT) / (maxT - minT);
    return maxV - ratio * (maxV - minV);
  };

  // Destination tip X based on tension & current size
  const computeDestTipX = (t: number, startTipX: number) => {
    const { W, bowmanX, scaling } = metrics();
    const normalized = (t - min_slider) / (max_slider - min_slider); // 0..1
    const minTipX = bowmanX + 40 * scaling; // arrow tip at rest
    const maxTipX = W - 4;

    const computed = minTipX + normalized * (maxTipX - minTipX);

    if (t <= min_slider) return startTipX; // no movement at absolute min

    const minTravelPx = 6; // minimal visible movement
    const nudged = Math.max(startTipX + minTravelPx, computed);

    return Math.min(nudged, maxTipX);
  };

  // Speed (px/sec) scales a bit with canvas width so timing feels right
  const speedPxPerSec = (() => {
    const { W } = metrics();
    const baseMin = 300 * (W / 700);
    const baseMax = 1000 * (W / 700);
    return baseMin + ((tension - min_slider) / (max_slider - min_slider)) * (baseMax - baseMin);
  })();

  // Hi-DPI sizing + initial draw, and redraw on container resize / DPR change
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.clientWidth || 700;
      const cssH = canvas.clientHeight || 400;

      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Keep current state (landed or pre-shot)
      if (landedTipX != null) {
        drawScene(landedTipX);
      } else {
        drawScene();
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Some browsers need DPR-change handling
    const mql = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const dprListener = () => resize();
    if (mql && "addEventListener" in mql) mql.addEventListener("change", dprListener);

    // First paint
    resize();

    return () => {
      ro.disconnect();
      if (mql && "removeEventListener" in mql) mql.removeEventListener("change", dprListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Redraw on tension change unless animating
  useEffect(() => {
    if (isFlying) return;
    if (landedTipX != null) {
      drawScene(landedTipX);
    } else {
      drawScene();
    }
  }, [tension, isFlying, landedTipX]);

  const step = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const start = startTipXRef.current;
    const dest = destTipXRef.current;

    const totalDist = dest - start;
    const dir = Math.sign(totalDist) || 1;
    const traveled = Math.min(Math.abs(totalDist), speedPxPerSec * elapsed) * dir;

    const tipX = start + traveled;

    drawScene(tipX);

    if (Math.abs(dest - tipX) <= 0.5) {
      cancelAnim();

      setLandedTipX(dest);
      drawScene(dest);

      const { targetX, scaling } = metrics();
      const distanceToCenter = Math.abs(dest - targetX);
      const hit = distanceToCenter <= 3 * scaling;
      const missAmount = Math.round(distanceToCenter);

      if (!hit) {
        if (missAmount < 100) {
          setShotResult(`❌ Daneben (um ${missAmount} cm verfehlt)`);
        } else {
          setShotResult(`❌ Daneben (um ${(missAmount / 100).toFixed(1)} Meter verfehlt)`);
        }
      }

      if (hit) {
        setShotResult("🎯 Treffer!");
        setTrainerFeedback("Super Schuss!");
      } else if (distanceToCenter > 100) {
        setTrainerFeedback(dest < targetX ? "Deutlich mehr Spannung!" : "Das war deutlich zu stark!");
      } else if (distanceToCenter > 40) {
        setTrainerFeedback(dest < targetX ? "Zu schwach, etwas mehr Spannung!" : "Zu stark, etwas weniger Spannung!");
      } else {
        setTrainerFeedback(dest < targetX ? "Fast geschafft, nur ein bisschen mehr Spannung!" : "Fast geschafft, nur ein bisschen weniger Spannung!");
      }
      return;
    }

    animRef.current = requestAnimationFrame(step);
  };

  const startAnim = (startTipX: number, destTipX: number) => {
    startTipXRef.current = startTipX;
    destTipXRef.current = destTipX;
    startTimeRef.current = 0;
    setIsFlying(true);
    animRef.current = requestAnimationFrame(step);
  };

  const cancelAnim = () => {
    if (animRef.current != null) cancelAnimationFrame(animRef.current);
    animRef.current = null;
    setIsFlying(false);
    startTimeRef.current = 0;
  };

  useEffect(() => () => cancelAnim(), []);

  const drawScene = (animatedTipX?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { W, H, targetX, targetY, scaling } = metrics();

    ctx.clearRect(0, 0, W, H);

    drawTarget(ctx, targetX, targetY, scaling);
    drawStickmanWithBow(ctx, metrics().bowmanX, targetY, scaling, animatedTipX);
  };

  const drawTarget = (ctx: CanvasRenderingContext2D, x: number, y: number, s: number) => {
    const ringWidths = [s * 27, s * 24, s * 15, s * 12, s * 3];
    const colors = ["black", "white", "black", "white", "red"];
    for (let i = 0; i < ringWidths.length; i++) {
      ctx.beginPath();
      ctx.arc(x, y - 25 * s, ringWidths[i], 0, Math.PI * 2);
      ctx.fillStyle = colors[i];
      ctx.fill();
    }
  };

  const drawStickmanWithBow = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
    animatedTipX?: number
  ) => {
    ctx.strokeStyle = "oklch(18% 0.07 267.935)";
    ctx.lineWidth = 3;

    // Head
    ctx.beginPath();
    ctx.arc(x, y - 40 * s, 10 * s, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(x, y - 30 * s);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(x - 15 * s, y - 25 * s);
    ctx.lineTo(x + 15 * s, y - 25 * s);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 10 * s, y + 20 * s);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10 * s, y + 20 * s);
    ctx.stroke();

    // Bow
    ctx.beginPath();
    ctx.arc(x + 15 * s, y - 25 * s, 10 * s, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.stroke();

    // Arrow
    if (typeof animatedTipX === "number") {
      drawArrowByTip(ctx, y - 25 * s, s, animatedTipX);
    } else {
      const offsetX = getVisualOffset();
      drawArrowStatic(ctx, x, y, s, offsetX);
    }
  };

  const drawArrowStatic = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
    offsetX: number
  ) => {
    ctx.strokeStyle = "oklch(85% 0.060 122.328)";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x + offsetX, y - 25 * s);
    ctx.lineTo(x + 40 * s + offsetX, y - 25 * s);

    ctx.moveTo(x + 40 * s + offsetX, y - 25 * s);
    ctx.lineTo(x + 35 * s + offsetX, y - 20 * s);

    ctx.moveTo(x + 40 * s + offsetX, y - 25 * s);
    ctx.lineTo(x + 35 * s + offsetX, y - 30 * s);

    ctx.stroke();
  };

  const drawArrowByTip = (
    ctx: CanvasRenderingContext2D,
    yTop: number,
    s: number,
    tipX: number
  ) => {
    ctx.strokeStyle = "oklch(85% 0.060 122.328)";
    ctx.lineWidth = 3;

    const baseX = tipX - 40 * s;

    ctx.beginPath();
    ctx.moveTo(baseX, yTop);
    ctx.lineTo(tipX, yTop);

    ctx.moveTo(tipX, yTop);
    ctx.lineTo(tipX - 5 * s, yTop + 5 * s);

    ctx.moveTo(tipX, yTop);
    ctx.lineTo(tipX - 5 * s, yTop - 5 * s);

    ctx.stroke();
  };

  const shootArrow = () => {
    if (isFlying) return;

    const { bowmanX, scaling } = metrics();

    const startTipX = bowmanX + 40 * scaling + getVisualOffset();
    const destTipX = computeDestTipX(tension, startTipX);

    setShotResult("");
    setTrainerFeedback("");

    startAnim(startTipX, destTipX);
  };

  return (
    <section className="py-6 px-4 sm:px-6 overflow-x-hidden" id="bowman">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4 sm:mb-6 break-words">
          Wie lernt ein*e Bogenschütze*in? 🏹
        </h1>

        <p className="text-base sm:text-lg text-text-normal max-w-3xl mx-auto leading-relaxed text-center mb-6 sm:mb-8 break-words">
          Hier können Sie den Trainingszyklus beim Bogenschießen ausprobieren. Nach jedem Versuch wird ein Ergebnis beobachtet
          <strong className="text-primary"> (Loss)</strong> und analysiert, woraufhin eine Korrektur vorgeschlagen wird
          <strong className="text-primary"> (Backpropagation)</strong>. Die Korrektur kann dann über den Regler
          vorgenommen werden <strong className="text-primary"> (Gradientenabstieg)</strong>.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[61.8%_38.2%] gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Canvas + Controls */}
          <div>
            {/* Responsive canvas container keeps 7:4 ratio */}
            <div ref={containerRef} className="relative w-full aspect-[7/4]">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full border border-outline rounded-lg"
              />
            </div>

            <div className="mt-4 sm:mt-6">
              <label className="block text-base sm:text-lg font-bold text-primary mb-2">
                Bogenspannung (Gradientenabstieg):
              </label>
              <p className="text-lg sm:text-xl font-bold text-primary mb-3">
                {toPercent(tension)}%
              </p>

              <input
                type="range"
                min="0"
                max="100"
                value={toPercent(tension)}
                onChange={(e) => {
                  if (isFlying) return;
                  setLandedTipX(null);
                  setTension(toReal(Number(e.target.value)));
                }}
                className="w-full h-2 mb-4 cursor-pointer appearance-none rounded-lg bg-primary-container accent-primary disabled:opacity-60"
                disabled={isFlying}
              />

              <button
                onClick={shootArrow}
                disabled={isFlying}
                className={`rounded-lg px-5 sm:px-6 py-2 text-base sm:text-lg font-semibold transition-all
                  bg-primary-container text-on-primary-container
                  hover:scale-105 hover:brightness-110 hover:shadow-lg
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                  active:scale-95
                  disabled:opacity-60 disabled:hover:scale-100 disabled:hover:brightness-100 disabled:hover:shadow-none`}
              >
                Pfeil abschießen
              </button>
            </div>
          </div>

          {/* Right Column: Feedback */}
          <div className="p-0 lg:p-2">
            <h3 className="text-primary text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Trainer*in
            </h3>
            <div className="bg-bgColor p-3 sm:p-4 rounded-lg border border-outline mb-3 sm:mb-4">
              <p className="text-text-normal font-semibold text-xs sm:text-sm mb-2">
                Beobachtetes Ergebnis (Loss):
              </p>
              <p className="text-text-normal text-lg sm:text-xl">{shotResult}</p>
            </div>
            <div className="bg-primary/5 border-l-4 text-primary p-4 sm:p-6 rounded-r-lg">
              <p className="font-medium text-sm sm:text-base">
                <strong className="text-primary">👩‍🏫💬 Rückmeldung (Backpropagation):</strong><br />
                {trainerFeedback}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
