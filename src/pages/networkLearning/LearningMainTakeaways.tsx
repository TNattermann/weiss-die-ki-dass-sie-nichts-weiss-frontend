import {ArrowRight, Book} from "lucide-react";
import {Link} from "react-router-dom";

export default function LearningMainTakeaways() {
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

        <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Erkenntnis 1 */}
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">
                Drei wichtige Konzepte
              </h3>
              <p className="text-on-primary-container-selected">
                Maschinelles Lernen setzt sich aus drei elementaren Konzepten zusammen: Dem Abgleich des Ist- mit dem Soll-Zustand
                mittels der Verlustfunktion, der rückwärts durch das Netz laufenden Fehlerrückmeldung zur Bestimmung von Anpassungen
                und der schrittweisen Ausführung dieser Anpassungen über den Gradientenabstieg.
              </p>
            </div>

            {/* Erkenntnis 2 */}
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">
                Nur so gut wie die Daten
              </h3>
              <p className="text-on-primary-container-selected">
                Lernen für ein Modell bedeutet, sich dem Zielzustand der vorhandenen Daten bestmöglichst anzupassen.
                Somit kann ein Modell auch nur so gut werden, wie die Daten, auf denen es basiert. Somit hat eine sorgsame
                Auswahl von Trainingsdaten einen immensiven Einfluss auf das Ergebnis des Modells.
              </p>
            </div>

            {/* Erkenntnis 3 */}
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">
                Lernen in vielen, kleinen Zyklen
              </h3>
              <p className="text-on-primary-container-selected">
                Die drei Konzepte werden beliebig oft für alle Trainingsdaten wiederholt. Das Modell nähert sich  
                in Zyklen einer besseren Lösung an, fährt dabei allerdings auf "kurze Sicht" und nimmt nur kleine 
                Änderungen pro Schritt vor. 
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
