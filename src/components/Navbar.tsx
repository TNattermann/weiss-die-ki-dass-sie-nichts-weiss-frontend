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
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-bgColor shadow-sm border-b border-light sticky top-0 z-50 w-full">
            <div className="flex items-center justify-between h-16 w-full px-4 sm:px-6 lg:px-8">
                {/* Logo (links) */}
                <div className="flex-shrink-0">
                    <NavLink to="/" className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-textDark">LLM Visualizer</h1>
                    </NavLink>
                </div>

                {/* Navigation (zentriert) */}
                <div className="hidden md:flex flex-grow justify-center space-x-4">
                    {navItems.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? 'text-primary font-semibold'
                                        : 'text-slate-600 hover:text-primary'
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>

                {/* ThemeToggle (ganz rechts) */}
                <div className="hidden md:flex ml-auto">
                    <ThemeToggle />
                </div>

                {/* Mobile menu button (sichtbar bei kleinen Screens) */}
                <div className="md:hidden ml-auto">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-slate-600 hover:text-primary focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-light px-4">
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'text-primary font-semibold bg-blue-50'
                                            : 'text-slate-600 hover:text-primary hover:bg-slate-100'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;