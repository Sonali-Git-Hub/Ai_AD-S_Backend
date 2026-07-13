import { v as useLanguage, r as reactExports, M as MessageSquare, af as Activity, P as Check, C as CircleAlert, L as Layers, H as TrendingUp, b as Clock, y as Users, j as jsxRuntimeExports, m as motion, ae as Search, X, R as RefreshCw, c6 as Mail, bU as ChevronLeft, e as ChevronRight, A as AnimatePresence, cY as Bot, cP as User, a as apiService, z as zt } from "./index-BpSYSyeq.js";
import { B as Ban } from "./ban-BpyQl-tj.js";
const STATUS_META = {
  active: { label: "Active", color: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
  completed: { label: "Completed", color: "bg-green-500/15 text-green-400 border-green-500/30" },
  abandoned: { label: "Abandoned", color: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
  failed: { label: "Failed", color: "bg-red-500/15 text-red-400 border-red-500/30" }
};
const MODE_LABELS = {
  NORMAL_CHAT: "Normal Chat",
  chat: "Normal Chat",
  CHAT: "Normal Chat",
  web_search: "Web Search",
  DEEP_SEARCH: "Deep Search",
  CODE_WRITER: "Code Writer",
  CODING_HELP: "Code Writer",
  code: "Code Writer",
  LEGAL_TOOLKIT: "AI Legal",
  legal: "AI Legal",
  IMAGE_GENERATION: "Generate Image",
  imageGen: "Generate Image",
  image: "Generate Image",
  VIDEO_GENERATION: "Generate Video",
  videoGen: "Generate Video",
  video: "Generate Video",
  AUDIO_CONVERT: "Convert to Audio",
  audioGen: "Convert to Audio",
  audio: "Convert to Audio",
  DOCUMENT_CONVERT: "Convert Documents",
  document: "Convert Documents",
  IMAGE_EDIT: "Edit Image",
  editImage: "Edit Image",
  edit_image: "Edit Image",
  CASHFLOW: "AI CashFlow",
  ai_cashflow: "AI CashFlow"
};
const SessionStatusBadge = ({ status }) => {
  const meta = STATUS_META[status] || { label: status, color: "bg-gray-500/15 text-gray-400 border-gray-500/30" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border whitespace-nowrap ${meta.color}`, children: meta.label });
};
const ChatSessionsTab = () => {
  var _a, _b, _c, _d;
  const { t } = useLanguage();
  const [stats, setStats] = reactExports.useState(null);
  const [sessions, setSessions] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [statsLoading, setStatsLoading] = reactExports.useState(true);
  const [pagination, setPagination] = reactExports.useState({ total: 0, page: 1, limit: 15, totalPages: 1 });
  const [selectedSession, setSelectedSession] = reactExports.useState(null);
  const [detailLoading, setDetailLoading] = reactExports.useState(false);
  const [mailModal, setMailModal] = reactExports.useState({ isOpen: false, email: "", subject: "", message: "", sending: false });
  const handleOpenMailModal = (email) => {
    setMailModal({
      isOpen: true,
      email: email || "",
      subject: "Notification from AISA Admin",
      message: "",
      sending: false
    });
  };
  const handleSendMail = async (e) => {
    var _a2, _b2;
    e.preventDefault();
    if (!mailModal.email || !mailModal.message) {
      zt.error("Recipient email and message are required.");
      return;
    }
    setMailModal((prev) => ({ ...prev, sending: true }));
    try {
      const res = await apiService.sendEmailToUser({
        toEmail: mailModal.email,
        subject: mailModal.subject || "Message from AISA Admin",
        message: mailModal.message
      });
      if (res.success) {
        zt.success("Email sent successfully!");
        setMailModal({ isOpen: false, email: "", subject: "", message: "", sending: false });
      } else {
        zt.error(res.message || "Failed to send email.");
      }
    } catch (err) {
      zt.error(((_b2 = (_a2 = err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b2.message) || "Failed to send email.");
    } finally {
      setMailModal((prev) => ({ ...prev, sending: false }));
    }
  };
  const [search, setSearch] = reactExports.useState("");
  const [filterStatus, setFilterStatus] = reactExports.useState("");
  const [filterMode, setFilterMode] = reactExports.useState("");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const data = await apiService.getAdminChatSessionStats();
      if (data.success) setStats(data.stats);
    } catch (err) {
      console.error("Chat session stats error:", err);
    } finally {
      setStatsLoading(false);
    }
  };
  const fetchSessions = async (page = 1) => {
    setLoading(true);
    try {
      const data = await apiService.getAdminChatSessions({
        page,
        limit: pagination.limit,
        search,
        status: filterStatus,
        mode: filterMode,
        dateFrom,
        dateTo
      });
      if (data.success) {
        setSessions(data.sessions || []);
        setPagination(data.pagination || { total: 0, page: 1, limit: 15, totalPages: 1 });
      }
    } catch (err) {
      console.error("Chat sessions list error:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchDetail = async (sessionId) => {
    setDetailLoading(true);
    try {
      const data = await apiService.getAdminChatSessionDetail(sessionId);
      if (data.success) setSelectedSession(data.session);
    } catch (err) {
      console.error("Chat session detail error:", err);
    } finally {
      setDetailLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
  }, []);
  reactExports.useEffect(() => {
    fetchSessions(1);
  }, [search, filterStatus, filterMode, dateFrom, dateTo]);
  const formatDate = (val) => {
    if (!val) return "—";
    return new Date(typeof val === "number" ? val : val).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const statCards = [
    { label: "Total Sessions", value: (stats == null ? void 0 : stats.totalSessions) ?? "—", icon: MessageSquare, color: "text-primary" },
    { label: "Active Now", value: ((_a = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _a.active) ?? "—", icon: Activity, color: "text-blue-400" },
    { label: "Completed", value: ((_b = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _b.completed) ?? "—", icon: Check, color: "text-green-400" },
    { label: "Abandoned", value: ((_c = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _c.abandoned) ?? "—", icon: CircleAlert, color: "text-amber-400" },
    { label: "Failed", value: ((_d = stats == null ? void 0 : stats.statusCounts) == null ? void 0 : _d.failed) ?? "—", icon: Ban, color: "text-red-400" },
    { label: "Total Messages", value: (stats == null ? void 0 : stats.totalMessages) ?? "—", icon: Layers, color: "text-purple-400" },
    { label: "Avg Messages/Session", value: (stats == null ? void 0 : stats.avgMessages) ?? "—", icon: TrendingUp, color: "text-cyan-400" },
    { label: "Avg Duration", value: (stats == null ? void 0 : stats.avgDuration) ?? "—", icon: Clock, color: "text-pink-400" },
    { label: "Guest Sessions", value: (stats == null ? void 0 : stats.totalGuestSessions) ?? "—", icon: Users, color: "text-orange-400" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3", children: statCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.04 },
        className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2 hover:border-primary/30 transition-all group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(card.icon, { className: `w-4 h-4 ${card.color}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-black ${statsLoading ? "opacity-30 animate-pulse" : ""} text-maintext`, children: statsLoading ? "…" : card.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-subtext uppercase tracking-wider leading-tight", children: card.label })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-3 sm:p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 items-stretch sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:flex-1 sm:min-w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Search by name, email or session ID…",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary/50 transition-all placeholder:text-subtext/40 text-maintext"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[120px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterStatus,
              onChange: (e) => setFilterStatus(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Statuses" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "abandoned", children: "Abandoned" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: "Failed" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[120px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Mode" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: filterMode,
              onChange: (e) => setFilterMode(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Modes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NORMAL_CHAT", children: "Normal Chat" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "web_search", children: "Web Search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DEEP_SEARCH", children: "Deep Search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CODE_WRITER", children: "Code Writer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LEGAL_TOOLKIT", children: "AI Legal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IMAGE_GENERATION", children: "Generate Image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VIDEO_GENERATION", children: "Generate Video" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AUDIO_CONVERT", children: "Convert to Audio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DOCUMENT_CONVERT", children: "Convert Documents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IMAGE_EDIT", children: "Edit Image" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CASHFLOW", children: "AI CashFlow" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[110px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "From" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 flex-1 min-w-[110px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value),
              className: "bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl px-3 py-2.5 text-sm text-maintext outline-none focus:border-primary/50 transition-all"
            }
          )
        ] })
      ] }),
      (search || filterStatus || filterMode || dateFrom || dateTo) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setSearch("");
            setFilterStatus("");
            setFilterMode("");
            setDateFrom("");
            setDateTo("");
          },
          className: "px-4 py-2.5 rounded-xl text-sm font-bold text-subtext hover:text-red-400 hover:bg-red-500/10 transition-all border border-white/10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-white/20 dark:border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-primary" }),
          "Chat Sessions",
          !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext font-normal ml-1", children: [
            "(",
            pagination.total,
            " total)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          fetchStats();
          fetchSessions(pagination.page);
        }, className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all", title: "Refresh", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${loading ? "animate-spin" : ""}` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto -mx-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[720px] text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/10", children: ["Session ID", "User", "Email", "Mode", "Start Time", "Duration", "Total", "User", "AI", "Status"].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-[10px] font-bold text-subtext uppercase tracking-wider whitespace-nowrap", children: h }, i)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/5", children: Array.from({ length: 10 }).map((_2, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-white/10 rounded-full animate-pulse", style: { width: `${40 + Math.random() * 40}%` } }) }, j)) }, i)) : sessions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 10, className: "text-center py-12 text-subtext text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
          "No sessions found"
        ] }) }) : sessions.map((s, i) => {
          var _a2;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.tr,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: i * 0.02 },
              onClick: () => fetchDetail(s.sessionId),
              className: "border-b border-white/5 hover:bg-primary/5 cursor-pointer transition-all group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-primary/80 group-hover:text-primary transition-colors whitespace-nowrap", children: [
                  (_a2 = s.sessionId) == null ? void 0 : _a2.slice(0, 12),
                  "…"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-maintext text-xs whitespace-nowrap", children: s.userName || "Guest" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext text-xs whitespace-nowrap", children: s.userEmail || "—" }),
                  s.userEmail && s.userEmail !== "—" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        handleOpenMailModal(s.userEmail);
                      },
                      className: "p-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100",
                      title: "Send Email to User",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: MODE_LABELS[s.detectedMode] || s.detectedMode || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext whitespace-nowrap", children: formatDate(s.createdAt) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-subtext whitespace-nowrap", children: s.duration || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-maintext whitespace-nowrap", children: s.totalMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-400 font-semibold whitespace-nowrap", children: s.userMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-emerald-400 font-semibold whitespace-nowrap", children: s.aiMessages ?? 0 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SessionStatusBadge, { status: s.sessionStatus }) })
              ]
            },
            s.sessionId || i
          );
        }) })
      ] }) }),
      pagination.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext", children: [
          "Page ",
          pagination.page,
          " of ",
          pagination.totalPages,
          "  ·  ",
          pagination.total,
          " sessions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page <= 1 || loading,
              onClick: () => fetchSessions(pagination.page - 1),
              className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-maintext px-2", children: pagination.page }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page >= pagination.totalPages || loading,
              onClick: () => fetchSessions(pagination.page + 1),
              className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: (selectedSession || detailLoading) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[9998] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-md p-4",
        onClick: (e) => {
          if (e.target === e.currentTarget) setSelectedSession(null);
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 40 },
            transition: { type: "spring", damping: 28, stiffness: 300 },
            className: "bg-white dark:bg-[#12141a] border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-white/10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm", children: "Session Detail" }),
                    selectedSession && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-subtext", children: selectedSession.sessionId })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedSession(null),
                    className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              detailLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center flex-1 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-primary animate-spin" }) }) : selectedSession && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 p-5 border-b border-white/10 shrink-0 overflow-y-auto max-h-[220px] custom-scrollbar", children: [
                  { label: "User", value: selectedSession.userName || "Guest" },
                  {
                    label: "Email",
                    value: selectedSession.userEmail ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-maintext break-all leading-snug", children: selectedSession.userEmail }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => handleOpenMailModal(selectedSession.userEmail),
                          className: "self-start flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/15 hover:bg-primary/25 text-primary text-[9px] font-bold uppercase tracking-wide transition-all border border-primary/20",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-2.5 h-2.5" }),
                            " Send Mail"
                          ]
                        }
                      )
                    ] }) : "—"
                  },
                  { label: "Status", value: /* @__PURE__ */ jsxRuntimeExports.jsx(SessionStatusBadge, { status: selectedSession.sessionStatus }) },
                  { label: "Mode", value: MODE_LABELS[selectedSession.detectedMode] || selectedSession.detectedMode || "—" },
                  { label: "Duration", value: selectedSession.duration || "—" },
                  { label: "Start Time", value: formatDate(selectedSession.createdAt) },
                  { label: "Last Activity", value: formatDate(selectedSession.lastModified) },
                  { label: "Total Messages", value: selectedSession.totalMessages ?? 0 },
                  { label: "User / AI", value: `${selectedSession.userMessages ?? 0} / ${selectedSession.aiMessages ?? 0}` }
                ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 dark:bg-white/5 rounded-xl p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider mb-1", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-maintext", children: item.value })
                ] }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-3 min-h-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider mb-3 sticky top-0 bg-white dark:bg-[#12141a] pb-2", children: "Conversation History" }),
                  !selectedSession.messages || selectedSession.messages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext text-sm py-6", children: "No messages in this session" }) : selectedSession.messages.map((msg, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                      children: [
                        msg.role !== "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3 h-3 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[80%] rounded-2xl px-3 py-2 text-xs ${msg.role === "user" ? "bg-primary/20 text-maintext rounded-br-sm" : "bg-white/20 dark:bg-white/5 text-maintext rounded-bl-sm"}`, children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed whitespace-pre-wrap break-words", children: msg.content }),
                          msg.imageUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary mt-1", children: "📸 Image attached" }),
                          msg.videoUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary mt-1", children: "🎬 Video attached" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext/60 mt-1 text-right", children: msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "" })
                        ] }),
                        msg.role === "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 text-blue-400" }) })
                      ]
                    },
                    msg.id || idx
                  ))
                ] })
              ] })
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: mailModal.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[2100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
        onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            className: "bg-white dark:bg-[#12141a] border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-lg p-6 relative overflow-hidden",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext text-lg font-bold", children: "Send Email to User" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext", children: "Direct communication from AISA™ Admin" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
                    className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSendMail, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "To" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "email",
                      readOnly: true,
                      disabled: true,
                      value: mailModal.email,
                      className: "w-full bg-white/20 dark:bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-subtext outline-none cursor-not-allowed"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold font-bold", children: "Subject" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      required: true,
                      value: mailModal.subject,
                      onChange: (e) => setMailModal((prev) => ({ ...prev, subject: e.target.value })),
                      className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all",
                      placeholder: "Enter email subject..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider font-semibold font-bold", children: "Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      required: true,
                      rows: 6,
                      value: mailModal.message,
                      onChange: (e) => setMailModal((prev) => ({ ...prev, message: e.target.value })),
                      className: "w-full bg-white/30 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl py-2.5 px-4 text-sm text-maintext outline-none focus:border-primary/50 transition-all resize-none",
                      placeholder: "Write your email message here..."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-4 border-t border-white/10 mt-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setMailModal((prev) => ({ ...prev, isOpen: false })),
                      className: "px-5 py-2.5 rounded-xl text-sm font-bold text-subtext hover:text-maintext transition-all hover:bg-white/5",
                      children: "Cancel"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: mailModal.sending,
                      className: "px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                      children: mailModal.sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
                        "Sending..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                        "Send Email"
                      ] })
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
};
export {
  ChatSessionsTab as default
};
