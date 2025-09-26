import { ArrowLeft, ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmbeddingsMainTakeaways() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Key Takeaways */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6 break-words">
          <div className="flex justify-center items-center gap-2 sm:gap-3 text-primary">
            <Book className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            <span className="font-bold break-words">Wichtige Erkenntnisse</span>
          </div>
        </h1>

        <div className="bg-primary-container p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Unsere Sprache ist stark strukturiert.
              </h3>
              <p className="text-on-primary-container">
                Worteinbettungsheuristiken können einen Teil dieser Struktur
                identifizieren. Dieses kann auf einer von Menschen
                verständlichen Art und Weise abgebildet werden, in der Wörter
                nicht zufällig nebeneinander stehen, sondern Muster aufweisen,
                die Menschen interpretieren können. Dadurch werden
                wiederkehrende Beziehungen sichtbar – zum Beispiel zwischen
                Jahreszeiten und typischen Eigenschaften.
              </p>
            </div>

            <div>
              <h3 className="text-on-primary-container font-semibold mb-3">
                Wieso sind die Texte von ChatGPT so gut?
              </h3>
              <p className="text-on-primary-container">
                Computer können Worteinbettungen selbstständig finden, indem sie
                riesige Mengen an Texten verarbeiten – ganz ohne dass ihnen die
                Bedeutung der Wörter vorab erklärt wird. Die in den Worteinbettung 
                enthaltene semantische Nähe von Wörtern ist ein wesentlicher Bestandteil,
                weshalb ChatGPT so gut ist. 
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Link
            to="/tokeninfo"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            <ArrowLeft className="text-on-primary-container mr-2 h-5 w-5" />
            Zurück im Lernpfad
          </Link>
          <Link
            to="/attention"
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
