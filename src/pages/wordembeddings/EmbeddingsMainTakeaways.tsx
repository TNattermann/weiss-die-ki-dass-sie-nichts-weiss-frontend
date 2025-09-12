import {ArrowRight, Book} from "lucide-react";
import {Link} from "react-router-dom";

export default function EmbeddingsMainTakeaways() {
  return (
<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Key Takeaways */}
    <h1 className="text-5xl font-bold text-center text-primary mb-6">
      <div className="flex justify-center items-center gap-3">
        <Book className="mr-3 h-7 w-7" />
        <span className="text-5xl font-bold text-center text-primary break-words">
          Zusammenfassung
        </span>
      </div>
    </h1>

    <div className="bg-primary-container p-8 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-on-primary-container font-semibold mb-3">
            Unsere Sprache ist stark strukturiert.
          </h3>
          <p className="text-on-primary-container">
            Worteinebttungheuristiken können einen Teil dieser Struktur identifizieren. 
            Dieses kann auf einer von Menschen verständlichen Art und Weise abgebildet werden, 
            in der Wörter nicht zufällig nebeneinander stehen, sondern Muster aufweisen, die Menschen interpretieren können.
            Dadurch werden wiederkehrende Beziehungen sichtbar – zum Beispiel zwischen Jahreszeiten und typischen Eigenschaften.
          </p>
        </div>

        <div>
          <h3 className="text-on-primary-container font-semibold mb-3">
            Maschinen ~lernen ohne Erklärung.
          </h3>
          <p className="text-on-primary-container">
            Computer können Worteinbettungen selbstständig finden, indem sie riesige
            Mengen an Texten verarbeiten – ganz ohne dass ihnen die Bedeutung der
            Wörter vorab erklärt wird.
          </p>
        </div>
      </div>
    </div>
              
    {/* Navigation */}
    <div className="mt-12 text-center">
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
