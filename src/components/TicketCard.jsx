import { FiUser, FiCalendar, FiAlertCircle, FiPlusCircle } from "react-icons/fi";

const priorityConfig = {
    Critical: { badge: "badge-error", dot: "bg-red-500", text: "text-red-600" },
    High: { badge: "badge-warning", dot: "bg-orange-400", text: "text-orange-500" },
    Medium: { badge: "badge-info", dot: "bg-blue-400", text: "text-blue-500" },
    Low: { badge: "badge-success", dot: "bg-green-400", text: "text-green-600" },
};

const TicketCard = ({ ticket, onAddToProgress, isInProgress }) => {
    const priority = priorityConfig[ticket.priority] || priorityConfig.Low;
    const date = new Date(ticket.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <div
            className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer group hover:-translate-y-1 ${isInProgress ? "ring-2 ring-violet-400 ring-offset-1" : ""
                }`}
            onClick={() => !isInProgress && onAddToProgress(ticket)}
        >
            {/* Card Header */}
            <div className="p-5 border-b border-gray-50">
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-800 text-base leading-snug group-hover:text-violet-600 transition-colors line-clamp-2">
                        {ticket.title}
                    </h3>
                    <span className={`badge badge-sm ${priority.badge} shrink-0 capitalize font-semibold`}>
                        {ticket.priority}
                    </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {ticket.description}
                </p>
            </div>

            {/* Card Footer */}
            <div className="p-4 flex flex-col gap-2 mt-auto">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <FiUser className="text-violet-400" />
                        <span className="font-medium text-gray-700">{ticket.customer}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FiCalendar className="text-violet-400" />
                        {date}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sm">
                        <span className={`w-2 h-2 rounded-full ${priority.dot}`}></span>
                        <span className={`font-semibold text-xs ${priority.text}`}>
                            # {ticket.id}
                        </span>
                    </span>
                    {isInProgress ? (
                        <span className="flex items-center gap-1 text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-lg">
                            <FiAlertCircle className="text-xs" />
                            In Progress
                        </span>
                    ) : (
                        <button
                            className="flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-500 px-3 py-1.5 rounded-lg hover:opacity-90 transition-all shadow-sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToProgress(ticket);
                            }}
                        >
                            <FiPlusCircle />
                            Take Task
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
