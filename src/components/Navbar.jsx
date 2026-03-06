import { useState } from "react";
import { FiMenu, FiX, FiHeadphones } from "react-icons/fi";
import { MdConfirmationNumber } from "react-icons/md";

const NAV_LINKS = [
    { label: "Home", href: "#" },
    { label: "Tickets", href: "#tickets" },
    { label: "In Progress", href: "#task-status" },
    { label: "Resolved", href: "#resolved" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-2 rounded-xl">
                            <FiHeadphones className="text-white text-xl" />
                        </div>
                        <span className="font-bold text-xl text-gray-800">
                            Support<span className="text-violet-600">Zone</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-gray-600 hover:text-violet-600 font-medium transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#tickets"
                            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-violet-200"
                        >
                            <MdConfirmationNumber />
                            New Ticket
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-700 text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-base-100 border-t border-gray-100 px-4 pb-4">
                    <div className="flex flex-col gap-3 pt-3">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-gray-700 hover:text-violet-600 font-medium py-1"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#tickets"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-xl font-semibold mt-1"
                            onClick={() => setMenuOpen(false)}
                        >
                            <MdConfirmationNumber />
                            New Ticket
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
