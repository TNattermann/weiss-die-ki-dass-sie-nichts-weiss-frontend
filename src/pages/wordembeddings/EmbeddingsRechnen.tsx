function EmbeddingsRechnen() {

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-6">Zusammenfassung</h1>
                </div>

                <div className="shadow-xl rounded-2xl p-8 mb-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6 break-words">Beispiel 1</h1>
                            <img 
                                src="/EmbeddingsExample1.png" 
                                alt="Das Bild zeigt ein zweidimensionales Koordinatensystem mit hellblauem Hintergrund. 
                                Darin sind verschiedene Wörter als kleine gelbe Punkte mit Beschriftung verteilt. 
                                Die Wörter sind inhaltlich gruppiert und teilweise durch ovale Umrandungen hervorgehoben.
                                Links oben befindet sich eine Gruppe, die durch ein Oval zusammengefasst ist. 
                                In dieser Gruppe liegen die Wörter „Frühling“, „Sommer“, „Herbst“ und „Winter“ eng beieinander. 
                                Direkt daneben, etwas außerhalb, steht das Wort „Steuererklärung“, das dennoch nahe an dieser 
                                Jahreszeiten-Gruppe positioniert ist. Weiter in der Nähe, aber ohne Umrandung, 
                                befinden sich die Wörter „Sonne“, „Wolken“ und „Regen“.
                                Rechts unten ist eine zweite Gruppe erkennbar, die ebenfalls durch ein Oval markiert ist. 
                                Dort stehen die Wörter „kalt“, „warm“ und „heiß“ dicht beisammen. 
                                In ihrer Nähe, etwas weiter links, befindet sich das Wort „sonnig“.
                                Die Abstände im Diagramm verdeutlichen, welche Wörter in diesem Modell eine höhere oder geringere 
                                thematische Ähnlichkeit haben: Jahreszeiten und „Steuererklärung“ sind nah zueinander angeordnet, 
                                während Temperaturbegriffe („kalt“, „warm“, „heiß“) eine eigene, deutlich getrennte Gruppe bilden." 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                    <p className="text-xs text-text-normal">Wörter, die weiter voneinander entfernt sind, wie zum Beispiel Sonne und Schnee, haben
                                        in diesem Modell eine geringere thematische Ähnlichkeit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-xl rounded-2xl p-8 mb-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6 break-words">Beispiel 2</h1>
                            <img 
                                src="/EmbeddingsExample2.png" 
                                alt="Das Bild zeigt ein zweidimensionales Koordinatensystem mit hellblauem Hintergrund, 
                                in dem vier Wörter als gelbe Punkte mit Beschriftung angeordnet sind. Unten links steht das Wort „Frau“, 
                                etwas weiter rechts oberhalb davon „Mann“. Von diesen beiden Punkten führen Linien nach schräg oben rechts 
                                zu den Wörtern „König“ und „Königin“.
                                Die Linien verdeutlichen die semantischen Beziehungen: 
                                So entspricht der Übergang von „Frau“ zu „Mann“ in seiner Richtung und Länge ungefähr dem Übergang 
                                von „Königin“ zu „König“. Damit wird gezeigt, dass sich Wortpaare wie „Frau – Mann“ und „Königin – König“ 
                                in ähnlicher Weise zueinander verhalten und parallele Bedeutungsverschiebungen aufweisen." 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div className="shadow-xl rounded-2xl p-8">
                    <div className="flex flex-col gap-8">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold text-center text-primary mb-6 break-words">Beispiel 3</h1>
                            <img 
                                src="/EmbeddingsExample3.png" 
                                alt="Das Bild zeigt ein zweidimensionales Koordinatensystem mit hellblauem Hintergrund. 
                                Darauf sind mehrere Punkte eingezeichnet, die jeweils mit Ländern oder Städten beschriftet sind.
                                Links im Diagramm, etwas im oberen Bereich, befinden sich dicht beieinander die Punkte „Deutschland“ 
                                und „Berlin“. Diese beiden Punkte sind zusätzlich mit einem ovalen Kreis markiert, 
                                sodass sie hervorgehoben wirken. 
                                Etwas darüber, leicht nach rechts, sind die Punkte „Rom“ und „Australien“ zu sehen. 
                                In der Mitte des Diagramms, weiter rechts, befinden sich „Frankreich“, „Spanien“ und „Canberra“. 
                                Darunter liegt „Italien“.
                                Ganz rechts oben stehen die Punkte „Madrid“ und etwas tiefer „Paris“." 
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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