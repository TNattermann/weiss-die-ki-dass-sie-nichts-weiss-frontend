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

export default function AttentionConcept() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-center text-primary mb-4 break-words">
            Konzept
          </h1>

          <p className="text-lg text-text-normal mb-4 leading-r>elaxed">
            Am Anfang bekommt jedes Wort der Eingabe eine Wichtigkeit zugeordnet
            (das <strong className="text-primary">Gewicht</strong>). Dieser
            Parameter kann später vom Sprachmodell je nach Wichtigkeit angepasst
            werden. Aus dem Gewicht und der numerischen Darstellung des Wortes
            (dem <strong className="text-primary">Eingabevektor</strong>) wird
            in Abhängigkeit von allen anderen Wörtern eine Art Zahlencode
            errechnet (der{" "}
            <strong className="text-primary">Kontextvektor</strong>), der das
            Wort und die Kontextinformationen im Modell darstellt.
          </p>

          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-4">
            <p className="text-text-normal font-medium">
              Das hört sich alles sehr kompliziert an - das ist es auch - man
              kann es aber auch so verstehen: Das Sprachmodell ~lernt die
              Betonung einzelner Wörter. So wie wir gewisse Wörter
              unterschiedlich betonen, um ihre Bedeutung zu unterstreichen,
              ~betont die KI auch verschiedene Wörter, um ihre Wichtigkeit zu
              erfassen.
            </p>
          </div>

          <FileWithText
            fileSrc="/example-audio.mp3"
            fileType="audio"
            fileSubtitle={
              <>
                Das Wetter ist heute{" "}
                <strong className="text-primary">besonders</strong> schön.
              </>
            }
            heading="Aufmerksamkeit als Analogie zur menschlichen Betonung"
            text={
              <>
                So wie wir Wörter in Sätzen unterschiedlich betonen, weist das
                Sprachmodell mithilfe von Aufmerksamkeitsblöcken Wörtern
                verschiedene Kontextvektoren zu. Bei diesem Beispiel hätte das
                Wort <strong className="text-primary">besonders</strong> einen
                hohen Aufmerksamkeitswert.
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
