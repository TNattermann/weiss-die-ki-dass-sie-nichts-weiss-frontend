import { useState } from "react";
import { getTokens, getTokenIds } from "../../config/api";
import { bits } from "../../components/Wissensbit";

export default function TokenizerVisualizer() {
  const [text, setText] = useState("");
  const [tokenizer, setTokenizer] = useState<"simple" | "gpt2">("simple");
  const [tokenizerUsed, setTokenizerUsed] = useState<"simple" | "gpt2">(
    "simple"
  );
  const [tokens, setTokens] = useState<string[]>([]);
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [showTokens, setShowTokens] = useState(false);
  const [showTokenIds, setShowTokenIds] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const handleTokenize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    setShowTokens(false);
    setShowTokenIds(false);
    setShowStatistics(false);

    try {
      const [tokensResponse, tokenIdsResponse] = await Promise.all([
        getTokens(text, tokenizer),
        getTokenIds(text, tokenizer),
      ]);

      const tokensWithSpaces = tokensResponse.tokens.map((t) =>
        t.replace(/ /g, "␣")
      );

      setTokens(tokensWithSpaces);
      setTokenIds(tokenIdsResponse.token_ids);
      setTokenizerUsed(tokenizer);

      setTimeout(() => {
        setShowTokens(true);
      }, 500);

      setTimeout(() => {
        setShowTokenIds(true);
      }, 1000);

      setTimeout(() => {
        setShowStatistics(true);
      }, 1200);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ein unbekannter Fehler ist aufgetreten.");
      }
    } finally {
      setLoading(false);
    }
  };

  const getTokenClass = (token: string) => {
    const normalized = token.replace(/␣/g, "");

    if (/[!?.,;:]/.test(normalized) || /[^\w\s]/.test(normalized)) {
      return "token token-special";
    } else if (normalized.includes("##") || normalized.length <= 3) {
      return "token token-subword";
    } else {
      return "token token-word";
    }
  };

  return (
    <section className="py-16 px-6" id="visualizer">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-center text-primary mb-6">
            Tokenisierung ausprobieren
          </h1>
          <p className="text-xl text-text-normal max-w-3xl mx-auto leading-relaxed">
            Hier können Sie die Tokenisierung von Texten ausprobieren. Wählen
            Sie einen Tokenizer und betrachten Sie die resultierenden Tokens
            sowie deren zugehörige IDs.
          </p>
        </div>

        <div className="shadow-xl rounded-2xl p-8 mb-12">
          {" "}
          {/* Currently no background color */}
          {/* Input Section */}
          <div className="mb-8">
            <label
              htmlFor="sample-text"
              className="block text-lg font-semibold text-text-normal mb-3"
            >
              Text eingeben:
            </label>
            <textarea
              id="sample-text"
              rows={4}
              className="w-full px-6 py-4 border-2 border-outline-dark rounded-xl text-text-normal focus:border-primary transition-all duration-300 resize-none"
              placeholder="Geben Sie hier Ihren Text ein, um ihn zu tokenisieren"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {/* Tokenizer Auswahl */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-normal mb-4">
              Tokenizer auswählen:
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  id: "simple",
                  label: "Simple Tokenizer",
                  icon: "ri-text-spacing",
                },
                { id: "gpt2", label: "GPT-2", icon: "ri-robot-line" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTokenizer(t.id as "simple" | "gpt2")}
                  className={`rounded-full px-4 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-lg
                                    ${
                                      tokenizer === t.id
                                        ? "bg-primary-container-selected text-on-primary-container-selected scale-103"
                                        : "bg-primary-container text-on-primary-container"
                                    }`}
                >
                  <i className={`${t.icon} mr-2`}></i>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          {/* Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleTokenize}
              disabled={loading || !text.trim()}
              className="bg-primary-container-selected text-on-primary-container-selected px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span>
                {loading ? "Tokenisierung läuft..." : "Text tokenisieren"}
              </span>
              {loading && (
                <div className="loading-spinner inline-block ml-2"></div>
              )}
            </button>
          </div>
          {/* Error */}
          {error && (
            <div className="bg-error-container text-on-error-container border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center">
                <i className="ri-error-warning-line text-error-container text-xl mr-3"></i>
                <div>
                  <h3 className="font-semibold text-on-error-container mb-1">
                    Fehler bei der Tokenisierung
                  </h3>
                  <p className="text-on-error-container">{error}</p>
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
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      showTokens
                        ? "active bg-primary/10"
                        : "bg-bgLightLightGray"
                    }`}
                  >
                    <i
                      className={`ri-check-line ${
                        showTokens ? "text-primary" : "text-gray-400"
                      }`}
                    ></i>
                    <span
                      className={`font-medium ${
                        showTokens ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      Tokens
                    </span>
                  </div>
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      showTokenIds
                        ? "active bg-primary/10"
                        : "bg-bgLightLightGray"
                    }`}
                  >
                    <i
                      className={`ri-check-line ${
                        showTokenIds ? "text-primary" : "text-gray-400"
                      }`}
                    ></i>
                    <span
                      className={`font-medium ${
                        showTokenIds ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      Token IDs
                    </span>
                  </div>
                </div>
              </div>

              {/* Tokens anzeigen */}
              {showTokens && (
                <div className="p-6 rounded-xl mb-8 fade-in">
                  <h3 className="text-lg font-semibold text-text-normal mb-4">
                    Token Visualisierung:
                  </h3>
                  <div className="border-2 border-outline-dark rounded-xl p-6 min-h-[120px] custom-scrollbar overflow-x-auto">
                    <div className="flex flex-wrap gap-2">
                      {tokens.map((token, index) => (
                        <span
                          key={index}
                          className={`${getTokenClass(token)} fade-in`}
                          style={{ animationDelay: `${index * 0.05}s` }}
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
                <div className="p-6 rounded-xl mb-8 slide-up">
                  <h3 className="text-lg font-semibold text-text-normal mb-4">
                    Token IDs:
                  </h3>
                  <div className="border-2 border-outline-dark rounded-xl p-6 min-h-[120px] custom-scrollbar overflow-x-auto">
                    <div className="flex flex-wrap gap-2">
                      {tokenIds.map((id, index) => (
                        <span
                          key={index}
                          className="token token-id fade-in"
                          style={{ animationDelay: `${index * 0.03}s` }}
                        >
                          {id}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Statistiken anzeigen */}
              {showStatistics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-text-normal">
                        Token-Anzahl
                      </h3>
                      <i className="ri-numbers-line text-primary"></i>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {tokens.length}
                    </p>
                    <p className="text-xs text-text-normal mt-1">
                      Gesamte Tokens
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-text-normal">
                        Tokenizer
                      </h3>
                      <i className="ri-robot-line text-primary"></i>
                    </div>
                    <p className="text-2xl font-bold text-primary">
                      {tokenizerUsed === "simple" ? "Simple" : "GPT-2"}
                    </p>
                    <p className="text-xs text-text-normal mt-1">
                      Aktueller Tokenizer
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-text-normal">
                        Tokens pro Zeichen
                      </h3>
                      <i className="ri-character-recognition-line text-primary"></i>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {tokens.length > 0
                        ? Math.round((tokens.length / text.length) * 10) / 10
                        : 0}
                    </p>
                    <p className="text-xs text-text-normal mt-1">
                      Durchschnitt
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6"
          id="tokens1"
        >
          {bits
            .filter((c) => c.id === "tokens1")
            .map((c) => (
              <section>
                <h2>{c.title}</h2>
                <p>{c.text}</p>
              </section>
            ))}
        </div>
      </div>
    </section>
  );
}
