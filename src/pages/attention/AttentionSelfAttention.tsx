import { useEffect } from "react";

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
            "{fileSubtitle}"
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
  const items = [
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
        <p></p>
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
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Selbstaufmerksamkeit
        </h1>
        <div className="mb-12">
          <p className="text-lg text-text-normal mb-8 leading-relaxed">
            Zum Aufmerksamkeitsblock in Transformer-Modellen ist es nun nicht
            mehr weit: Es werden drei verschiedene Arten von Vektoren gebildet,
            die jeweils eine besondere Rolle spielen:
            <VectorList />
          </p>

          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-text-normal font-medium">
              Wenn man dies wiederum mit dem Beispiel der Betonung bei
              menschlicher Kommunikation vergleicht, so kann man feststellen,
              dass gewisse Wörter mehr Inhalt in sich tragen als nur ihre
              oberflächliche Bedeutung. Manche ändern beispielsweise den Sinn
              benachbarter Wörter oder sogar ganzer Sätze.
            </p>
          </div>
          <p className="text-lg text-text-normal mb-8 leading-relaxed">
            Mithilfe dieser drei unterschiedlichen Vektoren wird also nicht nur
            der reine Inhalt eines Wortes erfasst, sondern auch seine Position
            im Text und andere Kontextinformationen.
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
                (es gibt keinen schönen Sommertag, sondern ein Gewitter), obwohl
                die Betonung nicht darauf liegen muss - es spricht nichts dafür,
                dass es relevanter sein sollte als das Wort{" "}
                <strong className="text-primary">warm</strong>.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
