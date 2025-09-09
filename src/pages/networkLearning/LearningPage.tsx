import LearningIntroduction from "./LearningIntroduction.tsx";
import LearningBowmen from "./LearningBowmen.tsx";
import SectionSidebar from "../../components/SectionSidebar.tsx";
import LearningLoss from "./LearningLoss.tsx";
import LearningGraddesc from "./LearningGraddesc.tsx";
import LearningBackprop from "./LearningBackprop.tsx";
import LearningTraincycle from "./LearningTraincycle.tsx";
import LearningMainTakeaways from "./LearningMainTakeaways.tsx";

function LearningPage() {
  return (
    <div className="min-h-screen">
      {}

      <div className="px-4 py-10 lg:px-10">
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          <SectionSidebar
            sections={[
                { id: "introduction", title: "Einführung" },
                { id: "bowman", title: "Bogenschießen" },
                { id: "loss", title: "Loss" },
                { id: "gradDesc", title: "Gradientenabstieg" },
                { id: "backProp", title: "Backpropagation" },
                { id: "fullTrain", title: "Trainingszyklus" },
                { id: "takeaways", title: "Erkenntnisse" },
              ]}
          />

          {/* Content */}
          <main className="mx-auto space-y-24 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div id="introduction">
              <LearningIntroduction />
            </div>
            <div id="bowman">
              <LearningBowmen />
            </div>
            <div id="loss">
              <LearningLoss />
            </div>
            <div id="gradDesc">
              <LearningGraddesc />
            </div>
            <div id="backProp">
              <LearningBackprop />
            </div>
            <div id="fullTrain">
              <LearningTraincycle />
            </div>
            <div id="takeaways">
              <LearningMainTakeaways />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LearningPage;