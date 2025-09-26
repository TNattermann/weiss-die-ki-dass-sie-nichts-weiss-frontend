import Tilde from "../../components/Tilde";
import WordEmbeddingViz from "../../components/WordEmbeddingViz";

const embeddings = {
  // Monarchie
  König: [-0.2141, 0.2505] as [number, number],
  Königin: [-0.1608, 0.2195] as [number, number],
  Prinz: [-0.24319515, 0.25383598] as [number, number],
  Prinzessin: [-0.1662, 0.191] as [number, number],
  Krone: [-0.0966, 0.1497] as [number, number],
  Königreich: [-0.1865, 0.2163] as [number, number],

  // Familie
  Eltern: [-0.2725, 0.0317] as [number, number],
  Mutter: [-0.3141, -0.0412] as [number, number],
  Vater: [-0.3674, -0.0192] as [number, number],
  Sohn: [-0.4276, -0.0638] as [number, number],
  Tochter: [-0.3115, 0.031] as [number, number],
  Bruder: [-0.2863, 0.0996] as [number, number],
  Schwester: [-0.2438, 0.0985] as [number, number],
  Mann: [-0.4999, -0.5576] as [number, number],
  Frau: [-0.6265, -0.8237] as [number, number],

  // Wetter
  Sonne: [-0.0634, 0.1539] as [number, number],
  Wolken: [-0.0279, 0.1667] as [number, number],
  Regen: [-0.0888, 0.108] as [number, number],
  Schnee: [-0.0131, 0.0944] as [number, number],
  Winter: [-0.1063, 0.1666] as [number, number],
  Eis: [0.0431, 0.2781] as [number, number],
  Sommer: [-0.1051, 0.1402] as [number, number],
  Frühling: [-0.1487, 0.1365] as [number, number],
  Herbst: [-0.1112, 0.1729] as [number, number],
  Gewitter: [-0.1431, 0.1825] as [number, number],
  Nebel: [-0.0841, 0.2202] as [number, number],
  Wind: [-0.1838, 0.1816] as [number, number],
  Hitze: [-0.1259, 0.1918] as [number, number],
  Kälte: [-0.0821, 0.0483] as [number, number],
  Steuererklärung: [-0.1884, 0.1708] as [number, number],

  //Eigenschaften
  warm: [0.1286, 0.0546] as [number, number],
  kalt: [0.1584, 0.0778] as [number, number],
  nass: [0.2241, -0.044] as [number, number],
  kühl: [0.1458, 0.119] as [number, number],
  heiß: [0.1455, 0.0402] as [number, number],
  regnerisch: [-0.0124, 0.1493] as [number, number],
  sonnig: [0.0584, 0.0714] as [number, number],
  bewölkt: [-0.0248, 0.0667] as [number, number],
  stürmisch: [-0.0619, 0.1248] as [number, number],
  neblig: [0.1187, 0.0921] as [number, number],
  windig: [-0.0378, 0.0908] as [number, number],

  // Hauptstätte
  Berlin: [-0.1824, 0.1898] as [number, number],
  Paris: [-0.1025, 0.1582] as [number, number],
  Rom: [-0.1758, 0.2618] as [number, number],
  Madrid: [-0.0895, 0.2182] as [number, number],
  London: [-0.0997, 0.2553] as [number, number],
  Wien: [-0.1122, -0.0551] as [number, number],
  NewYork: [-0.2028, 0.2016] as [number, number],
  Tokio: [-0.2739, 0.3287] as [number, number],
  Ottawa: [-0.1318, 0.2028] as [number, number],
  Canberra: [-0.1199, 0.21] as [number, number],

  // Länder
  Deutschland: [-0.1793, 0.1562] as [number, number],
  Frankreich: [-0.1524, 0.1739] as [number, number],
  Italien: [-0.1206, 0.1404] as [number, number],
  Spanien: [-0.1395, 0.206] as [number, number],
  VereinigtesKönigreich: [-0.1292, 0.186] as [number, number],
  Österreich: [-0.1839, 0.1139] as [number, number],
  USA: [-0.239, 0.1325] as [number, number],
  Japan: [-0.1854, 0.1679] as [number, number],
  Kanada: [-0.174, 0.1911] as [number, number],
  Australien: [-0.1721, 0.244] as [number, number],
};

const groups = {
  "Beispiel 1": [
    "warm",
    "heiß",
    "sonnig",
    "Sonne",
    "Sommer",
    "Frühling",
    "Herbst",
    "Winter",
    "kalt",
    "Wolken",
    "Regen",
    "Schnee",
    "Steuererklärung",
  ],
  "Beispiel 2": ["König", "Königin", "Mann", "Frau"],
  "Beispiel 3": [
    "Deutschland",
    "Berlin",
    "Frankreich",
    "Paris",
    "Italien",
    "Rom",
    "Spanien",
    "Madrid",
    "Australien",
    "Canberra",
  ],
};

function EmbeddingsVizualizer() {
  return (
    <section className="py-16 px-6" id="visualizer">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">
          Wie kann eine solche Worteinbettung aussehen?
        </h1>
        <p className="text-xl text-text-normal mx-auto leading-relaxed">
          Vereinfacht dargestellt können reale Wörter, die in einem für uns
          unvorstellbaren mehrdimensionalen Raum repräsentiert werden, auf einen
          zweidimensionalen Raum – ein Koordinatensystem – projiziert werden.
          Echte Worteinbettungen werden in sogenannten Vektoren gespeichert, die
          beispielsweise die Form{" "}
          <span className="text-primary">
            [−1,9737; 0,23452; 1,0873465; …; 3,973465]
          </span>{" "}
          annehmen können. Jede Zahl in einem solchen Vektor gibt die Position
          in einer bestimmten Dimension an. In der Praxis umfassen diese
          Vektoren oftmals mehrere hundert Dimensionen, die zur
          Veranschaulichung hier jedoch auf zwei Dimensionen reduziert werden.
          Wählen Sie eines der Beispiele aus, um die entsprechenden
          Worteinbettungen im Koordinatensystem zu betrachten.
        </p>
      </div>


        <WordEmbeddingViz
          embeddings={embeddings}
          groups={groups}
          initialWords={[]}
        />

      <div className="bg-primary/5 border-l-4 text-primary p-6 rounded-r-lg mb-6">
        <p>
          In Wirklichkeit bestehen Worteinbettungen aus hunderten von Zahlen,
          also Koordinaten in einem hochdimensionalen Raum. In der
          Visualisierung sehen Sie eine vereinfachte Version davon: Wörter wie
          „König“, „Königin“, „Sonne“ oder „kalt“ erscheinen auf einer
          zweidimensionalen Fläche – also wie Punkte in einem Koordinatensystem.
          Die Abstände dort entsprechen den inhaltlichen Abständen, die das hier
          verwendete Modell <Tilde />
          gelernt hat.
        </p>
      </div>
    </section>
  );
}

export default EmbeddingsVizualizer;
