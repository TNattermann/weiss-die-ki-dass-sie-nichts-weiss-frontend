import Tilde from "../../components/Tilde.tsx";


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
          <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">Nur das nächste Wort</h3>
                <p className="text-on-primary-container-selected">
                  Das Modell macht nie etwas anderes als ein wahrscheinlich gut passendes nächstes Wort an einen Text anzuhängen.
                  Wenn es einen langen Text <Tilde />schreibt, passiert nichts weiter, als dass es diesen Prozess wiederholt
                </p>
              </div>
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">Finden durch Wahrscheinlichkeit</h3>
                <p className="text-on-primary-container-selected">
                  Damit das Modell nicht immer das Selbe <Tilde />antwortet, werden Wahrscheinlichkeitstabellen benutzt, 
                  um die Wörter zu wählen. Dadurch wirkt das Modell nicht so statisch. 
                  Damit das Modell <Tilde />herausfinded, welche Wörter gut passen, nutzt es Wahrscheinlichkeitstabellen,
                  um dann sehr wahrscheinlich ein gut passendes Wort zum bestehenden Text zu finden.
                </p>
              </div>
              {/* Volle Breite */}
              
              
              
            </div>
          </div>

          

        </div>
      
  );
}