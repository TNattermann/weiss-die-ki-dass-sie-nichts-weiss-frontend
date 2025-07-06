import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
        <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-slate-800">LLM Visualizer</h1>
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
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
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
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
                    <div className="md:hidden border-t border-slate-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
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
            </div>
        </nav>
    );
}

export default Navbar;