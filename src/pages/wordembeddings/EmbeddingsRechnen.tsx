function EmbeddingsRechnen() {

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-center text-primary mb-6">Erkenntnisse</h1>
                </div>

                <div className="shadow-xl rounded-2xl p-8 mb-12">
                    <div className="flex items-start gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6">Beispiel 1</h1>
                            <img 
                                src="/EmbeddingsExample1.png" 
                                alt="Description of image" 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        <div className="flex-shrink-0 w-80 space-y-4">
                            <h1 className="text-3xl font-bold text-center text-primary mb-14"> </h1>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-temp-cold-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Jahreszeiten-Gruppe</h4>
                                    <p className="text-xs text-text-normal">Frühling, Sommer, Herbst, Winter liegen eng beieinander. 
                                        Auch das Wort Steuererklärung ist in dieser Gruppe. Das mag auf den ersten Blick seltsam erscheinen, 
                                        aber in diesem spezifischen Trainingsdatensatz wurde "Steuererklärung" vermutlich oft im Kontext von 
                                        Jahreszeiten erwähnt, zum Beispiel „die Steuererklärung im Frühling machen“.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-temp-hot-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Temperatur-Gruppe</h4>
                                    <p className="text-xs text-text-normal">Kalt, warm, heiß beschreiben Temperaturen und liegen daher thematisch nah beieinander.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-contrast-2-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Entfernte Wörter</h4>
                                    <p className="text-xs text-text-normal">Wörter, die weiter voneinander entfernt sind, wie zum Beispiel Sonne und Schnee, 
                                        in desem Modell eine geringere thematische Ähnlichkeit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-xl rounded-2xl p-8 mb-12">
                    
                    <div className="flex items-start gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6">Beispiel 2</h1>
                            <img 
                                src="/EmbeddingsExample2.png" 
                                alt="Description of image" 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        <div className="flex-shrink-0 w-80 space-y-4">
                            <h1 className="text-3xl font-bold text-center text-primary mb-14"> </h1>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-calculator-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Vektor-Arithmetik</h4>
                                    <p className="text-xs text-text-normal">Die Beziehung König - Mann + Frau ≈ Königin zeigt, wie semantische Beziehungen mathematisch dargestellt werden.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-vip-crown-2-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Königshaus</h4>
                                    <p className="text-xs text-text-normal">"König" und "Königin" liegen nah beieinander im Vektorraum, da sie semantisch stark verwandt sind.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-xl rounded-2xl p-8 mb-12">
                    <div className="flex items-start gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6">Beispiel 3</h1>
                            <img 
                                src="/EmbeddingsExample3.png" 
                                alt="Description of image" 
                                className="w-full h-auto"
                            />
                        </div>
                        
                        <div className="flex-shrink-0 w-80 space-y-4">
                            <h1 className="text-3xl font-bold text-center text-primary mb-14"> </h1>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-map-pin-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Deutschland-Gruppe</h4>
                                    <p className="text-xs text-text-normal">Deutschland und Berlin liegen nah beieinander. Dies deutet darauf hin, dass deutsche Städte und das Land selbst thematisch eng verbunden sind.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-primary bg-primary/5">
                                <i className="ri-earth-line text-primary text-lg mt-0.5"></i>
                                <div>
                                    <h4 className="font-semibold text-primary text-sm mb-1">Europa-Gruppe</h4>
                                    <p className="text-xs text-text-normal">
                                        Abgesehen von Deutschland und Berlin lassen sich kaum Korrelationen erkennen. Dies ist darauf zurückzuführen, dass das Modell auf einem deutschen Datensatz trainiert wurde und für andere Länder und Städte nicht ausreichend Daten vorlagen.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default EmbeddingsRechnen;