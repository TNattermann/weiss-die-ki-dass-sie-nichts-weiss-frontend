import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeNavigation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="py-1 px-6">
        <div>
          <div className="text-center mb-6">
            <p className="text-text-normal">
              Um sich einen breiteren Überblick über Sprachmodelle wie ChatGPT zu verschaffen, können Sie
              einen der beiden Lernpfade starten. Lernpfad 1 beschäftigt sich
              insbesondere mit der Frage, ob ChatGPT uns verstehen kann.
              Lernpfad 2 fokussiert sich auf die Fähigkeiten von Sprachmodellen.
              Um einen umfassenden Überblick zu bekommen, können Sie zuerst
              Lernpfad 1 und anschließend Lernpfad 2 folgen.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="primary-container p-6 py-12 rounded-xl text-center bg-primary-container text-on-primary-container">
              <h1 className="text-lg font-semibold mb-8">
                Versteht uns ein Sprachmodell?
              </h1>

              <div className="primary-container p-6 rounded-xl text-center bg-primary-container text-on-primary-container shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleButtonClick("/temperature")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-file-edit-line"></i>
                    Temperatur
                  </button>
                  <button
                    onClick={() => handleButtonClick("/tokens")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-brain-line"></i>
                    Tokens
                  </button>
                  <button
                    onClick={() => handleButtonClick("/wordembeddings")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-thumb-up-line"></i>
                    Worteinbettungen
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleButtonClick("/temperature")}
                  className="bg-primary text-primary-container px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Lernpfad 1
                </button>
              </div>
            </div>

            <div className="primary-container p-6 py-12 rounded-xl text-center bg-primary-container text-on-primary-container">
              <h3 className="text-lg font-semibold mb-8">
                Was kann ein Modell des maschinellen Lernens?
              </h3>

              <div className="primary-container p-6 rounded-xl text-center bg-primary-container text-on-primary-container shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleButtonClick("/attention")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-question-line"></i>
                    Aufmerksamkeit
                  </button>
                  <button
                    onClick={() => handleButtonClick("/modellgleichung")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-lightbulb-flash-line"></i>
                    Modell- entscheidung
                  </button>

                  <button
                    onClick={() => handleButtonClick("/NetworkLearning")}
                    className="bg-primary text-primary-container px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="ri-box-3-line"></i>
                    Training
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleButtonClick("/attention")}
                  className="bg-primary text-primary-container px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Lernpfad 2
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
