import Expandable from "../../components/Expandable";
import Tilde from "../../components/Tilde";
import { bits } from "../../components/Wissensbit";

export default function LearningGraddesc() {
  return (
    <section
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 overflow-x-hidden"
      id="gradDesc"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-4 sm:mb-6 break-words">
            Welche Anpassungen <Tilde />
            nimmt das Modell vor?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start md:items-center mb-6 sm:mb-8">
            <div>
              <p className="text-base sm:text-lg text-text-normal leading-relaxed break-words">
                Ausgehend vom Loss des letzten Versuchs, wird der/die Schütze*in{" "}
                <strong className="text-primary">kleine Anpassungen </strong>
                der Technik vornehmen, um beim nächsten Versuch näher an die
                Mitte der Zielscheibe zu kommen. Da der / die Schütze*in die
                ideale Technik noch nicht erlernt hat, muss er / sie sich
                <strong className="text-primary"> auf kurze Sicht</strong>{" "}
                vortasten, um sich von Versuch zu Versuch der idealen Technik
                anzunähern.
              </p>
            </div>

            {/* Video */}
            <div className="flex justify-center md:justify-end">
              <video
                src="/videos/BowmanGrad.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="block w-full max-w-full sm:max-w-sm h-auto rounded-xl shadow-lg object-contain"
                aria-label="Animation eines Bogenschützens, der wiederholt seinen Bogen spannt und einen Pfeil abschießt."
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-text-normal mb-6 leading-relaxed break-words">
            Auch die KI tastet sich langsam an eine optimale Einstellung heran –
            nur muss dabei nicht wie beim Bogenschießen ein Aspekt (die
            Bogenspannung) angepasst werden, sondern{" "}
            <strong className="text-primary">jedes</strong> der vielen Gewichte
            der KI. Da jedes dieser Gewichte einen Einfluss auf den Loss haben
            kann, muss auch für jedes Gewicht eine Anpassung erfolgen.
          </p>

          <div className="bg-primary/5 border-l-4 text-primary p-4 sm:p-6 rounded-r-lg mb-6">
            <p className="text-text-normal font-medium break-words">
              Dieses schrittweise und sich wiederholende Verfahren wird{" "}
              <strong className="text-primary">Gradientenabstieg</strong>{" "}
              genannt: Die KI{" "}
              <strong className="text-primary">
                <Tilde />
                steigt den Loss hinab
              </strong>
              , um diesen zu verringern.
            </p>
          </div>

          <div className="w-full flex justify-center mb-6">
            <video
              src="/videos/GradientDescentEdgesScene.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="block w-full max-w-full h-auto rounded-xl shadow-lg object-contain"
              aria-label="Animation eines neuronalen Netzes, bei dem über drei Durchläufe Anpassungen der Netzwerkgewichte vorgenommen werden."
            />
          </div>

          <div
            className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6"
            id="attention2"
          >
            {bits
              .filter((c) => c.id === "training2")
              .map((c) => (
                <section>
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                </section>
              ))}
          </div>
          <Expandable title="Mehr zum Gradientenabstieg" className="mb-6">
            <p className="text-text-normal leading-relaxed mb-4 break-words">
              Um den Loss hinabsteigen zu können, müssen für alle Gewichte die{" "}
              <strong className="text-primary">Ableitungen</strong> der Loss
              Funktion berechnet werden. Diese Ableitungen bestimmen dabei für
              jedes Gewicht, wie viel dessen Änderung zur Reduzierung des Losses
              beitragen kann. Als{" "}
              <strong className="text-primary">Gradient</strong> bezeichnet man
              die{" "}
              <strong className="text-primary">
                Sammlung dieser Ableitungen
              </strong>{" "}
              in einer kompakten Form; mathematisch bezeichnen wir dies als
              Vektor. Somit wird beim Gradientenabstieg der aktuelle Zustand der
              Gewichte um einen kleinen Schritt{" "}
              <strong className="text-primary">
                in Richtung des Gradienten
              </strong>{" "}
              korrigiert.
            </p>
            <p className="text-text-normal leading-relaxed break-words">
              Zudem ist zu beachten, dass die KI über diese schrittweise
              Annäherung auf{" "}
              <strong className="text-primary">kurze Sicht</strong> nicht
              garantiert eine optimale Lösung findet. Man kann sich zum Beispiel
              vorstellen, dass die KI sogar zuerst den Gradienten hinauf laufen
              sollte, um anschließend einen noch steileren Abstieg zu finden.
              Bei einem solchen Verfahren, das eine optimale Lösung nicht
              garantieren kann, sprechen wir auch von einer
              <strong className="text-primary"> Heuristik</strong>.
            </p>
          </Expandable>
          <p className="text-base sm:text-lg text-text-normal mb-6 leading-relaxed break-words">
            Woher das Modell weiß, welche Gewichte wie stark angepasst werden
            müssen, wird mit der{" "}
            <strong className="text-primary">Backpropagation</strong> bestimmt.
          </p>
        </div>
      </div>
    </section>
  );
}
