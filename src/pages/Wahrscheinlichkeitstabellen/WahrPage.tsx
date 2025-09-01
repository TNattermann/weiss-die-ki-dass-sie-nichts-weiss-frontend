import WahrIntroduction from "./WahrIntroduction";
import NextWord from "./NextWord";
import Temperature from "./Temperature";
import Ausprobieren from "./TempAusprob";

function WahrPage() {
    return (
        <div className="min-h-screen">
            <WahrIntroduction />
            <NextWord />
            <Temperature />
            <Ausprobieren />
        </div>
    );
}

export default WahrPage;