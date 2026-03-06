import TicketCard from "./TicketCard";
import { FiInbox } from "react-icons/fi";

const TicketList = ({ tickets, onAddToProgress, inProgressTickets }) => {
    const inProgressIds = new Set(inProgressTickets.map((t) => t.id));

    return (
        <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                    Customer Tickets
                    <span className="ml-2 text-sm font-semibold text-white bg-violet-500 rounded-full px-2.5 py-0.5 align-middle">
                        {tickets.length}
                    </span>
                </h2>
            </div>

            {tickets.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <FiInbox className="text-6xl mb-3" />
                    <p className="text-lg font-semibold">No open tickets!</p>
                    <p className="text-sm">All tickets have been resolved. 🎉</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tickets.map((ticket) => (
                        <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            onAddToProgress={onAddToProgress}
                            isInProgress={inProgressIds.has(ticket.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TicketList;
