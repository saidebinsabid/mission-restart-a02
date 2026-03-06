import { useState } from "react";
import { FiMenu, FiX, FiHeadphones, FiHome, FiList, FiCheckCircle } from "react-icons/fi";
import { MdConfirmationNumber, MdDashboard } from "react-icons/md";

const NAV_LINKS = [
    { label: "Home", href: "#", icon: <FiHome className="text-lg" /> },
    { label: "Tickets", href: "#tickets", icon: <FiList className="text-lg" /> },
    { label: "In Progress", href: "#task-status", icon: <MdDashboard className="text-lg" /> },
    { label: "Resolved", href: "#resolved", icon: <FiCheckCircle className="text-lg" /> },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-lg border-b border-gray-200/60 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
                            <FiHeadphones className="text-white text-2xl" />
                        </div>
                        <span className="font-extrabold text-2xl text-slate-800 tracking-tight">
                            Support<span className="text-violet-600">Zone</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {NAV_LINKS.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-2 text-slate-600 hover:text-violet-700 font-semibold text-sm uppercase tracking-wide transition-colors group relative"
                                >
                                    <span className="text-slate-400 group-hover:text-violet-600 transition-colors">
                                        {icon}
                                    </span>
                                    {label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-8 w-px bg-gray-200"></div>

                        <a
                            href="#tickets"
                            className="flex items-center gap-2.5 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold uppercase text-sm tracking-wide hover:bg-violet-700 transition-all duration-300 shadow-md hover:shadow-violet-200"
                        >
                            <MdConfirmationNumber className="text-xl text-violet-300" />
                            New Ticket
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-xl absolute w-full left-0">
                    <div className="flex flex-col gap-2 p-4">
                        {NAV_LINKS.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex items-center gap-3 text-slate-700 hover:text-violet-700 hover:bg-violet-50 font-semibold p-3 rounded-lg transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                <div className="bg-white p-2 border border-gray-100 rounded-lg shadow-sm text-slate-500">
                                    {icon}
                                </div>
                                {label}
                            </a>
                        ))}
                        <div className="h-px w-full bg-gray-100 my-2"></div>
                        <a
                            href="#tickets"
                            className="flex items-center justify-center gap-2 bg-slate-900 text-white p-4 rounded-xl font-bold uppercase text-sm tracking-wide shadow-md"
                            onClick={() => setMenuOpen(false)}
                        >
                            <MdConfirmationNumber className="text-xl text-violet-300" />
                            New Ticket
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
