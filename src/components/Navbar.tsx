import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0">
                            <h1 className="text-xl font-bold text-slate-800">LLM Visualizer</h1>
                        </NavLink>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActive ? "text-secondary  font-semibold"
                                            : "text-slate-600 hover:text-secondary"
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/tokeninfo"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActive ? "text-secondary font-semibold"
                                            : "text-slate-600 hover:text-secondary"
                                    }`
                                }
                            >
                                Token-Info
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar