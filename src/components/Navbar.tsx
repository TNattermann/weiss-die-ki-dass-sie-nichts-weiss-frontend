import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Menu, X} from "lucide-react";

interface NavItem {
    to?: string;
    label: string;
    type?: "link" | "separator";
}

const navItems: NavItem[] = [
    { to: '/', label: 'Startseite' },
    { to: '/temperature', label: 'Was passiert, wenn ich ChatGPT benutze?' },
    { to: '/tokeninfo', label: 'Weiß ChatGPT, was eine Brombeere ist?' },
    { to: '/wordembeddings', label: 'Wieso sind die Texte von ChatGPT so gut?' },
    { to: '/attention', label: 'Versteht ChatGPT mich?' },
    { to: "/modellgleichung", label: "Wie funktioniert das mit diesem Neuronalen Netzwerk?" },
    { to: '/networkLearning', label: 'Wie wurde ChatGPT gebaut?' },

    { label: 'separator', type: "separator" },

    { to: '/download', label: 'Buch Download' },
    { to: '/aboutus', label: 'Über Uns' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full py-4 backdrop-blur-lg">
            <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0">
                    <NavLink to="/" className="flex items-center space-x-3">
                        <i className="ri-robot-2-line text-5xl text-primary"/>
                        <h1 className="text-xl font-bold text-primary leading-tight">
                            Weiß die KI, dass
                            <br/>
                            sie nichts weiß?
                        </h1>
                    </NavLink>
                </div>

                <div className="ml-auto">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary hover:text-primary-container focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="px-4 pt-2 pb-4 mt-4">
                    <div className="space-y-2">
                        {navItems.map(({ to, label, type }) =>
                            type === "separator" ? (
                                <hr key={label} className="my-4 border-t text-primary/50" />
                            ) : (
                                <NavLink
                                    key={to}
                                    to={to!}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-center px-3 py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${
                                            isActive
                                                ? "bg-primary-container-selected text-on-primary-container-selected"
                                                : "bg-primary-container text-on-primary-container"
                                        }`
                                    }
                                >
                                    {label}
                                </NavLink>
                            )
                        )}

                        <NavLink
                            to=""
                            className="bg-error-container text-on-error-container block text-center px-3 py-3 rounded-lg text-base font-semibold transition-colors duration-200"
                        >
                            Newsletter
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;