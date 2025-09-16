import {useEffect} from "react";
import SimpleRad from "../../components/simpleRad.tsx";
import Tilde from "../../components/Tilde.tsx";

export default function WahrIntroduction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Wie funktionieren Sprachmodelle?</h1>
                <div className="text-center mb-16">
                    <div>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Sprachmodelle (häufig auch Large Language Modells (LLMs) genannt) sind Systeme wie ChatGPT,
                        die einem einen meist gramiatikalisch korrekten und zumindest sinnvoll klingenden Text generieren.
                        </p>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Diese Texte werden generiert indem ihnen ein unvollständiger Satz gegeben wird 
                        und sie dann das nächste Wort in diesem Satz generieren. Nehmen wir einen Beispielsatz:
                        </p>
                    </div>
                </div>
                <div className="p-8 rounded-xl">
                        <h3 className="text-primary text-xl font-semibold text-textDark mb-4">Einfaches Beispiel</h3>
                        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
                            <p className="text-text-normal font-mono text-textDark">"Das Wetter heute ist besonders..."</p>
                        </div>
                </div>
                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Als Mensch ist dieser Satz natürlich sehr einfach zu vervollständigen, 
                        aber wenn sie Ihre Mitmenschen fragen, würde vielleicht nicht jeder das gleiche Wort benutzen.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                        "Wenn ich dieses Experiment mit 1000 Personen aus Deutschland durchführen würde, 
                        bekämen wir eine Wahrscheinlichkeitsverteilung, 
                        die angibt, wie viel Prozent der Menschen mit welchem Wort ergänzen würden.
                        Eine Wahrscheinlichkeitsverteilung gibt für alle Wörter, die im Deutschen überhaupt bekannt sind, 
                        eine Prozentzahl an, so dass die Summe 100% ergibt." - TBD Buch Zitat  (vielleicht nur der zweite Teil?)
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Für unser Beispiel könnte die Tabelle vereinfacht so aussehen:
                        </p>
                    </div>
                </div>

                <table className="table-auto text-lg text-text-normal">  
                <thead>    
                    <tr><th>Wort</th><th>Wahrscheinlichkeit</th></tr>  
                </thead>  
                <tbody>    
                    <tr><td>schön</td><td>45%</td></tr>    
                    <tr><td>warm</td><td>30%</td></tr>   
                    <tr><td>kalt</td><td>25%</td></tr>  
                </tbody>
                <thead>    
                    <tr><th>Gesamt:</th><th>100%</th></tr>  
                </thead> 
                </table>

                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Um zu entscheiden, wie das Sprachmodell den Satz fortsetzt, könnte die Wahrscheinlichkeitstabelle herangezogen werden,
                             indem das Wort mit der höchsten Wahrscheinlichkeit ausgewählt wird.
                        </p>

                        
                    </div>
                </div>

                <div className="p-8 rounded-xl">
                        <div className="bg-bgColor p-4 rounded-lg border border-outline mb-4">
                            <p className="text-text-normal font-mono text-textDark">"Das Wetter heute ist besonders schön"</p>
                        </div>
                </div>

                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Eine anschauliche Möglichkeit, sich die Wahrscheinlichkeitstabelle vorzustellen, ist das Bild eines Glücksrads auf einem Jahrmarkt. 
                            Je höher die Wahrscheinlichkeit eines Wortes, desto größer ist der ihm zugewiesene Sektor. 
                            In diesem Beispiel erhält "schön" den größten Bereich, während "kalt" den kleinsten einnimmt. 
                            Wird das Rad gedreht, bleibt es erwartungsgemäß in etwa drei von zehn Fällen bei "warm" stehen.
                        </p>

                        

                        <SimpleRad wordpercentlist={[["schön", 0.45], ["warm", 0.3], ["kalt", 0.25]]}
                        />
                        

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Durch die Verwendung des Glücksradmodells wird eine gewisse Varianz gewährleistet, 
                            sodass das Sprachmodell nicht ausschließlich das wahrscheinlichste Wort auswählt. 
                            Gleichzeitig bleibt jedoch die Tendenz erhalten, Wörter zu bevorzugen, die zum Kontext passen, 
                            wodurch unplausible Optionen – wie etwa das Wort "Banane" – weitgehend ausgeschlossen werden.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                            Für ein Sprachmodell umfasst das Glücksrad selbstverständlich nicht nur drei Wörter, sondern den gesamten Wortschatz. 
                            Darin sind neben Wörtern auch Sonderzeichen wie der Punkt "."" enthalten, sodass das Modell Sätze korrekt beenden kann. 
                            Man kann sich nun vorstellen, dass das Modell für jede mögliche Fortsetzung entsprechende Wahrscheinlichkeitstabellen bereithält. 
                            Auf diese Weise <Tilde />weiß das Sprachmodell bei jedem Schritt, welches Wort mit welcher Wahrscheinlichkeit als Nächstes folgt.
                        </p>

                        
                    </div>
                </div>

            </div>
        
    );
}