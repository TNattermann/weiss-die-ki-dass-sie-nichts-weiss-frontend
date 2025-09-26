import Tilde from "./Tilde";

// contents.js
export const bits = [
  {
    id: "attention1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 9</h3>
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
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 10</h3>
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
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 1</h3>
      </>
    ),
    text: (
      <>
        Sprachmodelle haben ein spezielles Token, wodurch sie ~wissen, das der
        Text fertig ist und kein weiteres Wort generiert werden soll.
        Normalerweise ist dieses Token unsichtbar, in den Beispielen hier, wird
        der Punkt benutzt.
      </>
    ),
  },
  {
    id: "temperature2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 2</h3>
      </>
    ),
    text: (
      <>
        Das Modell wählt immer ein Wort das wahrscheinlich zum bestehenden Text
        passt, und hängt dies an. Dann wird dieser Prozess mit dem bestehenden
        Text plus Anhang wiederholt, bis der Text fertig ist.
      </>
    ),
  },
  {
    id: "temperature3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 3</h3>
      </>
    ),
    text: (
      <>
        ChatGPT ist nicht intelligent, aber mit der richtig gewählten Temperatur
        kann es intelligente Sätze bilden. Die Temperatur ist dabei ein Faktor
        der die Wahrscheinlichkeit des nächsten gewählten Wortes beeinflusst.
      </>
    ),
  },
  {
    id: "tokens1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 4</h3>
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
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 5</h3>
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
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 6</h3>
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
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 7</h3>
      </>
    ),
    text: (
      <>
        Der Computer weiß nicht, was die „Sonne“ wirklich ist. Er <Tilde />
        versteht keine Helligkeit und keine Wärme. Aber er <Tilde />
        erkennt, dass „Sonne“ in ähnlichen Textumgebungen vorkommt wie „Schnee“
        – und legt die beiden daher nah beieinander in seinem Raum ab.
      </>
    ),
  },
  {
    id: "embeddings2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 8</h3>
      </>
    ),
    text: (
      <>
        In Wirklichkeit bestehen Worteinbettungen aus hunderten von Zahlen, also
        Koordinaten in einem hochdimensionalen Raum. In der Visualisierung sehen
        Sie eine vereinfachte Version davon: Wörter wie „König“, „Königin“,
        „Sonne“ oder „kalt“ erscheinen auf einer zweidimensionalen Fläche – also
        wie Punkte in einem Koordinatensystem. Die Abstände dort entsprechen den
        inhaltlichen Abständen, die das hier verwendete Modell <Tilde />
        gelernt hat.
      </>
    ),
  },

  {
    id: "decisions1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 11</h3>
      </>
    ),
    text: (
      <>
        Ein Neuronales Netzwerk besteht aus den Neuronen, die in Schichten
        angeordnet sind. Es gibt den Input Layer, einen oder mehrere Hidden
        Layer sowie den Output Layer.
      </>
    ),
  },
  {
    id: "decisions2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 12</h3>
      </>
    ),
    text: (
      <>
        In einem neuronalen Netzwerk wird also nicht nur eine einzelne
        Berechnung durchgeführt, auf deren Basis dann die Ja-Nein-Entscheidung
        getroffen wird. Stattdessen werden viele Gleichungen berechnet, die am
        Ende zu der Ja-Nein-Entscheidung führen.
      </>
    ),
  },
  {
    id: "training1",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 13</h3>
      </>
    ),
    text: (
      <>
        Damit ein Modell <Tilde />
        lernen kann, muss zuerst ermittelt werden, wie gut es aktuell ist. Dazu
        wird die Abweichung zwischen Ist- und Sollzustand anhand des Losses
        ermittelt.
      </>
    ),
  },
  {
    id: "training2",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 14</h3>
      </>
    ),
    text: (
      <>
        Das Modell passt seine Gewichte schrittweise an, um den Loss zunehmend
        zu verringern. Diese Anpassungen sind der{" "}
        <strong className="text-primary">
          Kern des eigentlichen Lernprozesses
        </strong>
        .
      </>
    ),
  },
  {
    id: "training3",
    title: (
      <>
        <h3 className="font-semibold text-primary mb-2">Wissenshäppchen 15</h3>
      </>
    ),
    text: (
      <>
        Damit ein Modell <Tilde />
        weiß, was es anpassen muss, gibt es den Loss von hinten nach vorne durch
        das Netz und bestimmt dabei die Anpassungen aller Gewichte.
      </>
    ),
  },
];
