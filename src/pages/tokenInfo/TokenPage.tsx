import TokenIntroduction from "./TokenIntroduction.tsx";
import TokenizerVisualizer from "./TokenizerVisualizer.tsx";
import TokenizationApproaches from "./TokenizationApproaches.tsx";
import TokenHints from "./TokenHints.tsx";
import TokenAlgorithmsInfo from "./TokenAlgorithmsInfo.tsx";
import TokenBPE from "./TokenBPE.tsx";
import TokenMainTakeaways from "./TokenMainTakeaways.tsx";
import SectionSidebar from "../../components/SectionSidebar.tsx";

function TokenPage() {
    return (
        <div className="min-h-screen">
            {/*<HeroSection
                title={
                    <>
                        <span className="text-primary">Tokens</span> in Sprachmodellen
                    </>
                }
                subtitle={
                    <>
                        Bevor ein Large Language Model (LLM) wie ChatGPT Texte generieren kann,
                        muss der Inputtext zunächst in sogenannte{" "}
                        <span className="font-semibold text-primary">Tokens</span>{" "}
                        umgewandelt werden. Diese Tokenisierung ist ein essenzieller Verarbeitungsschritt.
                    </>
                }
                badges={[
                    { label: "Lernen", icon: "ri-lightbulb-line" },
                    { label: "Live-Visualisierung", icon: "ri-cpu-line" },
                ]}
                scrollToId="educational-content"
            />*/}

            <div className="px-4 py-10 lg:px-10">
                <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
                    <SectionSidebar
                        sections={[
                            { id: "introduction", title: "Einführung" },
                            { id: "visualizer", title: "Ausprobieren" },
                            { id: "approaches", title: "Tokenisierungsansätze" },
                            { id: "hints", title: "Hinweise" },
                            { id: "algorithms", title: "Algorithmen" },
                            { id: "bpe", title: "BPE" },
                            { id: "takeaways", title: "Erkenntnisse" },
                        ]}
                    />

                    {/* Content */}
                    <main className="mx-auto space-y-24 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div id="introduction"><TokenIntroduction /></div>
                        <div id="visualizer"><TokenizerVisualizer /></div>
                        <div id="approaches"><TokenizationApproaches /></div>
                        <div id="hints"><TokenHints /></div>
                        <div id="algorithms"><TokenAlgorithmsInfo /></div>
                        <div id="bpe"><TokenBPE /></div>
                        <div id="takeaways"><TokenMainTakeaways /></div>
                    </main>
                </div>
            </div>

        </div>
    );
}

export default TokenPage;