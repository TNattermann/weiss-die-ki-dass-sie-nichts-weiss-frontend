import {useEffect} from "react";

export default function WahrIntroduction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-6 px-6" id="educational-content">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-primary mb-6">Und das nächste Wort?</h1>
                <div className="text-center mb-16">
                    <div>
                        <p className="text-lg text-text-normal mb-6 leading-relaxed">

                        Der jetzt noch fehlende Schritt ist, was das Modell macht, nachdem ein Wort hinzugefügt wurde. 
                        Das Modell nimmt einfach den Satz, der das neue Wort enthält, und macht das gleiche nochmal,
                        bis der Satz beendet wird. Schließlich hat es ja für jeden Satz zugriff auf die Wahrscheinlichkeitstabellen.
                        </p>

                        <p className="text-lg text-text-normal mb-6 leading-relaxed">
                        
                        TBD Video-next-word
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}