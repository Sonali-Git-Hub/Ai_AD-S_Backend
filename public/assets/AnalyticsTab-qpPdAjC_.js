import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, af as Activity, n as TriangleAlert, cc as ShieldAlert, p as CircleCheckBig, b as Clock, R as RefreshCw, ae as Search, H as TrendingUp, C as CircleAlert, A as AnimatePresence, m as motion, X, cP as User, P as Check, bZ as Copy, cZ as Info, c_ as Code, cL as Play, u as Eye, a as apiService, z as zt, G as Globe, bQ as MessageCircle, a3 as Monitor, e as ChevronRight, c$ as Terminal, d0 as Server, a4 as Smartphone, d1 as UserRound, c6 as Mail, O as React, M as MessageSquare, L as Layers } from "./index-MzjM3Af-.js";
import { a as SectionCard } from "./AdminDashboard-BoGLjgtK.js";
import { L as Laptop } from "./laptop-DFdMK4VH.js";
import { C as Cpu } from "./cpu-DLJB0WEK.js";
import { C as ChartPie } from "./chart-pie-UzKeko7R.js";
import { T as TrendingDown } from "./trending-down-DJcPF9ub.js";
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",
      key: "17shqo"
    }
  ],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5", key: "1tjixy" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }]
];
const BugPlay = createLucideIcon("BugPlay", __iconNode$3);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("ChartNoAxesColumn", __iconNode$2);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
];
const GitCommitHorizontal = createLucideIcon("GitCommitHorizontal", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
];
const GitPullRequest = createLucideIcon("GitPullRequest", __iconNode);
const SeverityBadge = ({ severity }) => {
  let style = "bg-slate-500/10 text-slate-400 border-slate-500/20";
  if (severity === "Critical") style = "bg-red-500/15 text-red-400 border-red-500/30";
  else if (severity === "High") style = "bg-orange-500/15 text-orange-400 border-orange-500/30";
  else if (severity === "Medium") style = "bg-amber-500/10 text-amber-400 border-amber-500/20";
  else if (severity === "Low") style = "bg-blue-500/10 text-blue-400 border-blue-500/20";
  else if (severity === "Info") style = "bg-slate-500/10 text-slate-300 border-slate-500/20";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase border whitespace-nowrap ${style}`, children: severity });
};
const StatusBadge = ({ status }) => {
  let style = "bg-slate-500/10 text-slate-400 border-slate-500/20";
  if (status === "New") style = "bg-red-500/10 text-red-400 border-red-500/20";
  else if (status === "Open") style = "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
  else if (status === "Assigned") style = "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  else if (status === "In Progress") style = "bg-orange-500/10 text-orange-400 border-orange-500/20";
  else if (status === "Monitoring") style = "bg-blue-500/15 text-blue-400 border-blue-500/30";
  else if (status === "Resolved") style = "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
  else if (status === "Closed") style = "bg-slate-500/20 text-slate-400 border-slate-500/30";
  else if (status === "Ignored") style = "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold border whitespace-nowrap ${style}`, children: status });
};
const ComponentBadge = ({ component }) => {
  let style = "bg-slate-500/10 text-slate-300 border-slate-500/10";
  if (component === "Database") style = "bg-amber-500/10 text-amber-300 border-amber-500/10";
  else if (component === "Auth") style = "bg-indigo-500/10 text-indigo-300 border-indigo-500/10";
  else if (component === "Payment") style = "bg-emerald-500/10 text-emerald-300 border-emerald-500/10";
  else if (component === "Frontend") style = "bg-blue-500/10 text-blue-300 border-blue-500/10";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded text-[9px] font-semibold border ${style}`, children: component });
};
const ErrorMonitoring = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const [incidents, setIncidents] = reactExports.useState([]);
  const [kpis, setKpis] = reactExports.useState(null);
  const [charts, setCharts] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [kpisLoading, setKpisLoading] = reactExports.useState(true);
  const [kpiError, setKpiError] = reactExports.useState(null);
  const [listError, setListError] = reactExports.useState(null);
  const [activeSection, setActiveSection] = reactExports.useState("active");
  const [search, setSearch] = reactExports.useState("");
  const [filterSeverity, setFilterSeverity] = reactExports.useState("");
  const [filterStatus, setFilterStatus] = reactExports.useState("");
  const [filterModule, setFilterModule] = reactExports.useState("");
  const [filterEnvironment, setFilterEnvironment] = reactExports.useState("");
  const [range, setRange] = reactExports.useState("7d");
  const [page, setPage] = reactExports.useState(1);
  const [pagination, setPagination] = reactExports.useState({ total: 0, page: 1, limit: 15, totalPages: 1 });
  const [selectedIncident, setSelectedIncident] = reactExports.useState(null);
  const [detailLoading, setDetailLoading] = reactExports.useState(false);
  const [selectedIncidentDetail, setSelectedIncidentDetail] = reactExports.useState(null);
  const [occurrences, setOccurrences] = reactExports.useState([]);
  const [drawerTab, setDrawerTab] = reactExports.useState("overview");
  const [activeReplaySession, setActiveReplaySession] = reactExports.useState(null);
  const [replayData, setReplayData] = reactExports.useState(null);
  const [replayLoading, setReplayLoading] = reactExports.useState(false);
  const [assignModalOpen, setAssignModalOpen] = reactExports.useState(false);
  const [resolveModalOpen, setResolveModalOpen] = reactExports.useState(false);
  const [assigneeName, setAssigneeName] = reactExports.useState("");
  const [resolveForm, setResolveForm] = reactExports.useState({
    rootCause: "",
    resolutionSummary: "",
    commitHash: "",
    pullRequest: "",
    releaseVersion: "1.0.1",
    notes: ""
  });
  const fetchKPIs = async () => {
    var _a2, _b2, _c2, _d2;
    setKpisLoading(true);
    setKpiError(null);
    try {
      const res = await apiService.getIncidentKPIs({ range });
      if (res.success) {
        setKpis(res.kpis);
        setCharts(res.charts);
      } else {
        setKpiError(res.message || "Failed to fetch KPIs");
      }
    } catch (err) {
      console.error("Failed to load KPIs:", err);
      const errMsg = ((_b2 = (_a2 = err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b2.message) || ((_d2 = (_c2 = err.response) == null ? void 0 : _c2.data) == null ? void 0 : _d2.error) || err.message || "Connection failed";
      setKpiError(errMsg);
    } finally {
      setKpisLoading(false);
    }
  };
  const fetchIncidentsList = async (targetPage = 1) => {
    var _a2, _b2, _c2, _d2;
    setLoading(true);
    setListError(null);
    try {
      const res = await apiService.getIncidents({
        statusType: activeSection,
        severity: filterSeverity,
        status: filterStatus,
        module: filterModule,
        environment: filterEnvironment,
        search,
        range,
        page: targetPage,
        limit: 10
      });
      if (res.success) {
        setIncidents(res.incidents);
        setPagination(res.pagination);
        setPage(targetPage);
      } else {
        setListError(res.message || "Failed to fetch incidents list");
      }
    } catch (err) {
      console.error("Failed to fetch incidents:", err);
      const errMsg = ((_b2 = (_a2 = err.response) == null ? void 0 : _a2.data) == null ? void 0 : _b2.message) || ((_d2 = (_c2 = err.response) == null ? void 0 : _c2.data) == null ? void 0 : _d2.error) || err.message || "Connection failed";
      setListError(errMsg);
    } finally {
      setLoading(false);
    }
  };
  const fetchIncidentDetail = async (incidentId) => {
    setDetailLoading(true);
    setDrawerTab("overview");
    setActiveReplaySession(null);
    setReplayData(null);
    try {
      const res = await apiService.getIncidentDetails(incidentId);
      if (res.success) {
        setSelectedIncidentDetail(res.incident);
        setOccurrences(res.occurrences);
      }
    } catch (err) {
      console.error("Failed to fetch details:", err);
      zt.error("Failed to load details");
    } finally {
      setDetailLoading(false);
    }
  };
  const handleAssign = async () => {
    if (!assigneeName.trim()) {
      zt.error("Please input developer name");
      return;
    }
    try {
      const res = await apiService.assignIncident(selectedIncidentDetail._id, null, assigneeName.trim());
      if (res.success) {
        zt.success(`Assigned to ${assigneeName}`);
        setSelectedIncidentDetail(res.incident);
        fetchIncidentsList(page);
        setAssignModalOpen(false);
        setAssigneeName("");
      }
    } catch (err) {
      zt.error("Assignment failed");
    }
  };
  const handleResolve = async () => {
    if (!resolveForm.rootCause.trim() || !resolveForm.resolutionSummary.trim()) {
      zt.error("Root Cause and Resolution Summary are required");
      return;
    }
    try {
      const res = await apiService.resolveIncident(selectedIncidentDetail._id, {
        rootCause: resolveForm.rootCause,
        resolutionSummary: resolveForm.resolutionSummary,
        commitHash: resolveForm.commitHash,
        pullRequest: resolveForm.pullRequest,
        releaseVersion: resolveForm.releaseVersion,
        notes: resolveForm.notes
      });
      if (res.success) {
        zt.success("Incident resolved successfully!");
        setSelectedIncidentDetail(res.incident);
        fetchIncidentsList(page);
        fetchKPIs();
        setResolveModalOpen(false);
        setSelectedIncident(null);
      }
    } catch (err) {
      zt.error("Failed to resolve incident");
    }
  };
  const handleStatusUpdate = async (newStatus) => {
    try {
      const notes = prompt(`Enter notes for changing status to ${newStatus}:`);
      const res = await apiService.updateIncidentStatus(selectedIncidentDetail._id, newStatus, notes || "");
      if (res.success) {
        zt.success(`Status updated to ${newStatus}`);
        setSelectedIncidentDetail(res.incident);
        fetchIncidentsList(page);
        fetchKPIs();
      }
    } catch (err) {
      zt.error("Status update failed");
    }
  };
  const loadSessionReplay = async (sessionId) => {
    setActiveReplaySession(sessionId);
    setReplayLoading(true);
    try {
      const res = await apiService.getSessionReplayDetails(sessionId);
      if (res.success) {
        setReplayData(res);
      }
    } catch (err) {
      console.error("Replay error:", err);
      zt.error("Failed to load session history");
    } finally {
      setReplayLoading(false);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    zt.success("Stack trace copied!");
  };
  reactExports.useEffect(() => {
    fetchKPIs();
  }, [range]);
  reactExports.useEffect(() => {
    fetchIncidentsList(1);
  }, [activeSection, filterSeverity, filterStatus, filterModule, filterEnvironment, search, range]);
  const formatTime = (val) => {
    if (!val) return "—";
    return new Date(val).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-maintext", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: [
      {
        label: "Platform Health",
        value: kpisLoading ? "…" : kpiError ? "N/A" : `${(kpis == null ? void 0 : kpis.platformHealth) ?? 100}%`,
        icon: Activity,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : (kpis == null ? void 0 : kpis.platformHealth) > 90 ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : (kpis == null ? void 0 : kpis.platformHealth) > 75 ? "text-orange-400 bg-orange-500/10 border-orange-500/20" : "text-red-400 bg-red-500/10 border-red-500/20",
        desc: "Session success score"
      },
      {
        label: "Active Incidents",
        value: kpisLoading ? "…" : kpiError ? "N/A" : (kpis == null ? void 0 : kpis.activeIncidents) ?? 0,
        icon: TriangleAlert,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : (kpis == null ? void 0 : kpis.activeIncidents) > 0 ? "text-orange-400 bg-orange-500/10 border-orange-500/20" : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        desc: "Requires engineering attention"
      },
      {
        label: "Critical / High",
        value: kpisLoading ? "…" : kpiError ? "N/A" : (kpis == null ? void 0 : kpis.criticalIncidents) ?? 0,
        icon: ShieldAlert,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : (kpis == null ? void 0 : kpis.criticalIncidents) > 0 ? "text-red-400 bg-red-500/10 border-red-500/20 animate-pulse" : "text-slate-400 bg-slate-500/5 border-slate-500/10",
        desc: "High severity active groups"
      },
      {
        label: "Resolution Rate",
        value: kpisLoading ? "…" : kpiError ? "N/A" : `${(kpis == null ? void 0 : kpis.resolutionRate) ?? 100}%`,
        icon: CircleCheckBig,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        desc: "Incident fix ratio"
      },
      {
        label: "Avg Detect Time (MTTD)",
        value: kpisLoading ? "…" : kpiError ? "N/A" : (kpis == null ? void 0 : kpis.mttd) || "—",
        icon: Clock,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : "text-blue-400 bg-blue-500/10 border-blue-500/20",
        desc: "Heuristic discovery speed"
      },
      {
        label: "Avg Resolve Time (MTTR)",
        value: kpisLoading ? "…" : kpiError ? "N/A" : (kpis == null ? void 0 : kpis.mttr) || "—",
        icon: Clock,
        color: kpiError ? "text-slate-400 border-white/10 bg-white/5" : "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        desc: "Mean engineering fix rate"
      }
    ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-primary/20 transition-all group relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-extrabold text-subtext uppercase tracking-widest leading-none", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-lg flex items-center justify-center border ${item.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext tracking-tight mt-4 relative z-10 leading-none", children: item.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-subtext/70 mt-1 relative z-10 leading-relaxed", children: item.desc })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-4 flex flex-col space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-white/10 dark:bg-black/20 p-1 rounded-xl border border-white/10 self-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setActiveSection("active"),
                className: `px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${activeSection === "active" ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext"}`,
                children: [
                  "Active Incidents",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded-full text-[9px] ${activeSection === "active" ? "bg-white/20 text-white" : "bg-white/10 text-subtext"}`, children: incidents.length })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveSection("history"),
                className: `px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeSection === "history" ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext"}`,
                children: "Resolved & History"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 self-end sm:self-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-white/10 dark:bg-black/20 p-0.5 rounded-lg border border-white/5", children: [
              { id: "24h", label: "24h" },
              { id: "7d", label: "7d" },
              { id: "30d", label: "30d" },
              { id: "all", label: "All Time" }
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setRange(r.id),
                className: `px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all ${range === r.id ? "bg-primary/20 text-primary border border-primary/20" : "text-subtext hover:text-maintext"}`,
                children: r.label
              },
              r.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  fetchIncidentsList(page);
                  fetchKPIs();
                },
                className: "p-1.5 rounded bg-white/10 dark:bg-white/5 border border-white/10 hover:bg-primary/10 text-primary transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search by Message, ID, Session, User or API route...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "w-full bg-white/10 dark:bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:border-primary/50 transition-all placeholder:text-subtext/40"
              }
            ),
            search && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSearch(""), className: "absolute right-3 top-1/2 -translate-y-1/2 text-subtext hover:text-maintext text-[10px] font-black uppercase", children: "Clear" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: filterSeverity,
                onChange: (e) => setFilterSeverity(e.target.value),
                className: "bg-white/10 dark:bg-black/20 border border-white/10 rounded-xl px-2 py-2 text-[11px] font-semibold focus:border-primary/50 outline-none text-maintext",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "dark:bg-zinc-900", children: "All Severity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Critical", className: "dark:bg-zinc-900 text-red-400", children: "Critical" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", className: "dark:bg-zinc-900 text-orange-400", children: "High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", className: "dark:bg-zinc-900 text-amber-400", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Low", className: "dark:bg-zinc-900 text-blue-400", children: "Low" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Info", className: "dark:bg-zinc-900 text-slate-300", children: "Info" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: filterStatus,
                onChange: (e) => setFilterStatus(e.target.value),
                className: "bg-white/10 dark:bg-black/20 border border-white/10 rounded-xl px-2 py-2 text-[11px] font-semibold focus:border-primary/50 outline-none text-maintext",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "dark:bg-zinc-900", children: "All Status" }),
                  activeSection === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "New", className: "dark:bg-zinc-900", children: "New" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Open", className: "dark:bg-zinc-900", children: "Open" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Assigned", className: "dark:bg-zinc-900", children: "Assigned" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", className: "dark:bg-zinc-900", children: "In Progress" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Monitoring", className: "dark:bg-zinc-900", children: "Monitoring" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Resolved", className: "dark:bg-zinc-900", children: "Resolved" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Closed", className: "dark:bg-zinc-900", children: "Closed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Ignored", className: "dark:bg-zinc-900", children: "Ignored" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: filterModule,
                onChange: (e) => setFilterModule(e.target.value),
                className: "bg-white/10 dark:bg-black/20 border border-white/10 rounded-xl px-2 py-2 text-[11px] font-semibold focus:border-primary/50 outline-none text-maintext",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", className: "dark:bg-zinc-900", children: "All Modules" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "General", className: "dark:bg-zinc-900", children: "General" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LEGAL_TOOLKIT", className: "dark:bg-zinc-900", children: "AI Legal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AI_SOCIAL_MEDIA", className: "dark:bg-zinc-900", children: "Social Media" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AI_PERSONAL_ASSISTANT", className: "dark:bg-zinc-900", children: "Personal Assistant" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AI_BASE", className: "dark:bg-zinc-900", children: "AI Base" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-xl border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-xs min-w-[900px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10 bg-white/5 text-subtext uppercase tracking-wider text-[10px] font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[85px] whitespace-nowrap", children: "Severity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 whitespace-nowrap", children: "Incident / Error Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[100px] whitespace-nowrap", children: "Component" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[120px] whitespace-nowrap", children: "Module/Route" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 text-center w-[80px] whitespace-nowrap", children: "Events" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 text-center w-[85px] whitespace-nowrap", children: "Sessions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[120px] whitespace-nowrap", children: "Last Seen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[90px] whitespace-nowrap", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-3 w-[110px] whitespace-nowrap", children: "Assignee" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-white/5 animate-pulse", children: Array.from({ length: 9 }).map((_2, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-white/10 rounded w-full" }) }, j)) }, i)) : listError ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 9, className: "py-12 text-center text-red-400 font-bold", children: [
            "Failed to load active incidents: ",
            listError
          ] }) }) : incidents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 9, className: "py-12 text-center text-subtext italic", children: "No incidents found matching current filters. Uptime is healthy 🟢" }) }) : incidents.map((inc) => {
            var _a2;
            const isHighAlert = inc.severity === "Critical" || inc.severity === "High";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                onClick: () => {
                  setSelectedIncident(inc._id);
                  fetchIncidentDetail(inc._id);
                },
                className: "border-b border-white/5 hover:bg-primary/5 cursor-pointer transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: inc.severity }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 min-w-[200px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold text-xs truncate max-w-[250px] ${isHighAlert ? "text-red-400/90" : "text-maintext"}`, title: inc.title, children: inc.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-subtext/70 truncate max-w-[250px] font-mono mt-0.5", title: inc.errorMessage, children: inc.errorMessage })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentBadge, { component: inc.component }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-maintext truncate font-semibold max-w-[100px]", children: inc.toolModule }),
                    inc.apiRoute && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] text-subtext/60 truncate max-w-[100px] font-mono mt-0.5", title: `${inc.apiMethod} ${inc.apiRoute}`, children: [
                      inc.apiMethod,
                      " ",
                      inc.apiRoute
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-center font-mono font-bold text-maintext", children: inc.totalOccurrences }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-center font-mono text-subtext", children: ((_a2 = inc.affectedSessions) == null ? void 0 : _a2.length) || 0 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-3 text-subtext font-mono text-[10px]", children: [
                    new Date(inc.lastSeen).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] opacity-60", children: new Date(inc.lastSeen).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: inc.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-3 text-subtext truncate max-w-[100px] font-medium", children: inc.assignedToName || "Unassigned" })
                ]
              },
              inc._id
            );
          }) })
        ] }) }),
        pagination.totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-subtext border-t border-white/5 pt-3 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Page ",
            pagination.page,
            " of ",
            pagination.totalPages,
            " · ",
            pagination.total,
            " groups"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                disabled: pagination.page <= 1 || loading,
                onClick: () => fetchIncidentsList(pagination.page - 1),
                className: "p-1 px-2.5 rounded bg-white/5 hover:bg-primary/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all",
                children: "Prev"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-maintext px-1", children: pagination.page }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                disabled: pagination.page >= pagination.totalPages || loading,
                onClick: () => fetchIncidentsList(pagination.page + 1),
                className: "p-1 px-2.5 rounded bg-white/5 hover:bg-primary/10 border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all",
                children: "Next"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-4 flex flex-col space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-sm text-maintext border-b border-white/10 pb-2.5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
          " DevOps Metrics & Telemetry"
        ] }),
        kpiError ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center text-xs text-red-400/90 flex flex-col items-center gap-2 bg-white/5 border border-white/5 rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-6 h-6 text-red-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[11px]", children: "Failed to load telemetry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-subtext/60 font-mono break-all", children: kpiError })
        ] }) : charts ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-subtext uppercase tracking-widest", children: "Incidents by Module" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 bg-black/10 dark:bg-black/35 p-3 rounded-xl border border-white/5", children: charts.errorsByModule.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext italic", children: "No data logged" }) : charts.errorsByModule.slice(0, 4).map((mod, i) => {
              const total = charts.errorsByModule.reduce((acc, c) => acc + c.value, 0);
              const percent = total > 0 ? mod.value / total * 100 : 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] font-semibold text-maintext", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[150px]", children: mod.label === "LEGAL_TOOLKIT" ? "AI Legal" : mod.label === "AI_SOCIAL_MEDIA" ? "Social Agent" : mod.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-subtext", children: [
                    mod.value,
                    " (",
                    Math.round(percent),
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/5 rounded-full h-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary h-full rounded-full", style: { width: `${percent}%` } }) })
              ] }, i);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-subtext uppercase tracking-widest", children: "Top Affected API Routes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 bg-black/10 dark:bg-black/35 p-3 rounded-xl border border-white/5 font-mono text-[10px]", children: charts.errorsByApi.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext italic", children: "No API errors logged" }) : charts.errorsByApi.slice(0, 4).map((api, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 text-subtext", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-maintext", title: api.label, children: api.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-orange-400 shrink-0", children: [
                api.value,
                "×"
              ] })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-subtext uppercase tracking-widest", children: "Environment Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/10 dark:bg-black/35 p-3 rounded-xl border border-white/5 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-extrabold text-subtext uppercase pb-1 border-b border-white/5", children: "Browser" }),
                charts.errorsByBrowser.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-maintext truncate max-w-[60px] font-semibold", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-subtext", children: item.value })
                ] }, i))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/10 dark:bg-black/35 p-3 rounded-xl border border-white/5 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-extrabold text-subtext uppercase pb-1 border-b border-white/5", children: "Device" }),
                charts.errorsByDevice.slice(0, 3).map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-maintext font-semibold", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-subtext", children: item.value })
                ] }, i))
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-primary uppercase tracking-widest leading-none", children: "System Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-subtext mt-1", children: [
                "API Availability: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-400", children: kpis == null ? void 0 : kpis.apiAvailability })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-subtext", children: [
                "Verified Uptime: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-emerald-400", children: kpis == null ? void 0 : kpis.systemUptime })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-8 h-8 text-primary/30" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-24 text-center text-xs text-subtext", children: "Loading dashboard telemetry..." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: selectedIncident && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 0.5 },
          exit: { opacity: 0 },
          onClick: () => setSelectedIncident(null),
          className: "fixed inset-0 z-[2030] bg-black/60 backdrop-blur-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", damping: 26, stiffness: 200 },
          className: "fixed right-0 top-0 bottom-0 z-[2040] w-full max-w-3xl bg-[#0b0e14] border-l border-white/10 shadow-2xl flex flex-col overflow-hidden text-xs",
          children: detailLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-primary animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext", children: "Fetching incident details & timeline data..." })
          ] }) : selectedIncidentDetail ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-white/10 bg-white/5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: selectedIncidentDetail.severity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: selectedIncidentDetail.status }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentBadge, { component: selectedIncidentDetail.component })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setSelectedIncident(null),
                    className: "p-1.5 rounded-lg hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-black text-maintext leading-tight", children: selectedIncidentDetail.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext/60 truncate font-mono", children: [
                  "Incident ID: ",
                  selectedIncidentDetail._id
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => setAssignModalOpen(true),
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 rounded-xl font-bold transition-all text-[11px]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                      selectedIncidentDetail.assignedToName ? `Re-assign (${selectedIncidentDetail.assignedToName})` : "Assign to Dev"
                    ]
                  }
                ),
                selectedIncidentDetail.status !== "Resolved" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => {
                      setResolveForm({
                        rootCause: selectedIncidentDetail.rootCause || "",
                        resolutionSummary: selectedIncidentDetail.resolutionSummary || "",
                        commitHash: selectedIncidentDetail.commitHash || "",
                        pullRequest: selectedIncidentDetail.pullRequest || "",
                        releaseVersion: selectedIncidentDetail.releaseVersion || "1.0.1",
                        notes: selectedIncidentDetail.notes || ""
                      });
                      setResolveModalOpen(true);
                    },
                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold transition-all text-[11px]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
                      "Resolve Incident"
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 flex items-center gap-1.5 text-[11px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }),
                  "Resolved by ",
                  selectedIncidentDetail.fixedByName
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    value: selectedIncidentDetail.status,
                    onChange: (e) => handleStatusUpdate(e.target.value),
                    className: "bg-white/5 border border-white/10 rounded-xl px-2.5 py-1.5 text-[11px] font-bold text-subtext focus:border-primary/50 outline-none",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Change Status" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Open", className: "dark:bg-zinc-900", children: "Open" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "In Progress", className: "dark:bg-zinc-900", children: "In Progress" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Monitoring", className: "dark:bg-zinc-900", children: "Monitoring" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Closed", className: "dark:bg-zinc-900", children: "Closed" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Ignored", className: "dark:bg-zinc-900", children: "Ignored" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-white/5 border-b border-white/10 px-5 gap-4", children: [
              { id: "overview", label: "Error details" },
              { id: "timeline", label: "Timeline & History" },
              { id: "replay", label: "Session Replay" }
            ].map((tab) => {
              var _a2;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setDrawerTab(tab.id),
                  className: `py-3 font-bold text-xs border-b-2 transition-all relative ${drawerTab === tab.id ? "text-primary border-primary" : "text-subtext border-transparent hover:text-maintext"}`,
                  children: [
                    tab.label,
                    tab.id === "replay" && ((_a2 = selectedIncidentDetail.affectedSessions) == null ? void 0 : _a2.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 px-1.5 py-0.5 rounded-full text-[9px] bg-primary/20 text-primary font-mono", children: selectedIncidentDetail.affectedSessions.length })
                  ]
                },
                tab.id
              );
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 custom-scrollbar", children: [
              drawerTab === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500/5 border border-red-500/10 rounded-xl p-4 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-red-400 uppercase tracking-widest", children: "Error Message" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-maintext font-mono whitespace-pre-wrap leading-relaxed select-all", children: selectedIncidentDetail.errorMessage })
                ] }),
                selectedIncidentDetail.stackTrace && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 relative group/stack", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Stack Trace" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => copyToClipboard(selectedIncidentDetail.stackTrace),
                        className: "flex items-center gap-1 text-[10px] text-primary hover:underline font-bold",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                          " Copy trace"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-4 bg-[#05070a] border border-white/5 rounded-xl font-mono text-[10.5px] leading-relaxed text-subtext/90 overflow-x-auto select-text whitespace-pre max-h-[300px]", children: selectedIncidentDetail.stackTrace })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Telemetry & Metadata" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                    { label: "OS", value: ((_a = selectedIncidentDetail.latestOccurrence) == null ? void 0 : _a.os) || "Unknown", icon: Laptop },
                    { label: "Browser", value: ((_b = selectedIncidentDetail.latestOccurrence) == null ? void 0 : _b.browser) || "Unknown", icon: Cpu },
                    { label: "Device", value: ((_c = selectedIncidentDetail.latestOccurrence) == null ? void 0 : _c.device) || "Desktop", icon: Laptop },
                    { label: "Environment", value: selectedIncidentDetail.environment || "Production", icon: Info },
                    { label: "API Route", value: selectedIncidentDetail.apiRoute || "N/A", icon: Code },
                    { label: "API Method", value: selectedIncidentDetail.apiMethod || "N/A", icon: Code },
                    { label: "Error Code", value: selectedIncidentDetail.errorCode || "N/A", icon: CircleAlert },
                    { label: "Total Events", value: selectedIncidentDetail.totalOccurrences, icon: Activity }
                  ].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-xl p-3 border border-white/5 space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-subtext/60 uppercase font-extrabold tracking-wider leading-none flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-3 h-3 text-primary/60" }),
                      " ",
                      item.label
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-maintext font-bold leading-tight break-all", children: item.value })
                  ] }, index)) })
                ] }),
                ((_d = selectedIncidentDetail.latestOccurrence) == null ? void 0 : _d.payload) && Object.keys(selectedIncidentDetail.latestOccurrence.payload).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Request Payload" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-3 bg-white/5 border border-white/5 rounded-xl font-mono text-[10.5px] text-subtext overflow-x-auto", children: JSON.stringify(selectedIncidentDetail.latestOccurrence.payload, null, 2) })
                ] }),
                selectedIncidentDetail.status === "Resolved" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
                    " Resolution Details"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext font-semibold", children: "Root Cause:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-bold mt-0.5", children: selectedIncidentDetail.rootCause })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext font-semibold", children: "Fix Summary:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-bold mt-0.5", children: selectedIncidentDetail.resolutionSummary })
                    ] }),
                    selectedIncidentDetail.commitHash && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext font-semibold", children: "Commit Hash:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-maintext font-mono mt-0.5 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(GitCommitHorizontal, { className: "w-3 h-3 text-primary" }),
                        " ",
                        selectedIncidentDetail.commitHash.substring(0, 8)
                      ] })
                    ] }),
                    selectedIncidentDetail.pullRequest && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext font-semibold", children: "Pull Request:" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-maintext font-mono mt-0.5 flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "w-3 h-3 text-primary" }),
                        " ",
                        selectedIncidentDetail.pullRequest
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              drawerTab === "timeline" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Incident Event Timeline" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l border-white/10 pl-5 ml-2.5 space-y-6", children: (_e = selectedIncidentDetail.timeline) == null ? void 0 : _e.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-[#0b0e14] border-2 border-primary flex items-center justify-center" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-maintext", children: item.state }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext font-mono", children: formatTime(item.timestamp) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext/75", children: item.notes })
                    ] })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-4 border-t border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Activity Audit Log" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[250px] overflow-y-auto custom-scrollbar", children: (_f = selectedIncidentDetail.auditLog) == null ? void 0 : _f.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-lg p-2.5 border border-white/5 text-[11px] space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] text-subtext font-mono", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: log.action }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatTime(log.timestamp) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-semibold", children: log.details }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-subtext/60", children: [
                      "Updated by: ",
                      log.user
                    ] })
                  ] }, i)) })
                ] })
              ] }),
              drawerTab === "replay" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-r border-white/5 pr-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "Select Affected Session" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[350px] overflow-y-auto custom-scrollbar", children: ((_g = selectedIncidentDetail.affectedSessions) == null ? void 0 : _g.length) === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext italic", children: "No user session ID tracked." }) : selectedIncidentDetail.affectedSessions.map((sid, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => loadSessionReplay(sid),
                      className: `w-full text-left p-3 rounded-xl border transition-all ${activeReplaySession === sid ? "bg-primary/10 border-primary/40 text-primary" : "bg-white/5 border-white/10 text-subtext hover:border-white/20 hover:text-maintext"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] mb-1 font-mono font-bold", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            "Session ",
                            idx + 1
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-primary", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3" }),
                            " Replay"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs font-semibold select-all", children: sid })
                      ]
                    },
                    idx
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: replayLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-primary animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext", children: "Loading replay logs & conversation records..." })
                ] }) : replayData ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex flex-col h-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 flex-1 flex flex-col min-h-[220px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3.5 h-3.5" }),
                      " Replay: Chat Conversation"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/20 border border-white/10 rounded-xl p-3 flex-1 overflow-y-auto max-h-[220px] custom-scrollbar space-y-2", children: replayData.conversation.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext italic text-center py-8", children: "No chat messages in this session (API/Guest call only)." }) : replayData.conversation.map((msg, mid) => {
                      const isModel = msg.role === "model" || msg.role === "assistant";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col max-w-[85%] ${isModel ? "self-start" : "self-end ml-auto"}`, children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] uppercase font-bold tracking-wider mb-0.5 ${isModel ? "text-primary/70" : "text-subtext/70"}`, children: isModel ? "AISA AI" : "User" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-xl text-[11px] ${isModel ? "bg-white/5 border border-white/5 text-maintext" : "bg-primary text-white"}`, children: msg.content })
                      ] }, mid);
                    }) })
                  ] }),
                  ((_i = (_h = replayData.occurrences) == null ? void 0 : _h[0]) == null ? void 0 : _i.breadcrumbs) && replayData.occurrences[0].breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest", children: "User Journey Sequence" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-[140px] overflow-y-auto custom-scrollbar font-mono text-[9.5px]", children: replayData.occurrences[0].breadcrumbs.map((crumb, cid) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 bg-white/5 p-2 rounded-lg border border-white/5 text-subtext", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-[8px] uppercase tracking-wider", children: crumb.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-maintext font-semibold truncate", children: crumb.message }),
                        crumb.data && Object.keys(crumb.data).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] opacity-60 truncate", children: JSON.stringify(crumb.data) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-45 text-[8px] font-light", children: new Date(crumb.timestamp).toLocaleTimeString() })
                    ] }, cid)) })
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center p-8 text-center text-subtext italic", children: "Select a session on the left to inspect conversation history and journey breadcrumbs." }) })
              ] })
            ] })
          ] }) : null
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: assignModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[2060] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.95, opacity: 0 },
        className: "bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
              " Assign Developer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAssignModalOpen(false), className: "text-subtext hover:text-maintext", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Developer Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g. Saksham (Lead Dev)",
                value: assigneeName,
                onChange: (e) => setAssigneeName(e.target.value),
                className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setAssignModalOpen(false), className: "px-4 py-2 text-subtext hover:text-maintext font-bold", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleAssign, className: "px-5 py-2 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20", children: "Assign" })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: resolveModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[2060] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 0.95, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.95, opacity: 0 },
        className: "bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-2xl text-xs overflow-y-auto max-h-[85vh] custom-scrollbar",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
              " Resolve Workflow Checklist"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setResolveModalOpen(false), className: "text-subtext hover:text-maintext", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Root Cause *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Unhandled Null Pointer Exception",
                  value: resolveForm.rootCause,
                  onChange: (e) => setResolveForm({ ...resolveForm, rootCause: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Resolution Summary *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Added optional chaining check",
                  value: resolveForm.resolutionSummary,
                  onChange: (e) => setResolveForm({ ...resolveForm, resolutionSummary: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitCommitHorizontal, { className: "w-3.5 h-3.5" }),
                " Commit Hash"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. a7f3b58c",
                  value: resolveForm.commitHash,
                  onChange: (e) => setResolveForm({ ...resolveForm, commitHash: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext font-mono"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitPullRequest, { className: "w-3.5 h-3.5" }),
                " Pull Request"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. #318",
                  value: resolveForm.pullRequest,
                  onChange: (e) => setResolveForm({ ...resolveForm, pullRequest: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext font-mono"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Release Version" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. 1.0.2",
                  value: resolveForm.releaseVersion,
                  onChange: (e) => setResolveForm({ ...resolveForm, releaseVersion: e.target.value }),
                  className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-bold text-subtext uppercase tracking-wider", children: "Resolution Notes & Extra Info" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                rows: 3,
                placeholder: "Write extra debugging notes or resolution details here...",
                value: resolveForm.notes,
                onChange: (e) => setResolveForm({ ...resolveForm, notes: e.target.value }),
                className: "w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs outline-none focus:border-primary/50 text-maintext resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 justify-end pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setResolveModalOpen(false), className: "px-4 py-2 text-subtext hover:text-maintext font-bold", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleResolve, className: "px-6 py-2 bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20", children: "Mark Resolved" })
          ] })
        ]
      }
    ) }) })
  ] });
};
const AnalyticsTab = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const [subTab, setSubTab] = reactExports.useState("usage");
  const [data, setData] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [range, setRange] = reactExports.useState("7d");
  const [refreshing, setRefreshing] = reactExports.useState(false);
  const [lastFetched, setLastFetched] = reactExports.useState(null);
  const [drillMode, setDrillMode] = reactExports.useState(null);
  const [drillData, setDrillData] = reactExports.useState(null);
  const [drillLoading, setDrillLoading] = reactExports.useState(false);
  const [drawerOpen, setDrawerOpen] = reactExports.useState(false);
  const [selectedSubTool, setSelectedSubTool] = reactExports.useState(null);
  const drillCache = React.useRef({});
  const [inspectSession, setInspectSession] = reactExports.useState(null);
  const [copiedStack, setCopiedStack] = reactExports.useState(false);
  const copyStack = reactExports.useCallback((text) => {
    navigator.clipboard.writeText(text || "");
    setCopiedStack(true);
    setTimeout(() => setCopiedStack(false), 2e3);
  }, []);
  const fetchAnalytics = async (isManual = false) => {
    if (!isManual && data && lastFetched && Date.now() - lastFetched < 3 * 60 * 1e3) return;
    if (isManual) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await apiService.getAdminAnalytics(range);
      setData(res.analytics);
      setLastFetched(Date.now());
    } catch (err) {
      console.error("Analytics fetch failed:", err);
      zt.error("Failed to load analytics");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  const openDrillDown = async (mode, subTool = null) => {
    const key = `${mode}:${range}:${subTool || ""}`;
    setDrillMode(mode);
    setSelectedSubTool(subTool);
    setDrawerOpen(true);
    const cached = drillCache.current[key];
    if (cached && Date.now() - cached.fetchedAt < 3 * 60 * 1e3) {
      setDrillData(cached.data);
      return;
    }
    setDrillLoading(true);
    setDrillData(null);
    try {
      const res = await apiService.getAdminErrorDrillDown(mode, range, subTool || "");
      setDrillData(res.drillDown);
      drillCache.current[key] = { data: res.drillDown, fetchedAt: Date.now() };
    } catch (err) {
      console.error("Drill-down fetch failed:", err);
      zt.error("Failed to load error details");
    } finally {
      setDrillLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);
  reactExports.useEffect(() => {
    drillCache.current = {};
    fetchAnalytics();
  }, [range]);
  const relativeTime = (ts) => {
    if (!ts) return null;
    const diff = Math.floor((Date.now() - ts) / 1e3);
    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };
  const MODE_LABELS = {
    NORMAL_CHAT: "AI Chat",
    LEGAL_TOOLKIT: "Legal Toolkit",
    IMAGE_GENERATION: "Image Generation",
    VIDEO_GENERATION: "Video Generation",
    IMAGE_EDIT: "Image Edit",
    AUDIO_CONVERT: "Audio Convert",
    DOCUMENT_CONVERT: "Document Convert",
    CODE_WRITER: "Code Writer",
    CASHFLOW: "Cashflow",
    RAG: "RAG / Knowledge"
  };
  const MODE_COLORS = [
    "#6C63FF",
    "#FF6584",
    "#43D9B2",
    "#FFB347",
    "#4FC3F7",
    "#E57373",
    "#81C784",
    "#FFD54F",
    "#BA68C8",
    "#4DB6AC"
  ];
  const getLabel = (mode) => MODE_LABELS[mode] || mode || "Unknown";
  const maxModeCount = ((_b = (_a = data == null ? void 0 : data.modeUsage) == null ? void 0 : _a[0]) == null ? void 0 : _b.count) || 1;
  const maxErrorCount = ((_d = (_c = data == null ? void 0 : data.errorByMode) == null ? void 0 : _c[0]) == null ? void 0 : _d.errorCount) || 1;
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm", children: "Loading analytics..." })
  ] });
  const mainContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-black text-maintext flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { className: "w-5 h-5 text-primary" }),
          " Analytics Overview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext mt-0.5", children: "Error rates, card usage & trends" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 bg-white/10 dark:bg-white/5 rounded-xl p-1 border border-white/20", children: ["24h", "7d", "30d", "90d"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setRange(r),
            className: `px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${range === r ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext hover:bg-white/10"}`,
            children: r
          },
          r
        )) }),
        lastFetched && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-subtext/60 hidden sm:block", children: [
          "Updated ",
          relativeTime(lastFetched)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => fetchAnalytics(true),
            disabled: refreshing,
            className: "p-2 rounded-lg hover:bg-primary/10 text-primary transition-all disabled:opacity-50",
            title: "Force refresh (bypass cache)",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-4 h-4 ${refreshing ? "animate-spin" : ""}` })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-primary/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_e = data == null ? void 0 : data.summary) == null ? void 0 : _e.totalSessions) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Total Sessions" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-red-500/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-red-400" }) }),
              ((_f = data == null ? void 0 : data.summary) == null ? void 0 : _f.errorRate) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-lg border border-red-500/20", children: [
                data.summary.errorRate,
                "% rate"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_g = data == null ? void 0 : data.summary) == null ? void 0 : _g.totalErrors) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Total Errors" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-emerald-500/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5 text-emerald-400" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black text-maintext", children: ((_h = data == null ? void 0 : data.summary) == null ? void 0 : _h.apiHits) ?? 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Backend API Hits" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.15 },
          className: "bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-5 group hover:border-primary/30 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-primary" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-black text-maintext", children: [
              (((_i = data == null ? void 0 : data.summary) == null ? void 0 : _i.avgLatency) ?? 0).toFixed(0),
              "ms"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-subtext uppercase tracking-wider mt-1", children: "Avg Response Latency" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Feature Usage Share", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: !(data == null ? void 0 : data.modeUsage) || data.modeUsage.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-12 text-subtext text-sm", children: "No usage data found." }) : data.modeUsage.map((m, i) => {
        const pct = maxModeCount > 0 ? m.count / maxModeCount * 100 : 0;
        const barColor = MODE_COLORS[i % MODE_COLORS.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-maintext flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full shrink-0", style: { backgroundColor: barColor } }),
              getLabel(m._id)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext font-mono font-bold", children: [
              m.count,
              " sessions"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 dark:bg-black/20 rounded-full h-2 overflow-hidden border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${pct}%` },
              transition: { duration: 0.5, delay: i * 0.05 },
              className: "h-full rounded-full",
              style: { backgroundColor: barColor }
            }
          ) })
        ] }, m._id);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: "Errors by Sub-Tool (Click to inspect)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: !(data == null ? void 0 : data.errorByMode) || data.errorByMode.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-12 text-emerald-500 font-semibold text-sm", children: "No errors detected! Clean sheet 🚀" }) : data.errorByMode.map((m, i) => {
        const pct = maxErrorCount > 0 ? m.errorCount / maxErrorCount * 100 : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.01 },
            whileTap: { scale: 0.99 },
            onClick: () => openDrillDown(m._id),
            className: "w-full text-left p-3.5 bg-white/20 dark:bg-white/5 hover:bg-red-500/5 dark:hover:bg-red-500/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all flex flex-col gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-maintext", children: getLabel(m._id) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400 font-bold bg-red-400/10 px-2 py-0.5 rounded-lg border border-red-500/15", children: [
                  m.errorCount,
                  " errors"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 dark:bg-black/20 rounded-full h-1.5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: `${pct}%` },
                  className: "bg-red-400 h-full rounded-full"
                }
              ) })
            ]
          },
          m._id
        );
      }) }) })
    ] })
  ] });
  const maxPatternCount = ((_k = (_j = drillData == null ? void 0 : drillData.patterns) == null ? void 0 : _j[0]) == null ? void 0 : _k.count) || 1;
  const maxDailyErr = ((_m = (_l = drillData == null ? void 0 : drillData.dailyErrors) == null ? void 0 : _l[0]) == null ? void 0 : _m.errorCount) || 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: `
                .custom-drawer-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-drawer-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-drawer-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 999px;
                }
                .custom-drawer-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            ` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-white/10 dark:bg-black/25 p-1 rounded-xl border border-white/10 self-start max-w-sm gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSubTab("usage"),
          className: `flex-1 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center justify-center gap-1.5 ${subTab === "usage" ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
            " Usage & Latency"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setSubTab("incidents"),
          className: `flex-1 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center justify-center gap-2 ${subTab === "incidents" ? "bg-primary text-white shadow-md" : "text-subtext hover:text-maintext"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-3.5 h-3.5 text-orange-400" }),
            " Incident Monitoring",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-orange-400 rounded-full animate-pulse" })
          ]
        }
      )
    ] }),
    subTab === "usage" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      mainContent,
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: drawerOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 0.5 },
            exit: { opacity: 0 },
            onClick: () => setDrawerOpen(false),
            className: "fixed inset-0 z-[2000] bg-black"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" },
            transition: { type: "spring", damping: 26, stiffness: 200 },
            className: "fixed right-0 top-0 bottom-0 z-[2010] w-full max-w-lg bg-[#0e1117] border-l border-white/10 shadow-2xl flex flex-col",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-white/10 bg-white/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-maintext text-base flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-400" }),
                    " Inspecting Errors: ",
                    getLabel(drillMode)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-subtext mt-0.5", children: selectedSubTool ? `Filtered by Sub-Tool: ${selectedSubTool}` : "Sub-pattern analyzer for the active range" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setDrawerOpen(false),
                    className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto custom-drawer-scrollbar p-5 space-y-6", children: drillLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-20 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-6 h-6 text-primary animate-spin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext", children: "Parsing error logs & matching patterns..." })
              ] }) : drillData ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                drillData.toolStats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4 text-primary" }),
                      " Errors by Sub-Tool (Click to Filter)"
                    ] }),
                    selectedSubTool && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => openDrillDown(drillMode, null),
                        className: "text-[10px] text-primary hover:underline font-bold",
                        children: "Clear Filter"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.toolStats.map((t, i) => {
                    const isSelected = selectedSubTool === t.tool;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => openDrillDown(drillMode, isSelected ? null : t.tool),
                        className: `w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left ${isSelected ? "bg-red-500/10 border-red-500/50 hover:bg-red-500/20" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-maintext font-medium", children: t.tool }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-bold px-2 py-0.5 rounded-lg transition-all ${isSelected ? "text-red-400 bg-red-500/20" : "text-red-400 bg-red-400/10"}`, children: [
                            t.count,
                            " errors"
                          ] })
                        ]
                      },
                      i
                    );
                  }) })
                ] }),
                drillData.patterns.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }),
                    " Error Sub-types & Patterns"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.patterns.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { backgroundColor: p.color } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-maintext", children: p.label })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", style: { color: p.color }, children: [
                          p.count,
                          "×"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-subtext", children: [
                          p.sessionCount,
                          " sessions"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/10 rounded-full h-1.5 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { width: 0 },
                        animate: { width: `${Math.round(p.count / maxPatternCount * 100)}%` },
                        style: { width: `${Math.round(p.count / maxPatternCount * 100)}%`, backgroundColor: p.color },
                        transition: { duration: 0.5, delay: i * 0.04 },
                        className: "h-1.5 rounded-full"
                      }
                    ) }),
                    p.samples.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext uppercase tracking-wider font-bold", children: "Sample Messages:" }),
                      p.samples.map((sample, si) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/10 dark:bg-black/30 rounded-lg px-3 py-2 text-xs text-subtext font-mono leading-relaxed border border-white/5", children: [
                        '"',
                        sample.length > 200 ? sample.substring(0, 200) + "..." : sample,
                        '"'
                      ] }, si))
                    ] })
                  ] }, i)) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-subtext text-xs border border-dashed border-white/10 rounded-xl", children: "No specific patterns matched for this sub-tool." }),
                drillData.dailyErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4 text-red-400" }),
                    " Daily Error Trend"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-20", children: drillData.dailyErrors.map((d, i) => {
                      const heightPct = Math.max(4, Math.round(d.errorCount / maxDailyErr * 100));
                      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center flex-1 gap-1", title: `${d._id}: ${d.errorCount} errors`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          initial: { height: 0 },
                          animate: { height: `${heightPct}%` },
                          transition: { duration: 0.4, delay: i * 0.03 },
                          className: "w-full rounded-t-sm bg-gradient-to-t from-red-500 to-red-300",
                          style: { height: `${heightPct}%` }
                        }
                      ) }, i);
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-subtext mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_o = (_n = drillData.dailyErrors[0]) == null ? void 0 : _n._id) == null ? void 0 : _o.slice(5) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: (_q = (_p = drillData.dailyErrors[drillData.dailyErrors.length - 1]) == null ? void 0 : _p._id) == null ? void 0 : _q.slice(5) })
                    ] })
                  ] })
                ] }),
                drillData.recentSessions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-maintext mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-subtext" }),
                    " Recent Affected Sessions",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] text-subtext font-normal", children: "Click Inspect to see full details" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: drillData.recentSessions.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-3 space-y-2 hover:border-white/20 transition-all", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: s.user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "w-3 h-3 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold text-maintext leading-tight", children: s.user.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-subtext leading-tight", children: s.user.email })
                        ] })
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-lg flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-2.5 h-2.5" }),
                        " Guest Session"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400 font-bold bg-red-400/10 px-2 py-0.5 rounded-lg", children: [
                          s.errorCount,
                          " error",
                          s.errorCount !== 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext", children: s.createdAt ? new Date(s.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "-" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-maintext font-semibold", children: [
                        '"',
                        s.sessionTitle || "Unnamed Session",
                        '"'
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-subtext/60", children: "·" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-mono text-subtext", children: s.activeTool || "General" })
                    ] }),
                    s.topError && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-300/80 bg-red-500/5 border border-red-500/10 rounded-lg px-2.5 py-1.5 font-mono leading-relaxed line-clamp-2", children: s.topError }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                        s.os && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded font-mono text-subtext/70 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-2.5 h-2.5" }),
                          s.os
                        ] }),
                        s.browser && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded font-mono text-subtext/70 flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-2.5 h-2.5" }),
                          s.browser
                        ] }),
                        s.statusCode && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-orange-500/10 border border-orange-500/10 px-1.5 py-0.5 rounded font-mono text-orange-400", children: s.statusCode })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          onClick: () => {
                            setInspectSession(s);
                            setDrawerOpen(false);
                          },
                          className: "flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 px-2.5 py-1 rounded-lg transition-all",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                            " Inspect & Resolve"
                          ]
                        }
                      )
                    ] })
                  ] }, i)) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-subtext text-xs border border-dashed border-white/10 rounded-xl", children: "No recent error sessions found for this sub-tool." })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-16 text-subtext", children: "No data available" }) })
            ]
          }
        )
      ] }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMonitoring, {}),
    inspectSession && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SessionInspectorModal,
      {
        session: inspectSession,
        onClose: () => setInspectSession(null),
        copiedStack,
        onCopyStack: copyStack
      }
    )
  ] });
};
const SessionInspectorModal = ({ session, onClose, copiedStack, onCopyStack }) => {
  const [activeTab, setActiveTab] = reactExports.useState("error");
  if (!session) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[3000] flex items-center justify-center p-4", style: { perspective: "1000px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "absolute inset-0 bg-black/70 backdrop-blur-md"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.92, y: 24 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.92, y: 24 },
        transition: { type: "spring", damping: 24, stiffness: 200 },
        className: "relative z-10 w-full max-w-4xl max-h-[92vh] min-h-[520px] flex flex-col bg-[#0a0c12] border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between p-5 border-b border-white/10 bg-gradient-to-r from-red-950/30 to-transparent shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 min-w-0 flex-1 pr-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[10px] font-black text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BugPlay, { className: "w-3 h-3" }),
                  " Session Error Inspector"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-subtext/60", children: session.sessionId ? `ID: ${session.sessionId.substring(0, 24)}...` : "Guest / No Session" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-bold text-maintext leading-tight truncate", children: [
                '"',
                session.sessionTitle || "Unnamed Session",
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-subtext", children: [
                session.createdAt ? new Date(session.createdAt).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "—",
                " · ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-400 font-bold", children: [
                  session.errorCount,
                  " error",
                  session.errorCount !== 1 ? "s" : ""
                ] }),
                " · ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-subtext", children: session.activeTool || "General" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
              session.user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-maintext", children: session.user.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-subtext", children: session.user.email })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-1 rounded-lg flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
                " Guest"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-2 rounded-xl hover:bg-white/10 text-subtext hover:text-maintext transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 bg-[#0d1017] border-b border-white/10 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: [
            { id: "error", label: "Error & Stack", Icon: ShieldAlert, color: "text-red-400", activeBg: "bg-red-500/15 border-red-500/30" },
            { id: "conversation", label: "Conversation", Icon: MessageCircle, color: "text-blue-400", activeBg: "bg-blue-500/15 border-blue-500/30" },
            { id: "telemetry", label: "Telemetry", Icon: Monitor, color: "text-emerald-400", activeBg: "bg-emerald-500/15 border-emerald-500/30" },
            { id: "breadcrumbs", label: "User Journey", Icon: ChevronRight, color: "text-amber-400", activeBg: "bg-amber-500/15 border-amber-500/30" }
          ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveTab(tab.id),
              className: `flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${activeTab === tab.id ? `${tab.activeBg} ${tab.color}` : "border-transparent text-subtext hover:text-maintext hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(tab.Icon, { className: `w-3.5 h-3.5 shrink-0 ${activeTab === tab.id ? tab.color : "text-subtext/60"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: tab.label })
              ]
            },
            tab.id
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar p-5 space-y-4", children: [
            activeTab === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-500/5 border border-red-500/20 rounded-xl p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-red-400 uppercase tracking-widest flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-3.5 h-3.5" }),
                  " Error Message"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-maintext font-mono whitespace-pre-wrap leading-relaxed select-all", children: session.topError || "No error message captured." })
              ] }),
              session.stackTrace ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-[10px] font-black text-subtext uppercase tracking-widest flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-3.5 h-3.5" }),
                    " Full Stack Trace"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => onCopyStack(session.stackTrace),
                      className: "flex items-center gap-1 text-[10px] font-bold text-primary hover:underline transition-all",
                      children: copiedStack ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3 text-emerald-400" }),
                        " Copied!"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3 h-3" }),
                        " Copy Stack"
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-4 bg-[#05070a] border border-white/5 rounded-xl font-mono text-[10.5px] leading-relaxed text-subtext/90 overflow-x-auto select-text whitespace-pre max-h-72 overflow-y-auto custom-scrollbar", children: session.stackTrace })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-subtext text-xs border border-dashed border-white/10 rounded-xl", children: "No stack trace was captured for this error occurrence." }),
              (session.apiRoute || session.statusCode) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 bg-orange-500/5 border border-orange-500/10 rounded-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "w-4 h-4 text-orange-400 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-mono", children: [
                  session.statusCode && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-400 font-bold mr-2", children: [
                    "[",
                    session.statusCode,
                    "]"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-maintext", children: session.apiRoute || "Unknown route" })
                ] })
              ] })
            ] }),
            activeTab === "conversation" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: session.conversation && session.conversation.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext italic", children: [
                "Showing last ",
                session.conversation.length,
                " messages in this session at the time of error."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 flex flex-col", children: session.conversation.map((msg, idx) => {
                var _a;
                const isModel = msg.role === "model" || msg.role === "assistant";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col max-w-[85%] ${isModel ? "self-start" : "self-end ml-auto"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] uppercase font-bold tracking-wider mb-0.5 ${isModel ? "text-primary/70" : "text-subtext/70"}`, children: isModel ? "🤖 AISA AI" : `👤 ${((_a = session.user) == null ? void 0 : _a.name) || "User"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl text-xs leading-relaxed ${isModel ? "bg-white/5 border border-white/10 text-maintext" : "bg-primary text-white"}`, children: msg.content })
                ] }, idx);
              }) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-subtext text-xs border border-dashed border-white/10 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
              "No conversation messages were recorded in this session.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] opacity-60", children: "This may be a direct API call or guest one-shot request." })
            ] }) }),
            activeTab === "telemetry" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
                { label: "Operating System", value: session.os, icon: Monitor },
                { label: "Browser", value: session.browser, icon: Globe },
                { label: "Device", value: session.device, icon: Smartphone },
                { label: "Sub-Tool", value: session.activeTool, icon: Cpu },
                { label: "Session Mode", value: session.detectedMode, icon: BugPlay },
                { label: "Session Type", value: session.isGuest ? "Guest Session" : "Authenticated", icon: UserRound }
              ].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/5 rounded-xl p-3 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] text-subtext/60 uppercase tracking-wider font-extrabold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-3 h-3 text-primary/60" }),
                  item.label
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-maintext break-all", children: item.value || "Unknown" })
              ] }, idx)) }),
              session.user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-maintext", children: session.user.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-subtext flex items-center gap-1 mt-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3" }),
                    " ",
                    session.user.email
                  ] })
                ] })
              ] }),
              session.sessionId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/5 rounded-xl p-3 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-subtext/60 uppercase tracking-wider font-extrabold", children: "Full Session ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-mono text-primary select-all cursor-pointer hover:underline",
                    onClick: () => {
                      navigator.clipboard.writeText(session.sessionId);
                      zt.success("Session ID copied!");
                    },
                    children: session.sessionId
                  }
                )
              ] })
            ] }),
            activeTab === "breadcrumbs" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: session.breadcrumbs && session.breadcrumbs.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext italic", children: [
                "User journey leading up to the error — ",
                session.breadcrumbs.length,
                " events captured."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-l-2 border-primary/20 pl-4 ml-2 space-y-4", children: session.breadcrumbs.map((crumb, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-[#0a0c12] border-2 border-primary/50" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/5 rounded-xl p-3 space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider text-primary", children: crumb.category || "event" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-subtext/50 font-mono", children: crumb.timestamp ? new Date(crumb.timestamp).toLocaleTimeString("en-IN") : "" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-maintext", children: crumb.message }),
                  crumb.data && Object.keys(crumb.data).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-subtext/60 font-mono truncate", children: JSON.stringify(crumb.data) })
                ] })
              ] }, idx)) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-subtext text-xs border border-dashed border-white/10 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
              "No breadcrumb events were captured for this session.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] opacity-60", children: "Breadcrumbs are logged when the SDK is configured on the client side." })
            ] }) })
          ] })
        ]
      }
    )
  ] }) });
};
export {
  SessionInspectorModal,
  AnalyticsTab as default
};
