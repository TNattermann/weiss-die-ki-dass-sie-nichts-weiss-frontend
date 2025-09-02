export default function ModellgleichunGleichung() {
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Berechnung des Modells
        </h1>
        <div className="items-center mb-16">
          <>
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              Die Berechnung des Neuronalen Netzwerks, die am Ende zu der
              Ja-Nein-Entscheidung führt, schauen wir uns nun genauer an. Dazu
              betrachten wir zunächst eine einzelne Berechnung, mit der der Wert
              eines einzigen Neurons der zweiten Schicht, also des Hidden Layer,
              bestimmt wird.
            </p>
            <div className="flex space-x-4 items-center justify-center">
              <div className="bg-bgColor p-2 rounded-lg border border-outline mb-4 w-fit">
                <p className="text-lg text-text-normal mb-6 leading-relaxed">
                  &nbsp;&nbsp;&nbsp;Input (1) * Weight (1, x) <br></br>+ Input
                  (2) * Weight (2, x)
                  <br></br>+ ...
                  <br></br>+ Input (100) * Weight (100, x)
                  <br></br>= Wert des Neurons x des ersten Hidden Layer
                </p>
              </div>
              <img
                src="\src\pages\modellgleichung\Beispiel_Modellgleichung_Gleichung.png"
                className="h-[200px] w-[450px] object-cover rounded-lg shadow-md border"
              />
            </div>
            <div className="items-center mb-16 mt-8">
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
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
                das Modell ~entscheiden, welche Ziffer gezeichnet wurde. Hierzu
                wählt es das Neuron, das den höchsten berechneten Wert hat.
              </p>
            </div>
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-4">
              <p className="text-textMedium font-medium text-lg">
                In einem neuronalen Netzwerk wird also nicht nur eine einzelne
                Berechnung durchgeführt, auf deren Basis dann die
                Ja-Nein-Entscheidung getroffen wird. Stattdessen werden viele
                Gleichungen berechnet, die am Ende zu der Ja-Nein-Entscheidung
                führen.
              </p>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
