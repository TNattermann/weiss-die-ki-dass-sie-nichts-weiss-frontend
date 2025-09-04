import { useState, useEffect } from "react";

function AffenbandeBeispiel() {
  const [countAffe, setCountAffe] = useState(0);
  const [countCoin, setCountCoin] = useState(10);
  const [zufriedenheit, setZufriedenheit] = useState(0);
  const [costAffe, setCostAffe] = useState<1 | 5>(5);

  // Dynamische Berechnung der Münzen bei Veränderung von Äffchen
  useEffect(() => {
    const neueMuenzen = Math.max(0, 10 - countAffe * costAffe);
    setCountCoin(neueMuenzen);
  }, [countAffe, costAffe]);

  // Dynamisch Zufriedenheit berechnen
  useEffect(() => {
    const neueZufriedenheit = Math.max(
      -100,
      Math.min(100, -100 + countCoin * 10 + countAffe * 35)
    );
    setZufriedenheit(neueZufriedenheit);
  }, [countAffe, countCoin]);

  const getZufriedenheitsAntwort = (wert: number) => {
    return wert >= 0 ? "Ja" : "Nein";
  };

  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Ein Beispiel zum Ausprobieren:
        </h1>
        <div className="items-center mb-16">
          <p className="text-lg text-text-normal mb-6 leading-relaxed">
            Nun versuchen Sie es doch einmal selbst: ändern Sie die Anzahl an
            Äffchen und damit die Anzahl an verfügbaren Münzen und beobachten
            Sie, welche Entscheidung die Maschine dann ~treffen würde. Probieren
            Sie auch aus, was geschieht, wenn Sie den Preis für ein Äffchen auf
            eine Münze statt fünf Münzen festlegen.
          </p>
        </div>
        {/* Aktueller Output */}
        {/* Entscheidungsbox + Buttons nebeneinander und mittig */}
        <div className="flex justify-center items-center gap-6 mb-6">
          {/* Box */}
          <div className="bg-bgColor p-4 rounded-lg border border-outline w-fit">
            <p className="text-lg text-text-normal leading-relaxed">
              Aktuelle Entscheidung der Maschine: <br></br>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              {getZufriedenheitsAntwort(zufriedenheit)}
            </p>
          </div>

          {/* Button-Gruppe */}
          <div className="inline-flex rounded-lg border border-outline overflow-hidden">
            <button
              type="button"
              onClick={() => setCostAffe(5)}
              aria-pressed={costAffe === 5}
              className={
                "px-3 py-2 text-sm " +
                (costAffe === 5
                  ? "bg-primary text-bgColor"
                  : "bg-bgColor text-text-normal hover:bg-primary/10")
              }
            >
              1 Äffchen = 5 Münzen
            </button>
            <button
              type="button"
              onClick={() => setCostAffe(1)}
              aria-pressed={costAffe === 1}
              className={
                "px-3 py-2 text-sm " +
                (costAffe === 1
                  ? "bg-primary text-bgColor"
                  : "bg-bgColor text-text-normal hover:bg-primary/10")
              }
            >
              1 Äffchen = 1 Münze
            </button>
          </div>
        </div>
        <div className="w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch gap-6">
          {/* Zufriedenheitsskala */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-text-normal mb-2">
              Zufriedenheitsskala
            </h2>
            <input
              type="range"
              min={-100}
              max={100}
              value={zufriedenheit}
              readOnly
              className="w-full h-2 rounded-lg appearance-none bg-text-normal
               accent-text-normal
               [&::-webkit-slider-thumb]:appearance-none 
               [&::-webkit-slider-thumb]:h-5 
               [&::-webkit-slider-thumb]:w-5 
               [&::-webkit-slider-thumb]:rounded-full 
               [&::-webkit-slider-thumb]:bg-primary
               [&::-webkit-slider-thumb]:cursor-pointer 
               [&::-moz-range-thumb]:h-5 
               [&::-moz-range-thumb]:w-5 
               [&::-moz-range-thumb]:rounded-full 
               [&::-moz-range-thumb]:bg-primary 
               [&::-moz-range-thumb]:cursor-pointer"
            />
            <span className="mt-2 text-primary font-bold text-lg">
              {zufriedenheit}
            </span>
          </div>
        </div>

        {/* Counter-Felder */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 mb-6 mx-auto gap-8">
          {/* Feld 1 - Äffchen */}
          <div className="flex flex-col items-center bg-bgColor p-4 rounded-lg border border-outline">
            <h2 className="text-text-normal font-semibold text-sm text-textNormal mb-2">
              Äffchen
            </h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCountAffe((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-primary bg-bgColor rounded-lg border border-outline"
              >
                -
              </button>
              <span className="text-2xl font-bold text-primary">
                {countAffe}
              </span>
              <button
                onClick={() => {
                  // prüfen, ob genug Münzen da sind
                  if (countCoin >= costAffe && countAffe < 12) {
                    setCountAffe((prev) => prev + 1);
                  }
                }}
                disabled={countCoin < costAffe}
                className={`px-4 py-2 rounded-lg border border-outline ${
                  countCoin < costAffe
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-bgColor text-primary"
                }`}
              >
                +
              </button>
            </div>
          </div>

          {/* Feld 2 - Münzen */}
          <div className="flex flex-col items-center bg-bgColor p-4 rounded-lg border border-outline">
            <h2 className="text-text-normal font-semibold text-sm text-textNormal mb-2">
              Münzen
            </h2>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                {countCoin}
              </span>
            </div>
          </div>
        </div>

        {/* Erklärung */}
        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
          <h3 className="text-lg text-text-normal mb-6 leading-relaxed">
            Erklärung:
          </h3>
          <p className="text-textMedium font-medium text-lg">
            Die Maschine trifft die Entscheidung auf Basis einer simplen
            Berechnung, bei der verschiedene Inputs gegeneinander abgewogen
            werden: der Verlust des Geldes gegen die Freude mit dem Spielzeug.
            Liegt der Preis für ein Äffchen bei fünf Münzen, so überwiegt der
            Verlust des Geldes die Freude mit dem Spielzeug. Insgesamt
            verringert sich die Freude also. Wenn der Preis für ein Äffchen
            jedoch nur eine Münze beträgt, überwiegt die Freude mit dem
            Spielzeug den Verlust des Geldes. Insgesamt vergrößert sich die
            Freude hier.<br></br> Für die Maschine gilt folgendes: ist das
            Ergebnis größer als null, wird sich für den Kauf ~entschieden und
            bei einem Ergebnis kleiner null gegen den Kauf. Hierbei stellt die
            null einen Grenzwert dar, der auch anders gewählt werden könnte.
            Dieses grundlegende Konzept wird auch in Neuronalen Netzwerken
            angewandt.
          </p>
        </div>
        <p className="text-lg text-text-normal mb-6 leading-relaxed">
          Durch das Beispiel haben Sie nun eine grobe Vorstellung davon
          gewonnen, wie ein Modell eine Entscheidung ~trifft. Nun möchten wir
          noch genauer verstehen, wie dies in einem LLM funktioniert. Dazu
          schauen wir uns zuerst einmal den Aufbau eines Neuronalen Netzwerks
          an, das die Basis für ein LLM bildet.
        </p>
      </div>
    </section>
  );
}

export default AffenbandeBeispiel;
