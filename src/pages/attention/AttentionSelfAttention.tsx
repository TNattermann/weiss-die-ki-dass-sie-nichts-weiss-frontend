import React, { useEffect } from "react";
import { Link } from "react-router-dom";

type FileWithTextProps = {
  fileSrc: string;
  fileType: "audio" | "video";
  fileSubtitle: React.ReactNode;
  heading: string;
  text: React.ReactNode;
};

const FileWithText: React.FC<FileWithTextProps> = ({
  fileSrc,
  fileType,
  fileSubtitle,
  heading,
  text,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg bg-primary-container text-on-primary-container">
      {/* Media */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        {fileType === "audio" ? (
          <audio controls className="w-full rounded-lg">
            <source src={fileSrc} />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <video controls className="w-full rounded-lg">
            <source src={fileSrc} />
            Your browser does not support the video element.
          </video>
        )}
        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4 mt-4">
          <p className="text-text-normal font-mono text-textDark">
            {fileSubtitle}
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export function VectorList() {
  const items: React.ReactNode[] = [
    <>
      Der <strong className="text-primary">Abfragevektor</strong>: Das aktuell
      relevante Wort
    </>,
    <>
      Der <strong className="text-primary">Schlüsselvektor</strong>: Die
      Information, wo das Wort liegt
    </>,
    <>
      Der <strong className="text-primary">Inhaltsvektor</strong>: Der Inhalt
      des Wortes
    </>,
  ];

  return (
    <div className="mb-4 mt-4">
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AttentionSelfattention() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Self-Attention
        </h1>

        <div className="mb-4">
          <div className="mb-4">
            <p className="text-lg text-text-normal mb-8 leading-relaxed">
              Das Sprachmodell lernt also mithilfe eines Neuronalen Netzes für
              jedes neu generierte Wort, welche vorangegangen Wörter relevant
              sind. Es nutzt dafür die bereits getätigten Eingaben – also nur
              mit dem Inhalt selbst (Mehr zu Neuronalen Netzen auf{" "}
              <Link to="/modellgleichung">dieser</Link> Seite). Dazu benötigt es
              das entsprechende <Link to="/networkLearning">Training</Link>. Der
              gesamte Prompt und die bereits generierten Tokens (mehr zu{" "}
              <Link to="/wordembeddings">Tokens</Link>) werden erneut als Input
              in das Sprachmodell gegeben, und das nächste Wort wird generiert,
              basierend auf den berechneten Werten der Wichtigkeit. Am Ende ist
              die Wichtigkeit eines Tokens für alle anderen Tokens nur ein
              mathematisch berechneter Vektor, der alle Informationen, die wir
              als Menschen als relevant betrachten, um das nächste Wort zu
              finden, beinhaltet. Dies ist menschlich nur schwer vorstellbar.
            </p>

            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-4">
              <p className="text-text-normal font-medium">
                Wenn man dies wiederum mit dem Beispiel der Betonung bei
                menschlicher Kommunikation vergleicht, so kann man feststellen,
                dass gewisse Wörter mehr Inhalt in sich tragen als nur ihre
                oberflächliche Bedeutung. Manche ändern beispielsweise den Sinn
                benachbarter Wörter oder sogar ganzer Sätze. All diese
                Informationen werden am Ende in einen Vektor verpackt.
              </p>
            </div>

            <p className="text-lg text-text-normal mb-8 leading-relaxed">
              Mithilfe dieser drei unterschiedlichen Vektoren wird also nicht
              nur der reine Inhalt eines Wortes erfasst, sondern auch seine
              Position im Text und andere Kontextinformationen.
            </p>

            <FileWithText
              fileSrc="/example-audio.mp3"
              fileType="audio"
              fileSubtitle={
                <>
                  Morgen wird es <strong className="text-primary">warm</strong>,
                  aber <strong className="text-primary">stürmisch</strong>.
                </>
              }
              heading="Selbstaufmerksamkeit"
              text={
                <>
                  Bei diesem Beispiel hätte das Wort{" "}
                  <strong className="text-primary">stürmisch</strong> eine
                  besondere Bedeutung, da es den gesamten Sinn des Satzes ändert
                  (es gibt keinen schönen Sommertag, sondern ein Gewitter),
                  obwohl die Betonung nicht darauf liegen muss – es spricht
                  nichts dafür, dass es relevanter sein sollte als das Wort{" "}
                  <strong className="text-primary">warm</strong>.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
