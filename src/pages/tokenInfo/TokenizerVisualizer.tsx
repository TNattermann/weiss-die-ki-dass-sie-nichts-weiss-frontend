import {useState} from "react";
import {getTokens, getTokenIds} from "../../config/api";

export default function TokenizerVisualizer() {
    const [text, setText] = useState("Die Künstliche Intelligenz ist nicht intelligent! 🚀 Moderne LLMs lernen Zusammenhänge.");
    const [tokenizer, setTokenizer] = useState<"simple" | "gpt2">("simple");
    const [tokens, setTokens] = useState<string[]>([]);
    const [tokenIds, setTokenIds] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [showTokens, setShowTokens] = useState(false);
    const [showTokenIds, setShowTokenIds] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleTokenize = async () => {
        if (!text.trim()) return;
        setLoading(true);
        setError(null);
        setShowTokens(false);
        setShowTokenIds(false);
        try {
            const [tokensResponse, tokenIdsResponse] = await Promise.all([
                getTokens(text, tokenizer),
                getTokenIds(text, tokenizer),
            ]);

            setTokens(tokensResponse.tokens);
            setTokenIds(tokenIdsResponse.token_ids);

            setTimeout(() => {
                setShowTokens(true);
            }, 100);

            setTimeout(() => {
                setShowTokenIds(true);
            }, 1000);
        } catch (err: any) {
            setError(err.message || "Ein unbekannter Fehler ist aufgetreten.");
        } finally {
            setLoading(false);
        }
    };

    const getTokenClass = (token: string) => {
        if (/[!?.,;:]/.test(token) || /[^\w\s]/.test(token)) {
            return 'token token-special';
        } else if (token.includes('##') || token.length <= 3) {
            return 'token token-subword';
        } else {
            return 'token token-word';
        }
    };

    return (
        <section className="py-16 px-6 bg-gray-50" id="visualizer">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Tokenisierung ausprobieren</h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Hier können Sie die Tokenisierung von Texten ausprobieren. Wählen Sie einen Tokenizer und sehen
                        Sie,
                        wie Ihr Text in Tokens und Token-IDs zerlegt wird.
                    </p>
                </div>

                <div className="bg-white shadow-xl rounded-2xl p-8 mb-12">
                    {/* Input Section */}
                    <div className="mb-8">
                        <label htmlFor="sample-text" className="block text-lg font-semibold text-gray-800 mb-3">
                            Text eingeben:
                        </label>
                        <textarea
                            id="sample-text"
                            rows={4}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-gray-800 bg-white focus:border-primary transition-all duration-300 resize-none"
                            placeholder="Geben Sie hier Ihren Text ein, um die Tokenisierung zu sehen..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    {/* Tokenizer Auswahl */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tokenizer auswählen:</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                {id: "simple", label: "Simple Tokenizer", icon: "ri-text-spacing"},
                                {id: "gpt2", label: "GPT-2", icon: "ri-robot-line"},
                            ].map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setTokenizer(t.id as "simple" | "gpt2")}
                                    className={`tokenization-method px-4 py-2 border-2 rounded-full transition-all duration-300 hover:scale-105 ${tokenizer === t.id ? 'active' : 'border-gray-200'}`}
                                >
                                    <i className={`${t.icon} mr-2`}></i>{t.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Button */}
                    <div className="text-center mb-8">
                        <button
                            onClick={handleTokenize}
                            disabled={loading || !text.trim()}
                            className="bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            <span>{loading ? "Tokenisierung läuft..." : "Text tokenisieren"}</span>
                            {loading && <div className="loading-spinner inline-block ml-2"></div>}
                        </button>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                            <div className="flex items-center">
                                <i className="ri-error-warning-line text-red-500 text-xl mr-3"></i>
                                <div>
                                    <h3 className="font-semibold text-red-800 mb-1">Fehler bei der Tokenisierung</h3>
                                    <p className="text-red-700">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Ergebnisse */}
                    {tokens.length > 0 && (
                        <div className="fade-in">
                            {/* Step Indikatoren */}
                            <div className="flex justify-center mb-8">
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="step-indicator active flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full">
                                        <i className="ri-check-line text-primary"></i>
                                        <span className="text-primary font-medium">Tokens</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                    <div
                                        className={`step-indicator flex items-center space-x-2 px-4 py-2 rounded-full ${showTokenIds ? 'active bg-primary/10' : 'bg-gray-100'}`}>
                                        <i className={`ri-arrow-right-line ${showTokenIds ? 'text-primary' : 'text-gray-400'}`}></i>
                                        <span
                                            className={`font-medium ${showTokenIds ? 'text-primary' : 'text-gray-400'}`}>Token IDs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tokens anzeigen */}
                            {showTokens && (
                                <div className="bg-gray-50 p-6 rounded-xl mb-8 fade-in">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Token Visualisierung:</h3>
                                    <div
                                        className="bg-white border-2 border-gray-200 rounded-xl p-6 min-h-[120px] custom-scrollbar overflow-x-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {tokens.map((token, index) => (
                                                <span
                                                    key={index}
                                                    className={`${getTokenClass(token)} fade-in`}
                                                    style={{animationDelay: `${index * 0.05}s`}}
                                                >
                                                  {token}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Token IDs anzeigen */}
                            {showTokenIds && (
                                <div className="bg-gray-50 p-6 rounded-xl mb-8 slide-up">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Token IDs:</h3>
                                    <div
                                        className="bg-white border-2 border-gray-200 rounded-xl p-6 min-h-[120px] custom-scrollbar overflow-x-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {tokenIds.map((id, index) => (
                                                <span
                                                    key={index}
                                                    className="token token-id fade-in"
                                                    style={{animationDelay: `${index * 0.03}s`}}
                                                >
                                                  {id}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Statistiken */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div
                                    className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-700">Token-Anzahl</h3>
                                        <i className="ri-counter-line text-secondary"></i>
                                    </div>
                                    <p className="text-3xl font-bold text-secondary">{tokens.length}</p>
                                    <p className="text-xs text-gray-600 mt-1">Gesamte Tokens</p>
                                </div>
                                <div
                                    className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-xl border border-secondary/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-700">Tokenizer</h3>
                                        <i className="ri-robot-line text-secondary"></i>
                                    </div>
                                    <p className="text-2xl font-bold text-secondary">{tokenizer === "simple" ? "Simple" : "GPT-2"}</p>
                                    <p className="text-xs text-gray-600 mt-1">Aktueller Tokenizer</p>
                                </div>
                                <div
                                    className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-xl border border-green-200">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-sm font-medium text-gray-700">Zeichen/Token</h3>
                                        <i className="ri-character-recognition-line text-green-600"></i>
                                    </div>
                                    <p className="text-3xl font-bold text-green-600">
                                        {tokens.length > 0 ? Math.round((text.length / tokens.length) * 10) / 10 : 0}
                                    </p>
                                    <p className="text-xs text-gray-600 mt-1">Durchschnitt</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
