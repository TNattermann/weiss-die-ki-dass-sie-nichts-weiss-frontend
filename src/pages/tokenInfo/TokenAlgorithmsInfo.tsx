export default function TokenAlgorithmsInfo() {
  return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6 break-words">Tokenisierungsalgorithmen</h1>

            <p className="text-lg text-text-normal mb-6 leading-r>elaxed">
              Tokenisierung ist der Prozess, bei dem ein Text in kleinere Einheiten – sogenannte <strong
                className="text-primary">Tokens</strong> – zerlegt wird. Die Wahl des Tokenisierungsalgorithmus
              beeinflusst maßgeblich die Effizienz, Genauigkeit und Flexibilität eines Sprachmodells. Nach der Zerlegung
              des Inputs wird jedem Token eine eindeutige ID zugeordnet. Diese IDs dienen als Schlüssel zu sogenannten
              Embedding-Vektoren – numerische Repräsentationen, die aus unzähligen Parametern bestehen.
            </p>

            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-text-normal font-medium">
                Ob <strong className="text-primary">Leerzeichen</strong> als eigene Tokens behandelt
                oder ignoriert werden, hängt stark vom verwendeten Tokenisierungsalgorithmus ab. Einige Tokenizer, wie der
                von GPT-2, nehmen Leerzeichen direkt mit ins Token auf (z. B. <span className="token token-word">␣Hello</span> statt <span className="token token-word">Hello</span>).
                Andere Ansätze hingegen behandeln Leerzeichen separat oder entfernen sie vollständig, insbesondere bei rein zeichenbasierten
                Methoden. Diese Entscheidung beeinflusst, wie gut das Modell Sprachgrenzen erkennt und wie effizient es Texte kodieren kann.
              </p>
            </div>

            <p className="text-lg text-text-normal mb-8 leading-relaxed">
              Moderne Modelle wie GPT oder Gemini nutzen bevorzugt teilwortbasierte Tokenisierung. Sie ermöglichen eine hohe
              Ausdruckskraft bei gleichzeitig effizienter Repräsentation. Im nächsten Abschnitt schauen wir uns den wohl
              bekanntesten dieser Algorithmen genauer an: <strong className="text-primary">Byte-Pair Encoding
              (BPE)</strong>.
            </p>
          </div>

        </div>
      </section>
  );
}