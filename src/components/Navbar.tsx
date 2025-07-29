import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavItem {
    to: string;
    label: string;
}

const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/tokeninfo', label: 'Token-Info' },
    { to: '/attention', label: 'Aufmerksamkeit' },
    { to: '/aboutus', label: 'Über Uns' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full py-4 backdrop-blur-lg">
            <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0">
                    <NavLink to="/" className="flex items-center space-x-3">
                        <i className="ri-robot-2-line text-5xl text-primary" />
                        <h1 className="text-xl font-bold text-primary leading-tight">
                            Weiß die KI, dass<br />sie nichts weiß?
                        </h1>
                    </NavLink>
                </div>

                <div className="hidden md:flex flex-grow justify-center space-x-4">
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `bg-primary-container text-on-primary-container rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg ${
                                    isActive
                                        ? 'bg-primary-container-selected text-on-primary-container-selected'
                                        : ''
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}

                    <NavLink
                        to=""
                        className="bg-error-container text-on-error-container rounded-full px-6 py-2 text-lg font-semibold transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg"
                    >
                        Newsletter
                    </NavLink>

                </div>

                <div className="hidden md:flex items-center ml-auto pl-4">
                    <ThemeToggle />
                </div>

                {/* Mobile menu button (sichtbar bei kleinen Screens) */}
                <div className="md:hidden ml-auto">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-primary hover:text-primary-container focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 mt-4">
                    <div className="space-y-2">
                        {navItems.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block text-center px-3 py-3 rounded-lg text-base font-semibold transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-primary-container-selected text-on-primary-container-selected'
                                            : 'bg-primary-container text-on-primary-container'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}

                        <NavLink
                            to=""
                            className="bg-error-container text-on-error-container block text-center px-3 py-3 rounded-lg text-base font-semibold transition-colors duration-200"
                        >
                            Newsletter
                        </NavLink>

                        <div className="flex justify-center pt-3 mt-3 border-t border-primary">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;