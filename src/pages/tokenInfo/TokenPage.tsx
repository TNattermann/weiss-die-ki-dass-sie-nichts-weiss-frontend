import TokenIntroduction from "./TokenIntroduction.tsx";
import TokenizerVisualizer from "./TokenizerVisualizer.tsx";
import TokenizationApproaches from "./TokenizationApproaches.tsx";
import TokenHints from "./TokenHints.tsx";
import TokenAlgorithmsInfo from "./TokenAlgorithmsInfo.tsx";
import TokenBPE from "./TokenBPE.tsx";
import TokenMainTakeaways from "./TokenMainTakeaways.tsx";
import SectionSidebar from "../../components/SectionSidebar.tsx";
import {useEffect} from "react";

function TokenPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen">
            <div className="px-4 py-10 lg:px-10">
                <div className="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
                    <SectionSidebar
                        sections={[
                            {id: "introduction", title: "Einführung"},
                            {id: "visualizer", title: "Ausprobieren"},
                            {id: "approaches", title: "Tokeniserungsarten"},
                            {id: "hints", title: "Hinweise"},
                            {id: "algorithms", title: "Algorithmen"},
                            {id: "bpe", title: "BPE"},
                            {id: "takeaways", title: "Erkenntnisse"},
                        ]}
                    />

                    {/* Content */}
                    <main className="mx-auto w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                        <div id="introduction"><TokenIntroduction/></div>
                        <div id="visualizer"><TokenizerVisualizer/></div>
                        <div id="approaches"><TokenizationApproaches/></div>
                        <div id="hints"><TokenHints/></div>
                        <div id="algorithms"><TokenAlgorithmsInfo/></div>
                        <div id="bpe"><TokenBPE/></div>
                        <div id="takeaways"><TokenMainTakeaways/></div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default TokenPage;
