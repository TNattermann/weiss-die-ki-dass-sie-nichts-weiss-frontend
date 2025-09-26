import { useEffect } from "react";
import Tilde from "../../components/Tilde";

export default function LearningIntroduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6 px-4 sm:px-6 overflow-x-hidden" id="introduction">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-primary mb-6 break-words">
          Wie lernt ChatGPT?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          <div>
            <p className="text-base sm:text-lg text-text-normal leading-relaxed break-words">
              Nachdem wir die Struktur neuronaler Netze kennengelernt haben,
              widmen wir uns nun der Frage, wie ein Sprachmodell <Tilde />
              lernt. <br />
              Während des Trainings sagt ein Sprachmodell das nächste Wort
              vorher. Das vorhergesagte Wort kann dabei nahe oder weit entfernt
              von dem tatsächlichen Wort liegen. Schauen wir uns das Beispiel{" "}
              <br />
              <strong className="text-primary">
                "Der Gefrierpunkt von Wasser liegt bei _____"
              </strong>{" "}
              an. <br />
              Die Vorhersage <strong className="text-primary">"0 °C"</strong>{" "}
              ist das Ziel der Vorhersage, wohingegen Wörter wie
              <strong className="text-primary"> "Steuererklärung"</strong>{" "}
              besonders weit weg liegen. Hierzu werden die{" "}
              <strong className="text-primary">Wordembeddings</strong> benötigt,
              die wir bereits kennengelernt haben. <br />
              Das Model muss nun sein <Tilde />
              Verhalten so anpassen, dass es beim nächsten Mal für denselben
              Satz <strong className="text-primary">wahrscheinlicher</strong> "0 °C"
              vorhersagt. Um zu verstehen wie das gelingt, ist es am einfachsten
              sich zuerst das Lernen beim Menschen genauer anzuschauen. Sowohl
              Mensch als auch Sprachmodell nutzen{" "}
              <strong className="text-primary">drei Kernkonzepte</strong>, die
              elementar für das Lernen sind und die wir uns exemplarisch beim
              Bogenschießen anschauen.
            </p>
          </div>

          {/* Bild */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-primary/60 rounded-lg inline-flex">
            <img
              src="/img/Target_Words.png"
              alt="Zielscheibe als Analogie des KI Lernens: Mögliche Vervollständigungen des Beispielsatzes sind auf einer Zielscheibe angezeichnet,
              wobei die beste Antwort '0 °C' in der Mitte der Zielscheibe liegt. Kalt und Winter liegen auch nahe, wohingegen Sommer, warm und 
              Steuererklärung besonders weit weg liegen. "
              className="block w-full max-w-lg h-auto rounded-xl shadow-lg object-contain"
            />
            </div>
          </div>
        </div>

        {/* Drei Aspekte nebeneinander */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Verlustfunktion */}
          <div className="bg-bgColor p-5 sm:p-6 rounded-lg border border-outline text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Loss</h2>
            <p className="text-text-normal leading-relaxed break-words">
              Wie weit ist der Pfeil vom Ziel entfernt? Zuerst muss der Fehler
              (oder Loss) des aktuellen Trainingsstandes gemessen werden.
            </p>
          </div>

          {/* Gradient Descent */}
          <div className="bg-bgColor p-5 sm:p-6 rounded-lg border border-outline text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Gradientenabstieg
            </h2>
            <p className="text-text-normal leading-relaxed break-words">
              Schritt für Schritt werden Technik und Haltung angepasst, um dem
              Ziel näher zu kommen.
            </p>
          </div>

          {/* Backpropagation */}
          <div className="bg-bgColor p-5 sm:p-6 rounded-lg border border-outline text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
              Backpropagation
            </h2>
            <p className="text-text-normal leading-relaxed break-words">
              Vom Ergebnis zurückgedacht: Um Anpassungen vornehmen zu können
              müssen die Ursachen des Fehlschusses analysiert und als Feedback
              kommuniziert werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
