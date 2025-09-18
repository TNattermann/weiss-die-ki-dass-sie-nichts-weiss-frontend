import React from "react";
import Tilde from "../../components/Tilde";

type FileWithTextProps = {
  fileSrc: string;
  fileType: "audio" | "video";
  fileSubtitle: React.ReactNode;
  heading: React.ReactNode;
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

// Example usage
const AttentionExample: React.FC = () => {
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Beispiel: Aufmerksamkeit als Betonung
        </h1>
        <p className="text-lg text-text-normal mb-4 leading-relaxed">
          Eine gute Art sich das Konzept der Aufmerksamkeit vorzustellen, ist
          eine Analogie zur menschlichen Betonung zu ziehen. Nehmen wir an, dass
          die Betonung eines Wortes mit der Wichtigkeit für den Rest des Satzes
          gleichzusetzen ist. In folgenden Beispielen werden jeweils
          verschiedene Wörter betont - und somit ihre Wichtigkeit hervorgehoben.
        </p>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-text-normal mb-4 leading-relaxed">
            <FileWithText
              fileSrc="/example-audio.mp3"
              fileType="audio"
              fileSubtitle="Das Wetter ist heute sehr schön."
              heading="Keine Betonung"
              text={
                <>
                  Diese Betonung verrät kaum etwas darüber, ob der Sprecher
                  erfreut ist, dass das Wetter{" "}
                  <strong className="text-primary">heute</strong> sehr schön
                  ist, oder heute <strong className="text-primary">sehr</strong>{" "}
                  schön ist (oder beides).
                </>
              }
            />
          </p>
          <p className="text-lg text-text-normal mb-4 leading-relaxed">
            <FileWithText
              fileSrc="/example-audio.mp3"
              fileType="audio"
              fileSubtitle={
                <>
                  Das Wetter ist <strong className="text-primary">heute</strong>{" "}
                  sehr schön.
                </>
              }
              heading={
                <>
                  Betonung auf <strong>heute</strong>
                </>
              }
              text={
                <>
                  Der Sprecher ist erfreut, dass das Wetter{" "}
                  <strong className="text-primary">heute</strong> sehr schön
                  ist, und nicht an einem anderen Tag.
                </>
              }
            />
          </p>
          <p className="text-lg text-text-normal mb-4 leading-relaxed">
            <FileWithText
              fileSrc="/example-audio.mp3"
              fileType="audio"
              fileSubtitle={
                <>
                  Das Wetter ist heute{" "}
                  <strong className="text-primary">sehr</strong> schön.
                </>
              }
              heading={
                <>
                  Betonung auf <strong>sehr</strong>
                </>
              }
              text={
                <>
                  Der Sprecher ist erfreut, dass das Wetter heute{" "}
                  <strong className="text-primary">sehr</strong> schön ist, also
                  ganz besonders schön.
                </>
              }
            />
          </p>
        </div>
        <p className="text-lg text-text-normal mb-4 leading-relaxed mt-4">
          Mit unterschiedlicher Betonung wird durch mehr Kontextinformationen
          die Bedeutung des Satzes klarer. Man sieht: Eine unterschiedliche
          Betonung kann die Wichtigkeit von Wörtern herausheben, und wir
          erkennen die Wichtigkeit von Wörtern auch anhand der Betonung. Ein
          Sprachmodell kann dies - wenn überhaupt - nur mit dem Text selbst
          <Tilde />
          erkennen, d.h. mathematisch berechnen.
        </p>
        <div className="bg-primary/5 border-l-4 text-primary p-4 rounded-r-lg mb-4">
          <p className="text-text-normal font-medium">
            Durch die Metapher der Betonung kann man gut greifen, was der
            Aufmerksamkeitsblock für das Gesamtkonzept bedeutet - doch die
            Betonung eines Wortes mit der Wichtigkeit eines Wortes
            gleichzusetzen ist schwierig. Es gibt Sätze, bei denen dies anders
            ist. Man sieht, dass es schwierig ist, das Konzept der
            Aufmerksamkeit intuitiv zu erklären.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AttentionExample;
