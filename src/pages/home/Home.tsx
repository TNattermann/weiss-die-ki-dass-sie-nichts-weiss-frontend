import { useState, useEffect } from 'react';
import { getVersion } from '../../config/api'

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
        <div className="min-h-screen">
            <div className="max-w-screen-xl mx-auto px-8 py-8 text-center">
                <h1 className="text-4xl font-bold text-primary">
                    Hello, this is a Tailwind 4.1 applied style!
                </h1>
                <h1 className="text-text-normal">Vite + React</h1>

                <p className="mt-6 text-sm text-text-normal">
                    Backend-Version: <span className="font-mono">{version ?? 'Lade Version...'}</span>
                </p>
            </div>
        </div>
    );
}

export default Home;
