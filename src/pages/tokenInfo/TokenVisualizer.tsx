import { useState } from "react";
import { getTokens, getTokenIds } from '../../config/api';

type TokenizerType = "simple" | "gpt2";
type ViewMode = "tokens" | "token_ids";

function TokenVisualizer() {
    const [text, setText] = useState("");
    const [tokenizer, setTokenizer] = useState<TokenizerType>("simple");
    const [viewMode, setViewMode] = useState<ViewMode>("tokens");
    const [tokens, setTokens] = useState<string[] | null>(null);
    const [tokenIds, setTokenIds] = useState<number[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit() {
        setLoading(true);
        setError(null);
        setTokens(null);
        setTokenIds(null);

        try {
            if (viewMode === "tokens") {
                const data = await getTokens(text, tokenizer); // Use the centralized API function
                setTokens(data.tokens);
            } else {
                const data = await getTokenIds(text, tokenizer); // Use the centralized API function
                setTokenIds(data.token_ids);
            }
        } catch (err: any) {
            setError(err.message || "Unbekannter Fehler");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-6 border rounded bg-white shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Visualizer</h2>

            <label className="block mb-2 font-medium">
                Text eingeben:
                <textarea
                    className="w-full p-2 border rounded mt-1"
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Hier Text eingeben..."
                />
            </label>

            <div className="flex gap-6 mb-4">
                <div>
                    <p className="font-medium mb-1">Tokenizer auswählen:</p>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="tokenizer"
                            value="simple"
                            checked={tokenizer === "simple"}
                            onChange={() => setTokenizer("simple")}
                        />{" "}
                        SimpleTokenizer
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tokenizer"
                            value="gpt2"
                            checked={tokenizer === "gpt2"}
                            onChange={() => setTokenizer("gpt2")}
                        />{" "}
                        GPT-2
                    </label>
                </div>

                <div>
                    <p className="font-medium mb-1">Anzeigen als:</p>
                    <label className="mr-4">
                        <input
                            type="radio"
                            name="viewMode"
                            value="tokens"
                            checked={viewMode === "tokens"}
                            onChange={() => setViewMode("tokens")}
                        />{" "}
                        Tokens
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="viewMode"
                            value="token_ids"
                            checked={viewMode === "token_ids"}
                            onChange={() => setViewMode("token_ids")}
                        />{" "}
                        Token IDs
                    </label>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                disabled={loading || !text.trim()}
            >
                {loading ? "Senden..." : "Senden"}
            </button>

            {error && (
                <p className="mt-4 text-red-600 font-semibold">Fehler: {error}</p>
            )}

            {(tokens || tokenIds) && (
                <div className="mt-6 p-4 bg-gray-100 rounded overflow-x-auto">
                    <h3 className="font-semibold mb-2">
                        Ergebnis ({viewMode === "tokens" ? "Tokens" : "Token IDs"}):
                    </h3>

                    <div className="flex flex-wrap gap-1">
                        {viewMode === "tokens" && tokens
                            ? tokens.map((token, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded whitespace-pre-wrap"
                                >
                                    {token}
                                </span>
                            ))
                            : null}

                        {viewMode === "token_ids" && tokenIds
                            ? tokenIds.map((id, idx) => (
                                <span
                                    key={idx}
                                    className="bg-green-200 text-green-800 px-2 py-1 rounded"
                                >
                                    {id}
                                </span>
                            ))
                            : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TokenVisualizer;