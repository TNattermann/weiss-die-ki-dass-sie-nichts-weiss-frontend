import { useEffect } from "react";
import MultiTestRad from "../../components/MultiTestRad.tsx";
import { bits } from "../../components/Wissensbit.tsx";

const wordlibrary = [
  {
    id: "0",
    list: [
      [" schön", 0.45],
      [" warm", 0.3],
      [" kalt", 0.25],
    ],
  },
  {
    id: " schön",
    list: [
      [".", 0.21],
      [" und", 0.12],
      [" für", 0.06],
      [" hier", 0.009],
    ],
  },
  {
    id: " warm",
    list: [
      [" und", 0.46],
      [".", 0.1],
      [" gewesen", 0.06],
      [" hier", 0.009],
    ],
  },
  {
    id: " kalt",
    list: [
      [" und", 0.27],
      [".", 0.21],
      [" gewesen", 0.03],
      [" hier", 0.009],
    ],
  },
  {
    id: " Banane",
    list: [
      [".", 0.1],
      [" für", 0.06],
      [" und", 0.02],
      [" hier", 0.009],
      [" aufwärts", 0.00001],
    ],
  },
  {
    id: " und",
    list: [
      [" trocken", 0.45],
      [" sonnig", 0.3],
      [" windig", 0.25],
      [".", 0.05],
    ],
    //mache hier noch einen special case in MultiTestRad, der an der Probability schraubt
    //schön sollte sonnig und warm haben, warm sollte sonnig und trocken haben, kalt sollte windig, trocken und frostig haben
    //schön: replace trocken mit warm, windig mit sommerlich; warm: basecase, kalt: replace sonnig mit frostig
  },
  {
    id: " für",
    list: [
      [" einen", 0.24],
      [" Radfahren", 0.019],
      [" Menschen", 0.009],
      [".", 0.005],
    ],
  },
  {
    id: " hier",
    list: [
      ["in", 0.45],
      [".", 0.06],
      [" oben", 0.04],
      [" und", 0.007],
    ],
  },
  {
    id: " aufwärts",
    list: [
      [".", 0.17],
      [" und", 0.05],
      [" in", 0.04],
      [" gewesen", 0.019],
    ],
  },
  {
    id: " gewesen",
    list: [
      [".", 0.39],
      [" und", 0.13],
      [" in", 0.01],
      [" mit", 0.0025],
    ],
  },
  {
    id: " trocken",
    list: [
      [".", 0.36],
      [" gewesen", 0.038],
      [" in", 0.025],
      [" und", 0.017],
    ],
  },
  {
    id: " sonnig",
    list: [
      [".", 0.36],
      [" gewesen", 0.038],
      [" in", 0.025],
      [" und", 0.017],
    ],
  },
  {
    id: " sommerlich",
    list: [
      [".", 0.36],
      [" gewesen", 0.038],
      [" in", 0.025],
      [" und", 0.017],
    ],
  },
  {
    id: " windig",
    list: [
      [".", 0.45],
      [" gewesen", 0.05],
      [" in", 0.03],
      [" und", 0.02],
    ],
  },
  {
    id: " frostig",
    list: [
      [".", 0.45],
      [" gewesen", 0.05],
      [" in", 0.03],
      [" und", 0.02],
    ],
  },
  {
    id: ".",
    list: [["", 1]],
  },
  {
    id: "",
    list: [["", 1]], //redo the list so this one doesn't happen
  },

  //to potentially add: einen, Radfahren, Menschen, oben, in, mit Gardine
];

export default function NextWord() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">
        Und das nächste Wort?
      </h1>
      <div className="mb-16">
        <div>
          <p className="text-lg text-text-normal mb-6 leading-relaxed">
            Der noch fehlende Schritt besteht darin, zu erläutern, was das
            Modell nach der Auswahl eines Wortes unternimmt. Es erweitert den
            Satz um dieses Wort und wiederholt anschließend denselben Prozess,
            bis eine Satzbeendigung erfolgt. Da dem Modell für jede mögliche
            Fortsetzung entsprechende Wahrscheinlichkeitstabellen zur Verfügung
            stehen, kann es den nächsten Token jeweils konsistent bestimmen.
          </p>

          <div className="py-6 flex justify-center">
            <MultiTestRad
              wordlibrary={wordlibrary}
              temperature={1}
              isVideo={true}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6"
        id="attention2"
      >
        {bits
          .filter((c) => c.id === "temperature2")
          .map((c) => (
            <section>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
            </section>
          ))}
      </div>
    </div>
  );
}
