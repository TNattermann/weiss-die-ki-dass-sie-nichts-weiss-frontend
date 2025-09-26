import { ArrowLeft, ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";
import Tilde from "../../components/Tilde";

export default function AttentionTakeaways() {
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
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Die künstliche <Tilde />
                Aufmerksamkeit hat nicht viel mit menschlicher Aufmerksamkeit
                gemein.
              </h3>
              <p className="text-on-primary-container">
                Der Aufmerksamkeitsmechanismus in großen Sprachmodellen basiert
                auf einer Reihe von handwerklichen Entscheidungen. Diese
                arbeiten darauf hin, mathematisch die Wichtigkeit von bestimmten
                Wörtern zu berechnen. Von Verständnis kann man hier also nicht
                sprechen. Das Konzept ist schwer mit menschlicher Intuition zu
                erklären, hat keinerlei Verbindung zur Semantik der echten Welt,
                und ist nicht die beste Lösung für das Problem.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center space-x-6">
          {/* Zurück zu WE */}
          <Link
            to="/wordembeddings"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            <ArrowLeft className="text-on-primary-container mr-2 h-5 w-5" />
            Zurück im Lernpfad
          </Link>
          {/* Home */}
          <Link
            to="/"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            Startseite
          </Link>
          {/* Lernpfad 2 */}
          <Link
            to="/modellgleichung"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            Weiter zu Lernpfad 2
            <ArrowRight className="text-on-primary-container ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
