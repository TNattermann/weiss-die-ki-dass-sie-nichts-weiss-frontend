function Impressum() {
    return (
        <div className="min-h-screen">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <h1 className="text-5xl font-bold text-center text-primary mb-10">
                    Impressum
                </h1>

                <div className="space-y-8 text-left text-text-normal leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
                        <p>
                            RPTU Kaiserslautern-Landau <br />
                            Campus Kaiserslautern <br />
                            Gottlieb-Daimler-Straße, Gebäude 47 <br />
                            67663 Kaiserslautern
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Zuständige Aufsichtsbehörde</h2>
                        <p>
                            Ministerium für Wissenschaft und Gesundheit des Landes Rheinland-Pfalz
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Inhaltlich verantwortlich gem. § 55 Abs. 2 RStV</h2>
                        <p>
                            Prof. Dr. Katharina Zweig <br />
                            Fachbereich Informatik <br />
                            RPTU Kaiserslautern-Landau <br />
                            Postfach 3049 <br />
                            67663 Kaiserslautern
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
                        <p>
                            Telefon: +49 (0) ???? <br />
                            E-Mail: zweig@cs.uni-kl.de
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Impressum;
