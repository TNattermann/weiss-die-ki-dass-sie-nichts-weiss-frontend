import { useState, useEffect } from 'react';
import { getVersion } from '../../config/api'
import HeroSection from "../../components/HeroSection.tsx";

function Home() {
    const [version, setVersion] = useState<string | null>(null);

    useEffect(() => {
        getVersion()
            .then((data: { version: string }) => setVersion(data.version))
            .catch((err: unknown) => {
                console.error('Fehler beim Laden der Version:', err)
                setVersion('Fehler beim Laden')
            })
    }, [])


    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection
                title={
                    <>
                        <span className="text-secondary">Willkommen</span>
                    </>
                }
                subtitle={
                    <>
                        Dies ist ein {" "}
                        <span className="font-semibold text-secondary">Beispieltext</span>{" "}
                    </>
                }
                badges={[
                    { label: "Lernen", icon: "ri-lightbulb-line" }
                ]}
                scrollToId="id-of-section"
            />
            <div className="max-w-screen-xl mx-auto px-8 py-8 text-center">
                <h1 className="text-4xl font-bold text-secondary">
                    Hello, this is a Tailwind 4.1 applied style!
                </h1>
                <h1>Vite + React</h1>

                <p className="mt-6 text-sm text-gray-600">
                    Backend-Version: <span className="font-mono">{version ?? 'Lade Version...'}</span>
                </p>
            </div>
        </div>
    );
}

export default Home;
