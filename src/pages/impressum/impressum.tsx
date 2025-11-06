import {useEffect} from "react";

function Impressum() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-10">
                    Impressum
                </h1>

                <div className="space-y-8 text-left text-text-normal leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Anbieter</h2>
                        <p>
                            Algorithm Accountability Lab
                            RPTU Kaiserslautern-Landau <br />
                            Campus Kaiserslautern <br />
                            Gottlieb-Daimler-Straße, Gebäude 48 <br />
                            67663 Kaiserslautern <br />

                            <strong className="text-primary">Telefon: </strong>{" "} +49 631 205 3358<br />
                            <strong className="text-primary">E-Mail: </strong>{" "} aalab-technik@cs.rptu.de<br />
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Zuständige Aufsichtsbehörde</h2>
                        <p>
                            Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz <br />
                            Mittlere Bleiche 61 <br />
                            55116 Mainz
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Inhaltliche Verantwortung gem. § 18 Abs. 2 MStV</h2>
                        <p>
                            Prof. Dr. Katharina Zweig <br />
                            Fachbereich Informatik <br />
                            RPTU Kaiserslautern-Landau <br />
                            Postfach 3049 <br />
                            67663 Kaiserslautern
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Impressum;
