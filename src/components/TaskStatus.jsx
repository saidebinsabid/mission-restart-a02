import { FiCheckSquare, FiClock, FiList } from "react-icons/fi";
import { MdOutlineTaskAlt } from "react-icons/md";

const TaskStatus = ({ inProgressTickets, onComplete }) => {
    return (
        <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 sticky top-24">
                {/* Header */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-t-2xl px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FiList className="text-white text-xl" />
                        <h2 className="text-white font-bold text-lg">Task Status</h2>
                    </div>
                    <span className="bg-white/25 text-white text-sm font-bold px-2.5 py-0.5 rounded-full">
                        {inProgressTickets.length}
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 max-h-[600px] overflow-y-auto">
                    {inProgressTickets.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                            <MdOutlineTaskAlt className="text-5xl mb-3 text-violet-200" />
                            <p className="font-semibold text-gray-500">No tasks in progress</p>
                            <p className="text-xs text-center mt-1">
                                Click a ticket card to add it here
                            </p>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-3">
                            {inProgressTickets.map((ticket) => (
                                <li
                                    key={ticket.id}
                                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-violet-200 transition-all"
                                >
                                    <div className="flex items-start gap-2 mb-3">
                                        <span className="mt-0.5">
                                            <FiClock className="text-violet-500 text-base shrink-0" />
                                        </span>
                                        <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2">
                                            {ticket.title}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">
                                            By: {ticket.customer}
                                        </span>
                                        <button
                                            className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-all shadow-sm hover:shadow-green-200"
                                            onClick={() => onComplete(ticket)}
                                        >
                                            <FiCheckSquare className="text-sm" />
                                            Complete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;
