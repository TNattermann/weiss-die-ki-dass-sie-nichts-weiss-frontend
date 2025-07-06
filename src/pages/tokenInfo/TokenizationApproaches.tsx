import { useState } from "react";

export default function TokenizationApproaches() {
  const [activeExample, setActiveExample] = useState("word");

  const examples = {
    word: {
      title: "Wort-basiert:",
      tokens: ["Maschinelles", "Lernen"],
      tokenClass: "token-word",
      description: "2 Tokens • Große Vokabular-Größe nötig"
    },
    subword: {
      title: "Teilwort-basiert (BPE):",
      tokens: ["Masch", "in", "elles", "Lern", "en"],
      tokenClass: "token-subword", 
      description: "5 Tokens • Ausgewogene Effizienz"
    },
    character: {
      title: "Zeichen-basiert:",
      tokens: ["M", "a", "s", "c", "h", "i", "n", "e", "l", "l", "e", "s", " ", "L", "e", "r", "n", "e", "n"],
      tokenClass: "token-special",
      description: "19 Tokens • Kleines Vokabular, lange Sequenzen"
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tokenisierungs-Ansätze im Vergleich</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <button 
            onClick={() => setActiveExample("word")}
            className={`tokenization-example p-6 border-2 border-gray-200 rounded-xl text-center hover:border-secondary transition-all duration-300 transform hover:scale-105 ${
              activeExample === "word" ? "active" : ""
            }`}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-xl mx-auto mb-4">
              <i className="ri-text text-primary text-2xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Wort-basiert</h3>
            <p className="text-gray-600 text-sm">Jedes Wort wird als einzelnes Token behandelt</p>
          </button>
          <button 
            onClick={() => setActiveExample("subword")}
            className={`tokenization-example p-6 border-2 border-gray-200 rounded-xl text-center hover:border-primary transition-all duration-300 transform hover:scale-105 ${
              activeExample === "subword" ? "active" : ""
            }`}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mx-auto mb-4">
              <i className="ri-text-spacing text-primary text-2xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Teilwort-basiert</h3>
            <p className="text-gray-600 text-sm">Wörter werden in häufige Teilsequenzen zerlegt</p>
          </button>
          <button 
            onClick={() => setActiveExample("character")}
            className={`tokenization-example p-6 border-2 border-gray-200 rounded-xl text-center hover:border-orange-500 transition-all duration-300 transform hover:scale-105 ${
              activeExample === "character" ? "active" : ""
            }`}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-xl mx-auto mb-4">
              <i className="ri-font-size text-orange-600 text-2xl"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">Zeichen-basiert</h3>
            <p className="text-gray-600 text-sm">Jedes Zeichen ist ein separates Token</p>
          </button>
        </div>

        {/* Example Visualization */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Beispiel: "Maschinelles Lernen"</h3>
            <p className="text-gray-600">Siehe wie verschiedene Ansätze denselben Text tokenisieren</p>
          </div>
          <div className="space-y-6">
            {Object.entries(examples).map(([key, example]) => (
              <div 
                key={key}
                className={`approach-demo ${activeExample === key ? "block" : "hidden"}`}
              >
                <h4 className="font-semibold text-gray-800 mb-3">{example.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {example.tokens.map((token, index) => (
                    <span key={index} className={`token ${example.tokenClass}`}>
                      {token}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}