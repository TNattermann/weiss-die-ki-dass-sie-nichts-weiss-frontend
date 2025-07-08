import { Link } from "react-router-dom";
import { ArrowLeft, Book } from "lucide-react";
import {useEffect} from "react";
import SubHeroSection from "../../components/SubHeroSection.tsx";
import SimpleTokenizerCode from "../../components/SimpleTokenizerCode.tsx";

export default function EfficiencyAlgorithmsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-bgColor">
      <SubHeroSection
          backHref="/tokeninfo"
          backLabel="Zurück zur Token-Info"
          breadcrumbLabel="Tokenisierung & Algorithmen"
          title={
            <>
              <span className="text-primary">Tokenisierung</span> & Algorithmen
            </>
          }
          subtitle={
            <>
              Verstehe wie verschiedene Algorithmen die Tokenisierung beeinflussen
            </>
          }
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-textDark mb-8 text-center">Tokenisierungsalgorithmen</h2>
            <p className="text-lg text-textNormal mb-6 leading-relaxed">
              Tokenisierung ist der Prozess, bei dem ein Text in kleinere Einheiten – sogenannte <strong
                className="text-primary">Tokens</strong> – zerlegt wird. Die Wahl des Tokenisierungsalgorithmus
              beeinflusst maßgeblich die Effizienz, Genauigkeit und Flexibilität eines Sprachmodells. Nach der Zerlegung
              des Inputs wird jedem Token eine eindeutige ID zugeordnet. Diese IDs dienen als Schlüssel zu sogenannten
              Embedding-Vektoren – numerische Repräsentationen, die aus unzähligen Parametern bestehen.
            </p>

            <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
              <p className="text-textMedium font-medium">
                Ob <strong className="text-primary">Leerzeichen</strong> als eigene Tokens behandelt
                oder ignoriert werden, hängt stark vom verwendeten Tokenisierungsalgorithmus ab. Einige Tokenizer, wie der
                von GPT-2, nehmen Leerzeichen direkt mit ins Token auf (z. B. <code>" Hello"</code> statt <code>"Hello"</code>).
                Andere Ansätze hingegen behandeln Leerzeichen separat oder entfernen sie vollständig, insbesondere bei rein zeichenbasierten
                Methoden. Diese Entscheidung beeinflusst, wie gut das Modell Sprachgrenzen erkennt und wie effizient es Texte kodieren kann.
              </p>
            </div>

            <p className="text-lg text-textNormal mb-8 leading-relaxed">
              Moderne Modelle wie GPT oder Gemini nutzen bevorzugt subword-basierte Tokenisierung. Sie ermöglichen eine hohe
              Ausdruckskraft bei gleichzeitig effizienter Repräsentation. Im nächsten Abschnitt schauen wir uns den wohl
              bekanntesten dieser Algorithmen genauer an: <strong className="text-primary">Byte-Pair Encoding
              (BPE)</strong>.
            </p>
          </div>

          {/* BPE Algorithm Explanation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-textDark mb-8 text-center">Wie BPE funktioniert</h2>
            <p className="text-lg text-textNormal mb-6 leading-relaxed">
              <strong className="text-primary">Byte-Pair Encoding (BPE)</strong> ist ein effizienter Algorithmus zur
              Tokenisierung, der ursprünglich zur Datenkompression entwickelt wurde. Bei BPE wird der Text zunächst in einzelne Zeichen zerlegt. Anschließend werden wiederholt die am häufigsten gemeinsam auftretenden Zeichenpaare zu einem neuen Token zusammengefügt. Dieser Vorgang wird iterativ durchgeführt, bis eine definierte Vokabulargröße erreicht ist. So entstehen Tokens, die häufige Teilwörter oder ganze Wörter repräsentieren.
            </p>
            <div className="bg-bghero p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-textMedium mb-4">Schritt-für-Schritt Beispiel:</h3>
              
              <div className="space-y-6">
                <div className="bg-bgColor p-6 rounded-lg border border-light">
                  <h4 className="font-semibold text-textMedium mb-3">1. Initialisierung</h4>
                  <p className="text-textNormal mb-2">Starte mit einzelnen Zeichen:</p>
                  <code className="bg-bgLightGray px-3 py-1 rounded text-sm font-mono">
                    ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
                  </code>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-light">
                  <h4 className="font-semibold text-textMedium mb-3">2. Häufigste Paare finden</h4>
                  <p className="text-textNormal mb-2">Das Paar "l" + "l" kommt häufig vor:</p>
                  <code className="bg-bgLightGray px-3 py-1 rounded text-sm font-mono">
                    ["H", "e", "ll", "o", " ", "W", "o", "r", "l", "d"]
                  </code>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-light">
                  <h4 className="font-semibold text-textMedium mb-3">3. Iteration</h4>
                  <p className="text-textNormal mb-2">Weitere häufige Kombinationen zusammenfassen:</p>
                  <code className="bg-bgLightGray px-3 py-1 rounded text-sm font-mono">
                    ["He", "llo", " ", "Wo", "r", "l", "d"]
                  </code>
                </div>
              </div>
            </div>
          </div>

            <SimpleTokenizerCode />

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-primary to-secondary text-bgColor p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Book className="mr-3 h-7 w-7" />
              Wichtige Erkenntnisse
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Algorithmus-Wahl</h3>
                <p className="text-slate-100">
                  Die Wahl des Tokenisierungsalgorithmus beeinflusst direkt die Performance und Qualität des LLMs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">BPE-Vorteile</h3>
                <p className="text-slate-100">
                  BPE reduziert die Anzahl der Tokens und verbessert die Sprachverständnis.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link
                to="/tokeninfo"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-200 shadow-lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zur Token-Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}