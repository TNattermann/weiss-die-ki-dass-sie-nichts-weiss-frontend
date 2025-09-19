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
];
