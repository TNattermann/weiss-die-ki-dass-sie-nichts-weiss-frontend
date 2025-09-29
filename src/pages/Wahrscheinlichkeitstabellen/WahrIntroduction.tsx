import { useEffect } from "react";
import SimpleRad from "../../components/simpleRad.tsx";
import Tilde from "../../components/Tilde.tsx";
import { bits } from "../../components/Wissensbit.tsx";

export default function WahrIntroduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-primary mb-6">
            Was passiert, wenn ich ChatGPT nutze?
          </h1>
          <p className="text-lg text-text-normal mb-6 leading-relaxed">
            Sprachmodelle (häufig auch Large Language Modells (LLMs) genannt)
            sind Systeme wie ChatGPT, die einem einen meist grammatikalisch
            korrekten und zumindest sinnvoll klingenden Text generieren. Diese
            Texte werden generiert, indem ihnen ein unvollständiger Text (ein
            Prompt) gegeben wird und sie dann so lange das nächste Wort in
            diesem Satz generieren, bis ein vollständiger Text generiert wird.
            Dies erfolgt mithilfe von Wahrscheinlichkeitstabellen. Wie diese
            Tabellen angewendet werden und in welchem Zusammenhang sie mit der
            Temperatur stehen, erfahren Sie auf dieser Seite.
          </p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6 break-long-words">
          Wie nutzt ChatGPT Wahrscheinlichkeitstabellen?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="p-8 rounded-xl">
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              Nehmen wir einen Beispielsatz:
            </p>
            <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
              <p className="text-text-normal font-mono text-textDark">
                "Das Wetter heute ist besonders..."
              </p>
            </div>
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              Als Mensch ist dieser Satz natürlich sehr einfach zu
              vervollständigen, aber wenn Sie Ihre Mitmenschen fragen, würde
              vielleicht nicht jeder das gleiche Wort wählen.
            </p>
          </div>
          <div className="p-8 rounded-xl">
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              "Wenn ich dieses Experiment mit 1000 Personen aus Deutschland
              durchführen würde, bekämen wir eine Wahrscheinlichkeitsverteilung,
              die angibt, wie viel Prozent der Menschen mit welchem Wort
              ergänzen würden. Eine Wahrscheinlichkeitsverteilung gibt für alle
              Wörter, die im Deutschen überhaupt bekannt sind, eine Prozentzahl
              an, so dass die Summe 100% ergibt." - Katharina Zweig, Weiß die
              KI, dass sie nichts weiß?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-text-normal leading-relaxed">
              Für unser Beispiel könnte die Wahrscheinlichkeitsverteilung
              vereinfacht so aussehen:
            </p>
            <div className="bg-bgColor rounded-lg border border-outline overflow-hidden">
              <table className="table-auto text-lg text-text-normal w-full text-left">
                <thead className="bg-bgColor">
                  <tr>
                    <th className="border border-outline px-4 py-2">Wort</th>
                    <th className="border border-outline px-4 py-2">
                      Wahrscheinlichkeit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-outline px-4 py-2">schön</td>
                    <td className="border border-outline px-4 py-2">45%</td>
                  </tr>
                  <tr>
                    <td className="border border-outline px-4 py-2">warm</td>
                    <td className="border border-outline px-4 py-2">30%</td>
                  </tr>
                  <tr>
                    <td className="border border-outline px-4 py-2">kalt</td>
                    <td className="border border-outline px-4 py-2">25%</td>
                  </tr>
                </tbody>
                <tfoot className="bg-bgColor font-semibold">
                  <tr>
                    <td className="border border-outline px-4 py-2">Gesamt</td>
                    <td className="border border-outline px-4 py-2">100%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-text-normal leading-relaxed">
              Auf Grundlage einer solchen Wahrscheinlichkeitsverteilung
              entscheidet das Sprachmodell, wie es den Satz fortsetzt. Eine
              Möglichkeit ist, einfach das Wort mit der höchsten
              Wahrscheinlichkeit auszuwählen:
            </p>
            <div className="bg-bgColor p-4 rounded-lg border border-outline">
              <p className="text-text-normal font-mono text-textDark">
                "Das Wetter heute ist besonders schön"
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
                Eine anschauliche Möglichkeit, sich die
                Wahrscheinlichkeitstabelle vorzustellen, ist das Bild eines
                Glücksrads auf einem Jahrmarkt. Je höher die Wahrscheinlichkeit
                eines Wortes, desto größer ist der ihm zugewiesene Sektor. In
                diesem Beispiel erhält "schön" den größten Bereich, während
                "kalt" den kleinsten einnimmt. Wird das Rad gedreht, bleibt es
                erwartungsgemäß in etwa drei von zehn Fällen bei "warm" stehen. 
                Hier bei dem Rad können Sie es einmal selbst ausprobieren.
              </p>
              <div className="pb-6">
                <SimpleRad
                  wordpercentlist={[
                    ["schön", 0.45],
                    ["warm", 0.3],
                    ["kalt", 0.25],
                  ]}
                />
              </div>
            </div>

            <div>
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
                Durch die Verwendung des Glücksradmodells wird eine gewisse
                Varianz gewährleistet, sodass das Sprachmodell nicht
                ausschließlich das wahrscheinlichste Wort auswählt. Gleichzeitig
                bleibt jedoch die Tendenz erhalten, Wörter zu bevorzugen, die
                zum Kontext passen, wodurch unplausible Optionen – wie etwa das
                Wort "Banane" – weitgehend ausgeschlossen werden.
              </p>
              <p className="text-lg text-text-normal mb-6 leading-relaxed">
                Für ein Sprachmodell umfasst das Glücksrad selbstverständlich
                nicht nur drei Wörter, sondern den gesamten Wortschatz. Darin
                sind neben Wörtern auch Sonderzeichen wie der Punkt "."
                enthalten, sodass das Modell Sätze korrekt beenden kann. Man
                kann sich nun vorstellen, dass das Modell für jede mögliche
                Fortsetzung entsprechende Wahrscheinlichkeitstabellen
                bereithält. Auf diese Weise <Tilde />
                weiß das Sprachmodell bei jedem Schritt, welches Wort mit
                welcher Wahrscheinlichkeit als Nächstes folgt.
              </p>
            </div>
          </div>
          <div
            className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6"
            id="attention2"
          >
            {bits
              .filter((c) => c.id === "temperature1")
              .map((c) => (
                <section>
                  <h2>{c.title}</h2>
                  <p>{c.text}</p>
                </section>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
