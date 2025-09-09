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

                        Sprachmodelle (häufig auch LLM für "Large Language Modell" genannt) sind Systeme wie ChatGPT,
                        die einem einen gewollten Text generieren.
                        </p>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Sprachmodelle funktionieren nach einem sehr einfachen Prinzip: Man gibt ihnen einen unvollständigen Satz 
                        und sie generieren das nächste Wort in diesem Satz. Nehmen wir uns einen solchen Satz als Beispiel:
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

                        Für unser Beispiel könnte unsere Tabelle sehr grob so aussehen:
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

                        Um zu entscheiden wie das Sprachmodell jetzt den Satz beendet, könnten wir diese Wahrscheinlichkeitstabelle
                        nutzen und einfach das Wort
                        mit der größten Wahrscheinlichkeit nehmen.
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

                        Eine gute Methode, um sich diese Wahrscheinlichkeitstabelle vorzustellen ist als Glücksrad auf dem Jahrmarkt.
                        Je größer die Wahrscheinlichkeit des Wortes ist, desto mehr Platz bekommt ein Wort. In diesem Fall, also "schön"
                        mit dem meisten Platz und "kalt" am wenigsten. Wenn das Rad gedreht wird, sollte es in etwa drei von zehn Fällen bei
                        "warm" liegen bleiben.
                        </p>

                        

                        <SimpleRad wordpercentlist={[["schön", 0.45], ["warm", 0.3], ["kalt", 0.25]]}
                        />
                        

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Durch das Glücksrad ist jetzt auch etwas Varianz gewährleistet, 
                        so dass unser LLM nicht immer das häufigste
                        Wort nimmt, aber trotzdem dazu tendiert, Wörter zu nehmen, die zu der Situation passen 
                        (und nicht zum Beispiel das Wort "Banane").
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Für das LLM hat das Glücksrad natürlich nicht nur drei Worte, sondern alle möglichen. 
                        Dabei sind nicht nur Wörter,
                        sondern auch Sonderzeichen, wie der Punkt "." enthalten, 
                        damit das Sprachmodell auch einen Satz beenden kann.
                        Jetzt muss man sich nur noch vorstellen, dass das LLM diese Wahrscheinlichkeitstabellen für jeden möglichen 
                        Satzanfang besitzt. Damit <Tilde />weiß das Sprachmodell bei jedem Satz, welches Wort als nächstes kommt.
                        </p>

                        
                    </div>
                </div>

            </div>
        
    );
}