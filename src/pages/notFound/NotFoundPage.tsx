import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFoundPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
            <div className="max-w-md">
                <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-text-normal mb-6">
                    Seite nicht gefunden
                </h2>
                <p className="text-lg text-text-normal mb-8 leading-relaxed">
                    Entschuldigung, die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
                </p>
                <Link
                    to="/"
                    className="bg-primary-container-selected text-on-primary-container-selected px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                    Zurück zur Startseite
                </Link>
            </div>
        </div>
    );
}