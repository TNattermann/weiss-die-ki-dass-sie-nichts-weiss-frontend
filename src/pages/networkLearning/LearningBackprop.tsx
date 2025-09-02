import Expandable from "../../components/Expandable";

export default function LearningBackprop() {
  
    return (
      <section className="py-16" id="backProp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6 break-words">Woher ~weiß das Modell, was es anpassen muss?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                        <p className="text-lg text-text-normal leading-relaxed">
                            Beim Bogenschießen gibt ein*e Trainer*in in Abhängigkeit von der beobachteten
                            Distanz zum Ziel (der loss) <strong className="text-primary"> Rückmeldung</strong> in Form von konkreten 
                            <strong className="text-primary"> Anweisungen</strong>, welche Anpassungen (über den Gradientenabstieg) für den 
                            nächsten Versuch vorgenommen werden sollen. Dies geschieht in diesem Fall auf Grundlage von langjähriger Erfahrung 
                            der Traininerin bzw. des Trainers. Aber wie funktioniert das bei einer KI?
                        </p>
                    </div>
                    
                    {/* Video */}
                    <div className="flex justify-center md:justify-end">
                      <video 
                          src="/videos/BowmanBackprop.mp4" 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full max-w-sm rounded-xl shadow-lg"
                      />
                    </div>
                  </div>

            
            <p className="text-lg text-text-normal mb-6 leading-r>elaxed">
              Auch die KI ermittelt ausgehend vom loss, welche Anpassungen vorgenommen werden müssen. Das ist 
              aber nicht so einfach wie beim Bogenschießen: Statt nur die Bogenspannung anzupassen, muss für jedes Gewicht der KI 
              die Stärke der individuellen Anpassung ermittelt werden. <br />
              Zum Glück hilft uns hier aber die Mathematik: Mithilfe der <strong className="text-primary">Backpropagation </strong> 
              kann dies gelöst werden, indem der loss vom <strong className="text-primary">Ende</strong> des Netzes aus (hinten, also back) 
              nach <strong className="text-primary">vorne </strong> weitergeleitet (propagiert) wird. <br />
              Das kann man sich so vorstellen: Je <strong className="text-primary">näher </strong> das Gewicht am Ende des Netzes liegt, 
              desto <strong className="text-primary">einfacher </strong> lässt sich dessen Anpassung bestimmen. 
              Für <strong className="text-primary">jedes </strong> Gewicht wird dabei die Frage gestellt: Wie sehr verändert sich der loss, wenn das Gewicht anpasst wird? 
            </p>

            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-text-normal font-medium">
                Nachdem wir die <strong className="text-primary">Backpropagation </strong> durchgeführt haben, erhalten wir unsere 
                <strong className="text-primary"> Anpassungsanweisungen </strong>, die wir dann mit dem 
                <strong className="text-primary"> Gradientenabstieg </strong> durchführen können.
              </p>
            </div>
            <div className="w-full flex justify-center mb-6">
                <video 
                    src="/videos/BackpropagationScene.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full max-w-none rounded-xl shadow-lg object-contain"
                />
            </div>  
            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-text-normal font-medium">
                <strong className="text-primary">Zusammenfassung Backpropagation: </strong> Damit ein Modell ~weiß, was es anpassen muss, 
                gibt es den loss von hinten nach vorne durch das Netz und bestimmt dabei die Anpassungen aller Gewichte. Anschließend 
                können diese Anpassungen über den  <strong className="text-primary">Gradientenabstieg </strong> vorgenommen werden 
                und der nächste Trainingsdurchlauf kann beginnen. 
              </p>
            </div>
            
            <Expandable title="Mehr zur Backpropagation" className="mb-6">
                <p className="text-text-normal leading-relaxed mb-4">
                  Eine besondere Herausforderung bei der Backpropagation liegt in der <strong className="text-primary">Verschachtelung </strong> 
                  der einzelnen Gewichte. Der isolierte Einflus eines Gewichtes auf den loss zu bestimmen ist gar nicht so einfach, da sich die Gewichte, 
                  wie wir im vorherigen Abschnitt gesehen haben, gegenseitig beeinflussen. Vereinfacht gesagt erfolgt deshalb auch die Anpassung der Gewichte 
                  <strong className="text-primary"> von hinten nach vorne </strong>, um diese Abhängigkeiten von Schicht zu Schicht des Netzes zu berücksichtigen.
                </p>
                <p className="text-text-normal leading-relaxed ">  
                  Die Backpropagation macht sich dabei die <strong className="text-primary">Struktur</strong> des Netzes zunutze: Die Darstellung als 
                  Netz mit Schichten enspricht mathematisch einer <strong className="text-primary">Verkettung von Funktionen</strong>: 
                  Wir stecken sozusagen die letzte Schicht in die vorletzte Schicht und so weiter, bis wir bei der ersten Schicht angekommen sind. 
                  Auch deshalb müssen wir mit der <strong className="text-primary">hintersten</strong> Schicht bei der Backpropagation beginnen, 
                  da diese das <strong className="text-primary">innerste</strong> Glied unserer Kette aus Schichten darstellt. Die Bestimmung der 
                  jeweiligen Ableitungen kann dann mit der <strong className="text-primary">Kettenregel</strong> erfolgen - 
                  falls sich daran noch jemand aus dem Matheunterricht erinnern kann!  
                </p>
            </Expandable>
          </div>
        </div>
      </section>
  );
}