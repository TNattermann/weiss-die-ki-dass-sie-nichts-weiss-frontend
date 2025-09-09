import HomeIntroduction from "./HomeIntroduction.tsx";
import HomeOberfragen from "./HomeOberfragen.tsx";

function Home() {

  return (
    <div className="min-h-screen">
        <main className="flex-1 max-w-7xl mx-auto space-y-24 px-4">
            <div id="introduction"><HomeIntroduction /></div>
            <div id= "oberfragen"><HomeOberfragen /></div>
        </main>
    </div>
  );
}

export default Home;
