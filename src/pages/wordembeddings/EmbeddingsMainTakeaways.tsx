
export default function EmbeddingsMainTakeaways() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Key Takeaways */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-center text-primary mb-6">Zusammenfassung</h1>
        </div>
        <div className="bg-primary text-outline-dark text-bgColor p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">Unsere Sprache ist stark strukturiert.</h3>
              <p className="text-on-primary-container-selected">
                Wörter stehen nicht zufällig nebeneinander, sondern werden nach festen Mustern und Bedeutungszusammenhängen verwendet. 
                Dadurch entstehen wiederkehrende Beziehungen – zum Beispiel zwischen Ländern und ihren Hauptstädten oder zwischen Jahreszeiten und typischen Eigenschaften. 
                Diese lassen sich in den Worteinbettungen als räumliche Strukturen abbilden.
              </p>
            </div>
            <div>
              <h3 className="text-on-primary-container-selected font-semibold mb-3">Maschinen ~lernen ohne Erklärung.</h3>
              <p className="text-on-primary-container-selected">
                Computer können Worteinbettungen selbstständig finden, indem sie riesige Mengen an Texten verarbeiten – ganz ohne dass ihnen die Bedeutung der Wörter vorab erklärt wird.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
