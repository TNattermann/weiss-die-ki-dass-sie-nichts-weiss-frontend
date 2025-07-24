import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-slate-600 pb-8 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-primary text-xl font-bold mb-4">Test</h3>
                        <p className="text-text-normal">
                            Ein interaktives Tool zum Verstehen von LLMs
                        </p>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-text-normal">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/tokeninfo" className="hover:text-white transition-colors">
                                    Tokenizer
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-semibold mb-4">Technologie</h4>
                        <ul className="space-y-2 text-text-normal">
                            <li>React + Vite mit Tailwind CSS</li>
                            <li>FastAPI Backend</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-4 text-center text-text-normal">
                    <p>&copy; Weiß die KI, dass sie nichts weiß?</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;