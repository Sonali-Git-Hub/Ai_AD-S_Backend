import { r as reactExports, j as jsxRuntimeExports, m as motion, X, ae as Search, R as RefreshCw, u as Eye, A as AnimatePresence, a8 as axios, d2 as apis, z as zt } from "./index-BpSYSyeq.js";
const AdminHelpDesk = ({ isOpen, onClose, isEmbedded = false }) => {
  const [tickets, setTickets] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedTicket, setSelectedTicket] = reactExports.useState(null);
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const ticketsRes = await axios.get(`${apis.support}/tickets`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("[ADMIN HELPDESK] Tickets fetched:", ticketsRes.data.tickets);
      setTickets(ticketsRes.data.tickets || []);
    } catch (error) {
      console.error("[ADMIN] Error fetching tickets:", error);
      if (error.response) {
        console.error("[ADMIN] Error details:", error.response.data);
      }
      zt.error("Failed to fetch support tickets");
      setTickets([]);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (isOpen || isEmbedded) {
      fetchTickets();
      const interval = setInterval(fetchTickets, 1e4);
      return () => clearInterval(interval);
    }
  }, [isOpen, isEmbedded]);
  const filteredTickets = (tickets || []).filter((ticket) => {
    var _a, _b, _c;
    const matchesSearch = ((_a = ticket == null ? void 0 : ticket.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = ticket == null ? void 0 : ticket.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase())) || ((_c = ticket == null ? void 0 : ticket.message) == null ? void 0 : _c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "resolved":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "in_progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };
  if (!isOpen && !isEmbedded) return null;
  const modalClasses = "bg-background border border-border rounded-2xl w-[95vw] max-w-7xl h-[90vh] flex flex-col shadow-2xl overflow-hidden";
  const embeddedClasses = "bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl w-full h-[700px] flex flex-col shadow-xl overflow-hidden backdrop-blur-md";
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      animate: isEmbedded ? {} : { opacity: 1, scale: 1 },
      exit: isEmbedded ? {} : { opacity: 0, scale: 0.95 },
      className: isEmbedded ? embeddedClasses : modalClasses,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-maintext flex items-center gap-2", children: "🎧 Admin Help Desk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mt-1", children: "Manage user support queries" })
          ] }),
          !isEmbedded && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-subtext" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search tickets...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg text-maintext placeholder-subtext focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: fetchTickets,
              className: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
                "Refresh"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" }) }) : filteredTickets.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-subtext", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg", children: "No tickets found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", children: "Try adjusting your filters" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: filteredTickets.map((ticket) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "bg-surface border border-border rounded-xl p-4 hover:border-primary/50 transition-colors cursor-pointer",
            onClick: () => setSelectedTicket(ticket),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-maintext", children: ticket.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full border ${getStatusColor(ticket.status)}`, children: ticket.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20", children: ticket.issueType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-subtext mb-2", children: ticket.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-maintext line-clamp-2", children: ticket.message })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: new Date(ticket.createdAt).toLocaleDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setSelectedTicket(ticket);
                    },
                    className: "p-2 hover:bg-primary/10 rounded-lg transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 text-primary" })
                  }
                ) })
              ] })
            ] })
          },
          ticket._id
        )) }) })
      ]
    }
  );
  const ticketModal = /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedTicket && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      className: "bg-background border border-border rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl m-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-maintext", children: "Ticket Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSelectedTicket(null),
              className: "p-2 hover:bg-surface rounded-lg transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-subtext" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-medium", children: selectedTicket.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Issue Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: selectedTicket.issueType })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext bg-surface p-4 rounded-lg border border-border whitespace-pre-wrap", children: selectedTicket.message })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm px-3 py-1 rounded-full border ${getStatusColor(selectedTicket.status)}`, children: selectedTicket.status }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-subtext", children: "Created" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext", children: new Date(selectedTicket.createdAt).toLocaleString() })
            ] })
          ] })
        ] })
      ] })
    }
  ) }) });
  if (isEmbedded) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full relative", children: [
      content,
      ticketModal
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm", children: [
    content,
    ticketModal
  ] });
};
export {
  AdminHelpDesk as default
};
