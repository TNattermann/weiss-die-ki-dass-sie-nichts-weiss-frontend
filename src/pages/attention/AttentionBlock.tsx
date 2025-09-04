import { useEffect } from "react";

export default function AttentionSelfattention() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-6 px-6" id="educational-content">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Attention-Block
        </h1>
        <p className="text-lg text-text-normal mb-4 leading-relaxed">
          Der Eingabevektor, die drei beschriebenen Abfrage-, Schlüssel- und
          Wertvektor, und der daraus resultierende Kontextvektor bilden den Kern
          eines Attention-Blocks. Dieser Block wird in der Architektur von GPT-2
          zwölf mal hintereinander wiederholt. Dies basiert auf handwerklichen
          Entscheidungen von Entwicklern und hat die besten Ergebnisse
          hervorgebracht.
        </p>

        <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-4">
          <p className="text-text-normal font-medium">
            Spätestens hier fällt auch unsere Metapher mit der Betonung
            einzelner Wörter als Erklärung von Attention in LLMs in sich
            zusammen, oder kann man der Meinung sein, dass jeder Mensch sich die
            Betonung der Wörter in einem Satz unbewusst genau zwölf mal
            berechnet? Ich denke, das kann man mit gutem Gewissen verneinen.
          </p>
        </div>
      </div>
    </section>
  );
}
