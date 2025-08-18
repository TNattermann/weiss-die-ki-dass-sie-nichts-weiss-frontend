export default function TokenBPE() {
  return (
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-primary mb-6">
              Wie BPE funktioniert
            </h1>

            <p className="text-lg text-text-normal mb-6 leading-relaxed">
              <strong className="text-primary">Byte-Pair Encoding (BPE)</strong>{" "}
              ist ein effizienter Algorithmus zur Tokenisierung, der ursprünglich
              zur Datenkompression entwickelt wurde. Bei BPE wird der Text zunächst
              in einzelne Zeichen zerlegt. Anschließend werden wiederholt die am
              häufigsten gemeinsam auftretenden Zeichenpaare zu einem neuen Token
              zusammengefügt. Dieser Vorgang wird iterativ durchgeführt, bis eine
              definierte Vokabulargröße erreicht ist. So entstehen Tokens, die
              häufige Teilwörter oder ganze Wörter repräsentieren.
            </p>

            <div className="shadow-xl rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Schritt-für-Schritt Beispiel:
              </h3>

              <div className="space-y-6">
                <div className="p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">
                    1. Initialisierung
                  </h4>
                  <p className="text-text-normal mb-2">
                    Starte mit einzelnen Zeichen:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="token token-word">D</span>
                    <span className="token token-word">a</span>
                    <span className="token token-word">s</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">W</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">t</span>
                    <span className="token token-word">t</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">r</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">h</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">u</span>
                    <span className="token token-word">t</span>
                    <span className="token token-word">e</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">i</span>
                    <span className="token token-word">s</span>
                    <span className="token token-word">t</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">b</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">s</span>
                    <span className="token token-word">o</span>
                    <span className="token token-word">n</span>
                    <span className="token token-word">d</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">r</span>
                    <span className="token token-word">s</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">s</span>
                    <span className="token token-word">c</span>
                    <span className="token token-word">h</span>
                    <span className="token token-word">ö</span>
                    <span className="token token-word">n</span>
                    <span className="token token-special">.</span>
                  </div>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">
                    2. Häufigste Paare finden
                  </h4>
                  <p className="text-text-normal mb-2">
                    Das Paar <code>t + t</code> in „Wetter“ kommt häufig vor:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="token token-word">D</span>
                    <span className="token token-word">a</span>
                    <span className="token token-word">s</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">W</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">tt</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">r</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">h</span>
                    <span className="token token-word">e</span>
                    <span className="token token-word">u</span>
                    <span className="token token-word">t</span>
                    <span className="token token-word">e</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">ist</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">besonders</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">schön</span>
                    <span className="token token-special">.</span>
                  </div>
                </div>

                <div className="bg-bgColor p-6 rounded-lg border border-outline-dark">
                  <h4 className="font-semibold text-primary mb-3">3. Iteration</h4>
                  <p className="text-text-normal mb-2">
                    Weitere häufige Kombinationen zusammenfassen (z. B. „Das“, „Wett“, „er“, „schön“):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="token token-word">Das</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">Wett</span>
                    <span className="token token-word">er</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">heute</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">ist</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">besonders</span>
                    <span className="token token-special">␣</span>
                    <span className="token token-word">schön</span>
                    <span className="token token-special">.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}