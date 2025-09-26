import Tilde from "../../components/Tilde";
import { ArrowLeft, ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";


export default function WahrMainTakeaways() {
  return (
      
        <div className="max-w-6xl mx-auto">

          {/* Key Takeaways */}
          <h1 className="text-5xl font-bold text-center text-primary mb-6">
            <div className="flex justify-center items-center gap-3">
              {/*<Book className="mr-3 h-7 w-7" />*/}
              <span className="text-5xl font-bold text-center text-primary break-words">Wichtige Erkenntnisse</span>
            </div>
          </h1>
          <div className="bg-primary-container p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-on-primary-container font-semibold mb-3">Nur das nächste Wort</h3>
                <p className="text-on-primary-container">
                  Das Modell macht nie etwas anderes als ein wahrscheinlich gut passendes nächstes Wort an einen Text anzuhängen.
                  Wenn es einen langen Text <Tilde />schreibt, passiert nichts weiter, als dass es diesen Prozess wiederholt.
                </p>
              </div>
              <div>
                <h3 className="text-on-primary-container font-semibold mb-3">Finden durch Wahrscheinlichkeit</h3>
                <p className="text-on-primary-container">
                  Damit das Modell nicht immer das Selbe <Tilde />antwortet, werden Wahrscheinlichkeitstabellen benutzt, 
                  um die Wörter zu wählen. Dadurch wirkt das Modell nicht so statisch. 
                  Damit das Modell <Tilde />herausfindet, welche Wörter gut passen, nutzt es Wahrscheinlichkeitstabellen,
                  um dann sehr wahrscheinlich ein gut passendes Wort zum bestehenden Text zu finden.
                </p>
              </div>
              <div>
                <h3 className="text-on-primary-container font-semibold mb-3">Textgenerierung</h3>
                <p className="text-on-primary-container">
                Wenn ich ChatGPT nutze, wird alles bisher geschriebene als Text genommen, 
                und mithilfe der Wahrscheinlichkeitstabellen immer wieder ein weiteres Wort angehängt, 
                bis es wahrscheinlicher ist, den Text zu enden. 
                Dadurch ensteht ein meist sinnvoller und grammatikalisch korrekter Satz.
                </p>
              </div>
              {/* Volle Breite */}
            </div>
          </div>
          {/* Navigation */}
          <div className="mt-12 flex justify-center space-x-6">
          {/* Home */}
          <Link
            to="/"
            className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
          >
            <ArrowLeft className="text-on-primary-container mr-2 h-5 w-5" />
            Zurück zur Hauptseite
          </Link>
            <Link
              to="/tokeninfo"
              className="inline-flex items-center bg-primary-container text-on-primary-container hover:brightness-110 hover:shadow-lg px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Weiter im Lernpfad
              <ArrowRight className="text-on-primary-container ml-2 h-5 w-5" />
            </Link>
          </div>
        
        </div>
      
  );
}