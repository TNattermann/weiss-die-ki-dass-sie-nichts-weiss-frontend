import TokenIntroduction from "./TokenIntroduction.tsx";
import TokenizerVisualizer from "./TokenizerVisualizer.tsx";
import TokenizationApproaches from "./TokenizationApproaches.tsx";
import TokenHints from "./TokenHints.tsx";
import TokenAlgorithmsInfo from "./TokenAlgorithmsInfo.tsx";
import TokenBPE from "./TokenBPE.tsx";
import SimpleTokenizerCode from "../../components/SimpleTokenizerCode.tsx";
import TokenMainTakeaways from "./TokenMainTakeaways.tsx";

function TokenPage() {
    return (
        <div className="bg-bghero min-h-screen">
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

            <TokenIntroduction />
            <TokenizerVisualizer />

            {/*<TokenConcepts /> not needed*/}

            <TokenizationApproaches />
            <TokenHints />

            <TokenAlgorithmsInfo />
            <TokenBPE />
            <SimpleTokenizerCode />
            <TokenMainTakeaways />
        </div>
    );
}

export default TokenPage;