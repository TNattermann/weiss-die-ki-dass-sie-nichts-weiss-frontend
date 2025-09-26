import { useEffect, useState } from "react";
import Tilde from "../../components/Tilde";

export default function ModellgleichungIntro() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-primary mb-6">
          Wie funktioniert das mit diesem Neuronalen Netzwerk?
        </h1>
        <div className="items-center mb-16">
          <p className="text-lg text-text-normal mb-6 leading-relaxed">
            Im Abschnitt "Was passiert, wenn ich ChatGPT benutze?" wurde bereits
            gezeigt, dass ChatGPT eine Wahrscheinlichkeitstabelle nutzt, um das
            nächste Wort zu bestimmen. Bisher unbeantwortet geblieben ist jedoch
            die Frage, wo diese Tabelle herkommt. In diesem Abschnitt wird die
            zugrundeliegende Technologie hinter Sprachmodellen wie ChatGPT
            vorgestellt, sogenannte Neuronale Netzwerke. Neuronale Netzwerke
            sind eigentlich nur eine Ansammlung von mathematischen Gleichungen,
            die in Reihen hintereinander angeordnet sind. Jede Gleichung kann
            als ein Neuron interpretiert werden, das eine{" "}
            <b>Ja-Nein-Entscheidung</b> an nachfolgende Neuronen weitergibt.
            Aber wie lässt sich damit erklären, wie ein Modell eine Entscheidung
            trifft? Diese Frage wird in dem folgenden Abschnitt beantwortet.
          </p>
        </div>
        <div className="items-center mb-16">
          <div className="flex items-start justify-between mb-4 gap-4">
            <h3 className="text-3xl font-semibold text-primary mb-4 mt-10">
              Beispiel:
            </h3>
            {/* Aufklappbare Textbox */}
            <div className="bg-bgColor border border-outline rounded-lg shadow-md p-4 mt-10">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left font-semibold text-primary flex justify-between items-center"
              >
                Eine kurze Zusammenfassung des Beispiels aus dem Buch: &nbsp;
                <span>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="mt-4 text-text-normal leading-relaxed">
                  Im Buch "Weiß die KI, dass sie nichts weiß?" wird eine
                  Geschichte aus der Nachkriegszeit erzählt, in der das Geld
                  immer knapp war. Großonkel Fritz war mit seiner geliebten
                  Nichte Ulla unterwegs, als sie in einem Schaufenster eine
                  kleine Affen-Musikbande entdeckten: 12 kleine Äffchen, die man
                  aufziehen konnte und die dann Musik machten. Laut einem Schild
                  im Schaufenster sollte man die Äffchen für nur 5 Deutsche Mark
                  kaufen können, was zu dieser Zeit dennoch einen beachtlichen
                  Betrag darstellte, für den man auch 20kg Kartoffeln hätte
                  kaufen können. Trotzdem wollte Fritz seiner Ulla eine Freude
                  machen und so ging er in den Laden, um die Affenbande zu
                  kaufen. Kurz darauf kehrte er jedoch mit leeren Händen zurück:
                  der Preis bezog sich auf ein Äffchen, nicht die ganze Bande.
                  Das konnte und wollte sich Onkel Fritz nicht leisten. Die
                  Geschichte beschreibt, dass Onkel Fritz eine
                  Ja-Nein-Entscheidung treffen musste: 5 DM für ein Spielzeug
                  ausgeben oder nicht. Dabei musste er zwischen dem Verlust des
                  Geldes abwägen, für das man auch Lebensmittel kaufen könnte,
                  und auf der anderen Seite der Freude, die er und seine
                  geliebte Nichte Ulla mit der Affenbande haben könnten.
                  Vermutlich wog er ab, ob die empfundene Freude den Verlust des
                  Geldes überwiegen würde und kam zu dem Schluss, dass dies bei
                  allen 12 Äffchen der Fall gewesen wäre, nicht jedoch bei einem
                  einzelnen Äffchen.
                </div>
              )}
            </div>
          </div>
          <p className="text-lg text-text-normal mb-6 leading-relaxed">
            Wie das Modell eine Entscheidung trifft, lässt sich am besten mit
            Hilfe eines Beispiels verdeutlichen. Hierzu erinnern wir uns an das
            Affenbande-Beispiel aus dem Buch "Weiß die KI, dass sie nichts
            weiß?". Die Abwägung von Onkel Fritz soll nun auf die Maschine
            übertragen werden. Dazu wird die erwartete Freude des Onkels auf
            einer Skala von -100 bis 100 Freudenpunkten angegeben. Der Verlust
            der 5 DM könnte 50 Freudenpunkte kosten (-50), während die erwartete
            Freude mit einem Äffchen bei 35 Freudenpunkten liegt (+35). Hierzu
            zwei Beispielrechnungen:
          </p>
          <div className="flex space-x-4">
            <div className="bg-bgColor p-2 rounded-lg border border-outline mb-4 w-fit">
              <h4 className="font-semibold text-primary text-xl mb-3">
                -50 + 35 = -15
              </h4>
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
                Der Kauf eines Äffchens für 5 DM würde die Freude insgesamt
                verringern, da der Wert negativ ist. Der Verlust von 5 DM kostet
                also mehr Freude als der Erwerb eines Äffchens bringt.
              </p>
            </div>
            <div className="bg-bgColor p-2 rounded-lg border border-outline mb-4 w-fit">
              <h4 className="font-semibold text-primary text-xl mb-3">
                -50 + 2 * 35 = 20
              </h4>
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
                Gibt es wie in diesem Beispiel zwei Äffchen für 5 DM, so wird
                die Freude insgesamt größer, da der Wert positiv ist. Die Freude
                mit zwei Äffchen ist demnach größer als der Verlust von 5 DM
                kostet.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              Wenn wir unsere Entscheidungen auf diese Weise abbilden, kann auch
              eine Maschine eine Entscheidung berechnen: im ersten Fall würde
              sich die Maschine gegen den Kauf <Tilde />
              entscheiden. Da das Ergebnis der zweiten Berechnung positiv ist,
              würde sich die Maschine hier für den Kauf <Tilde />
              entscheiden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
