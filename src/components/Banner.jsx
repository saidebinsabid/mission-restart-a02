const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <section className="bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* In-Progress Card */}
                    <div
                        className="relative rounded-xl overflow-hidden shadow-lg p-10 flex flex-col items-center justify-center text-white min-h-[220px]"
                        style={{
                            background: "linear-gradient(135deg, #632EE3 0%, #9F62F2 100%)",
                        }}
                    >
                        {/* Background Image Left */}
                        <img
                            src="/left_shadow.png"
                            alt=""
                            className="absolute left-0 top-0 h-full w-auto object-cover opacity-100 pointer-events-none"
                            style={{ minWidth: "30%" }}
                        />
                        {/* Background Image Right */}
                        <img
                            src="/right_shadow.png"
                            alt=""
                            className="absolute right-0 top-0 h-full w-auto object-cover opacity-100 pointer-events-none"
                            style={{ minWidth: "30%" }}
                        />

                        <div className="relative z-10 flex flex-col items-center mt-2">
                            <span className="text-xl font-medium mb-1 tracking-wide">In-Progress</span>
                            <span className="text-7xl font-bold">{inProgressCount}</span>
                        </div>
                    </div>

                    {/* Resolved Card */}
                    <div
                        className="relative rounded-xl overflow-hidden shadow-lg p-10 flex flex-col items-center justify-center text-white min-h-[220px]"
                        style={{
                            background: "linear-gradient(135deg, #54CF68 0%, #00827A 100%)",
                        }}
                    >
                        {/* Background Image Left */}
                        <img
                            src="/left_shadow.png"
                            alt=""
                            className="absolute left-0 top-0 h-full w-auto object-cover opacity-100 pointer-events-none"
                            style={{ minWidth: "30%" }}
                        />
                        {/* Background Image Right */}
                        <img
                            src="/right_shadow.png"
                            alt=""
                            className="absolute right-0 top-0 h-full w-auto object-cover opacity-100 pointer-events-none"
                            style={{ minWidth: "30%" }}
                        />

                        <div className="relative z-10 flex flex-col items-center mt-2">
                            <span className="text-xl font-medium mb-1 tracking-wide">Resolved</span>
                            <span className="text-7xl font-bold">{resolvedCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
