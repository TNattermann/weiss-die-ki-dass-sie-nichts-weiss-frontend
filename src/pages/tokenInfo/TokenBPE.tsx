export default function TokenBPE() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
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
      </div>
    </section>
  );
}
