import HeroSection from "../../components/HeroSection.tsx";
import EducationalContent from "../../components/EducationalContent.tsx";
import TokenizerVisualizer from "./TokenizerVisualizer.tsx";


function TokenInfo() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection />
            <EducationalContent />
            <TokenizerVisualizer />
        </div>
    );
}

export default TokenInfo;