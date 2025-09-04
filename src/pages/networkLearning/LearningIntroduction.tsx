import { useEffect } from "react";

export default function LearningIntroduction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-6 px-6" id="introduction">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-12">Wie ~lernt ein Modell?</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal leading-relaxed">
                            Nachdem wir die Struktur Neuronaler Netze kennengelernt haben, widmen wir uns nun der Frage,
                            wie eine KI ~lernt. <br /> Wir orientieren uns als Analogie am 
                            <strong className="text-primary"> Bogenschießen</strong> und stellen uns die Frage: Wie lernt
                            ein*e Schütze*in? <br /> Dazu werden <strong className="text-primary"> drei Kernkonzepte </strong>  
                            eines jeden Trainingszykels vorgestellt, die elementar für das Lernen einer KI sind und die sich 
                            auch beim Bogenschießen finden.
                        </p>
                    </div>

                    {/* Bild */}
                    <div className="flex justify-center md:justify-end">
                        <img 
                            src="/img/Bowman_Lime.png" 
                            alt="Bogenschütze als Metapher für KI-Lernen" 
                            className="w-full max-w-sm rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Drei Aspekte nebeneinander */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Verlustfunktion */}
                    <div className="bg-bgColor p-6 rounded-lg border border-outline text-center">
                        <h2 className="text-2xl font-bold text-primary mb-4">Loss</h2>
                        <p className="text-text-normal leading-relaxed">
                            Wie weit ist der Pfeil vom Ziel entfernt? Zuerst muss der Fehler (oder Loss) des aktuellen
                            Trainingsstandes gemessen werden.
                        </p>
                    </div>

                    {/* Gradient Descent */}
                    <div className="bg-bgColor p-6 rounded-lg border border-outline text-center">
                        <h2 className="text-2xl font-bold text-primary mb-4">Gradientenabstieg</h2>
                        <p className="text-text-normal leading-relaxed">
                            Schritt für Schritt werden Technik und Haltung angepasst, um dem Ziel näher zu kommen.
                        </p>
                    </div>

                    {/* Backpropagation */}
                    <div className="bg-bgColor p-6 rounded-lg border border-outline text-center">
                        <h2 className="text-2xl font-bold text-primary mb-4">Backpropagation</h2>
                        <p className="text-text-normal leading-relaxed">
                            Vom Ergebnis zurückgedacht: Um Anpassungen vornehmen zu können müssen die Ursachen des Fehlschusses
                            analysiert und als Feedback kommuniziert werden. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
