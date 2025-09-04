import { useEffect } from "react";

export default function HomeNavigation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleButtonClick = () => {
        // ToDo Navigation einfügen
    };
  return (
    <section className="py-16 px-6">
      <div className="shadow-xl text-center text-on-primary-container rounded-2xl p-8">
        <div>
          <div className="text-center mb-6">
              <p className="text-xl text-primary mx-auto leading-relaxed">
                Das ist ein Platzhalter für eine Überleitung zu den zwei "Oberfragen".
              </p>
          </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="primary-container p-6 py-12 rounded-xl text-center bg-primary-container text-on-primary-container">
            <h1 className="text-lg font-semibold mb-8">Versteht uns ein Sprachmodell?</h1>
            
            <div className="primary-container p-6 rounded-xl text-center bg-primary-container text-on-primary-container shadow-lg">
            <h3 className="py-6 text-lg font-bold">Weiß ein Sprachmodell, was die Sonne ist?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                onClick={() => handleButtonClick()} //Navigation fehlt
                className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                <i className="ri-font-size-2"></i>
                Word Embeddings
                </button>
                
                <button
                onClick={() => handleButtonClick()} //Navigation fehlt
                className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                <i className="ri-text-spacing"></i>
                Tokens
                </button>
            </div> 
            </div>
        </div>
        
        <div className="primary-container p-6 py-12 rounded-xl text-center bg-primary-container text-on-primary-container">
            <h3 className="text-lg font-semibold mb-8">
            Was kann ein Modell des maschinellen Lernens?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="primary-container p-6 rounded-xl text-center bg-primary-container text-on-primary-container shadow-lg flex flex-col h-full">
                <h3 className="py-6 px-6 text-lg font-bold">
                Wie funktioniert ein neuronales Netzwerk?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
                <button
                    onClick={() => handleButtonClick()} //Navigation fehlt
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <i className="ri-flow-chart"></i>
                    Modellentscheidung
                </button>
                </div>
            </div>
            
            <div className="p-6 rounded-xl text-center bg-primary-container text-on-primary-container shadow-lg flex flex-col h-full">
                <h3 className="py-6 px-6 text-lg font-bold">
                Wie lernt "die KI"?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
                <button
                    onClick={() => handleButtonClick()} //Navigation fehlt
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                >
                    <i className="ri-line-chart-line"></i>
                    Training
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

      </div>
      </div>
    </section>

  );
}