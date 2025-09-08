function EmbeddingsCalculation() {

    return (
<section className="py-16 px-6" id="visualizer">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-center text-primary mb-6">Rechnen mit Worteinbettungen:</h1>
                    <p className="text-xl text-text-normal max-w-3xl mx-auto leading-relaxed">
                        Hier können Sie ...
                    </p>
                </div>

                    <div className="max-w-6xl mx-auto rounded-3xl p-8 text-on-primary-container shadow-lg space-y-8">
                        {/* Reihe mit Eingabefeldern + Operator-Auswahl */}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {/* Inputfeld */}
                            <input
                            type="text"
                            placeholder="Variable 1"
                            className="px-6 py-3 rounded-full bg-on-primary-container text-on-primary-container-selected text-center min-w-[150px]"
                            />

                            {/* Auswahl + / - */}
                            <select className="w-12 h-12 rounded-full bg-primary-container text-primary text-lg font-bold text-center">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            </select>

                            <input
                            type="text"
                            placeholder="Variable 2"
                            className="px-6 py-3 rounded-full bg-on-primary-container text-on-primary-container-selected text-center min-w-[150px]"
                            />

                            {/* = Button */}
                            <button className="w-12 h-12 rounded-full bg-primary-container text-primary font-bold flex items-center justify-center hover:scale-105 transition-transform">
                            =
                            </button>

                            <input
                            type="text"
                            placeholder="Ergebnis"
                            className="px-6 py-3 rounded-full bg-on-primary-container text-on-primary-container-selected text-center min-w-[150px]"
                            readOnly
                            />
                        </div>

                        {/* große Ausgabe-Box */}
                        <div className="rounded-3xl bg-on-primary-container text-primary flex items-center justify-center h-64">
                            <p className="text-center text-lg">
                            Hier wird das Graphisch in einem 3D-Koordinatensystem dargestellt.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default EmbeddingsCalculation;
