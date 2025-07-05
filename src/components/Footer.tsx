import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#1A1A1A]  text-white pb-8 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Test</h3>
                        <p className="text-slate-300">
                            Ein interaktives Tool zum Verstehen von LLMs
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-slate-300">
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
                        <h4 className="text-lg font-semibold mb-4">Technologie</h4>
                        <ul className="space-y-2 text-slate-300">
                            <li>React + Vite mit Tailwind CSS</li>
                            <li>FastAPI Backend</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-700 mt-8 pt-4 text-center text-slate-300">
                    <p>&copy; Test</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;