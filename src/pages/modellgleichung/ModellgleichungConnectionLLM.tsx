export default function ConnectionToLLM() {
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Verbindung zu ChatGPT
        </h1>
        <div className="items-center mb-16">
          <div>
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              In unserem Beispiel haben wir ein einfaches Neuronales Netzwerk
              betrachtet, das zur Erkennung von Ziffern geeignet ist. Dieses
              Beispiel hilft dabei, ein Verständnis für den grundlegenden Aufbau
              Neuronaler Netzwerke zu bekommen. Allerdings gibt es auch einige
              Unterschiede zwischen großen Sprachmodellen wie ChatGPT und
              unserem kleinen Beispiel. Die wichtigsten Unterschiede sind hier
              zusammengefasst:
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              Große Sprachmodelle bestehen in der Praxis aus einer weitaus
              größeren Anzahl von Layern und Neuronen. Die Anzahl an
              trainierbaren Parametern liegt hier im Milliardenbereich.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              Der Input für ein Sprachmodell ist kein Bild, das in Pixel
              aufgeteilt wird, sondern ein Text. Dieser wird <i>tokenisiert</i>{" "}
              und mithilfe von <i>Word Embeddings</i> als Vektor dargestellt.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              In dem hier beschriebenen Beispiel wird für die Klassifizierung
              der handgeschriebenen Zahl immer das Neuron mit der höchsten
              Wahrscheinlichkeit gewählt. Im Gegensatz dazu nutzen Sprachmodelle
              wie ChatGPT eine <i>Wahrscheinlichkeitsverteilung</i>, um das
              nächste Wort zu bestimmen. Dadurch wird manchmal auch ein Wort
              gewählt, das nicht die höchste Wahrscheinlichkeit hat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
