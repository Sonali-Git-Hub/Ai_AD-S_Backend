const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-MzjM3Af-.js","assets/index-CLXYdOrw.css"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, H as TrendingUp, d3 as FileSpreadsheet, A as AnimatePresence, m as motion, a as apiService, af as Activity, n as TriangleAlert, p as CircleCheckBig, cq as RotateCcw, R as RefreshCw, X, ch as DollarSign, x as ChartColumn, d as Calendar, B as CreditCard, y as Users, bX as Download, ae as Search, bU as ChevronLeft, e as ChevronRight, d4 as ArrowUpRight, _ as __vitePreload } from "./index-MzjM3Af-.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("ArrowDownRight", __iconNode$2);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
];
const Percent = createLucideIcon("Percent", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("Receipt", __iconNode);
const fmt = (n = 0) => `₹${Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const fmtNum = (n = 0) => Number(n).toLocaleString("en-IN");
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const GATEWAY_COLORS = {
  razorpay: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", hex: "#60a5fa" },
  paypal: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", hex: "#fbbf24" },
  apple_pay: { bg: "bg-gray-400/10", text: "text-gray-300", border: "border-gray-400/20", hex: "#9ca3af" },
  play_store: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", hex: "#34d399" },
  app_store: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", hex: "#a78bfa" }
};
const STATUS_COLORS = {
  captured: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
  success: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
  pending: { bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
  failed: { bg: "bg-red-500/10", text: "text-red-400", dot: "bg-red-400" },
  refunded: { bg: "bg-blue-500/10", text: "text-blue-400", dot: "bg-blue-400" }
};
const downloadBlob = (dataOrResponse, filename) => {
  const rawData = dataOrResponse && dataOrResponse.data !== void 0 ? dataOrResponse.data : dataOrResponse;
  const blob = rawData instanceof Blob ? rawData : new Blob([rawData]);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
const Spinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" }) });
const KPICard = ({ label, value, sub, icon: Icon, color = "primary", trend, trendUp }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    className: "relative bg-white/5 dark:bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 overflow-hidden group hover:border-primary/30 transition-all",
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-xl flex items-center justify-center bg-${color}/10`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 text-${color}` }) }),
          trend !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-lg ${trendUp ? "text-emerald-400 bg-emerald-400/10" : "text-red-400 bg-red-400/10"}`, children: [
            trendUp ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3 h-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "w-3 h-3" }),
            Math.abs(trend),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-black text-maintext tracking-tight", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold text-subtext uppercase tracking-wider mt-0.5", children: label }),
        sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext/70 mt-1", children: sub })
      ] })
    ]
  }
);
const SubTab = ({ id, label, icon: Icon, active, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "button",
  {
    onClick: () => onClick(id),
    className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${active ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "text-subtext hover:text-maintext border-white/10 hover:border-white/20 hover:bg-white/5"}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5" }),
      label
    ]
  }
);
const LineChart = ({ data, height = 120 }) => {
  if (!data || data.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-32 text-subtext text-xs", children: "No chart data yet" });
  }
  const padLeft = 60, padRight = 20, padTop = 10, padBottom = 30;
  const width = 600;
  const maxVal = Math.max(...data.map((d) => d.revenue), 1);
  const toX = (i) => padLeft + i / (data.length - 1 || 1) * (width - padLeft - padRight);
  const toY = (v) => padTop + (1 - v / maxVal) * (height - padTop - padBottom);
  const pathD = data.map((d, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(d.revenue)}`).join(" ");
  const areaD = `${pathD} L ${toX(data.length - 1)} ${toY(0)} L ${toX(0)} ${toY(0)} Z`;
  const monthLabel = (d) => {
    var _a, _b, _c;
    const m = ((_b = MONTHS[(((_a = d._id) == null ? void 0 : _a.month) || 1) - 1]) == null ? void 0 : _b.slice(0, 3)) || "";
    return `${m} '${String(((_c = d._id) == null ? void 0 : _c.year) || "").slice(2)}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full", style: { height }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "lineGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#6366f1", stopOpacity: "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#6366f1", stopOpacity: "0" })
    ] }) }),
    [0, 0.25, 0.5, 0.75, 1].map((f) => {
      const y = toY(maxVal * f);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: padLeft,
            y1: y,
            x2: width - padRight,
            y2: y,
            stroke: "rgba(255,255,255,0.05)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: padLeft - 6,
            y: y + 4,
            textAnchor: "end",
            fill: "rgba(255,255,255,0.3)",
            fontSize: "9",
            children: maxVal * f >= 1e3 ? `₹${(maxVal * f / 1e3).toFixed(0)}k` : `₹${(maxVal * f).toFixed(0)}`
          }
        )
      ] }, f);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: areaD, fill: "url(#lineGrad)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: pathD, fill: "none", stroke: "#6366f1", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    data.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: toX(i), cy: toY(d.revenue), r: "4", fill: "#6366f1", stroke: "rgba(255,255,255,0.2)", strokeWidth: "1.5" }),
      i % Math.max(1, Math.floor(data.length / 6)) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "text",
        {
          x: toX(i),
          y: height - 4,
          textAnchor: "middle",
          fill: "rgba(255,255,255,0.35)",
          fontSize: "9",
          children: monthLabel(d)
        }
      )
    ] }, i))
  ] });
};
const DonutChart = ({ data, size = 120, colors }) => {
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", style: { width: size, height: size }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-subtext", children: "No data" }) }) });
  const total = data.reduce((s, d) => s + (d.revenue || d.count || 0), 0);
  const cx = size / 2, cy = size / 2, r = size * 0.38, innerR = size * 0.22;
  let angle = -Math.PI / 2;
  const segments = data.map((d, i) => {
    const val = d.revenue || d.count || 0;
    const frac = total > 0 ? val / total : 0;
    const sweep = frac * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle);
    const xi1 = cx + innerR * Math.cos(angle - sweep);
    const yi1 = cy + innerR * Math.sin(angle - sweep);
    const xi2 = cx + innerR * Math.cos(angle);
    const yi2 = cy + innerR * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    const color = colors ? colors[i % colors.length] : `hsl(${(i * 60 + 220) % 360}, 70%, 65%)`;
    return { d: `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerR} ${innerR} 0 ${large} 0 ${xi1} ${yi1} Z`, color, frac, val };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, children: [
    segments.map((seg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: seg.d, fill: seg.color, opacity: "0.85" }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: cx, y: cy + 4, textAnchor: "middle", fill: "white", fontSize: size * 0.1, fontWeight: "800", children: fmtNum(total) })
  ] });
};
const BarChart = ({ data, height = 80 }) => {
  if (!data || data.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-20 text-xs text-subtext", children: "No data" });
  const maxVal = Math.max(...data.map((d) => d.revenue), 1);
  const barW = Math.max(2, Math.floor(580 / (data.length + 1)));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: `0 0 600 ${height}`, className: "w-full", style: { height }, children: data.map((d, i) => {
    const barH = Math.max(2, d.revenue / maxVal * (height - 20));
    const x = 10 + i * (barW + 2);
    const y = height - barH - 4;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "rect",
      {
        x,
        y,
        width: barW,
        height: barH,
        rx: "2",
        fill: "#6366f1",
        opacity: "0.7"
      },
      i
    );
  }) });
};
const FinanceDashboardTab = () => {
  const [stats, setStats] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const [syncing, setSyncing] = reactExports.useState(false);
  const [syncResult, setSyncResult] = reactExports.useState(null);
  const load = reactExports.useCallback(async (isManual = false) => {
    if (isManual) setRefreshing(true);
    try {
      const data = await apiService.getFinanceStats();
      setStats(data.stats);
    } catch (e) {
      console.error("Finance stats fetch error:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);
  const handleSync = reactExports.useCallback(async () => {
    var _a, _b;
    setSyncing(true);
    setSyncResult(null);
    try {
      const result = await apiService.syncRazorpayPayments(90);
      setSyncResult(result.stats);
      await load(false);
    } catch (e) {
      console.error("Razorpay sync error:", e);
      setSyncResult({ error: ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || e.message });
    } finally {
      setSyncing(false);
    }
  }, [load]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {});
  const s = stats || {};
  const growth = s.revenueGrowth ?? 0;
  const isGrowthUp = growth >= 0;
  const buildMonthSeries = () => {
    const now = /* @__PURE__ */ new Date();
    const series = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const found = (s.monthlyRevenueSeries || []).find((m) => m._id.year === d.getFullYear() && m._id.month === d.getMonth() + 1);
      series.push({
        _id: { year: d.getFullYear(), month: d.getMonth() + 1 },
        revenue: (found == null ? void 0 : found.revenue) || 0,
        count: (found == null ? void 0 : found.count) || 0
      });
    }
    return series;
  };
  const monthSeries = buildMonthSeries();
  const gatewayColors = (s.gatewayDistribution || []).map((g) => {
    var _a;
    return ((_a = GATEWAY_COLORS[g._id]) == null ? void 0 : _a.hex) || "#6366f1";
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-bold text-subtext uppercase tracking-widest flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5 text-primary" }),
          "Live Finance Overview"
        ] }),
        (stats == null ? void 0 : stats.dataSource) === "subscriptions_fallback" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-amber-400 mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3 h-3" }),
          'Showing estimated data from subscriptions. Click "Sync Razorpay" for accurate amounts.'
        ] }),
        (stats == null ? void 0 : stats.dataSource) === "invoices" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-emerald-400 mt-1 flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3" }),
          "Showing verified data synced from Razorpay."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSync,
            disabled: syncing || refreshing,
            className: "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
            title: "Sync payment data from Razorpay API",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: `w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}` }),
              syncing ? "Syncing…" : "Sync Razorpay"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => load(true),
            disabled: refreshing || syncing,
            className: "p-1.5 rounded-lg text-subtext hover:text-primary hover:bg-primary/10 transition-all disabled:opacity-50",
            title: "Refresh dashboard data",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: syncResult && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        className: `flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border text-xs font-medium ${syncResult.error ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            syncResult.error ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 flex-shrink-0" }),
            syncResult.error ? `Sync failed: ${syncResult.error}` : `✓ Synced ${syncResult.synced} new payment${syncResult.synced !== 1 ? "s" : ""} · Skipped ${syncResult.skipped} (already synced) · ${syncResult.errors} error${syncResult.errors !== 1 ? "s" : ""}`
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSyncResult(null), className: "p-0.5 hover:opacity-70", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: DollarSign, label: "Total Revenue", value: fmt(s.totalRevenue), color: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: TrendingUp, label: "Today's Revenue", value: fmt(s.todayRevenue), sub: `${fmtNum(s.todayTransactions)} txns`, color: "emerald-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: ChartColumn, label: "This Week", value: fmt(s.weekRevenue), color: "blue-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Calendar, label: "This Month", value: fmt(s.monthRevenue), sub: `${fmtNum(s.monthTransactions)} txns`, color: "violet-400", trend: growth, trendUp: isGrowthUp }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: TrendingUp, label: "This Year", value: fmt(s.yearRevenue), color: "amber-400" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Percent, label: "Total GST Collected", value: fmt(s.totalGst), sub: "18% CGST+SGST / IGST", color: "amber-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Receipt, label: "Net Revenue (Base)", value: fmt(s.netRevenue), sub: "Excl. GST", color: "emerald-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: DollarSign, label: "Avg Order Value", value: fmt(s.avgOrderValue), color: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: TrendingUp, label: "Revenue Growth", value: `${isGrowthUp ? "+" : ""}${growth}%`, sub: "vs last month", color: isGrowthUp ? "emerald-400" : "red-400" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Activity, label: "Total Transactions", value: fmtNum(s.totalTransactions), color: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: CreditCard, label: "Active Subscriptions", value: fmtNum(s.activeSubscriptions), color: "emerald-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Users, label: "Total Customers", value: fmtNum(s.totalUsers), sub: `+${s.newUsersThisMonth || 0} this month`, color: "blue-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KPICard, { icon: Activity, label: "Cancelled Subs", value: fmtNum(s.cancelledSubscriptions), color: "red-400" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext", children: "Monthly Revenue (12 Months)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext bg-white/5 px-2 py-0.5 rounded-lg", children: "Line Chart" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LineChart, { data: monthSeries, height: 130 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext mb-3", children: "Gateway Distribution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DonutChart, { data: s.gatewayDistribution || [], size: 100, colors: gatewayColors }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex-1 min-w-0", children: [
            (s.gatewayDistribution || []).map((g, i) => {
              const colors = GATEWAY_COLORS[g._id] || { text: "text-primary", hex: "#6366f1" };
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full flex-shrink-0", style: { background: colors.hex } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold ${colors.text} truncate uppercase`, children: g._id })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-subtext whitespace-nowrap", children: [
                  g.count,
                  " txns"
                ] })
              ] }, i);
            }),
            (!s.gatewayDistribution || s.gatewayDistribution.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext", children: "No payment data yet" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext mb-3", children: "Daily Revenue (Last 30 Days)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart, { data: s.dailyRevenueSeries || [], height: 80 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext mb-3", children: "Subscription Plan Revenue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          (s.planDistribution || []).slice(0, 5).map((p, i) => {
            const totalPlan = (s.planDistribution || []).reduce((s2, d) => s2 + d.revenue, 0);
            const pct = totalPlan > 0 ? Math.round(p.revenue / totalPlan * 100) : 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-maintext truncate max-w-[120px]", children: p._id || "Unknown Plan" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext ml-2", children: [
                  fmt(p.revenue),
                  " · ",
                  p.count,
                  " subs"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary rounded-full transition-all", style: { width: `${pct}%` } }) })
            ] }, i);
          }),
          (!s.planDistribution || s.planDistribution.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext py-4 text-center", children: "No plan data yet" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext mb-4", children: "GST Breakdown (CA Report)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        { label: "Taxable Base Amount", value: fmt(s.netRevenue), sub: "Pre-tax revenue" },
        { label: "CGST Collected (9%)", value: fmt(s.totalCgst), sub: "Central GST" },
        { label: "SGST Collected (9%)", value: fmt(s.totalSgst), sub: "State GST" },
        { label: "IGST Collected (18%)", value: fmt(s.totalIgst), sub: "Integrated GST" }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl p-3 border border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wider", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-black text-maintext mt-1", children: item.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext/60 mt-0.5", children: item.sub })
      ] }, i)) })
    ] })
  ] });
};
const InvoiceLedgerTab = () => {
  const [invoices, setInvoices] = reactExports.useState([]);
  const [filterTotals, setFilterTotals] = reactExports.useState(null);
  const [pagination, setPagination] = reactExports.useState({ total: 0, page: 1, pages: 1 });
  const [loading, setLoading] = reactExports.useState(true);
  const [exporting, setExporting] = reactExports.useState(false);
  const [filters, setFilters] = reactExports.useState({
    search: "",
    gateway: "",
    status: "",
    month: "",
    year: "",
    startDate: "",
    endDate: "",
    sortBy: "createdAt",
    sortOrder: "desc",
    page: 1,
    limit: 20
  });
  const debounceRef = reactExports.useRef(null);
  const loadInvoices = reactExports.useCallback(async (f = filters) => {
    setLoading(true);
    try {
      const params = {};
      Object.entries(f).forEach(([k, v]) => {
        if (v !== "") params[k] = v;
      });
      const data = await apiService.getFinanceInvoices(params);
      setInvoices(data.invoices || []);
      setFilterTotals(data.filterTotals);
      setPagination(data.pagination || { total: 0, page: 1, pages: 1 });
    } catch (e) {
      console.error("Invoice fetch error:", e);
    } finally {
      setLoading(false);
    }
  }, []);
  reactExports.useEffect(() => {
    loadInvoices(filters);
  }, [filters]);
  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value, page: key === "page" ? value : 1 };
    setFilters(newFilters);
  };
  const handleSearchChange = (val) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      updateFilter("search", val);
    }, 400);
  };
  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const params = {};
      ["gateway", "status", "month", "year", "startDate", "endDate"].forEach((k) => {
        if (filters[k]) params[k] = filters[k];
      });
      const response = await apiService.exportFinanceCSV(params);
      const month = filters.month ? String(filters.month).padStart(2, "0") : "";
      const year = filters.year || "";
      const filename = month && year ? `AISA_Invoices_${year}_${month}.csv` : `AISA_Invoices_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
      downloadBlob(response, filename);
    } catch (e) {
      console.error("Export failed:", e);
      alert("Export failed. Please try again.");
    } finally {
      setExporting(false);
    }
  };
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[180px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-subtext" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search invoice, name, email, ID...",
              onChange: (e) => handleSearchChange(e.target.value),
              className: "w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-maintext placeholder-subtext focus:outline-none focus:border-primary transition-all"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filters.gateway,
            onChange: (e) => updateFilter("gateway", e.target.value),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-maintext focus:outline-none focus:border-primary transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Gateways" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "razorpay", children: "Razorpay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "paypal", children: "PayPal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "apple_pay", children: "Apple Pay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "play_store", children: "Play Store" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "app_store", children: "App Store" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filters.status,
            onChange: (e) => updateFilter("status", e.target.value),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-maintext focus:outline-none focus:border-primary transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Statuses" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "captured", children: "Captured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "success", children: "Success" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: "Failed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "refunded", children: "Refunded" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filters.month,
            onChange: (e) => updateFilter("month", e.target.value),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-maintext focus:outline-none focus:border-primary transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Months" }),
              MONTHS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i + 1, children: m }, i))
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: filters.year,
            onChange: (e) => updateFilter("year", e.target.value),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-maintext focus:outline-none focus:border-primary transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Years" }),
              years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: y, children: y }, y))
            ]
          }
        ),
        (filters.gateway || filters.status || filters.month || filters.year || filters.search) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setFilters({ search: "", gateway: "", status: "", month: "", year: "", startDate: "", endDate: "", sortBy: "createdAt", sortOrder: "desc", page: 1, limit: 20 }),
            className: "flex items-center gap-1 px-3 py-2 text-xs font-bold text-red-400 hover:bg-red-400/10 rounded-xl border border-red-400/20 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }),
              " Clear"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleExportCSV,
            disabled: exporting,
            className: "ml-auto flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-bold transition-all disabled:opacity-50",
            children: [
              exporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
              "Export CSV"
            ]
          }
        )
      ] }),
      filterTotals && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 pt-2 border-t border-white/5 text-[10px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
          fmtNum(pagination.total),
          " invoices found"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-maintext font-bold", children: [
          "Revenue: ",
          fmt(filterTotals.totalRevenue)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
          "Base: ",
          fmt(filterTotals.totalBase)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-400 font-semibold", children: [
          "GST: ",
          fmt(filterTotals.totalGst)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs min-w-[950px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10 text-subtext uppercase tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Invoice #" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold text-right", children: "Base" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold text-right", children: "GST" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold text-right", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Gateway" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-3 font-bold", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}) }) }) : invoices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "py-12 text-center text-subtext", children: "No invoices found." }) }) : invoices.map((inv) => {
          var _a, _b, _c, _d, _e, _f;
          const gstCalc = inv.gstAmount || (inv.cgst || 0) + (inv.sgst || 0) + (inv.igst || 0);
          const planName = ((_b = (_a = inv.subscriptionId) == null ? void 0 : _a.planId) == null ? void 0 : _b.planName) || "—";
          const status = inv.paymentStatus || "captured";
          const sc = STATUS_COLORS[status] || STATUS_COLORS["captured"];
          const gc = GATEWAY_COLORS[inv.paymentGateway] || { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 hover:bg-white/[0.02] transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-primary text-[10px]", children: inv.invoiceNumber }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-subtext font-mono truncate max-w-[90px] mt-0.5", title: inv.paymentId, children: inv.paymentId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-subtext whitespace-nowrap", children: new Date(inv.invoiceDate || inv.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-maintext", children: ((_c = inv.billingDetails) == null ? void 0 : _c.name) || ((_d = inv.userId) == null ? void 0 : _d.name) || "N/A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-subtext", children: ((_e = inv.userId) == null ? void 0 : _e.email) || "—" }),
              ((_f = inv.billingDetails) == null ? void 0 : _f.companyName) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-subtext/60", children: inv.billingDetails.companyName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[9px] font-black bg-primary/10 text-primary border border-primary/10", children: planName }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-right font-medium text-maintext", children: fmt(inv.baseAmount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 text-right text-subtext", children: [
              fmt(gstCalc),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-60", children: (inv.igst || 0) > 0 ? "IGST" : "C+S GST" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-right font-black text-maintext", children: fmt(inv.totalAmount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-lg text-[9px] font-black uppercase ${gc.bg} ${gc.text} border ${gc.border}`, children: inv.paymentGateway }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 text-[10px] font-semibold ${sc.text}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full ${sc.dot}` }),
              status
            ] }) })
          ] }, inv._id);
        }) })
      ] }) }),
      pagination.pages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t border-white/10 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
          "Page ",
          pagination.page,
          " of ",
          pagination.pages,
          " · ",
          fmtNum(pagination.total),
          " records"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page <= 1,
              onClick: () => updateFilter("page", pagination.page - 1),
              className: "p-1.5 rounded-lg border border-white/10 hover:bg-white/5 disabled:opacity-40 transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              disabled: pagination.page >= pagination.pages,
              onClick: () => updateFilter("page", pagination.page + 1),
              className: "p-1.5 rounded-lg border border-white/10 hover:bg-white/5 disabled:opacity-40 transition-all",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const MonthlyReportsTab = () => {
  var _a;
  const now = /* @__PURE__ */ new Date();
  const [month, setMonth] = reactExports.useState(now.getMonth() + 1);
  const [year, setYear] = reactExports.useState(now.getFullYear());
  const [report, setReport] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [exporting, setExporting] = reactExports.useState(false);
  const loadReport = reactExports.useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiService.getMonthlyReport(month, year);
      setReport(data.report);
    } catch (e) {
      console.error("Monthly report error:", e);
    } finally {
      setLoading(false);
    }
  }, [month, year]);
  reactExports.useEffect(() => {
    loadReport();
  }, [loadReport]);
  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const response = await apiService.exportFinanceCSV({ month, year });
      downloadBlob(response, `AISA_Report_${year}_${String(month).padStart(2, "0")}.csv`);
    } catch (e) {
      console.error("Export failed:", e);
    } finally {
      setExporting(false);
    }
  };
  const handleExportExcel = () => {
    if (!report || !report.invoices) return;
    try {
      const XLSX = window.XLSX || require("xlsx");
      const header = ["Invoice #", "Date", "Customer", "Email", "Company", "GSTIN", "Plan", "Gateway", "Payment ID", "Base (₹)", "CGST (₹)", "SGST (₹)", "IGST (₹)", "GST Total (₹)", "Total (₹)", "Status"];
      const rows = report.invoices.map((inv) => {
        var _a2, _b, _c, _d, _e, _f, _g;
        const gst = inv.gstAmount || (inv.cgst || 0) + (inv.sgst || 0) + (inv.igst || 0);
        return [
          inv.invoiceNumber,
          new Date(inv.invoiceDate || inv.createdAt).toLocaleDateString("en-IN"),
          ((_a2 = inv.billingDetails) == null ? void 0 : _a2.name) || ((_b = inv.userId) == null ? void 0 : _b.name) || "N/A",
          ((_c = inv.userId) == null ? void 0 : _c.email) || "N/A",
          ((_d = inv.billingDetails) == null ? void 0 : _d.companyName) || "",
          ((_e = inv.billingDetails) == null ? void 0 : _e.gstin) || "",
          ((_g = (_f = inv.subscriptionId) == null ? void 0 : _f.planId) == null ? void 0 : _g.planName) || "N/A",
          inv.paymentGateway,
          inv.paymentId,
          inv.baseAmount || 0,
          inv.cgst || 0,
          inv.sgst || 0,
          inv.igst || 0,
          gst,
          inv.totalAmount || 0,
          inv.paymentStatus || "captured"
        ];
      });
      __vitePreload(() => import("./index-MzjM3Af-.js").then((n) => n.d5), true ? __vite__mapDeps([0,1]) : void 0).then((XLSX2) => {
        const ws = XLSX2.utils.aoa_to_sheet([header, ...rows]);
        const wb = XLSX2.utils.book_new();
        XLSX2.utils.book_append_sheet(wb, ws, report.period);
        XLSX2.writeFile(wb, `AISA_Report_${year}_${String(month).padStart(2, "0")}.xlsx`);
      });
    } catch (e) {
      console.error("XLSX export failed:", e);
      handleExportCSV();
    }
  };
  const currentYear = now.getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const s = (report == null ? void 0 : report.summary) || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: month,
            onChange: (e) => setMonth(parseInt(e.target.value)),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-maintext font-bold focus:outline-none focus:border-primary transition-all",
            children: MONTHS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: i + 1, children: m }, i))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            value: year,
            onChange: (e) => setYear(parseInt(e.target.value)),
            className: "px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-maintext font-bold focus:outline-none focus:border-primary transition-all",
            children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: y, children: y }, y))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: loadReport,
            disabled: loading,
            className: "flex items-center gap-1.5 px-3 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-xl text-sm font-bold transition-all disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3.5 h-3.5 ${loading ? "animate-spin" : ""}` }),
              "Load"
            ]
          }
        )
      ] }),
      report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ml-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleExportCSV,
            disabled: exporting,
            className: "flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-bold transition-all disabled:opacity-50",
            children: [
              exporting ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3 h-3" }),
              "CSV"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleExportExcel,
            className: "flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 rounded-xl text-xs font-bold transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "w-3 h-3" }),
              "Excel"
            ]
          }
        )
      ] })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {}),
    !loading && report && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", id: "finance-monthly-report", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-primary/10 via-violet-500/10 to-primary/5 border border-primary/20 rounded-2xl p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-black text-maintext", children: [
            report.period,
            " — Monthly Report"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-subtext mt-1", children: [
            "Generated at ",
            new Date(report.generatedAt).toLocaleString("en-IN"),
            " · For Chartered Accountant"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-primary", children: fmt(s.totalRevenue) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-subtext", children: [
            "Total Revenue · ",
            s.count,
            " transactions"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: [
        { label: "Total Sales", value: fmt(s.totalRevenue), color: "primary" },
        { label: "Taxable Base", value: fmt(s.totalBase), color: "emerald-400" },
        { label: "GST Collected", value: fmt(s.totalGst), color: "amber-400" },
        { label: "CGST (9%)", value: fmt(s.totalCgst), color: "blue-400" },
        { label: "SGST (9%)", value: fmt(s.totalSgst), color: "violet-400" },
        { label: "IGST (18%)", value: fmt(s.totalIgst), color: "pink-400" }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wide", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-black mt-1 text-${item.color}`, children: item.value })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext", children: "Payment Gateway Breakdown" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-left text-subtext font-semibold", children: "Gateway" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "Txns" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "GST" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              (report.gatewayBreakdown || []).map((g, i) => {
                const gc = GATEWAY_COLORS[g._id] || { text: "text-primary" };
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `py-2.5 px-4 font-bold uppercase text-[10px] ${gc.text}`, children: g._id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-subtext", children: g.count }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right font-semibold text-maintext", children: fmt(g.revenue) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-amber-400", children: fmt(g.gst) })
                ] }, i);
              }),
              (!report.gatewayBreakdown || report.gatewayBreakdown.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-6 text-center text-subtext", children: "No data" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-maintext", children: "Subscription Plan Breakdown" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-left text-subtext font-semibold", children: "Plan" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "Subs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "Revenue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-4 text-right text-subtext font-semibold", children: "GST" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              (report.planBreakdown || []).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-bold text-maintext text-[11px]", children: p._id || "Unknown" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-subtext", children: p.count }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right font-semibold text-primary", children: fmt(p.revenue) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-amber-400", children: fmt(p.gst) })
              ] }, i)),
              (!report.planBreakdown || report.planBreakdown.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "py-6 text-center text-subtext", children: "No data" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-white/10 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext", children: [
            "All Invoices — ",
            report.period
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-subtext", children: [
            ((_a = report.invoices) == null ? void 0 : _a.length) || 0,
            " invoices"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 text-subtext uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Invoice #" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Plan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 text-right font-semibold", children: "Base" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 text-right font-semibold", children: "GST" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 text-right font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Gateway" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            (report.invoices || []).map((inv) => {
              var _a2, _b, _c, _d, _e;
              const gst = inv.gstAmount || (inv.cgst || 0) + (inv.sgst || 0) + (inv.igst || 0);
              const gc = GATEWAY_COLORS[inv.paymentGateway] || { text: "text-primary" };
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5 hover:bg-white/[0.02] transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 font-mono font-bold text-primary text-[10px]", children: inv.invoiceNumber }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-subtext whitespace-nowrap", children: new Date(inv.invoiceDate || inv.createdAt).toLocaleDateString("en-IN") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2.5 px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-maintext", children: ((_a2 = inv.billingDetails) == null ? void 0 : _a2.name) || ((_b = inv.userId) == null ? void 0 : _b.name) || "N/A" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-subtext", children: (_c = inv.userId) == null ? void 0 : _c.email })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-subtext", children: ((_e = (_d = inv.subscriptionId) == null ? void 0 : _d.planId) == null ? void 0 : _e.planName) || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right", children: fmt(inv.baseAmount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right text-amber-400", children: fmt(gst) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-4 text-right font-bold text-maintext", children: fmt(inv.totalAmount) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `py-2.5 px-4 font-bold uppercase text-[9px] ${gc.text}`, children: inv.paymentGateway })
              ] }, inv._id);
            }),
            (!report.invoices || report.invoices.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "py-8 text-center text-subtext", children: "No invoices for this period" }) })
          ] })
        ] }) })
      ] })
    ] })
  ] });
};
const FinanceTab = () => {
  const [activeSubTab, setActiveSubTab] = reactExports.useState("dashboard");
  const subTabs = [
    { id: "dashboard", label: "Finance Dashboard", icon: TrendingUp },
    { id: "invoices", label: "Invoice Ledger", icon: Receipt },
    { id: "reports", label: "Monthly Reports", icon: FileSpreadsheet }
  ];
  const renderSubTab = () => {
    switch (activeSubTab) {
      case "dashboard":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceDashboardTab, {});
      case "invoices":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(InvoiceLedgerTab, {});
      case "reports":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(MonthlyReportsTab, {});
      default:
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FinanceDashboardTab, {});
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide", children: subTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      SubTab,
      {
        id: tab.id,
        label: tab.label,
        icon: tab.icon,
        active: activeSubTab === tab.id,
        onClick: setActiveSubTab
      },
      tab.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.15 },
        children: renderSubTab()
      },
      activeSubTab
    ) })
  ] });
};
export {
  FinanceTab as default
};
