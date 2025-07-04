import TokenVisualizer from "./TokenVisualizer.tsx";

function TokenInfo() {
    return (
        <div className="p-8 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Tokens in Sprachmodellen (LLMs)</h1>

            <p className="text-lg leading-relaxed mb-4">
                Bevor ein Large Language Model (LLM) wie ChatGPT Texte generieren kann,
                muss der Inputtext zunächst in sogenannte <span className="font-semibold text-blue-500">Tokens</span> umgewandelt werden.
                Diese Tokenisierung ist ein essenzieller Verarbeitungsschritt, bei dem Text in kleinere Einheiten zerlegt wird.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2 mt-8">Ein einfaches Beispiel</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm mb-6 whitespace-pre-wrap font-mono">
                Input: "Heute wird es sonnig!"
                <br/>
                Tokens: ["Heute", "wird", "es", "sonnig", "!"]
            </pre>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2 mt-8">Notwendigkeit von Tokens</h2>
            <p className="text-lg leading-relaxed mb-4">
                Damit ein LLM mit Sprache arbeiten kann, braucht es eine einheitliche und maschinenlesbare Darstellung des Textes. Reiner Text besteht aus Zeichen und Wörtern, mit denen alleine ein neuronales Netz erstmal nichts anfangen kann. Daher werden alle Eingaben zunächst in Tokens umgewandelt – und diesen Tokens wiederum werden eindeutige Zahlen-IDs zugeordnet.
            </p>

            <p className="text-lg leading-relaxed mb-4">
                Diese Zahlen-IDs stammen aus einem festen <span className="font-semibold text-blue-500">Vokabular</span>, das der Tokenizer zuvor beim Training erstellt hat. Das Vokabular ist im Grunde eine große Liste aller bekannten Tokens – zum Beispiel häufige Wörter, Silben oder Teilwörter – die im Trainingsdatensatz vorkamen.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <p className="text-md">
                    Ein <strong>Token</strong> kann ein Wort, ein Satzzeichen oder sogar ein einzelnes Zeichen sein – je nach verwendetem Tokenizer.
                </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
                Für jedes Token im Vokabular gibt es eine eindeutige ID. Diese IDs dienen als Schlüssel, um zu sogenannten <span className="font-semibold text-blue-500">Embedding-Vektoren</span>, zu gelangen – numerische Repräsentationen, mit denen das Modell tatsächlich rechnet. Der gesamte Textfluss wird so Schritt für Schritt von natürlicher Sprache in Zahlen übersetzt.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <p className="text-md">
                    Das LLM selbst arbeitet also nicht mit reinem Text – es verarbeitet nur die numerischen Token-IDs. Die eigentliche Sprachverarbeitung beginnt erst nach der Tokenisierung.
                </p>
            </div>

            <p className="text-lg leading-relaxed mb-4">
                Um das Vokabular effizient zu gestalten, kommen verschiedene Algorithmen wie <span className="font-semibold text-blue-500">Byte Pair Encoding (BPE)</span> zum Einsatz. Diese fassen häufig vorkommende Zeichenfolgen zu einem neuen Token zusammen. So lässt sich der Text kompakter darstellen, ohne wichtige Sprachmuster zu verlieren.
            </p>

            <p className="text-lg leading-relaxed mb-6">
                Ein ausgewogenes Vokabular ist entscheidend: Ist es zu klein, werden viele Wörter in winzige Stücke zerlegt, was Rechenaufwand erhöht. Ist es zu groß, wird das Modell langsamer und schwieriger zu trainieren. Moderne Modelle wie GPT-4 verwenden daher ein Vokabular mit etwa 100.000 Tokens – ein guter Kompromiss zwischen Detailtiefe und Effizienz.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Hinweise zur Tokenisierung</h2>
            <ul className="list-disc list-inside mb-6 text-base space-y-2">
                <li>
                    Nicht jedes sichtbare Zeichen entspricht einem eigenen Token. Oft bestehen Tokens aus mehreren Buchstaben oder Teilen von Wörtern.
                </li>
                <li>
                    Die Tokenisierung ist sprach- und kontextabhängig. Dasselbe Wort kann je nach Sprache oder benachbarten Tokens unterschiedlich zerlegt werden.
                </li>
                <li>
                    Sonderzeichen, Emojis oder nicht-lateinische Schriften haben häufig eigene Token oder werden in mehrere Teile aufgeteilt.
                </li>
                <li>
                    Die Wahl des Tokenizers (z. B. GPT-2 vs. GPT-4 Tokenizer) beeinflusst, wie effizient und verständlich der Text aufgelöst wird.
                </li>
            </ul>


            <h2 className="text-2xl font-semibold text-blue-500 mb-2 mt-8">Tokenisierung ausprobieren</h2>
            <p className="mb-4">
                Hier kannst du die Tokenisierung von Texten ausprobieren. Wähle einen Tokenizer und die Anzeigeart, um zu sehen, wie dein Text in Tokens oder Token IDs zerlegt wird.
            </p>
            <TokenVisualizer />

            <p className="mb-6">
                Diese Token-IDs sind die Grundlage für die Erstellung von <strong>Embeddings</strong>, die die numerische Repräsentation für das Training des LLMs bilden.
            </p>


            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Fazit</h2>
            <p className="mb-4">
                Die Tokenisierung bildet das Fundament der Sprachverarbeitung in LLMs. Sie übersetzt natürliche Sprache in eine strukturierte, numerische Form, mit der neuronale Netze arbeiten können. Dabei entscheidet die Qualität der Tokenisierung maßgeblich darüber, wie gut das Modell Bedeutung, Grammatik und Kontext erfassen kann.
            </p>
            <p className="mb-6">
                Wer mit LLMs arbeitet – sei es beim Prompt-Design, Modelltraining oder der Analyse – sollte ein gutes Verständnis für Tokens mitbringen. Denn: Jedes Token zählt – im wahrsten Sinne des Wortes.
            </p>
        </div>
    );
}

export default TokenInfo;