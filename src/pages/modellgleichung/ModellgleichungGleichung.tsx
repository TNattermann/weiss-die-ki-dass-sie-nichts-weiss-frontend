import Tilde from "../../components/Tilde";
import { bits } from "../../components/Wissensbit";

export default function ModellgleichunGleichung() {
  return (
    <section className="py-6 px-4 md:px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-4 md:mb-6">
          Berechnung des Modells
        </h1>
        <div className="items-center mb-12 md:mb-16">
          <>
            <p className="text-base md:text-lg text-text-normal mb-4 md:mb-6 leading-relaxed">
              Die Berechnung des Neuronalen Netzwerks, die am Ende zu der
              Ja-Nein-Entscheidung führt, schauen wir uns nun genauer an.
              Betrachten Sie dazu zunächst eine einzelne Berechnung, mit der der
              Wert eines einzigen Neurons der zweiten Schicht, also des Hidden
              Layer, bestimmt wird.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-start justify-center">
              <div className="bg-bgColor p-3 md:p-2 rounded-lg border border-outline w-full md:w-fit">
                <p className="text-base md:text-lg text-text-normal mb-0 md:mb-6 leading-relaxed">
                  &nbsp;&nbsp;&nbsp;Input (1) * Weight (1, x) <br></br>+ Input
                  (2) * Weight (2, x)
                  <br></br>+ ...
                  <br></br>+ Input (100) * Weight (100, x)
                  <br></br>= Wert des Neurons x des ersten Hidden Layer
                </p>
              </div>
              <img
                src="/img/Beispiel_Modellgleichung_Gleichung.png"
                className="w-full md:w-[450px] h-auto md:h-[187px] object-contain md:object-cover rounded-lg shadow-md border border-outline"
                alt="Beispielhaftes Neuronales Netzwerk zur Berechnung der Modellgleichung"
              />
            </div>
            <div className="items-center mb-12 md:mb-16 mt-6 md:mt-8">
              <p className="text-base md:text-lg text-text-normal mb-4 md:mb-6 leading-relaxed">
                Jedes Input-Neuron wird mit dem Gewicht für die Verbindung
                multipliziert und all diese Werte werden aufsummiert. Auf diese
                Weise kann der Wert für das Neuron der nächsten Schicht bestimmt
                werden. Diese Berechnung wird für alle Neuronen der zweiten
                Schicht wiederholt. Dabei werden jeweils die Gewichte der
                Verbindungen zwischen den Input-Neuronen und dem Ziel-Neuron
                genutzt.<br></br> Anschließend wird der Prozess für die nächste
                Schicht wiederholt: diesmal werden jedoch nicht die Inputs der
                ersten Schicht benutzt, sondern die zuvor berechneten Werte für
                die Neuronen der zweiten Schicht. Diese werden nun mit den
                Gewichten der Verbindungen zur nächsten Schicht multipliziert.
                So ermittelt man die Werte für die dritte Schicht. Dieser
                Vorgang wird dann noch ein weiteres Mal wiederholt, um die Werte
                für die letzte Schicht, den Output Layer, zu ermitteln. Nun kann
                das Modell <Tilde />
                entscheiden, welche Ziffer gezeichnet wurde. Hierzu wählt es das
                Neuron, das den höchsten berechneten Wert hat.
              </p>
            </div>
            <div
              className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6"
              id="attention2"
            >
              {bits
                .filter((c) => c.id === "decisions2")
                .map((c) => (
                  <section>
                    <h2>{c.title}</h2>
                    <p>{c.text}</p>
                  </section>
                ))}
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
