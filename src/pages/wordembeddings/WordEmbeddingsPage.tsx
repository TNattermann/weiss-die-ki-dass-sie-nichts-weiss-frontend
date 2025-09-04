import WordEmbeddingsIntroduction from "./WordEmbeddingsIntroduction";
import EmbeddingsVizualizer from "./EmbeddingsVizualizer.tsx";
import EmbeddingsMainTakeaways from "./EmbeddingsMainTakeaways";
import SectionSidebar from "../../components/SectionSidebar.tsx";
import EmbeddingsRechnen from "./EmbeddingsRechnen.tsx";

function WordEmbeddingsPage() {
    return (
        <div className="min-h-screen">
            <div className="px-4 py-10 lg:px-10">
                <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
                    <SectionSidebar
                        sections={[
                            { id: "introduction", title: "Einführung" },
                            { id: "demonstration", title: "Demonstration" },
                            { id: "rechnen", title: "Erkentnisse" },
                            { id: "takeaways", title: "Zusammenfassung" },
                        ]}
                    />

                    {/*Content*/}
                        <main className="flex-1 max-w-7xl mx-auto space-y-24 px-4">
                            <div id="introduction"><WordEmbeddingsIntroduction /></div>
                            <div id="demonstration"><EmbeddingsVizualizer /></div>
                            <div id="rechnen"><EmbeddingsRechnen /> </div>
                            <div id="takeaways"><EmbeddingsMainTakeaways /></div>
                        </main>
                </div>
            </div>
        </div>
      );

}

export default WordEmbeddingsPage;
