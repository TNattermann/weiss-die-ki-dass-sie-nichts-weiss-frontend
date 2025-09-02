import Expandable from "../../components/Expandable";

export default function LearningGraddesc() {
  
    return (
      <section className="py-16" id="gradDesc">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6 break-words">Welche Anpassungen ~nimmt das Modell vor?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                        <p className="text-lg text-text-normal leading-relaxed">
                            Ausgehend vom loss des letzten Versuchs, wird der/die Schütze*in <strong className="text-primary">kleine Anpassungen </strong> 
                            der Technik vornehmen, um beim nächsten Versuch näher an die Mitte der Zielscheibe zu kommen. 
                            Da der / die Schütze*in die ideale Technik noch nicht erlernt hat, muss er / sie sich 
                            <strong className="text-primary" > auf kurze Sicht</strong> vortasten, um sich von Versuch zu Versuch 
                            der idealen Technik anzunähern.
                        </p>
                    </div>

                    {/* Video */}
                  <div className="flex justify-center md:justify-end">
                    <video 
                      src="/videos/bowman_gradX2.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full max-w-sm rounded-xl shadow-lg"
                    />
                  </div>
                </div>
            
            
            <p className="text-lg text-text-normal mb-6 leading-r>elaxed">
              Auch die KI tastet sich langsam an eine optimale Einstellung heran - nur muss dabei nicht wie beim Bogenschießen
              ein Aspekt (die Bogenspannung) angepasst werden, sondern <strong className="text-primary">jedes</strong> der vielen 
              Gewichte, die den internen Zustand der KI repräsentieren. 
              Da jedes dieser Gewichte einen Einfluss auf den loss haben kann, muss auch für jedes Gewicht eine Anpassung erfolgen.
            </p>

            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-text-normal font-medium">
                Dieses Schrittweise und sich wiederholende Verfahren wird <strong className="text-primary">Gradientenabstieg</strong> genannt: 
                Die KI <strong className="text-primary">~steigt den loss hinab</strong>, um diesen zu verringern. 
              </p>
            </div>
            <div className="w-full flex justify-center mb-6">
                <video 
                    src="/videos/GradientDescentEdgesSceneV2.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full max-w-none rounded-xl shadow-lg object-contain"
                />
            </div>            
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-text-normal font-medium">
                <strong className="text-primary">Zusammenfassung Gradientenabstieg: </strong> Das Modell passt seine internen Zustände (= Gewichte) 
                schrittweise an, um den loss zunehmend zu verringern. Diese Anpasungen sind der <strong className="text-primary">Kern des eigentlichen Lernprozesses</strong>.
                Woher das Modell weiß, welche Gewichte wie stark angepasst werden müssen, wird mit der <strong className="text-primary">Backpropagation </strong> bestimmt.
              </p>
            </div>
            
            <Expandable title="Mehr zum Gradientenabstieg" className="mb-6">
                <p className="text-text-normal leading-relaxed mb-4">
                    Um den loss hinabsteigen zu können, müssen für alle Gewichte die <strong className="text-primary">Ableitungen</strong> der 
                    loss Funktion berechnet werden.
                    Diese Ableitung bestimmen dabei für jedes Gewicht, wie viel dessen Änderung zur Reduzierung des losses beitragen kann.
                    Als <strong className="text-primary">Gradient </strong>Gradient bezeichnet man die <strong className="text-primary">Sammlung dieser Ableitungen </strong>
                    in einer kompakten Form, mathematisch bezeichnen wir dies als Vektor.
                    Somit wird beim Gadientenabstieg der aktuelle Zustand der Gewichte um einen kleinen Schritt <strong className="text-primary">in Richtung des Gradienten </strong>
                    korrigiert.
                </p>
                <p className="text-text-normal leading-relaxed">
                    Zudem ist zu beachten, dass die KI über diese schrittweise Annäherung auf <strong className="text-primary">kurze Sicht </strong>
                    nicht garantiert eine optimale Lösung findet.
                    Man kann sich zum Beispiel vorstellen, dass die KI sogar zuerst den Gradienten hinauf laufen sollte, um anschließend einen noch
                    steileren Abstieg zu finden. Bei einem solchen Verfahren, dass eine optimale Lösung nicht garantieren kann, sprechen wir auch von einer 
                    <strong className="text-primary"> Heuristik </strong>. 
                </p>
            </Expandable>
          </div>
        </div>
      </section>
  );
}