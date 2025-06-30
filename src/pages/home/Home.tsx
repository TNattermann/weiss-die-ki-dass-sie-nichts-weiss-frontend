import { useState, useEffect } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './Home.css';
import { getVersion } from '../../config/api'

function Home() {
    const [count, setCount] = useState(0);
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
        <div className="max-w-screen-xl mx-auto px-8 py-8 text-center">
            <h1 className="text-4xl font-bold text-blue-400">
                Hello, this is a Tailwind 4.1 applied style!
            </h1>
            <div className="flex items-center justify-center gap-4">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/pages/Home.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <p className="mt-6 text-sm text-gray-600">
                Backend-Version: <span className="font-mono">{version ?? 'Lade Version...'}</span>
            </p>
        </div>
    );
}

export default Home;
