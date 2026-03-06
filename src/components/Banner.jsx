import { FiCheckCircle, FiClock, FiHeadphones } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="relative overflow-hidden">
            {/* Gradient Background */}
            <div
                className="w-full py-16 px-4 sm:px-6 lg:px-8"
                style={{
                    background:
                        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #9333ea 70%, #c026d3 100%)",
                }}
            >
                {/* Decorative circles */}
                <div className="absolute top-[-40px] right-[-40px] w-72 h-72 rounded-full bg-white opacity-5"></div>
                <div className="absolute bottom-[-50px] left-[-30px] w-56 h-56 rounded-full bg-white opacity-5"></div>
                <div className="absolute top-10 left-1/2 w-32 h-32 rounded-full bg-white opacity-5"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Text */}
                        <div className="text-white text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                                    <MdSupportAgent className="text-3xl text-white" />
                                </div>
                                <span className="text-white/80 font-semibold text-lg uppercase tracking-widest">
                                    Support Zone
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-3">
                                Customer Support
                                <br />
                                <span className="text-yellow-300">Ticket Dashboard</span>
                            </h1>
                            <p className="text-white/75 text-base sm:text-lg max-w-lg">
                                Manage, track, and resolve customer support tickets efficiently.
                                Stay on top of all customer issues in one place.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="flex flex-row sm:flex-row md:flex-col lg:flex-row gap-4 flex-shrink-0">
                            {/* In Progress */}
                            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-8 py-6 text-center min-w-[150px] hover:bg-white/20 transition-all">
                                <div className="flex justify-center mb-2">
                                    <div className="bg-yellow-400/20 p-2 rounded-full">
                                        <FiClock className="text-yellow-300 text-2xl" />
                                    </div>
                                </div>
                                <p className="text-5xl font-extrabold text-white mb-1">
                                    {inProgressCount}
                                </p>
                                <p className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    In Progress
                                </p>
                            </div>

                            {/* Resolved */}
                            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl px-8 py-6 text-center min-w-[150px] hover:bg-white/20 transition-all">
                                <div className="flex justify-center mb-2">
                                    <div className="bg-green-400/20 p-2 rounded-full">
                                        <FiCheckCircle className="text-green-300 text-2xl" />
                                    </div>
                                </div>
                                <p className="text-5xl font-extrabold text-white mb-1">
                                    {resolvedCount}
                                </p>
                                <p className="text-white/80 font-semibold text-sm uppercase tracking-wider">
                                    Resolved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave bottom decoration */}
            <div className="h-6 bg-gray-50" style={{ marginTop: "-1px" }}></div>
        </section>
    );
};

export default Banner;
