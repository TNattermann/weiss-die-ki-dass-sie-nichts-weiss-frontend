import { Link } from "react-router-dom";
import { ArrowLeft, Book } from "lucide-react";
import SimpleTokenizerCode from "../../components/SimpleTokenizerCode.tsx";

export default function TokenInfoAlgorithms() {
  return (
    <div className="min-h-screen">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6">Tokenisierungsalgorithmen</h1>

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
                von GPT-2, nehmen Leerzeichen direkt mit ins Token auf (z. B. <code>" Hello"</code> statt <code>"Hello"</code>).
                Andere Ansätze hingegen behandeln Leerzeichen separat oder entfernen sie vollständig, insbesondere bei rein zeichenbasierten
                Methoden. Diese Entscheidung beeinflusst, wie gut das Modell Sprachgrenzen erkennt und wie effizient es Texte kodieren kann.
              </p>
            </div>

            <p className="text-lg text-text-normal mb-8 leading-relaxed">
              Moderne Modelle wie GPT oder Gemini nutzen bevorzugt subword-basierte Tokenisierung. Sie ermöglichen eine hohe
              Ausdruckskraft bei gleichzeitig effizienter Repräsentation. Im nächsten Abschnitt schauen wir uns den wohl
              bekanntesten dieser Algorithmen genauer an: <strong className="text-primary">Byte-Pair Encoding
              (BPE)</strong>.
            </p>
          </div>

          {/* BPE Algorithm Explanation */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6">Wie BPE funktioniert</h1>

            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              <strong className="text-primary">Byte-Pair Encoding (BPE)</strong> ist ein effizienter Algorithmus zur
              Tokenisierung, der ursprünglich zur Datenkompression entwickelt wurde. Bei BPE wird der Text zunächst in einzelne Zeichen zerlegt. Anschließend werden wiederholt die am häufigsten gemeinsam auftretenden Zeichenpaare zu einem neuen Token zusammengefügt. Dieser Vorgang wird iterativ durchgeführt, bis eine definierte Vokabulargröße erreicht ist. So entstehen Tokens, die häufige Teilwörter oder ganze Wörter repräsentieren.
            </p>
            <div className="shadow-xl rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-semibold text-primary mb-4">Schritt-für-Schritt Beispiel:</h3>
              
              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">1. Initialisierung</h4>
                  <p className="text-text-normal mb-2">Starte mit einzelnen Zeichen:</p>
                  <code className="text-text-normal py-1 rounded text-sm font-mono">
                    ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
                  </code>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">2. Häufigste Paare finden</h4>
                  <p className="text-text-normal mb-2">Das Paar "l" + "l" kommt häufig vor:</p>
                  <code className="text-text-normal py-1 rounded text-sm font-mono">
                    ["H", "e", "ll", "o", " ", "W", "o", "r", "l", "d"]
                  </code>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">3. Iteration</h4>
                  <p className="text-text-normal mb-2">Weitere häufige Kombinationen zusammenfassen:</p>
                  <code className="text-text-normal py-1 rounded text-sm font-mono">
                    ["He", "llo", " ", "Wo", "r", "l", "d"]
                  </code>
                </div>
              </div>
            </div>
          </div>

            <SimpleTokenizerCode />

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-primary text-outline-dark text-bgColor p-8 rounded-2xl">
            <h2 className="text-on-primary-container-selected text-2xl font-bold mb-6 flex items-center">
              <Book className="mr-3 h-7 w-7" />
              Wichtige Erkenntnisse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">Algorithmus-Wahl</h3>
                <p className="text-on-primary-container-selected">
                  Die Wahl des Tokenisierungsalgorithmus beeinflusst direkt die Performance und Qualität des LLMs.
                </p>
              </div>
              <div>
                <h3 className="text-on-primary-container-selected font-semibold mb-3">BPE-Vorteile</h3>
                <p className="text-on-primary-container-selected">
                  BPE reduziert die Anzahl der Tokens und verbessert die Sprachverständnis.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link
                to="/tokeninfo"
              className="inline-flex items-center bg-primary-container text-on-primary-container px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-200 shadow-lg"
            >
              <ArrowLeft className="text-on-primary-container mr-2 h-5 w-5" />
              Zurück zur Token-Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}