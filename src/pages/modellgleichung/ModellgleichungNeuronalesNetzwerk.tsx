import { useState } from "react";

function VideoPage() {
  const [isOpenInput, setIsOpenInput] = useState(false);
  const [isOpenHidden, setIsOpenHidden] = useState(false);
  const [isOpenOutput, setIsOpenOutput] = useState(false);

  const [selectedDigit, setSelectedDigit] = useState<"1" | "4" | "7">("1");

  const images: Record<"1" | "4" | "7", string> = {
    "1": "/img/Merged_1.png",
    "4": "/img/Merged_4.png",
    "7": "/img/Merged_7.png",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen color-primary p-6">
      <h1 className="text-5xl font-bold text-center text-primary mb-6">
        Aufbau eines Neuronalen Netzwerks
      </h1>
      <p className="text-lg text-text-normal mb-6 text-center max-w-2xl">
        Auf dem Bild ist ein einfaches Neuronales Netzwerk zu sehen, das dazu
        geeignet ist, eine gezeichnete Ziffer zu erkennen. Das Beispiel hilft
        dabei, die einzelnen Elemente eines Neuronalen Netzwerkes kennenzulernen
        und zu verstehen, welche Aufgaben sie erfüllen.
      </p>

      {/* Buttons über dem Bild */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSelectedDigit("1")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedDigit === "1"
              ? "bg-primary-container-selected text-on-primary-container-selected"
              : "bg-primary-container text-on-primary-container"
          }`}
        >
          Klassifiziere die 1
        </button>
        <button
          onClick={() => setSelectedDigit("4")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedDigit === "4"
              ? "bg-primary-container-selected text-on-primary-container-selected"
              : "bg-primary-container text-on-primary-container"
          }`}
        >
          Klassifiziere die 4
        </button>
        <button
          onClick={() => setSelectedDigit("7")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            selectedDigit === "7"
              ? "bg-primary-container-selected text-on-primary-container-selected"
              : "bg-primary-container text-on-primary-container"
          }`}
        >
          Klassifiziere die 7
        </button>
      </div>

      {/* Breiterer Container für Bild und Text */}
      <div className="grid grid-cols-8 gap-8 items-start w-full max-w-6xl">
        <div className="col-span-2 text-center text-text-normal">
          <h2 className="text-xl font-semibold mb-2">Input Layer</h2>
          <p className="text-text-normal leading-relaxed">
            Die erste Schicht eines Neuronalen Netzwerks bezeichnet man als{" "}
            <b>Input Layer</b>. Diese Schicht erhält die zu verarbeitenden
            Informationen, also den Input.
          </p>
          {/* Aufklappbare Textbox */}
          <div className="bg-bgColor border border-outline rounded-lg shadow-md p-4">
            <button
              onClick={() => setIsOpenInput(!isOpenInput)}
              className="w-full text-left font-semibold text-primary flex justify-between items-center"
            >
              Woraus besteht der Input Layer?
              <span>{isOpenInput ? "▲" : "▼"}</span>
            </button>

            {isOpenInput && (
              <div className="mt-4 text-text-normal text-left leading-relaxed">
                In unserem Beispiel ist unser Input ein Bild der gezeichneten
                Zahl. Das Bild ist in kleinere Einheiten, sogenannte Pixel,
                aufgeteilt. Jeder Pixel ist entweder schwarz, wenn er zu der
                gezeichneten Zahl gehört, oder weiß. Für jeden Pixel erstellen
                wir nun in unserem Input Layer einen Knoten, ein sogenanntes
                Neuron. Da unser Bild in 100 Pixel aufgeteilt wurde, benötigen
                wir entsprechend 100 Neuronen in dem Input Layer. Jedes Neuron
                bekommt die Information, ob der zugehörige Pixel schwarz oder
                weiß ist. Diese Information kodieren wir als Zahl: Für einen
                schwarzen Pixel eine 1 und für einen weißen Pixel eine 0. Jedes
                Neuron des Input Layer erhält also entweder eine 1 oder eine 0
                als Wert.
              </div>
            )}
          </div>
        </div>

        {/* Mittlerer Bereich mit Bild */}
        <div className="col-span-4 flex flex-col items-center">
          {/* Bild */}
          <div className="w-full bg-black rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[selectedDigit]}
              alt={`Neuronales Netzwerk Screenshot ${selectedDigit}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Unterer Text - Hidden Layer */}
          <div className="mt-4 text-center text-text-normal max-w-2xl">
            <h2 className="text-xl font-semibold mb-2">Hidden Layer</h2>
            <p className="text-text-normal leading-relaxed">
              Auf den Input Layer folgen weitere Schichten, die im Netzwerk
              versteckt sind und daher als <b>Hidden Layer</b> bezeichnet
              werden. Ein Neuronales Netzwerk kann eine oder mehrere versteckte
              Schichten haben. In unserem Beispiel gibt es zwei Hidden Layer.
            </p>
            {/* Aufklappbare Textbox */}
            <div className="bg-bgColor border border-outline rounded-lg shadow-md p-4">
              <button
                onClick={() => setIsOpenHidden(!isOpenHidden)}
                className="w-full text-left font-semibold text-primary flex justify-between items-center"
              >
                Woraus besteht ein Hidden Layer?
                <span>{isOpenHidden ? "▲" : "▼"}</span>
              </button>

              {isOpenHidden && (
                <div className="mt-4 text-text-normal text-left leading-relaxed">
                  Jeder Hidden Layer kann aus einer beliebigen Anzahl an
                  Neuronen bestehen. Jedes Neuron eines Hidden Layer ist mit
                  allen Neuronen der vorherigen sowie der folgenden Schicht
                  verbunden. Ein Neuron des ersten Hidden Layer hat hier also
                  jeweils eine Verbindung zu allen Neuronen des Input Layer
                  sowie zu allen Neuronen des zweiten Hidden Layer. Im Laufe des
                  Trainings werden diese Verbindungen gestärkt und geschwächt.
                  Wie genau das funktioniert, erfahren Sie später im Kapitel
                  Training.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rechter Text - Output Layer */}
        <div className="col-span-2 text-center text-text-normal">
          <h2 className="text-xl font-semibold mb-2">Output Layer</h2>
          <p className="text-text-normal leading-relaxed">
            Die letzte Schicht des Netzwerks ist der <b>Output Layer</b>. Dieser
            besteht aus 10 Neuronen, also einem Neuron für jede mögliche Ziffer
            zwischen 0 und 9, die erkannt werden könnte.
          </p>
          {/* Aufklappbare Textbox */}
          <div className="bg-bgColor border border-outline rounded-lg shadow-md p-4">
            <button
              onClick={() => setIsOpenOutput(!isOpenOutput)}
              className="w-full text-left font-semibold text-primary flex justify-between items-center"
            >
              Was passiert in dem Output Layer?
              <span>{isOpenOutput ? "▲" : "▼"}</span>
            </button>

            {isOpenOutput && (
              <div className="mt-4 text-text-normal text-left leading-relaxed">
                Jedes Neuron des Output Layer hat einen Wert zwischen 0 und 1.
                Dieser ist das Resultat der Berechnungen, die zuvor gemacht
                wurden. Je höher der Wert eines Neurons ist, desto eher ~denkt
                das Netzwerk, dass dies die Ziffer ist, die auf dem Bild zu
                sehen ist. Wenn also am Ende das Neuron für die Ziffer 4 den
                höchsten Wert von allen 10 Output-Neuronen hat, dann
                klassifiziert das Netzwerk die gezeichnete Zahl als eine 4.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
