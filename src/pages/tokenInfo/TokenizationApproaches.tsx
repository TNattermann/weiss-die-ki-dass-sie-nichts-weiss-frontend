import {useState} from "react";

export default function TokenizationApproaches() {
    const [activeExample, setActiveExample] = useState("word");

    const tokenizationApproaches = [
        {
            id: "word",
            label: "Wort-basiert",
            icon: "ri-text",
            description: "Jedes Wort wird als einzelnes Token behandelt",
        },
        {
            id: "subword",
            label: "Teilwort-basiert",
            icon: "ri-text-spacing",
            description: "Wörter werden in häufige Teilsequenzen zerlegt",
        },
        {
            id: "character",
            label: "Zeichen-basiert",
            icon: "ri-font-size",
            description: "Jedes Zeichen ist ein separates Token",
        },
    ] as const;

    const examples = {
        word: {
            title: "Wort-basiert:",
            tokens: ["Das", "Wetter", "heute", "ist", "besonders", "schön."],
            tokenClass: "token-word",
            description: "6 Tokens • Große Vokabular-Größe nötig • Jede unterstützte Sprache vergrößert das Vokabular"
        },
        subword: {
            title: "Teilwort-basiert (BPE):",
            tokens: ["Das", "Wett", "er", "heute", "ist", "besonders", "schön", "."],
            tokenClass: "token-subword",
            description: "8 Tokens • Mittelgroßes Vokabular • Zerteilt Wörter in kleinere Einheiten • Gute Balance zwischen Vokabulargröße und Tokenanzahl"
        },
        character: {
            title: "Zeichen-basiert:",
            tokens: [
                "D","a","s","␣",
                "W","e","t","t","e","r","␣",
                "h","e","u","t","e","␣",
                "i","s","t","␣",
                "b","e","s","o","n","d","e","r","s","␣",
                "s","c","h","ö","n","."
            ],
            tokenClass: "token-special",
            description: "37 Tokens • Kleines Vokabular, lange Sequenzen an Tokens • Mehr Rechenaufwand, um Muster und Zusammenhänge zu erkennen"
        }
    };

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-10">Tokenisierungs-Ansätze im Vergleich</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    {tokenizationApproaches.map((t) => {
                        const isActive = activeExample === t.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveExample(t.id as typeof activeExample)}
                                className={`p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105
          ${isActive
                                    ? "bg-primary-container-selected text-on-primary-container-selected"
                                    : "bg-primary-container text-on-primary-container"}
        `}
                            >
                                <div
                                    className={`w-16 h-16 flex items-center justify-center rounded-xl mx-auto mb-4
            ${isActive
                                        ? "bg-on-primary-container-selected/10"
                                        : "bg-on-primary-container/10"}`}
                                >
                                    <i className={`${t.icon} text-2xl`}></i>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{t.label}</h3>
                                <p className="text-sm">{t.description}</p>
                            </button>
                        );
                    })}
                </div>

                <div className="shadow-xl rounded-2xl p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-primary mb-2">Beispiel: "Das Wetter heute ist besonders schön."</h3>
                        <p className="text-text-normal">Sehen Sie, wie verschiedene Ansätze denselben Text tokenisieren</p>
                    </div>
                    <div className="space-y-6">
                        {Object.entries(examples).map(([key, example]) => (
                            <div
                                key={key}
                                className={`${activeExample === key ? "block" : "hidden"}`}
                            >
                                <h4 className="font-semibold text-text-normal mb-3">{example.title}</h4>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {example.tokens.map((token, index) => (
                                        <span key={index} className={`token ${example.tokenClass}`}>
                      {token}
                    </span>
                                    ))}
                                </div>
                                <p className="text-sm text-text-normal">{example.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}