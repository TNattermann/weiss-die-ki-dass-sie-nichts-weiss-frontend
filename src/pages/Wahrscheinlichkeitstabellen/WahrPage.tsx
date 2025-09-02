import WahrIntroduction from "./WahrIntroduction";
import NextWord from "./NextWord";
import Temperature from "./Temperature";
import Ausprobieren from "./TempAusprob";
import SectionSidebar from "../../components/SectionSidebar.tsx";

function WahrPage() {
    return (
        <div className="min-h-screen">


<div className="px-4 py-10 lg:px-10">
                <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
                    <SectionSidebar
                        sections={[
                            { id: "introduction", title: "Einführung" },
                            { id: "nextword", title: "Das nächste Wort?" },
                            { id: "temperature", title: "Temperatur" },
                            { id: "playing", title: "Ausprobieren" },
                            { id: "takeaways", title: "Erkenntnisse" },
                        ]}
                    />

                    {/* Content */}
                    <main className="mx-auto space-y-24 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div id="introduction"><WahrIntroduction /></div>
                        <div id="nextword"><NextWord /></div>
                        <div id="temperature"><Temperature /></div>
                        <div id="playing"><Ausprobieren /></div>
                        <div id="takeaways"> Do This TBD</div>
                    </main>
                </div>
            </div>
            
        </div>
    );
}

export default WahrPage;