import {useEffect} from "react";

export default function AttentionIntroduction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-6 px-6" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Aufmerksamkeit</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                        Der Computer soll also erraten, welches Wort in einem Textblock als nächstes vorkommt. 
                        Nun gibt es Wörter, die für so ein Ratespiel relevanter sind, und welche, die man kaum beachten muss.
                        Als Beispiel möchten wir folgenden Satz vervollständigen:
                        „In Kaiserslautern ist Fußball sehr wichtig, auf dem Betzenberg spielt…“
                        Jetzt werden viele Fussball-Fans und fast alle Pfälzer sagen: Ja klar!
                        Der 1. FC Kaiserslautern spielt dort seine Heimspiele!
                        Doch wie kommt man auf so eine Aussage? Aus welchen Wörtern wird dieser Schluss gezogen? 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
