export default function ModellgleichungAdditionalInfos() {
  const notes = [
    {
      icon: "ri-information-line",
      color: "primary",
      borderColor: "border-primary",
      title: "Gewichte",
      description:
        "Um das Abwägen darzustellen, nutzt ein Neuronales Netzwerk sogenannte Gewichte (auch Weights genannt). Jede Verbindung zwischen zwei Neuronen wird mit einem Gewicht versehen, das darstellt, wie wichtig oder unwichtig diese Verbindung ist. Der Input, also beispielsweise die 0 oder 1 von dem Pixel, wird mit diesem Gewicht multipliziert. Durch Berechnungen werden die Werte für die Neuronen der nächsten Schicht bestimmt. Wie genau das funktioniert, schauen wir uns im nächsten Abschnitt an. Mithilfe der gewichteten Verbindungen werden Informationen durch das Netzwerk weitergeleitet und auf Basis der Berechnungen trifft das Modell letztlich die ~Entscheidung. Die Gewichte bleiben nicht dauerhaft gleich, sondern werden im Training angepasst. Mehr darüber erfahren Sie im nächsten Kapitel. ",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-10">
          Ein weiteres Element: die Gewichte
        </h1>
        {notes.map((note, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md border-l-4 ${note.borderColor}`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 mt-1`}
              >
                <i className={`${note.icon} text-${note.color}`}></i>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  {note.title}
                </h3>
                <p className="text-text-normal">{note.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
