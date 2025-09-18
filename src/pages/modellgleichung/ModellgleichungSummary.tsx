import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";
import Tilde from "../../components/Tilde";

export default function ModellgleichungMainTakeaways() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Key Takeaways */}
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          <div className="flex justify-center items-center gap-3">
            <Book className="mr-3 h-7 w-7" />
            <span className="text-5xl font-bold text-center text-primary break-words">
              Wichtige Erkenntnisse
            </span>
          </div>
        </h1>

        <div className="bg-primary-container p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Wie entscheidet ein Modell?
              </h3>
              <p className="text-on-primary-container">
                Ein Modell trifft eine Ja/Nein-Entscheidung durch eine simple
                Berechnung. Dabei werden verschiedene Inputs gegeneinander
                abgewogen. Das Ergebnis ist die Basis für die <Tilde />
                Entscheidung des Modells.
              </p>
            </>
            <>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Aufbau Neuronales Netzwerk
              </h3>
              <p className="text-on-primary-container">
                Ein Neuronales Netzwerk besteht aus den Neuronen, die in
                Schichten angeordnet sind. Es gibt den Input Layer, einen oder
                mehrere Hidden Layer sowie den Output Layer. Zwischen den
                Neuronen bestehen gewichtete Verbindungen.
              </p>
            </>
            <>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Bezug zu LLMs
              </h3>
              <p className="text-on-primary-container">
                Große Sprachmodelle (LLMs) unterscheiden sich zu dem hier
                vorgestellten Beispiel eines Neuronalen Netzwerks. Sie sind
                deutlich größer und verarbeiten keine Bilder, sondern
                Texteingaben und nutzen Wahrscheinlichkeitsverteilungen.
              </p>
            </>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center space-x-6">
          <Link
            to="/networkLearning"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            Weiter im Lernpfad
            <ArrowRight className="text-on-primary-container ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
