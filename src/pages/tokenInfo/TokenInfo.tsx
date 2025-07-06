import HeroSection from "../../components/HeroSection.tsx";
import EducationalContent from "./EducationalContent.tsx";
import TokenizerVisualizer from "./TokenizerVisualizer.tsx";
import TokenizationApproaches from "./TokenizationApproaches.tsx";


function TokenInfo() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection
                title={
                    <>
                        Tokens in <span className="text-primary">Sprachmodellen</span>
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
            />

            <EducationalContent />
            <TokenizerVisualizer />
            <TokenizationApproaches />
        </div>
    );
}

export default TokenInfo;