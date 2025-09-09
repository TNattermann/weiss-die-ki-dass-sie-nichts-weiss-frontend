import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-footer pb-8 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div>
                        <h4 className="text-primary text-lg font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-text-normal">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="tokeninfo" className="hover:text-white transition-colors">
                                    Lernpfad 1: Versteht uns ein Sprachmodell?
                                </Link>
                            </li>
                            <li>
                                <Link to="/modellgleichung" className="hover:text-white transition-colors">
                                    Lernpfad 2: Was kann ein Modell des maschinellen Lernens?
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-primary text-lg font-semibold mb-4">Weitere Informationen</h4>
                        <ul className="space-y-2 text-text-normal">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors"> 
                                    Newsletter
                                </Link>
                            </li>
                            <li>
                                <Link to="download" className="hover:text-white transition-colors">
                                    Buch Download
                                </Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="hover:text-white transition-colors">
                                    Über Uns
                                </Link>
                            </li>
                            <li>
                                <Link to="/impressum" className="hover:text-white transition-colors">
                                    Impressum
                                </Link>
                            </li>
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