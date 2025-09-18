import Expandable from "../../components/Expandable";
import Tilde from "../../components/Tilde";

export default function LearningLoss() {
  return (
    <section className="py-16" id="loss">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-center text-primary mb-6 break-words">
            Woher <Tilde />
            weiß das Modell, wie gut es ist?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-lg text-text-normal leading-relaxed">
                Möchten wir beim Bogenschießen ermitteln, wie gut ein Versuch
                war, muss die
                <strong className="text-primary"> Distanz</strong> der
                Pfeilspitze zur Mitte der Zielscheibe bestimmt werden. Diese
                Distanz entspricht dem Fehler des aktuellen Versuchs und gibt
                Auskunft darüber, welche Anpassungen vor dem nächsten Versuch
                notwendig sind. Bei einer KI nennt man diese Abweichung zwischen
                aktueller Leistung und dem erwünschten Ziel auch
                <strong className="text-primary"> Loss</strong>.
              </p>
            </div>

            {/* Bild */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/img/Distance_Target.png"
                alt="Verschiedene Schüsse"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </div>
          </div>

          <p className="text-lg text-text-normal mb-6 leading-r>elaxed">
            Beim Trainieren einer KI schießt nicht ein*e Schütze*in auf eine
            Zielscheibe - stattdessen lernt die KI anhand von{" "}
            <strong className="text-primary">gesammelten Beispieldaten</strong>,
            die in einem großen
            <strong className="text-primary"> Trainingsdatensatz</strong>{" "}
            gebündelt sind. Die Zuweisung der Zielzustände zu den Trainingsdaten
            wird im Fachjargon als{" "}
            <strong className="text-primary">Daten-Labeling</strong> bezeichnet
            und muss oft in mühsamer Handarbeit erfolgen. Da sich diese
            Trainingsbeispiele unterscheiden, muss die KI sich so anpassen, dass
            der Loss über alle Beispiele so gering wie möglich wird.
          </p>

          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-text-normal font-medium">
              Um dies mit unserer Metapher zu verdeutlichen: Wir können uns
              Trainingsdaten wie eine Vielzahl an Schützen vorstellen, die von
              verschiedenen Positionen auf das Ziel schießen. Beim Trainieren
              suchen wir also <strong className="text-primary">eine </strong>
              Schießtechnik, die für{" "}
              <strong className="text-primary">alle</strong> Schützen den Loss,
              also die Distanz zur Zielscheibe, minimiert.
            </p>
          </div>
          <div className="w-full flex justify-center mb-6">
            <img
              src="/img/Bowmen_Datapoints.png"
              alt="Mehrere Bogenschützen als Daten"
              className="w-full max-w-none rounded-xl shadow-lg object-contain"
            />
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-text-normal font-medium">
              <strong className="text-primary">Zusammenfassung Loss: </strong>{" "}
              Damit ein Modell <Tilde />
              lernen kann, muss zuerst ermittelt werden, wie gut es aktuell ist.
              Dazu wird die Abweichung zwischen Ist- und Sollzustand anhand des
              Losses ermittelt. <br />
              Wie die KI den Loss nutzt, um im folgenden Trainingsschritt einen
              geringeren Loss zu erzeugen, schauen wir uns im nächsten Abschnitt
              an. Hierbei kommt der{" "}
              <strong className="text-primary">Gradientenabstieg</strong> ins
              Spiel.
            </p>
          </div>

          <Expandable title="Mehr zu Verlustfunktionen" className="mb-6">
            <p className="text-text-normal leading-relaxed">
              Die Ermittlung des Losses erfolgt anhand einer mathematischen
              Funktion, die aus dem Ist- und Sollzustand eine Distanz bildet. In
              der Praxis gibt es je nach Anwendungsfall eine Vielzahl an
              mathematischen Loss Funktionen, die sich nach Anwendungsfall und
              erwünschten Eigenschaften der Verlustfunktion unterscheiden. Hier
              eine kleine Auswahl an Aspekten, die man bei der Auswahl einer
              Loss Funktion beachten muss: <br />
            </p>
            <ul className="list-disc list-inside my-2 space-y-1 text-text-normal leading-relaxed">
              <li>
                Welches Distanzmaß? Direkter Abstand (= Euklidische Distanz)
                oder entlang der Achsen (= City-Block Distanz)?
              </li>
              <li>
                Quadrierterter Loss (= Mean Squared Error) oder die absoluter
                Loss (= Mean Absolute Error)?{" "}
              </li>
              <li>
                Vorhersage von einem Wert (= Regression) oder von Klassen (=
                Klassifikation)?
              </li>
            </ul>
            <p className="text-text-normal leading-relaxed">
              Am Ende erfüllen allerdings alle denselben Zweck: Sie ermitteln
              die{" "}
              <strong className="text-primary">
                Abweichung zwischen Ist- und Sollzustand
              </strong>
              . Die Auswahl der Verlustfunktion ist dabei eine{" "}
              <strong className="text-primary">
                Modellierungsentscheidung
              </strong>{" "}
              der Entwickler*innen und sollte unter Berücksichtigung des
              gesamten Prozesses und der Fragestellung gewählt werden.
            </p>
          </Expandable>
        </div>
      </div>
    </section>
  );
}
