const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewTab-bB1wzop9.js","assets/index-MzjM3Af-.js","assets/index-CLXYdOrw.css","assets/chart-pie-UzKeko7R.js","assets/UsersTab-BnPGSIY1.js","assets/ban-DEPFTrze.js","assets/PlansTab-Dgvfiox4.js","assets/ToolLimitTab-H8l9iqVC.js","assets/SettingsTab-Dx_a76wi.js","assets/LegalPagesTab-CGA7B3Lb.js","assets/KnowledgeBaseTab-Cqx_y783.js","assets/ChatSessionsTab-Bwine_D5.js","assets/AnalyticsTab-qpPdAjC_.js","assets/laptop-DFdMK4VH.js","assets/cpu-DLJB0WEK.js","assets/trending-down-DJcPF9ub.js","assets/AdminHelpDesk-ySi4i6--.js","assets/FinanceTab-DYsS1Ona.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, m as motion, v as useLanguage, r as reactExports, w as useNavigate, q as getUserData, x as ChartColumn, y as Users, M as MessageSquare, B as CreditCard, H as TrendingUp, l as Shield, F as FileText, I as Headphones, J as BookOpen, S as Settings, K as logo, N as ArrowLeft, A as AnimatePresence, O as React, _ as __vitePreload } from "./index-MzjM3Af-.js";
import { C as ChartPie } from "./chart-pie-UzKeko7R.js";
const ADMIN_EMAIL = "admin@uwo24.com";
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" }) });
const TabButton = ({ active, icon: Icon, label, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    onClick,
    title: label,
    className: `flex items-center gap-2 px-3 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${active ? "bg-primary text-white shadow-lg shadow-primary/30" : "text-subtext hover:bg-white/20 dark:hover:bg-white/10 hover:text-maintext"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-xs md:text-sm font-semibold", children: label })
    ]
  }
);
const StatCard = ({ icon: Icon, label, value, color = "primary", trend }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-primary/30 transition-all",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 text-${color}` }) }),
          trend && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg", children: trend })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: label })
      ] })
    ]
  }
);
const SectionCard = ({ title, children, action }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext text-lg", children: title }),
    action
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5", children })
] });
const OverviewTab = React.lazy(() => __vitePreload(() => import("./OverviewTab-bB1wzop9.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0));
const UsersTab = React.lazy(() => __vitePreload(() => import("./UsersTab-BnPGSIY1.js"), true ? __vite__mapDeps([4,1,2,5,3]) : void 0));
const PlansTab = React.lazy(() => __vitePreload(() => import("./PlansTab-Dgvfiox4.js"), true ? __vite__mapDeps([6,1,2,3]) : void 0));
const ToolLimitTab = React.lazy(() => __vitePreload(() => import("./ToolLimitTab-H8l9iqVC.js"), true ? __vite__mapDeps([7,1,2,3]) : void 0));
const SettingsTab = React.lazy(() => __vitePreload(() => import("./SettingsTab-Dx_a76wi.js"), true ? __vite__mapDeps([8,1,2,3]) : void 0));
const LegalPagesTab = React.lazy(() => __vitePreload(() => import("./LegalPagesTab-CGA7B3Lb.js"), true ? __vite__mapDeps([9,1,2,3]) : void 0));
const KnowledgeBaseTab = React.lazy(() => __vitePreload(() => import("./KnowledgeBaseTab-Cqx_y783.js"), true ? __vite__mapDeps([10,1,2,3]) : void 0));
const ChatSessionsTab = React.lazy(() => __vitePreload(() => import("./ChatSessionsTab-Bwine_D5.js"), true ? __vite__mapDeps([11,1,2,5]) : void 0));
const AnalyticsTab = React.lazy(() => __vitePreload(() => import("./AnalyticsTab-qpPdAjC_.js"), true ? __vite__mapDeps([12,1,2,13,14,3,15]) : void 0));
const AdminHelpDesk = React.lazy(() => __vitePreload(() => import("./AdminHelpDesk-ySi4i6--.js"), true ? __vite__mapDeps([16,1,2]) : void 0));
const FinanceTab = React.lazy(() => __vitePreload(() => import("./FinanceTab-DYsS1Ona.js"), true ? __vite__mapDeps([17,1,2]) : void 0));
const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = reactExports.useState("overview");
  const navigate = useNavigate();
  const user = getUserData();
  const isAdmin = (user == null ? void 0 : user.token) && ((user == null ? void 0 : user.email) === ADMIN_EMAIL || (user == null ? void 0 : user.role) === "admin");
  reactExports.useEffect(() => {
    if (!isAdmin) {
      navigate("/dashboard/chat", { replace: true });
    }
  }, [isAdmin, navigate]);
  if (!isAdmin) return null;
  const tabs = [
    { id: "overview", label: t("overview"), icon: ChartColumn },
    { id: "users", label: t("users"), icon: Users },
    { id: "chat-sessions", label: "Chat Sessions", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: ChartPie },
    { id: "plans", label: t("plans"), icon: CreditCard },
    { id: "finance", label: "Finance", icon: TrendingUp },
    { id: "tool-limit", label: t("toolLimit") || "Tool Limit", icon: Shield },
    { id: "legal", label: t("legalPages"), icon: FileText },
    { id: "helpdesk", label: t("helpDesk"), icon: Headphones },
    { id: "knowledge", label: t("knowledge"), icon: BookOpen },
    { id: "settings", label: t("settings"), icon: Settings }
  ];
  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
      case "users":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(UsersTab, {});
      case "chat-sessions":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ChatSessionsTab, {});
      case "analytics":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsTab, {});
      case "plans":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(PlansTab, {});
      case "finance":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceTab, {});
      case "tool-limit":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolLimitTab, {});
      case "legal":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(LegalPagesTab, {});
      case "helpdesk":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminHelpDesk, { isOpen: true, isEmbedded: true });
      case "knowledge":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeBaseTab, {});
      case "settings":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full min-h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto p-3 sm:p-5 lg:p-8 space-y-4 sm:space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-lg border border-white/10 overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "AISA", className: "w-7 h-7 sm:w-9 sm:h-9 object-contain" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl sm:text-2xl font-black text-maintext tracking-tight", children: t("adminDashboard") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-xs text-subtext font-semibold uppercase tracking-wider hidden sm:block", children: t("platformManagementConsole") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => navigate("/dashboard/chat"),
          className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 dark:hover:bg-white/10 transition-all border border-white/20 dark:border-white/10 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden xs:inline sm:inline", children: t("backToChat") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 admin-horizontal-scrollbar scrollbar-hide", children: tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabButton,
      {
        active: activeTab === tab.id,
        icon: tab.icon,
        label: tab.label,
        onClick: () => setActiveTab(tab.id)
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: renderTab() })
      },
      activeTab
    ) })
  ] }) });
};
const AdminDashboard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminDashboard
}, Symbol.toStringTag, { value: "Module" }));
export {
  AdminDashboard$1 as A,
  LoadingSpinner as L,
  StatCard as S,
  SectionCard as a
};
