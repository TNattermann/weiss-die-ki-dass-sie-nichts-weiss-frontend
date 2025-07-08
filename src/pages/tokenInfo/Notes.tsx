export default function Notes() {
  const notes = [
    {
      icon: "ri-information-line",
      color: "primary",
      borderColor: "border-primary",
      title: "Wort ≠ Token",
      description: "Nicht jedes sichtbare Wort entspricht einem eigenen Token. Oft bestehen Tokens aus mehreren Buchstaben oder Teilen von Wörtern."
    },
    {
      icon: "ri-global-line",
      color: "secondary",
      borderColor: "border-secondary",
      title: "Sprach- und Kontextabhängig",
      description: "Die Tokenisierung ist sprach- und kontextabhängig. Dasselbe Wort kann je nach Sprache oder benachbarten Tokens unterschiedlich zerlegt werden."
    },
    {
      icon: "ri-emotion-line",
      color: "primary",
      borderColor: "border-primary",
      title: "Sonderzeichen & Emojis",
      description: "Sonderzeichen, Emojis oder nicht-lateinische Schriften haben häufig eigene Token oder werden in mehrere Teile aufgeteilt."
    },
    {
      icon: "ri-settings-4-line",
      color: "secondary",
      borderColor: "border-secondary",
      title: "Tokenizer-Wahl",
      description: "Die Wahl des Tokenizers (z.B. GPT-2 vs. GPT-4 Tokenizer) beeinflusst, wie der Text aufgelöst wird."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-bgLightLightGray">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-textDark mb-8 text-center">Hinweise zur Tokenisierung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note, index) => (
            <div 
              key={index}
              className={`bg-bgColor p-6 rounded-xl shadow-md border-l-4 ${note.borderColor}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1`}>
                  <i className={`${note.icon} text-${note.color}`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-textDark mb-2">{note.title}</h3>
                  <p className="text-textNormal">{note.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
