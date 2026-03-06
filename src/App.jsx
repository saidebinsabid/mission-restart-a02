import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load tickets.");
        setLoading(false);
      });
  }, []);

  const handleAddToProgress = (ticket) => {
    const alreadyInProgress = inProgressTickets.some((t) => t.id === ticket.id);
    if (alreadyInProgress) {
      toast.warn(`"${ticket.title}" is already in progress!`, {
        icon: "⚠️",
      });
      return;
    }
    setInProgressTickets((prev) => [...prev, ticket]);
    toast.info(`Ticket added to In Progress!`, {
      icon: "🚀",
    });
  };

  const handleComplete = (ticket) => {
    setInProgressTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`Ticket resolved successfully! 🎉`, {
      icon: "✅",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <Banner
        inProgressCount={inProgressTickets.length}
        resolvedCount={resolvedTickets.length}
      />

      {/* Main Content */}
      <main id="tickets" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <span className="loading loading-spinner loading-lg text-violet-600"></span>
            <p className="mt-4 text-gray-500 font-medium">Loading tickets...</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Ticket Grid */}
            <TicketList
              tickets={tickets}
              onAddToProgress={handleAddToProgress}
              inProgressTickets={inProgressTickets}
            />

            {/* Right: Task Status Panel */}
            <div id="task-status">
              <TaskStatus
                inProgressTickets={inProgressTickets}
                onComplete={handleComplete}
                resolvedTickets={resolvedTickets}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
