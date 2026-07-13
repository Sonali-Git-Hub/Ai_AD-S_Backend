import { v as useLanguage, r as reactExports, j as jsxRuntimeExports, R as RefreshCw, af as Activity, y as Users, ch as DollarSign, I as Headphones, a as apiService } from "./index-MzjM3Af-.js";
import { S as StatCard, a as SectionCard } from "./AdminDashboard-BoGLjgtK.js";
import "./chart-pie-UzKeko7R.js";
const OverviewTab = () => {
  const { t } = useLanguage();
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const fetchStats = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const data = await apiService.getAdminOverviewStats();
      setStats(data.stats || data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  reactExports.useEffect(() => {
    fetchStats();
    const interval = setInterval(() => fetchStats(), 1e4);
    return () => clearInterval(interval);
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: t("loadingRealTimeOverview") })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-bold text-subtext uppercase tracking-widest flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
        " ",
        t("livePlatformActivity")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => fetchStats(true),
          disabled: refreshing,
          className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all disabled:opacity-50",
          title: "Manual Refresh",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Users, label: t("totalUsers"), value: (stats == null ? void 0 : stats.totalUsers) ?? 0 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Activity, label: t("activeSubscriptions"), value: (stats == null ? void 0 : stats.activeSubscriptions) ?? 0, color: "emerald-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: t("totalRevenue"), value: `₹${(stats == null ? void 0 : stats.totalRevenue) ?? 0}`, color: "amber-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Headphones, label: t("support"), value: (stats == null ? void 0 : stats.pendingTickets) ?? 0, color: "primary", trend: (stats == null ? void 0 : stats.pendingTickets) > 0 ? "Action Required" : "All Clear" })
    ] }),
    (stats == null ? void 0 : stats.toolUsage) && stats.toolUsage.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("toolUsageAnalytics"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: stats.toolUsage.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-white/20 dark:bg-white/5 rounded-xl border border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-maintext text-sm", children: tool._id || "Unknown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 text-xs text-subtext", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
        tool.count,
        " uses"
      ] }) })
    ] }, i)) }) })
  ] });
};
export {
  OverviewTab as default
};
