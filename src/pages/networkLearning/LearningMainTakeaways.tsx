import { ArrowLeft, Book } from "lucide-react";
import { Link } from "react-router-dom";

export default function LearningMainTakeaways() {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Key Takeaways */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
          <div className="flex justify-center items-center gap-2 sm:gap-3 text-primary">
            <Book className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            <span className="font-bold break-words">Wichtige Erkenntnisse</span>
          </div>
        </h1>

        <div className="bg-primary-container p-5 sm:p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Erkenntnis 1 */}
            <div>
              <h3 className="text-on-primary-container font-semibold mb-2 sm:mb-3">
                Drei wichtige Konzepte
              </h3>
              <p className="text-on-primary-container leading-relaxed break-words">
                Maschinelles Lernen setzt sich aus drei elementaren Konzepten zusammen:
                Dem Abgleich von Ist- und Soll-Zustand über den <strong className="text-primary">Loss</strong>{" "}, der
                rückwärts durch das Netz laufenden <strong className="text-primary">Backpropagation</strong>{" "} zur Bestimmung von
                Anpassungen und der schrittweisen Ausführung dieser Anpassungen über den
                <strong className="text-primary"> Gradientenabstieg</strong>.
              </p>
            </div>

            {/* Erkenntnis 2 */}
            <div>
              <h3 className="text-on-primary-container font-semibold mb-2 sm:mb-3">
                Nur so gut wie die Daten
              </h3>
              <p className="text-on-primary-container leading-relaxed break-words">
                Lernen für ein Modell bedeutet, sich dem Zielzustand der vorhandenen Daten
                bestmöglich anzupassen. Ein Modell kann nur so gut werden wie die Daten, auf
                denen es basiert. Eine sorgsame Auswahl der Trainingsdaten hat daher
                einen immensen Einfluss auf die Qualität des Modells.
              </p>
            </div>

            {/* Erkenntnis 3 */}
            <div>
              <h3 className="text-on-primary-container font-semibold mb-2 sm:mb-3">
                Lernen in vielen, kleinen Zyklen
              </h3>
              <p className="text-on-primary-container leading-relaxed break-words">
                Die drei Konzepte werden beliebig oft für alle Trainingsdaten wiederholt.
                Das Modell nähert sich in Zyklen einer besseren Lösung an, fährt dabei auf
                „kurze Sicht“ und nimmt nur kleine Änderungen pro Schritt vor.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6">
          {/* Lernpfad 1 */}
          <Link
            to="/modellgleichung"
            className="inline-flex justify-center items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
          >
            <ArrowLeft className="text-on-primary-container mr-2 h-5 w-5" aria-hidden="true" />
            Zurück im Lernpfad
          </Link>

          {/* Home */}
          <Link
            to="/"
            className="inline-flex justify-center items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto"
          >
            Startseite
          </Link>
        </div>

      </div>
    </section>
  );
}
