import {useEffect} from "react";

export default function HomeWkeitundTemp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-16 px-6">
            <div className="shadow-xl text-center text-on-primary-container rounded-2xl p-8">
                <h1 className="text-xl font-bold text-on-primary-container">
                    Wahrscheinlichkeitstabellen und Temperatur
                </h1>
                <p>Das ist ein Platzhalter für Camerons Teil.</p>
            </div>
        </section>
    );
}
