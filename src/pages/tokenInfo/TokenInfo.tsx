function TokenInfo() {
    return (
        <div className="p-8 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Tokens in Sprachmodellen (LLMs)</h1>

            <p className="text-lg leading-relaxed mb-4">
                Bevor ein Large Language Model (LLM) wie ChatGPT Texte generieren kann,
                muss der Inputtext zunächst in sogenannte <span className="font-semibold text-blue-500">Tokens</span> umgewandelt werden.
                Diese Tokenisierung ist ein essenzieller Verarbeitungsschritt, bei dem Text in kleinere Einheiten zerlegt wird.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                <p className="text-md">
                    Ein <strong>Token</strong> kann ein Wort, ein Satzzeichen oder sogar ein einzelnes Zeichen sein – je nach verwendetem Tokenizer.
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2 mt-8">Ein einfaches Beispiel</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm mb-6 whitespace-pre-wrap font-mono">
                Input: "Das ist cool!"
                <br/>
                Tokens: ["Das", "ist", "cool", "!"]
            </pre>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2 mt-8">Tokenisierung ausprobieren</h2>
            <p className="mb-4">
                Hier können Sie selbst einen Input eingeben. Dieser wird dann in Tokens zerlegt
                //TO DO:
            </p>

            <p className="mb-6">
                Diese Token-IDs sind die Grundlage für die Erstellung von <strong>Embeddings</strong>, die die numerische Repräsentation für das Training des LLMs bilden.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Besonderheiten & Grenzen</h2>
            <ul className="list-disc list-inside mb-6 text-base space-y-2">
                <li>
                    Tokens, die nicht im Vokabular enthalten sind, müssen als <code className="bg-gray-200 px-2 py-1 rounded">&lt;|unk|&gt;</code> markiert werden.
                </li>
                <li>
                    Um verschiedene Textquellen zu trennen, kann man <code className="bg-gray-200 px-2 py-1 rounded">&lt;|endoftext|&gt;</code> verwenden.
                </li>
                <li>
                    Groß-/Kleinschreibung wird häufig beibehalten, da sie semantische Informationen trägt (z. B. Eigennamen).
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Fazit</h2>
            <p className="mb-4">
                Die Tokenisierung ist der erste Schritt in der Verarbeitung von Sprache in LLMs. Sie ist entscheidend, um Text in eine Form zu bringen,
                die maschinell verarbeitet werden kann. Nur mit einem durchdachten Tokenisierungsschema kann ein Modell Sprache korrekt interpretieren und generieren.
            </p>
        </div>
    );
}

export default TokenInfo;