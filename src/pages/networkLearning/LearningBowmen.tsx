import { useEffect, useRef, useState } from "react";

export default function BowmanShooter() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tension, setTension] = useState(50);
  const [shotResult, setShotResult] = useState("");
  const [trainerFeedback, setTrainerFeedback] = useState("");
  const [isFlying, setIsFlying] = useState(false);
  const [landedTipX, setLandedTipX] = useState<number | null>(null);

  const animRef = useRef<number | null>(null);
  const startTipXRef = useRef(0);
  const destTipXRef = useRef(0);
  const startTimeRef = useRef(0);

  const canvasWidth = 700;
  const canvasHeight = 400;

  const bowmanX = 100;
  const targetX = 500;
  const targetY = 200;

  const scaling = 2

  // Slider mapping (real pixels internally; percent for the user)
  const min_slider = 10;
  const max_slider = 1000;

  const toPercent = (val: number) =>
    Math.round(((val - min_slider) / (max_slider - min_slider)) * 100);

  const toReal = (percent: number) =>
    Math.round(min_slider + ((max_slider - min_slider) * percent) / 100);

  // Map tension (10–2000) to visual offset [-40, 40], reversed:
  // low tension => +40 (forward), high tension => -40 (pulled back)
  const getVisualOffset = () => {
    const minT = min_slider;
    const maxT = max_slider;
    const minV = -20;
    const maxV = 20;
    const ratio = (tension - minT) / (maxT - minT);
    return maxV - ratio * (maxV - minV);
  };

  // Map tension (10–2000) to the arrow TIP's destination X on the canvas
  const computeDestTipX = (t: number, s:number) => {
    const normalized = (t - min_slider) / (max_slider - min_slider); // 0..1
    const minTipX = bowmanX + 40;         // tip when offset = 0
    const maxTipX = canvasWidth - 4;      // keep inside canvas
    return Math.max(s, minTipX + normalized * (maxTipX - minTipX)) ;
  };

  // Canvas setup (hi-DPI) and initial draw
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    drawScene(); // initial
  }, []);

  // Redraw logic on tension change or on touch of tension bar
    useEffect(() => {
        if (isFlying) return;

        if (landedTipX != null) {
            // keep the arrow where it landed
            drawScene(landedTipX);
        } else {
            // original pre-shot position (uses getVisualOffset)
            drawScene();
        }
    }, [tension, isFlying, landedTipX]);


  // min tension => 300 px/sec, max tension => 1000 px/sec
    const speedPxPerSec = 300 + ((tension - min_slider) / (max_slider - min_slider)) * (1000 - 300);


  const step = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = (timestamp - startTimeRef.current) / 1000;
    const start = startTipXRef.current;
    const dest = destTipXRef.current;

    const totalDist = dest - start;
    const dir = Math.sign(totalDist) || 1;
    const traveled = Math.min(Math.abs(totalDist), speedPxPerSec * elapsed) * dir;

    const tipX = start + traveled;

    // Draw current frame with the animated tip
    drawScene(tipX);

    if (Math.abs(dest - tipX) <= 0.5) {
        cancelAnim();

        setLandedTipX(dest);   // remember where the arrow landed
        drawScene(dest);       // Final draw at the landed tip

        const distanceToCenter = Math.abs(dest - targetX);
        const hit = distanceToCenter <= 3*scaling ;
        const scaledDistance = distanceToCenter / 40;
        const missAmount = Math.round(scaledDistance * 10) / 10;

        if (!hit) {
          setShotResult(`❌ Daneben (um ${missAmount} Meter verfehlt)`);
        }  

        //setShotResult(hit ? "🎯 Treffer!" : "❌ Daneben");
        if (hit) {
          setShotResult("🎯 Treffer!");  
          setTrainerFeedback("Super Schuss!");
        } else if (distanceToCenter > 100) {
            // Far away
            setTrainerFeedback(
                dest < targetX ? "Du brauchst deutlich mehr Spannung!" : "Das war deutlich zu stark!"
            );
        } else if (distanceToCenter > 40) {
            // Medium miss
            setTrainerFeedback(
                dest < targetX ? "Zu schwach, etwas mehr Spannung!" : "Zu stark, etwas weniger Spannung!"
            );
        } else {
            // Close miss
            setTrainerFeedback(
                dest < targetX ? "Fast geschafft, nur ein bisschen mehr Spannung!" : "Fast geschafft, nur ein bisschen weniger Spannung!"
            );
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

  useEffect(() => {
    return () => cancelAnim(); // cleanup on unmount
  }, []);

  const drawScene = (animatedTipX?: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawTarget(ctx, targetX, targetY, scaling);
    drawStickmanWithBow(ctx, bowmanX, targetY, scaling, animatedTipX);
  };

  const drawTarget = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
  ): void => {
    const ringWidths = [s*35, s*30, s*20, s*15, s*3];
    const colors = ["black", "white", "black", "white", "red"];
    for (let i = 0; i < ringWidths.length; i++) {
      ctx.beginPath();
      ctx.arc(x, y-25*s, ringWidths[i], 0, Math.PI * 2);
      ctx.fillStyle = colors[i];
      ctx.fill();
    }
  };

  const drawStickmanWithBow = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
    animatedTipX?: number,
  ): void => {
    ctx.strokeStyle = "oklch(18% 0.07 267.935)";
    ctx.lineWidth = 3;

    // Head
    ctx.beginPath();
    ctx.arc(x, y - 40*s, 10*s, 0, Math.PI * 2);
    ctx.stroke();

    // Body
    ctx.beginPath();
    ctx.moveTo(x, y - 30*s);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Arms
    ctx.beginPath();
    ctx.moveTo(x - 15*s, y - 25*s);
    ctx.lineTo(x + 15*s, y - 25*s);
    ctx.stroke();

    // Legs
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 10*s, y + 20*s);
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10*s, y + 20*s);
    ctx.stroke();

    // Bow
    ctx.beginPath();
    ctx.arc(x + 15*s, y - 25*s, 10*s, (3 * Math.PI) / 2, Math.PI / 2);
    ctx.stroke();

    // Arrow: either animated by tipX, or static by offset
    if (typeof animatedTipX === "number") {
      drawArrowByTip(ctx, y - 25*scaling, scaling, animatedTipX);
    } else {
      const offsetX = getVisualOffset();
      drawArrowStatic(ctx, x, y, scaling, offsetX);
    }
  };

  const drawArrowStatic = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    s: number,
    offsetX: number
  ): void => {
    ctx.strokeStyle = "oklch(85% 0.060 122.328)";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x + offsetX, y - 25*s);
    ctx.lineTo(x + 40*s + offsetX, y - 25*s);

    ctx.moveTo(x + 40*s + offsetX, y - 25*s);
    ctx.lineTo(x + 35*s + offsetX, y - 20*s);

    ctx.moveTo(x + 40*s + offsetX, y - 25*s);
    ctx.lineTo(x + 35*s + offsetX, y - 30*s);

    ctx.stroke();
  };

  // Draw arrow given its TIP x-position
  const drawArrowByTip = (
    ctx: CanvasRenderingContext2D,
    yTop: number, // equals y - 25 from caller
    s: number,
    tipX: number
  ): void => {
    ctx.strokeStyle = "oklch(85% 0.060 122.328)";
    ctx.lineWidth = 3;

    const baseX = tipX - 40*s;

    ctx.beginPath();
    ctx.moveTo(baseX, yTop);
    ctx.lineTo(tipX, yTop);

    ctx.moveTo(tipX, yTop);
    ctx.lineTo(tipX - 5*s, yTop + 5*s);

    ctx.moveTo(tipX, yTop);
    ctx.lineTo(tipX - 5*s, yTop - 5*s);

    ctx.stroke();
  };

  const shootArrow = () => {
    if (isFlying) return; // avoid double-start

    // Start from current visual position (tip)
    const startTipX = bowmanX + 40*scaling + getVisualOffset();
    // Destination based on tension
    const destTipX = computeDestTipX(tension, startTipX);

    // Reset result until flight ends (optional)
    setShotResult("");
    setTrainerFeedback("");

    startAnim(startTipX, destTipX);
  };

  return (
    <section className="py-6 px-6" id="bowman">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Wie lernt ein*e Bogenschütze*in? 🏹 
        </h1>
        <p className="text-xl text-text-normal max-w-3xl mx-auto leading-relaxed text-center mb-6">
            Hier können Sie den Trainingszyklus beim Bogenschießen ausprobieren. Nach jedem Versuch wird ein Ergebnis beobachtet 
            <strong className="text-primary"> (Loss)</strong> und analysiert, woraufhin eine Korrektur vorgeschlagen wird
            <strong className="text-primary"> (Backpropagation)</strong>. Die Korrektur kann dann über den Regler 
            vorgenommen werden <strong className="text-primary"> (Gradientenabstieg)</strong>. 
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[61.8%_38.2%] gap-12 items-start">
          {/* Left Column: Canvas and Controls */}
          <div>
            <div className="overflow-x-auto">
              <canvas
                ref={canvasRef}
                width={700}
                height={400}
                className="border border-outline rounded-lg mb-6"
              />
            </div>

            {/* Display percentage to user */}
            <label className="text-xl font-bold text-primary mb-4">
                Bogenspannung (Gradientenabstieg):
            </label>
            <p className="text-xl font-bold text-primary mb-4">
                {toPercent(tension)}%
            </p>

            {/* Slider goes from 0–100 for the user */}
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
              className="
                w-full h-2 mb-4 cursor-pointer appearance-none rounded-lg 
                bg-primary-container 
                accent-primary
                disabled:opacity-60
              "
              disabled={isFlying}
          />

            <button
              onClick={shootArrow}
              disabled={isFlying}
              className={`rounded-lg px-6 py-2 text-lg font-semibold transition-all duration-300 ease-in-out
                bg-primary-container text-on-primary-container
                hover:scale-105 hover:brightness-110 hover:shadow-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                active:scale-95
                disabled:opacity-60 disabled:hover:scale-100 disabled:hover:brightness-100 disabled:hover:shadow-none`}
            >
              Pfeil abschießen
            </button>

          </div>

          {/* Right Column: Feedback */}
          <div className="p-8 rounded-xl">
            <h3 className="text-primary text-xl font-semibold text-textDark mb-4">
              Trainer*in
            </h3>
            <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
              <p className="text-text-normal font-semibold text-sm text-textNormal mb-2">
                Beobachtetes Ergebnis (Loss):
              </p>
              <p className="text-text-normal text-xl text-textDark">{shotResult}</p>
            </div>
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg">
              <p className="text-textMedium font-medium">
                <strong className="text-primary">👩‍🏫💬 Rückmeldung (Backpropagation):</strong> <br /> {trainerFeedback}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
