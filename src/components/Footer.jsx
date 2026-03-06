import { FiHeadphones, FiMail, FiGithub, FiExternalLink } from "react-icons/fi";
import { MdSupportAgent, MdPendingActions, MdOutlineTaskAlt, MdDashboard } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-2 rounded-xl">
                                <FiHeadphones className="text-white text-xl" />
                            </div>
                            <span className="font-bold text-xl text-white">
                                Support<span className="text-violet-400">Zone</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Manage, track, and resolve customer support tickets efficiently.
                            Built with React.js and Tailwind CSS as part of Mission Restart A02.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/saidebinsabid/mission-restart-a02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 bg-gray-800 hover:bg-violet-600 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
                                title="View project on GitHub"
                            >
                                <FiGithub className="text-base" />
                                GitHub Repo
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Navigate
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                                    <MdDashboard className="text-violet-500" />
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#tickets" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                                    <MdSupportAgent className="text-violet-500" />
                                    All Tickets
                                </a>
                            </li>
                            <li>
                                <a href="#tickets" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                                    <MdPendingActions className="text-violet-500" />
                                    In Progress
                                </a>
                            </li>
                            <li>
                                <a href="#tickets" className="flex items-center gap-2 hover:text-violet-400 transition-colors">
                                    <MdOutlineTaskAlt className="text-violet-500" />
                                    Resolved
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Tech Stack
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: "React.js", url: "https://react.dev" },
                                { name: "Tailwind CSS", url: "https://tailwindcss.com" },
                                { name: "DaisyUI", url: "https://daisyui.com" },
                                { name: "React Toastify", url: "https://fkhadra.github.io/react-toastify" },
                                { name: "React Icons", url: "https://react-icons.github.io/react-icons" },
                                { name: "Vite", url: "https://vite.dev" },
                            ].map(({ name, url }) => (
                                <li key={name}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 hover:text-violet-400 transition-colors"
                                    >
                                        <FiExternalLink className="text-xs text-violet-500 shrink-0" />
                                        {name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Project Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                            Project Info
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <FiMail className="text-violet-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 font-medium">Contact</p>
                                    <a
                                        href="https://github.com/saidebinsabid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-violet-400 transition-colors"
                                    >
                                        github.com/saidebinsabid
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <FiGithub className="text-violet-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-gray-300 font-medium">Repository</p>
                                    <a
                                        href="https://github.com/saidebinsabid/mission-restart-a02"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-violet-400 transition-colors break-all"
                                    >
                                        mission-restart-a02
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MdDashboard className="text-violet-400 shrink-0 mt-0.5 text-base" />
                                <div>
                                    <p className="text-gray-300 font-medium">Assignment</p>
                                    <p className="text-gray-400">Mission Restart — A02</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="text-violet-400 font-semibold">SupportZone</span>.
                        All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        Built with ❤️ using React &amp; Tailwind CSS
                        <a
                            href="https://github.com/saidebinsabid/mission-restart-a02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-400 hover:text-violet-300 transition-colors ml-1"
                        >
                            <FiGithub />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
