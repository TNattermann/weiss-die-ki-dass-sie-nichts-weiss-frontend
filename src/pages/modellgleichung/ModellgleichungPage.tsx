import ModellgleichungIntro from "./ModellgleichungIntro";
import VideoPage from "./ModellgleichungNeuronalesNetzwerk";
import ModellgleichungMainTakeaways from "./ModellgleichungSummary";
import AffenbandeBeispiel from "./ModellgleichungExample";
import ConnectionToLLM from "./ModellgleichungConnectionLLM";
import ModellgleichungAdditionalInfos from "./ModellgleichungAdditionalInfos";
import ModellgleichunGleichung from "./ModellgleichungGleichung";
import SectionSidebar from "../../components/SectionSidebar";

function ModellgleichungPage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-10 lg:px-10">
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          <SectionSidebar
            sections={[
              { id: "introduction", title: "Einführung" },
              { id: "visualizer", title: "Ausprobieren" },
              { id: "structure", title: "Aufbau Neuronales Netzwerk" },
              { id: "weights", title: "Gewichte" },
              { id: "calculation", title: "Berechnung" },
              { id: "LLM", title: "Verbindung zu ChatGPT" },
              { id: "takeaways", title: "Erkenntnisse" },
            ]}
          />

          <main className="mx-auto space-y-6 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div id="introduction">
              <ModellgleichungIntro />
            </div>
            <div id="visualizer">
              <AffenbandeBeispiel />
            </div>
            <div id="structure">
              <VideoPage />
            </div>
            <div id="weights">
              <ModellgleichungAdditionalInfos />
            </div>
            <div id="calculation">
              <ModellgleichunGleichung />
            </div>
            <div id="LLM">
              <ConnectionToLLM />
            </div>
            <div id="takeaways">
              <ModellgleichungMainTakeaways />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default ModellgleichungPage;
