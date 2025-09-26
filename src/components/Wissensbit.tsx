import Tilde from "./Tilde";

// contents.js
export const bits = [
  {
    id: "attention1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 1</h3>
      </>
    ),
    text: (
      <>
        Die Teile eines großen Sprachmodells wie ChatGPT, die für die
        Aufmerksamkeit zuständig sind, werden oft als{" "}
        <strong className="text-primary">
          Aufmerksamkeits- oder Attention-Block
        </strong>{" "}
        bezeichnet.
      </>
    ),
  },
  {
    id: "attention2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 2</h3>
      </>
    ),
    text: (
      <>
        Das Sprachmodell <Tilde />
        lernt die Betonung einzelner Wörter. So wie wir gewisse Wörter
        unterschiedlich betonen, um ihre Bedeutung zu unterstreichen,
        <Tilde />
        betont das Modell auch verschiedene Wörter, um ihre Wichtigkeit zu
        erfassen.
      </>
    ),
  },
  {
    id: "temperature1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Temperature 1</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "temperature2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Temperature 2</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "temperature3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Temperature 3</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "tokens1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Tokens 1</h3>
      </>
    ),
    text: (
      <>
        Tokens sind rein technische Einheiten, in die Text zerlegt wird. Das
        Modell „versteht“ den Text nicht auf Wortebene, sondern verarbeitet nur
        diese Token-Sequenzen.
      </>
    ),
  },
  {
    id: "tokens2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Tokens 2</h3>
      </>
    ),
    text: (
      <>
        Die Wahl des Tokenisierungsalgorithmus beeinflusst direkt, wie der Text
        zerteilt wird und wie effizient das Sprachmodell arbeitet.
        Unterschiedliche Tokenizer können denselben Satz unterschiedlich
        zerlegen.
      </>
    ),
  },
  {
    id: "tokens3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Tokens 3</h3>
      </>
    ),
    text: (
      <>
        Tokens entsprechen nicht automatisch Wörtern oder grammatikalisch
        sinnvollen Bestandteilen. Besonders bei teilwort-basierten Ansätzen
        entstehen Sequenzen wie „he“ und „ute“, die für sich genommen keine
        Bedeutung tragen. Das Modell arbeitet aber ausschließlich mit diesen
        Fragmenten.
      </>
    ),
  },
  {
    id: "embeddings1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Embeddings 1</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "embeddings2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Embeddings 2</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "embeddings3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Embeddings 3</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "decisions1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Decisions 1</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "decisions2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Decisions 2</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "decisions3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Decisions 3</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "training1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Training 1</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "training2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Training 2</h3>
      </>
    ),
    text: <>placeholder</>,
  },
  {
    id: "training3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Training 3</h3>
      </>
    ),
    text: <>placeholder</>,
  },
];
