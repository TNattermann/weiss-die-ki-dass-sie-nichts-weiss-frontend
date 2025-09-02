import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function AttentionTakeaways() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
          <h2 className="text-on-primary-container-selected text-2xl font-bold mb-6 flex items-center">
            <Book className="mr-3 h-7 w-7" />
            Wichtige Erkenntnisse
          </h2>
          <div>
            <h3 className="text-on-primary-container-selected font-semibold mb-3">
              Die künstliche ~Aufmerksamkeit hat nicht viel mit menschlicher
              Aufmerksamkeit gemein.
            </h3>
            <p className="text-on-primary-container-selected">
              Der Aufmerksamkeitsmechranismus in großen Sprachmodellen basiert
              auf einer Reihe von handwerklichen Entscheidungen. Diese arbeiten
              darauf hin, mathematisch die Wichtigkeit von bestimmten Wörtern zu
              berechnen. Dieser Aufbau ist schwer mit menschlicher Intution zu
              erklären, hat keinerlei Verbindung zur Semantik der echten Welt,
              und ist nicht die beste Lösung für das Problem.
            </p>
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
