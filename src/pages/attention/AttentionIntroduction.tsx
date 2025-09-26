import { useEffect } from "react";
import Tilde from "../../components/Tilde";
import Bit from "../../components/Wissensbit";

const notes = [
  {
    icon: "ri-number-1",
    color: "primary",
    borderColor: "border-primary",
    title: "Kaum relevante Wörter",
    description: (
      <>
        Wörter wie <strong className="text-primary">wird</strong>,{" "}
        <strong className="text-primary">das</strong> und{" "}
        <strong className="text-primary">bestimmt</strong> sind kaum relevant,
        da sie sehr oft in vielen verschiedenen Sätzen vorkommen.
      </>
    ),
  },
  {
    icon: "ri-number-2",
    color: "primary",
    borderColor: "border-primary",
    title: "Wichtige Wörter",
    description: (
      <>
        <strong className="text-primary">Tolles</strong>,{" "}
        <strong className="text-primary">gestern</strong>,{" "}
        <strong className="text-primary">Heute</strong> und andere Wörter
        scheinen dagegen bereits deutlich relevanter, um das nächste Wort zu
        erraten.
      </>
    ),
  },
  {
    icon: "ri-number-3",
    color: "primary",
    borderColor: "border-primary",
    title: "Essentielle Wörter",
    description: (
      <>
        Das wichtigste Wort ist hier wohl{" "}
        <strong className="text-primary">Wetter</strong> - sonst könnte es sich
        ja um alles mögliche drehen.
      </>
    ),
  },
  {
    icon: "ri-error-warning-fill",
    color: "primary",
    borderColor: "border-primary",
    title: "Achtung!",
    description:
      "Hier sieht man bereits, dass die Zuordnung von Wichtigkeiten zu Wörtern zu gewissem Maße auch willkürlich und subjektiv sein kann.",
  },
];

export default function AttentionIntroduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Versteht ChatGPT mich?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">
          <div>
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              Wir haben gelernt, dass ein Sprachmodell das nächste Wort in einem
              Satz <Tilde />
              vorhersagt. Nun gibt es Wörter, die für so ein Ratespiel
              relevanter sind, und welche, die man kaum beachten muss. Dort
              setzt das Konzept der Aufmerksameit an - dadurch lernt das
              Sprachmodell, welches Wort für die Ausgabe relevant ist, und
              welches nicht. Mit folgendem Beispiel möchten wir dieses Konzept
              näher beleuchten. Das Ziel ist es, den einfachen Satz auf der
              rechten Seite zu vervollständigen.
            </p>
            <Bit
              id={1}
              title="Attention-Block"
              content={
                <>
                  Die Teile eines großen Sprachmodells wie ChatGPT, die für die
                  Aufmerksamkeit zuständig sind, werden oft als{" "}
                  <strong className="text-primary">
                    Aufmerksamkeits- oder Attention-Block
                  </strong>{" "}
                  bezeichnet.
                </>
              }
            ></Bit>
          </div>
          <div className="p-2 rounded-xl">
            <h3 className="text-primary text-xl font-semibold text-textDark mb-4">
              Einfaches Beispiel: Den Satz vervollständigen.
            </h3>
            <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
              <p className="text-text-normal font-mono text-textDark">
                "Tolles Wetter gestern! Heute wird das Wetter bestimmt wieder
                sehr..."
              </p>
            </div>
            <p className="text-sm italic text-text-normal mb-4 leading-relaxed">
              Hier könnten nun viele verschiedene Antworten passen - regnerisch,
              schön, sonnig, windig oder vielleicht einfach wieder toll.{" "}
              <span className="hover">
                <u>Was würden Sie tippen?</u>
                <span className="border-l-4 bg-primary-container-selected text-on-primary-container-selected p-6 rounded-r-lg mb-6 text-textMedium font-medium">
                  Das Sprachmodell vervollständigt diesen Satz übrigens mit
                  "schön". Wie positiv unser kleiner künstlicher Helfer doch
                  ist.
                </span>
              </span>
            </p>
          </div>
        </div>
        <p className="text-lg text-text-normal mb-4 leading-relaxed">
          Wie wählt man nun das nächste Wort aus? Einen Hinweis gibt der Satz
          selbst, oder eher: Die Wörter im Satz. Doch welche Wörter sind
          wichtig, und welche nicht so wichtig?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md border-l-4 ${note.borderColor}`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0`}
                >
                  <i className={`${note.icon} text-${note.color}`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    {note.title}
                  </h3>
                  <p className="text-text-normal">{note.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg text-text-normal mb-4 leading-relaxed mt-4">
          Ähnlich wie wir muss sich das Sprachmodell also auf die relevantesten
          Wörter <Tilde />
          konzentrieren können - sonst geht der gesamte Kontext verloren. Doch
          woher <Tilde />
          weiß das Modell, welches Wort relevant ist und welches nicht?
        </p>
      </div>
    </section>
  );
}
