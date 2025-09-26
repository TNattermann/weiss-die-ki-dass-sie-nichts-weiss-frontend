import Tilde from "../../components/Tilde";

export default function ModellgleichungAdditionalInfos() {
  const notes = [
    {
      icon: "ri-information-line",
      color: "primary",
      borderColor: "border-primary",
      title: "Gewichte",
      description: (
        <>
          Um das Abwägen darzustellen, nutzt ein Neuronales Netzwerk sogenannte
          Gewichte (auch Weights genannt). Jede Verbindung zwischen zwei
          Neuronen wird mit einem Gewicht versehen, das darstellt, wie wichtig
          oder unwichtig diese Verbindung ist. Der Input, also beispielsweise
          die 0 oder 1 von dem Pixel, wird mit diesem Gewicht multipliziert.
          Durch Berechnungen werden die Werte für die Neuronen der nächsten
          Schicht bestimmt. Wie genau das funktioniert, schauen wir uns im
          nächsten Abschnitt an. Mithilfe der gewichteten Verbindungen werden
          Informationen durch das Netzwerk weitergeleitet und auf Basis der
          Berechnungen <Tilde />
          trifft das Modell letztlich die Entscheidung. Die Gewichte bleiben
          nicht dauerhaft gleich, sondern werden im Training angepasst. Mehr
          darüber erfahren Sie im nächsten Kapitel.
        </>
      ),
    },
    {
      icon: "ri-lightbulb-line",
      color: "primary",
      borderColor: "border-primary",
      title: "Gewichte im Affenbande-Beispiel",
      description:
        "Das Konzept der Gewichte lässt sich auch auf das Beispiel der Affenbande übertragen, das am Anfang dieses Abschnitts betrachtet wurde. Dort wurde angenommen, dass der Verlust von 5 DM 50 Freudenpunkte kostet. Diese 50 Freudenpunkte können als das Gewicht der Verbindung interpretiert werden. Läge der Verlust stattdessen nur bei 20 Freudenpunkten, wäre das Gewicht der Verbindung entsprechend geringer und die Verbindung damit unwichtiger. Umgekehrt wäre die Verbindung wichtiger, wenn das Gewicht höher wäre, also der Verlust der 5 DM mehr als 50 Freudenpunkte kosten würde. Das gleiche gilt für die Freudenpunkte, die der Kauf eines oder mehrerer Äffchen bringt.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Ein weiteres Element: die Gewichte
        </h1>

        <div className="flex flex-col space-y-6">
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
      </div>
    </section>
  );
}
