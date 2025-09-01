import {ArrowRight, Book} from "lucide-react";
import {Link} from "react-router-dom";

export default function TokenMainTakeaways() {
  return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Key Takeaways */}
          <h1 className="text-5xl font-bold text-center text-primary mb-6">
            <div className="flex justify-center items-center gap-3">
              <Book className="mr-3 h-7 w-7" />
              <span className="text-5xl font-bold text-center text-primary break-words">Wichtige Erkenntnisse</span>
            </div>
          </h1>
          <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">Tokens sind keine Wörter</h3>
                <p className="text-on-primary-container-selected">
                  Tokens sind rein technische Einheiten, in die Text zerlegt wird. Das Modell „versteht“ den Text nicht auf Wortebene,
                  sondern verarbeitet nur diese Token-Sequenzen.
                </p>
              </div>
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">Algorithmus-Wahl</h3>
                <p className="text-on-primary-container-selected">
                  Die Wahl des Tokenisierungsalgorithmus beeinflusst direkt, wie der Text zerteilt wird und wie effizient das Sprachmodell arbeitet.
                  Unterschiedliche Tokenizer können denselben Satz unterschiedlich zerlegen.
                </p>
              </div>
              {/* Volle Breite */}
              <div className="md:col-span-2">
                <h3 className="text-on-primary-container-selected text-center font-semibold mb-3"><b>Kein echtes Verständnis</b></h3>
                <p className="text-on-primary-container-selected">
                  Ein Sprachmodell kennt keine Bedeutungen, sondern nur mathematische Muster.
                  Auf die Frage <em>„Was ist eine Brombeere?“</em> hat es kein Verständnis darüber, was eine Brombeere ist,
                  sondern nur Wahrscheinlichkeiten für passende Token-Sequenzen, die es aus den Trainingsdaten gelernt hat.
                  Besonders bei Teilwort-Tokens wird deutlich: das Modell sieht nur Fragmente wie „Brom“, „bee“, „re“ –
                  ein echtes Verständnis des Begriffs und seiner Bedeutung ist unmöglich.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link
                to="/"
                className="inline-flex items-center bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-200 shadow-lg"
            >
              Weiter zu Test
              <ArrowRight className="text-on-primary-container ml-2 h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>
  );
}