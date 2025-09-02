export default function ConnectionToLLM() {
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-6">
          Verbindung zu LLMs
        </h1>
        <div className="items-center mb-16">
          <div>
            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              In unserem Beispiel haben wir ein einfaches Neuronales Netzwerk
              betrachtet, das zur Erkennung von Ziffern geeignet ist. Dieses
              Beispiel hilft dabei, ein Verständnis für den grundlegenden Aufbau
              Neuronaler Netzwerke zu bekommen. Allerdings gibt es auch einige
              Unterschiede zwischen LLMs, wie sie in der Praxis genutzt werden,
              und unserem kleinen Beispiel. Die wichtigsten Unterschiede sind
              hier zusammengefasst:
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              LLMs bestehen in der Praxis aus einer weitaus größeren Anzahl von
              Layern und Neuronen. Die Anzahl an trainierbaren Parametern liegt
              oft im Milliardenbereich.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              Der Input für ein LLM ist kein Bild, das in Pixel aufgeteilt wird,
              sondern ein Text. Dieser wird <i>tokenisiert</i> und mithilfe von{" "}
              <i>Word Embeddings</i> als Vektor dargestellt.
            </p>
          </div>
          <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
            <p className="text-textMedium font-medium text-lg">
              Der Output eines LLMs ist keine Klassifizierung, wie in dem hier
              beschriebenen Beispiel, sondern ein Text. Im Gegensatz zu LLMs
              muss hier auch nicht mit einer Wahrscheinlichkeitsverteilung für
              den Output gearbeitet werden, weil in jedem Fall die Klasse mit
              der höchsten Wahrscheinlichkeit gewählt werden soll.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
