import AttentionIntroduction from "./AttentionIntroduction";
import AttentionConcept from "./AttentionConcept";
import AttentionSelfattention from "./AttentionSelfAttention";
import AttentionBlock from "./AttentionBlock";
import AttentionExample from "./AttentionExample";
import AttentionTakeaways from "./AttentionTakeaways";
import SectionSidebar from "../../components/SectionSidebar";

function AttentionPage() {
  return (
    <div className="min-h-screen">
      <div className="px-10 py-10">
        <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
          <SectionSidebar
            sections={[
              { id: "introduction", title: "Intuition" },
              { id: "concept", title: "Konzept" },
              { id: "selfattention", title: "Selbstaufmerksamkeit" },
              { id: "block", title: "Attention-Block" },
              { id: "example", title: "Beispiel" },
              { id: "takeaway", title: "Erkenntnisse" },
            ]}
          />

          {/* Content mittig begrenzen */}
          <main className="mx-auto space-y-24 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div id="introduction">
              <AttentionIntroduction />
            </div>
            <div id="concept">
              <AttentionConcept />
            </div>
            <div id="selfattention">
              <AttentionSelfattention />
            </div>
            <div id="block">
              <AttentionBlock />
            </div>
            <div id="example">
              <AttentionExample />
            </div>
            <div id="takeaway">
              <AttentionTakeaways />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AttentionPage;
