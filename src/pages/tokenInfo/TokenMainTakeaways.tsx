import {ArrowRight, Book} from "lucide-react";
import {Link} from "react-router-dom";

export default function TokenMainTakeaways() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
          <h2 className="text-on-primary-container-selected text-2xl font-bold mb-6 flex items-center">
            <Book className="mr-3 h-7 w-7" />
            Wichtige Erkenntnisse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">Algorithmus-Wahl</h3>
              <p className="text-on-primary-container-selected">
                Die Wahl des Tokenisierungsalgorithmus beeinflusst direkt die Performance und Qualität des LLMs.
              </p>
            </div>
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">BPE-Vorteile</h3>
              <p className="text-on-primary-container-selected">
                BPE reduziert die Anzahl der Tokens und verbessert die Sprachverständnis.
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
