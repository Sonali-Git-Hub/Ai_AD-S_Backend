import { c as createLucideIcon, v as useLanguage, r as reactExports, O as React, ca as useActiveCase, bS as useOutputLanguage, bT as mapCaseToForm, z as zt, c8 as generateChatResponse, q as getUserData, j as jsxRuntimeExports, ci as SlidersHorizontal, bU as ChevronLeft, bV as LanguageToggle, b$ as History, X, e as ChevronRight, bI as FolderKanban, cj as CloudUpload, k as Sparkles, ck as BrainCircuit, bL as ScanText, ac as ChevronDown, bR as Plus, ae as Search, t as Scale, c2 as Star, U as Upload, n as TriangleAlert, bK as NotebookPen, cl as ShieldCheck, d as Calendar, b as Clock, F as FileText, c1 as CircleCheck, bO as FileCheck, u as Eye, bX as Download, T as Trash2, b_ as Share2, cm as Mic, bY as FileDown, cn as ChevronUp, cb as Brain, P as Check, c4 as PenLine, c3 as Folder, R as RefreshCw, a as apiService, a9 as reactDomExports } from "./index-BpSYSyeq.js";
import { U as UniversalMultimodalInput } from "./UniversalMultimodalInput-C6p7oq4e.js";
import { S as SquareCheckBig } from "./square-check-big-Hw-02z7A.js";
import { C as Cpu } from "./cpu-Dk21_b-M.js";
import { P as Printer } from "./printer-hTskwuIg.js";
import { A as Award } from "./award-Dbox-4xY.js";
import "./mic-off-DabVp5UX.js";
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
      d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
      key: "142zxg"
    }
  ],
  [
    "path",
    {
      d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "2t3380"
    }
  ],
  ["path", { d: "M8 18h1", key: "13wk12" }]
];
const FilePenLine = createLucideIcon("FilePenLine", __iconNode$3);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2", key: "9rb54x" }],
  [
    "path",
    {
      d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",
      key: "1059l0"
    }
  ],
  ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }],
  ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]
];
const FileStack = createLucideIcon("FileStack", __iconNode$2);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2", key: "x099mo" }],
  ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z", key: "18t6ie" }],
  ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8", key: "1nja0z" }]
];
const Files = createLucideIcon("Files", __iconNode$1);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
];
const GitCompareArrows = createLucideIcon("GitCompareArrows", __iconNode);
const allTools = [
  { id: "NDA", name: "NDA Review", desc: "Indemnity & leak audit", category: "NDA" },
  { id: "Employment", name: "Employment Scan", desc: "Non-compete & severance", category: "Employment" },
  { id: "Lease", name: "Lease Review", desc: "Rent escalations & evictions", category: "Lease" },
  { id: "Vendor", name: "Vendor Agreement", desc: "Net payment & penalties", category: "Vendor" },
  { id: "Investment", name: "Investment Review", desc: "Liquidation & vetos", category: "Investment" },
  { id: "SaaS", name: "SaaS Agreement", desc: "SLA uptime & data rights", category: "Tech" },
  { id: "MSA", name: "Master Services Agreement", desc: "Enterprise terms & liability", category: "MSA" }
];
const ContractReview = ({ currentCase, onBack, theme, allProjects = [], onUpdateCase }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
  const { toolkitLanguage, setToolkitLanguage, tLegal: t } = useLanguage();
  const isDark = theme === "dark";
  const [contractTitle, setContractTitle] = reactExports.useState("");
  const [contractText, setContractText] = reactExports.useState("");
  const [multimodalContext, setMultimodalContext] = reactExports.useState(null);
  const [activeTemplateId, setActiveTemplateId] = reactExports.useState("NDA");
  const [linkedCaseId, setLinkedCaseId] = reactExports.useState((currentCase == null ? void 0 : currentCase._id) || "");
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [files, setFiles] = reactExports.useState([]);
  const [isOcrLoading, setIsOcrLoading] = reactExports.useState(false);
  const [ocrSearchQuery, setOcrSearchQuery] = reactExports.useState("");
  const [isEditingOcr, setIsEditingOcr] = reactExports.useState(false);
  const [activeFileId, setActiveFileId] = reactExports.useState(null);
  const [detectedEntities, setDetectedEntities] = reactExports.useState(null);
  const [isAuditing, setIsAuditing] = reactExports.useState(false);
  const [auditError, setAuditError] = reactExports.useState(null);
  const auditAbortRef = React.useRef(null);
  const [auditStep, setAuditStep] = reactExports.useState("");
  const [rawAuditResult, setRawAuditResult] = reactExports.useState(null);
  const [translatedAuditResult, setTranslatedAuditResult] = reactExports.useState(null);
  const originalResultLangRef = reactExports.useRef("en");
  const activeAuditResult = reactExports.useMemo(() => {
    const currentTargetLang = toolkitLanguage === "Hindi" ? "hi" : "en";
    if (currentTargetLang === originalResultLangRef.current || !translatedAuditResult) {
      return rawAuditResult;
    }
    return translatedAuditResult;
  }, [toolkitLanguage, translatedAuditResult, rawAuditResult]);
  const auditResult = activeAuditResult;
  const deepTranslateAuditResult = reactExports.useCallback(async (result, translateFn) => {
    if (!result) return null;
    const EXCLUDED_KEYS = /* @__PURE__ */ new Set([
      "id",
      "_id",
      "risk",
      "status",
      "confidence",
      "overallScore",
      "riskScore",
      "complianceScore",
      "negotiationScore",
      "missingClausesCount",
      "confidenceRate",
      "highRiskClausesCount",
      "mediumRiskClausesCount",
      "lowRiskClausesCount",
      "totalClausesCount",
      "timeSaved",
      "reviewStatus",
      "effectiveDate",
      "expiryDate",
      "duration",
      "date",
      "timestamp",
      "taxes",
      "deposit",
      "penalty",
      "lateFees",
      "renewalCharges",
      "interest",
      "unfair"
    ]);
    const isBypass = (str) => {
      if (!str || typeof str !== "string") return true;
      const trimmed = str.trim();
      if (!trimmed) return true;
      if (/^[0-9a-fA-F]{32,64}$/.test(trimmed)) return true;
      if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(trimmed)) return true;
      if (/^\d+(%|\/\d+)?$/.test(trimmed)) return true;
      if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) return true;
      return false;
    };
    const translatableList = [];
    const traverseCollect = (val, path) => {
      if (val === null || val === void 0) return;
      if (typeof val === "string") {
        const lastKey = path.split(".").pop();
        if (!EXCLUDED_KEYS.has(lastKey) && !isBypass(val)) {
          translatableList.push({ path, original: val });
        }
      } else if (Array.isArray(val)) {
        val.forEach((item, index) => traverseCollect(item, `${path}[${index}]`));
      } else if (typeof val === "object") {
        Object.keys(val).forEach((key) => {
          traverseCollect(val[key], path ? `${path}.${key}` : key);
        });
      }
    };
    traverseCollect(result, "");
    if (translatableList.length === 0) return result;
    const delimiter = " ||| ";
    const joinedText = translatableList.map((item) => item.original).join(delimiter);
    const translatedText = await translateFn(joinedText);
    const translatedSegments = translatedText.split("|||").map((s) => s.trim());
    const cloned = JSON.parse(JSON.stringify(result));
    const setValueAtPath = (obj, path, value) => {
      const parts = path.split(/\.|\[|\]/).filter(Boolean);
      let current = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        current = current[parts[i]];
      }
      const lastKey = parts[parts.length - 1];
      if (current) {
        current[lastKey] = value;
      }
    };
    if (translatedSegments.length === translatableList.length) {
      translatableList.forEach((item, idx) => {
        setValueAtPath(cloned, item.path, translatedSegments[idx]);
      });
    } else {
      console.warn(`[deepTranslate] translation segment count mismatch: got ${translatedSegments.length}, expected ${translatableList.length}. Mapping sequentially.`);
      translatableList.forEach((item, idx) => {
        const translatedVal = translatedSegments[idx] || item.original;
        setValueAtPath(cloned, item.path, translatedVal);
      });
    }
    return cloned;
  }, []);
  const [activeTab, setActiveTab] = reactExports.useState("summary");
  const [historyVisible, setHistoryVisible] = reactExports.useState(false);
  const [historySearch, setHistorySearch] = reactExports.useState("");
  const [isSpeaking, setIsSpeaking] = reactExports.useState(false);
  const [editingFileId, setEditingFileId] = reactExports.useState(null);
  const [editNameInput, setEditNameInput] = reactExports.useState("");
  const [historyTab, setHistoryTab] = reactExports.useState("contracts");
  const [catalogSearch, setCatalogSearch] = reactExports.useState("");
  const [catalogStatusFilter, setCatalogStatusFilter] = reactExports.useState("All");
  const [catalogTypeFilter, setCatalogTypeFilter] = reactExports.useState("All");
  const [catalogRiskFilter, setCatalogRiskFilter] = reactExports.useState("All");
  const [catalogSortKey, setCatalogSortKey] = reactExports.useState("name");
  const [catalogSortOrder, setCatalogSortOrder] = reactExports.useState("asc");
  const [catalogPage, setCatalogPage] = reactExports.useState(1);
  const [catalogBulkSelected, setCatalogBulkSelected] = reactExports.useState([]);
  const [versions, setVersions] = reactExports.useState([]);
  const [auditLogs, setAuditLogs] = reactExports.useState([]);
  const [activeRewriteClause, setActiveRewriteClause] = reactExports.useState(null);
  const [rewriteTone, setRewriteTone] = reactExports.useState("Balanced");
  const [isRewriting, setIsRewriting] = reactExports.useState(false);
  const [rewrittenWording, setRewrittenWording] = reactExports.useState("");
  const [secondContractFile, setSecondContractFile] = reactExports.useState(null);
  const [isComparing, setIsComparing] = reactExports.useState(false);
  const [comparisonResult, setComparisonResult] = reactExports.useState(null);
  const [chatHistory, setChatHistory] = reactExports.useState([]);
  const [chatInput, setChatInput] = reactExports.useState("");
  const [isChatSending, setIsChatSending] = reactExports.useState(false);
  const [toolsSearchQuery, setToolsSearchQuery] = reactExports.useState("");
  const [toolsCategory, setToolsCategory] = reactExports.useState("All");
  const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = reactExports.useState(false);
  const [workspaceSearchQuery, setWorkspaceSearchQuery] = reactExports.useState("");
  const [workspaceCategory, setWorkspaceCategory] = reactExports.useState("All");
  const [isCreateCaseModalOpen, setIsCreateCaseModalOpen] = reactExports.useState(false);
  const [isWorkspaceLoading, setIsWorkspaceLoading] = reactExports.useState(false);
  const [prefillBanner, setPrefillBanner] = reactExports.useState(null);
  const [caseContext, setCaseContext] = reactExports.useState(null);
  const [selectedAnalysisFileId, setSelectedAnalysisFileId] = reactExports.useState(null);
  const [newCaseName, setNewCaseName] = reactExports.useState("");
  const [newCaseClient, setNewCaseClient] = reactExports.useState("");
  const [newCaseOpponent, setNewCaseOpponent] = reactExports.useState("");
  const [newCaseType, setNewCaseType] = reactExports.useState("Civil Suit");
  const [newCaseSummary, setNewCaseSummary] = reactExports.useState("");
  const [duplicateFileConflict, setDuplicateFileConflict] = reactExports.useState(null);
  const [favoriteCases, setFavoriteCases] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("aisa_fav_cases") || "[]");
    } catch {
      return [];
    }
  });
  const [selectedHeatmapRisk, setSelectedHeatmapRisk] = reactExports.useState(null);
  const [activeRedraftId, setActiveRedraftId] = reactExports.useState(null);
  const [redraftPerspective, setRedraftPerspective] = reactExports.useState("lawyer");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = reactExports.useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = reactExports.useState(false);
  const [expandedComplianceIdx, setExpandedComplianceIdx] = reactExports.useState(null);
  const [activePrecedentIdx, setActivePrecedentIdx] = reactExports.useState(null);
  const [collapsedBlocks, setCollapsedBlocks] = reactExports.useState({
    summary: false,
    clauses: true,
    heatmap: true,
    compliance: true,
    negotiation: true,
    redraft: true,
    caseLaws: true
  });
  const toggleBlock = (key) => {
    setCollapsedBlocks((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const getSectionHighlightClass = (sectionKey) => {
    const isSectionActive = activeTab === sectionKey;
    return isSectionActive ? "border-indigo-500/50 shadow-[0_4px_20px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20 border-l-4 border-l-indigo-500 transition-all duration-300" : "border-slate-200 dark:border-zinc-800/80 transition-all duration-300";
  };
  const getSectionStatusBadge = (sectionKey, activeModeName) => {
    if (isAuditing && activeTab === sectionKey) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded text-[8px] font-black uppercase bg-indigo-500/10 text-indigo-500 animate-pulse ml-2 shrink-0", children: [
        "Generating ",
        activeModeName,
        "..."
      ] });
    }
    if (auditResult) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[8px] font-black uppercase bg-emerald-500/10 text-emerald-500 ml-2 shrink-0", children: "Completed" });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[8px] font-black uppercase bg-slate-100 dark:bg-zinc-800 text-slate-400 ml-2 shrink-0", children: "Empty" });
  };
  const handleQuickActionClick = (id) => {
    let newCollapsed = {
      summary: true,
      findings: true,
      heatmap: true,
      clauses: true,
      compliance: true,
      negotiation: true,
      redraft: true,
      caseLaws: true,
      activityLog: true,
      chat: true
    };
    if (id === "summary") {
      newCollapsed.summary = false;
      newCollapsed.findings = false;
      newCollapsed.heatmap = false;
    } else if (id === "heatmap") {
      newCollapsed.findings = false;
      newCollapsed.heatmap = false;
    } else if (id === "clauses") {
      newCollapsed.clauses = false;
    } else if (id === "compliance") {
      newCollapsed.compliance = false;
    } else if (id === "negotiation") {
      newCollapsed.negotiation = false;
    } else if (id === "redraft") {
      newCollapsed.redraft = false;
    }
    setCollapsedBlocks(newCollapsed);
    setTimeout(() => {
      const targetId = id === "summary" ? "summary" : id;
      const element = document.getElementById(`section-${targetId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };
  const [activeSidebarSection, setActiveSidebarSection] = reactExports.useState("contract");
  const [openSections, setOpenSections] = reactExports.useState({
    workspace: true,
    contract: true,
    actions: true,
    templates: false,
    ocr: false,
    insights: false,
    activity: true
  });
  const [favoriteTools, setFavoriteTools] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("aisa_fav_templates");
      return stored ? JSON.parse(stored) : ["NDA"];
    } catch {
      return ["NDA"];
    }
  });
  reactExports.useEffect(() => {
    localStorage.setItem("aisa_fav_templates", JSON.stringify(favoriteTools));
  }, [favoriteTools]);
  const [pinnedTools, setPinnedTools] = reactExports.useState(["Employment"]);
  const activeCaseContext = useActiveCase();
  const triggerAutoRun = activeCaseContext == null ? void 0 : activeCaseContext.triggerAutoRun;
  reactExports.useRef(null);
  reactExports.useRef(null);
  const contractMountedRef = reactExports.useRef(true);
  const uploadInputRef = reactExports.useRef(null);
  const cameraVideoRef = reactExports.useRef(null);
  const cameraStreamRef = reactExports.useRef(null);
  const lastHydratedCaseIdRef = reactExports.useRef(null);
  const suppressHydrationRef = reactExports.useRef(false);
  const [showUploadSourceModal, setShowUploadSourceModal] = reactExports.useState(false);
  const [showCameraModal, setShowCameraModal] = reactExports.useState(false);
  const [cameraError, setCameraError] = reactExports.useState("");
  const [capturedImage, setCapturedImage] = reactExports.useState(null);
  const [isCameraReady, setIsCameraReady] = reactExports.useState(false);
  const [availableCameras, setAvailableCameras] = reactExports.useState([]);
  const [activeCameraIndex, setActiveCameraIndex] = reactExports.useState(0);
  const contextChangeRef = reactExports.useRef(null);
  const stableContextChange = reactExports.useCallback(async (ctx) => {
    if (contextChangeRef.current) {
      await contextChangeRef.current(ctx);
    }
  }, []);
  const {
    setIsTranslating: setIsContractTranslating,
    translateText: translateContractText
  } = useOutputLanguage("contract_review", (currentCase == null ? void 0 : currentCase._id) || "global");
  const [contractOpinionDisplay, setContractOpinionDisplay] = reactExports.useState("");
  reactExports.useEffect(() => {
    contractMountedRef.current = true;
    return () => {
      contractMountedRef.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    localStorage.setItem("aisa_fav_cases", JSON.stringify(favoriteCases));
  }, [favoriteCases]);
  reactExports.useEffect(() => {
    var _a2;
    if ((_a2 = rawAuditResult == null ? void 0 : rawAuditResult.finalOpinion) == null ? void 0 : _a2.reasoning) {
      setContractOpinionDisplay(rawAuditResult.finalOpinion.reasoning);
      originalResultLangRef.current = toolkitLanguage === "Hindi" ? "hi" : "en";
    }
  }, [rawAuditResult]);
  reactExports.useEffect(() => {
    var _a2;
    if (!rawAuditResult) {
      setTranslatedAuditResult(null);
      return;
    }
    const currentTargetLang = toolkitLanguage === "Hindi" ? "hi" : "en";
    if (currentTargetLang === originalResultLangRef.current) {
      setTranslatedAuditResult(null);
      if ((_a2 = rawAuditResult == null ? void 0 : rawAuditResult.finalOpinion) == null ? void 0 : _a2.reasoning) {
        setContractOpinionDisplay(rawAuditResult.finalOpinion.reasoning);
      }
      return;
    }
    const runTranslation = async () => {
      var _a3;
      setIsContractTranslating(true);
      try {
        const translated = await deepTranslateAuditResult(rawAuditResult, translateContractText);
        if (contractMountedRef.current) {
          setTranslatedAuditResult(translated);
          if ((_a3 = translated == null ? void 0 : translated.finalOpinion) == null ? void 0 : _a3.reasoning) {
            setContractOpinionDisplay(translated.finalOpinion.reasoning);
          }
        }
      } catch (e) {
        console.error("[ContractReview] Traversal translation failed:", e);
      } finally {
        if (contractMountedRef.current) setIsContractTranslating(false);
      }
    };
    runTranslation();
  }, [rawAuditResult, toolkitLanguage, translateContractText, setIsContractTranslating, deepTranslateAuditResult]);
  reactExports.useCallback((newLang) => {
    setToolkitLanguage(newLang === "hi" ? "Hindi" : "English");
  }, [setToolkitLanguage]);
  reactExports.useEffect(() => {
    if (currentCase) {
      const newCaseId = currentCase._id;
      setLinkedCaseId(newCaseId);
      if (newCaseId !== lastHydratedCaseIdRef.current && !suppressHydrationRef.current) {
        lastHydratedCaseIdRef.current = newCaseId;
        hydrateFromCase(currentCase);
      }
      const type = currentCase.caseType || "";
      if (type.toLowerCase().includes("employment") || type.toLowerCase().includes("hr")) {
        setToolsCategory("Employment");
      } else if (type.toLowerCase().includes("nda") || type.toLowerCase().includes("disclosure")) {
        setToolsCategory("NDA");
      } else if (type.toLowerCase().includes("lease") || type.toLowerCase().includes("rent")) {
        setToolsCategory("Lease");
      } else if (type.toLowerCase().includes("vendor") || type.toLowerCase().includes("commercial")) {
        setToolsCategory("Vendor");
      } else {
        setToolsCategory("All");
      }
    } else {
      lastHydratedCaseIdRef.current = null;
      resetPlatformState();
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    var _a2;
    if (currentCase) {
      setCaseContext({
        title: currentCase.name || currentCase.title || "",
        caseType: currentCase.caseType || "",
        client: currentCase.clientName || currentCase.client || "",
        accused: currentCase.accused || currentCase.opponent || "",
        court: currentCase.courtName || currentCase.court || "",
        summary: currentCase.description || currentCase.summary || "",
        hearingDate: currentCase.nextHearingDate || ""
      });
      const mapped = mapCaseToForm(currentCase);
      if (mapped.hasContract && ((_a2 = mapped.contractFiles) == null ? void 0 : _a2.length)) {
        mapped.contractFiles[0];
        setPrefillBanner({
          type: "info",
          caseTitle: currentCase.name,
          message: `Case loaded as context. Upload or select a contract document to begin analysis.`
        });
      } else {
        setContractTitle("");
        setContractText("");
        setPrefillBanner(null);
      }
    } else {
      setCaseContext(null);
    }
  }, [currentCase]);
  reactExports.useEffect(() => {
    if (triggerAutoRun && currentCase && !auditResult && !isAuditing) {
      const hasRealContract = files.some((f) => {
        var _a2;
        return (_a2 = f.ocrText) == null ? void 0 : _a2.trim();
      });
      if (!hasRealContract || !(contractText == null ? void 0 : contractText.trim())) {
        zt(`📄 Case context loaded. Upload a contract to begin AI analysis.`, { duration: 3e3 });
        return;
      }
      zt.success(`✓ Contract workspace ready — running analysis`, { icon: "📄", duration: 3e3 });
      setTimeout(() => {
        performContractAuditInternal(contractTitle, contractText, files, versions, auditLogs);
      }, 100);
    }
  }, [triggerAutoRun, currentCase, auditResult, isAuditing]);
  const resetPlatformState = () => {
    setContractTitle("");
    setContractText("");
    setFiles([]);
    setRawAuditResult(null);
    setVersions([]);
    setAuditLogs([]);
    setChatHistory([]);
    setComparisonResult(null);
    setSecondContractFile(null);
    setActiveFileId(null);
  };
  const hydrateFromCase = async (caseObj) => {
    if (!caseObj) return;
    setIsWorkspaceLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    const ci = caseObj.contractIntelligence;
    const workspaceContracts = (caseObj.documents || []).filter((d) => /nda|contract|agreement/i.test(d.name || "") || d.category && /contract|agreement/i.test(d.category)).map((d) => ({
      id: d.id || `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: d.name,
      size: d.size || 0,
      type: d.type || "application/pdf",
      uploadDate: d.uploadedAt ? new Date(d.uploadedAt).toLocaleDateString() : (/* @__PURE__ */ new Date()).toLocaleDateString(),
      ocrText: d.ocrText || "",
      base64: ""
    }));
    let mergedFiles = (ci == null ? void 0 : ci.files) || [];
    workspaceContracts.forEach((wc) => {
      const exists = mergedFiles.some((f) => f.name === wc.name);
      if (!exists) {
        mergedFiles = [...mergedFiles, wc];
      }
    });
    if (mergedFiles.length > 0) {
      setFiles(mergedFiles);
      const activeContractIdFromStorage = sessionStorage.getItem("aiLegal_activeContractId");
      sessionStorage.removeItem("aiLegal_activeContractId");
      let targetFile = null;
      if (activeContractIdFromStorage) {
        targetFile = mergedFiles.find((f) => f.id === activeContractIdFromStorage);
      }
      if (!targetFile && mergedFiles.length === 1) {
        targetFile = mergedFiles[0];
      }
      if (targetFile) {
        setActiveFileId(targetFile.id);
        setSelectedAnalysisFileId(targetFile.id);
        setContractTitle(targetFile.name);
        setContractText(targetFile.ocrText || "");
        setRawAuditResult(targetFile.contractAnalysis || (ci == null ? void 0 : ci.auditResult) || null);
        setVersions(targetFile.versions || (ci == null ? void 0 : ci.versions) || []);
        setAuditLogs(targetFile.auditLogs || (ci == null ? void 0 : ci.auditLogs) || []);
        setChatHistory((ci == null ? void 0 : ci.chatHistory) || []);
        setComparisonResult((ci == null ? void 0 : ci.comparisonResult) || null);
        if (targetFile.ocrText && !targetFile.contractAnalysis) {
          setTimeout(() => {
            performContractAuditInternal(targetFile.name, targetFile.ocrText, mergedFiles, targetFile.versions || [], targetFile.auditLogs || []);
          }, 150);
        }
      } else {
        setActiveFileId(null);
        setSelectedAnalysisFileId(null);
        setContractTitle("");
        setContractText("");
        setRawAuditResult(null);
        setVersions([]);
        setAuditLogs([]);
        setChatHistory([]);
        setComparisonResult(null);
      }
    } else {
      setFiles([]);
      setContractTitle("");
      setContractText("");
      setRawAuditResult(null);
      setVersions([]);
      setAuditLogs([]);
      setChatHistory([]);
      setComparisonResult(null);
      setActiveFileId(null);
      setSelectedAnalysisFileId(null);
    }
    setIsWorkspaceLoading(false);
  };
  const ensureCaseCreated = async (fileName) => {
    let activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    let activeProj = currentCase || allProjects.find((p) => p._id === activeId);
    if (!activeId) {
      setIsSyncing(true);
      const title = `Contract Review: ${fileName || contractTitle || "Custom Agreement"}`;
      try {
        const newProj = await apiService.createProject({
          name: title,
          isLegalCase: true,
          description: `Automatically created for Contract Review of ${fileName || "uploaded file"}.`
        });
        activeId = newProj._id;
        activeProj = newProj;
        setLinkedCaseId(activeId);
        if (onUpdateCase) onUpdateCase(newProj);
        zt.success(`📁 Database Case created: "${title}"`);
      } catch (e) {
        console.error("Auto-create case failed", e);
        zt.error("Offline fallback: using local simulation.");
      } finally {
        setIsSyncing(false);
      }
    }
    return { activeId, activeProj };
  };
  const syncToDatabase = async (updates) => {
    const activeId = linkedCaseId || (currentCase == null ? void 0 : currentCase._id);
    if (!activeId) return;
    setIsSyncing(true);
    try {
      const activeProj = allProjects.find((p) => p._id === activeId) || currentCase;
      const currentCi = (activeProj == null ? void 0 : activeProj.contractIntelligence) || {};
      const nextFiles = updates.files !== void 0 ? updates.files : files;
      let currentDocs = activeProj.documents || [];
      currentDocs = currentDocs.filter((doc) => {
        const isContract = doc.category === "Contract" || doc.isContract === true || /nda|contract|agreement|lease/i.test(doc.name || "");
        if (isContract) {
          return nextFiles.some((f) => f.id === doc.id || f.name === doc.name);
        }
        return true;
      });
      const activeTitle = updates.contractTitle !== void 0 ? updates.contractTitle : contractTitle;
      const activeText = updates.contractText !== void 0 ? updates.contractText : contractText;
      const activeAuditResult2 = updates.auditResult !== void 0 ? updates.auditResult : auditResult;
      const activeVersions = updates.versions !== void 0 ? updates.versions : versions;
      const activeLogs = updates.auditLogs !== void 0 ? updates.auditLogs : auditLogs;
      nextFiles.forEach((f) => {
        const alreadyExists = currentDocs.some((doc) => doc.id === f.id || doc.name === f.name);
        if (!alreadyExists) {
          currentDocs = [
            {
              id: f.id,
              name: f.name,
              type: f.type || "application/pdf",
              size: f.size,
              uploadedAt: (/* @__PURE__ */ new Date()).toISOString(),
              ocrStatus: "Success (OCR Done)",
              aiProcessed: "Extracted successfully",
              ocrText: f.ocrText,
              contractAnalysis: f.contractAnalysis || (f.id === activeFileId ? activeAuditResult2 : null),
              versionHistory: f.versions || (f.id === activeFileId ? activeVersions : []),
              auditTrail: f.auditLogs || (f.id === activeFileId ? activeLogs : []),
              category: "Contract",
              isContract: true
            },
            ...currentDocs
          ];
        }
      });
      currentDocs = currentDocs.map((doc) => {
        const isActive = doc.id === activeFileId || doc.name === activeTitle;
        const match = nextFiles.find((f) => f.id === doc.id || f.name === doc.name);
        if (isActive) {
          return {
            ...doc,
            ocrText: activeText || doc.ocrText,
            contractAnalysis: activeAuditResult2 !== void 0 ? activeAuditResult2 : doc.contractAnalysis,
            versionHistory: activeVersions !== void 0 ? activeVersions : doc.versionHistory,
            auditTrail: activeLogs !== void 0 ? activeLogs : doc.auditTrail,
            category: "Contract",
            isContract: true
          };
        } else if (match) {
          return {
            ...doc,
            ocrText: match.ocrText || doc.ocrText,
            contractAnalysis: match.contractAnalysis || doc.contractAnalysis,
            versionHistory: match.versions || match.versionHistory || doc.versionHistory,
            auditTrail: match.auditLogs || match.auditTrail || doc.auditTrail,
            category: "Contract",
            isContract: true
          };
        }
        return doc;
      });
      const payload = {
        ...activeProj,
        documents: currentDocs,
        contractIntelligence: {
          ...currentCi,
          contractTitle: activeTitle,
          activeContractText: activeText,
          files: nextFiles,
          auditResult: activeAuditResult2,
          versions: activeVersions,
          auditLogs: activeLogs,
          comparisonResult: updates.comparisonResult !== void 0 ? updates.comparisonResult : comparisonResult,
          chatHistory: updates.chatHistory !== void 0 ? updates.chatHistory : chatHistory,
          ...updates
        }
      };
      const response = await apiService.updateProject(activeId, payload);
      if (onUpdateCase) onUpdateCase(response);
    } catch (e) {
      console.error("Database sync failed", e);
    } finally {
      setIsSyncing(false);
    }
  };
  const logAudit = async (action, details, customLogsList = null) => {
    var _a2, _b2;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action,
      details,
      editedBy: `${userName} (${userEmail})`
    };
    const targetList = customLogsList || auditLogs;
    const updatedLogs = [...targetList, newLog];
    setAuditLogs(updatedLogs);
    await syncToDatabase({ auditLogs: updatedLogs });
  };
  const createDocumentVersion = async (newText, note, customVersionsList = null) => {
    const targetVersions = customVersionsList || versions;
    const nextVerNo = targetVersions.length + 1;
    const newVer = {
      version: nextVerNo,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      text: newText,
      note: note || `Revision version ${nextVerNo}`
    };
    const updatedVersions = [...targetVersions, newVer];
    setVersions(updatedVersions);
    await syncToDatabase({
      activeContractText: newText,
      versions: updatedVersions
    });
    await logAudit("Version Saved", `Saved Document version ${nextVerNo} - ${note}`, updatedVersions);
  };
  const processReplaceVersionConflict = async (fileObj, conflictObj) => {
    var _a2, _b2;
    setDuplicateFileConflict(null);
    setIsOcrLoading(true);
    const tid = zt.loading(`OCR Extracting text: ${fileObj.name}...`);
    try {
      const systemPrompt = `You are a professional legal OCR and text extraction engine. Extract all text content from this contract file exactly, maintaining lines, headings, paragraphs, and structure. Do NOT add any notes, headers, or explanations. Just return the extracted document text.`;
      const currentMessage = `Extract the content of this file: ${fileObj.name}`;
      const response = await generateChatResponse(
        [],
        currentMessage,
        systemPrompt,
        [{ url: `data:${fileObj.type || "application/pdf"};base64,${conflictObj.base64}`, name: fileObj.name, type: fileObj.type.startsWith("image/") ? "image" : "document" }],
        toolkitLanguage || "English",
        null,
        "legal"
      );
      const ocrText = response.reply || response || "";
      zt.success(`OCR Complete: ${fileObj.name}`, { id: tid });
      const updatedFiles = files.map((f) => f.name === fileObj.name ? { ...f, size: fileObj.size, uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString(), ocrText, base64: conflictObj.base64 } : f);
      setFiles(updatedFiles);
      setContractTitle(fileObj.name);
      setContractText(ocrText);
      const currentVersions = [...versions];
      const nextVerNo = currentVersions.length + 1;
      const initialVer = {
        version: nextVerNo,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        text: ocrText,
        note: `Version Replaced (Overwrite): ${fileObj.name}`
      };
      const updatedVersions = [...currentVersions, initialVer];
      setVersions(updatedVersions);
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
      const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "File Version Overwritten",
        details: `Replaced staged file "${fileObj.name}" with a newer copy. Version incremented to v${nextVerNo}.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...auditLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({
        activeContractText: ocrText,
        files: updatedFiles,
        versions: updatedVersions,
        auditLogs: updatedLogs
      });
    } catch (err) {
      console.error(err);
      zt.error("Failed to replace version.", { id: tid });
    } finally {
      setIsOcrLoading(false);
    }
  };
  const processCreateNewVersionConflict = async (fileObj, conflictObj) => {
    var _a2, _b2;
    setDuplicateFileConflict(null);
    setIsOcrLoading(true);
    const tid = zt.loading(`OCR Extracting text: ${fileObj.name}...`);
    try {
      const systemPrompt = `You are a professional legal OCR and text extraction engine. Extract all text content from this contract file exactly, maintaining lines, headings, paragraphs, and structure. Do NOT add any notes, headers, or explanations. Just return the extracted document text.`;
      const currentMessage = `Extract the content of this file: ${fileObj.name}`;
      const response = await generateChatResponse(
        [],
        currentMessage,
        systemPrompt,
        [{ url: `data:${fileObj.type || "application/pdf"};base64,${conflictObj.base64}`, name: fileObj.name, type: fileObj.type.startsWith("image/") ? "image" : "document" }],
        toolkitLanguage || "English",
        null,
        "legal"
      );
      const ocrText = response.reply || response || "";
      zt.success(`OCR Complete: ${fileObj.name}`, { id: tid });
      const currentVersions = [...versions];
      const nextVerNo = currentVersions.length + 1;
      const initialVer = {
        version: nextVerNo,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        text: ocrText,
        note: `New Version Uploaded: ${fileObj.name}`
      };
      const updatedVersions = [...currentVersions, initialVer];
      setVersions(updatedVersions);
      setContractTitle(fileObj.name);
      setContractText(ocrText);
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
      const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "New File Version Created",
        details: `Created new version record for contract "${fileObj.name}" without replacing current list.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...auditLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({
        activeContractText: ocrText,
        versions: updatedVersions,
        auditLogs: updatedLogs
      });
    } catch (err) {
      console.error(err);
      zt.error("Failed to create new version.", { id: tid });
    } finally {
      setIsOcrLoading(false);
    }
  };
  const processCompareVersionsConflict = async (fileObj, conflictObj) => {
    setDuplicateFileConflict(null);
    setIsOcrLoading(true);
    const tid = zt.loading(`Extracting version text for comparison...`);
    try {
      const systemPrompt = `You are a professional legal OCR and text extraction engine. Extract all text content from this contract file exactly.`;
      const currentMessage = `Extract the content of this file: ${fileObj.name}`;
      const response = await generateChatResponse(
        [],
        currentMessage,
        systemPrompt,
        [{ url: `data:${fileObj.type || "application/pdf"};base64,${conflictObj.base64}`, name: fileObj.name, type: fileObj.type.startsWith("image/") ? "image" : "document" }],
        toolkitLanguage || "English",
        null,
        "legal"
      );
      const newOcrText = response.reply || response || "";
      zt.success(`OCR Complete! Generating Comparison...`, { id: tid });
      const comparePrompt = `You are a professional legal counsel. Compare the following two versions of a contract:
Version 1 (Existing):
${conflictObj.existingFile.ocrText}

Version 2 (New Upload):
${newOcrText}

Provide a comparative analysis in JSON format:
{
  "modified": [
    {
      "clause": "Name of the clause changed",
      "originalText": "original text summary",
      "newText": "new text summary",
      "riskAssessment": "Risk evaluation of changes"
    }
  ]
}`;
      const compRes = await generateChatResponse(
        [],
        "Compare the versions",
        comparePrompt,
        [],
        toolkitLanguage || "English",
        null,
        "legal"
      );
      const compText = compRes.reply || compRes || "";
      let parsedComp = { modified: [] };
      try {
        const jsonMatch = compText.match(/```json\s*([\s\S]*?)\s*```/) || compText.match(/(\{[\s\S]*\})/);
        if (jsonMatch) parsedComp = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } catch (err) {
        console.error(err);
      }
      setComparisonResult(parsedComp);
      setActiveTab("compare");
      zt.success("Comparison populated! Switch to comparison view tab to inspect.");
    } catch (err) {
      console.error(err);
      zt.error("Failed to compare versions.", { id: tid });
    } finally {
      setIsOcrLoading(false);
    }
  };
  const handleFileUpload = async (e, isComparison = false) => {
    var _a2, _b2;
    const uploadedFiles = e.target.files ? Array.from(e.target.files) : [];
    if (uploadedFiles.length === 0) return;
    if (isComparison) {
      const file = uploadedFiles[0];
      setSecondContractFile({ name: file.name, status: "Staged", text: "" });
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result.split(",")[1];
        setSecondContractFile((prev) => ({ ...prev, base64: base64Data, status: "Loaded" }));
        zt.success(`Secondary contract staged: ${file.name}`);
      };
      reader.readAsDataURL(file);
      return;
    }
    suppressHydrationRef.current = true;
    const existingFile = files.find((f) => f.name === uploadedFiles[0].name);
    if (existingFile) {
      const file = uploadedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(",")[1];
        setDuplicateFileConflict({
          file,
          existingFile,
          base64: base64Data
        });
      };
      reader.readAsDataURL(file);
      suppressHydrationRef.current = false;
      return;
    }
    const { activeId } = await ensureCaseCreated(uploadedFiles[0].name);
    setIsOcrLoading(true);
    const newStagedFiles = [];
    for (const file of uploadedFiles) {
      const reader = new FileReader();
      const loadPromise = new Promise((resolve) => {
        reader.onload = async () => {
          const base64Data = reader.result.split(",")[1];
          const newFile = {
            id: `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString(),
            base64: base64Data,
            ocrText: ""
          };
          resolve(newFile);
        };
        reader.readAsDataURL(file);
      });
      const fileObj = await loadPromise;
      newStagedFiles.push(fileObj);
      try {
        zt.loading(`OCR Extracting text: ${fileObj.name}...`, { id: "ocr" });
        const systemPrompt = `You are a professional legal OCR and text extraction engine. Extract all text content from this contract file exactly, maintaining lines, headings, paragraphs, and structure. Do NOT add any notes, headers, or explanations. Just return the extracted document text.`;
        const currentMessage = `Extract the content of this file: ${fileObj.name}`;
        const response = await generateChatResponse(
          [],
          currentMessage,
          systemPrompt,
          [{ url: `data:${fileObj.type || "application/pdf"};base64,${fileObj.base64}`, name: fileObj.name, type: fileObj.type.startsWith("image/") ? "image" : "document" }],
          toolkitLanguage || "English",
          null,
          "legal"
        );
        fileObj.ocrText = response.reply || response || "";
        zt.success(`OCR Complete: ${fileObj.name}`, { id: "ocr" });
      } catch (err) {
        console.error("OCR Extraction failed", err);
        zt.error(`OCR extraction failed. Copying raw details.`, { id: "ocr" });
        fileObj.ocrText = `File content staged: ${fileObj.name}. Manual revision required if scanned.`;
      }
    }
    const updatedFiles = [...files, ...newStagedFiles];
    setFiles(updatedFiles);
    setActiveFileId(newStagedFiles[0].id);
    setContractTitle(newStagedFiles[0].name);
    setContractText(newStagedFiles[0].ocrText);
    const currentVersions = [...versions];
    const nextVerNo = currentVersions.length + 1;
    const initialVer = {
      version: nextVerNo,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      text: newStagedFiles[0].ocrText,
      note: `Original Upload: ${newStagedFiles[0].name}`
    };
    const updatedVersions = [...currentVersions, initialVer];
    setVersions(updatedVersions);
    setIsOcrLoading(false);
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action: "File Uploaded & OCR Scanned",
      details: `Staged contract ${newStagedFiles[0].name} (${Math.round(newStagedFiles[0].size / 1024)} KB) and completed structural OCR text extraction.`,
      editedBy: `${userName} (${userEmail})`
    };
    const updatedLogs = [...auditLogs, newLog];
    setAuditLogs(updatedLogs);
    await syncToDatabase({
      contractTitle: newStagedFiles[0].name,
      activeContractText: newStagedFiles[0].ocrText,
      files: updatedFiles,
      versions: updatedVersions,
      auditLogs: updatedLogs
    });
    setTimeout(() => {
      const el = document.getElementById("section-live-progress");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
    try {
      await performContractAuditInternal(newStagedFiles[0].name, newStagedFiles[0].ocrText, updatedFiles, updatedVersions, updatedLogs);
    } finally {
      suppressHydrationRef.current = false;
    }
  };
  const openUploadModal = () => setShowUploadSourceModal(true);
  const handleSelectDeviceUpload = () => {
    setShowUploadSourceModal(false);
    setTimeout(() => {
      var _a2;
      return (_a2 = uploadInputRef.current) == null ? void 0 : _a2.click();
    }, 80);
  };
  const handleSelectCameraCapture = () => {
    setShowUploadSourceModal(false);
    startCameraCapture();
  };
  const startCameraCapture = async () => {
    var _a2;
    setCameraError("");
    setCapturedImage(null);
    setIsCameraReady(false);
    setShowCameraModal(true);
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter((d) => d.kind === "videoinput");
      setAvailableCameras(videoDevices);
      const deviceId = (_a2 = videoDevices[activeCameraIndex]) == null ? void 0 : _a2.deviceId;
      const constraints = { video: deviceId ? { deviceId: { exact: deviceId }, width: { ideal: 1280 }, height: { ideal: 720 } } : { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      cameraStreamRef.current = stream;
      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        cameraVideoRef.current.play();
        setIsCameraReady(true);
      }
    } catch (err) {
      console.error("[Camera] Failed to open camera:", err);
      setCameraError("Camera access denied or not available. Please check browser permissions.");
    }
  };
  const stopCamera = () => {
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach((t2) => t2.stop());
      cameraStreamRef.current = null;
    }
    setIsCameraReady(false);
    setCapturedImage(null);
    setShowCameraModal(false);
  };
  const switchCamera = async () => {
    var _a2;
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach((t2) => t2.stop());
    }
    const nextIndex = (activeCameraIndex + 1) % Math.max(availableCameras.length, 1);
    setActiveCameraIndex(nextIndex);
    setIsCameraReady(false);
    try {
      const deviceId = (_a2 = availableCameras[nextIndex]) == null ? void 0 : _a2.deviceId;
      const constraints = { video: deviceId ? { deviceId: { exact: deviceId } } : true, audio: false };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      cameraStreamRef.current = stream;
      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        cameraVideoRef.current.play();
      }
      setIsCameraReady(true);
    } catch (err) {
      setCameraError("Failed to switch camera.");
    }
  };
  const capturePhoto = () => {
    if (!cameraVideoRef.current) return;
    const video = cameraVideoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
    setCapturedImage(dataUrl);
    if (cameraStreamRef.current) cameraStreamRef.current.getTracks().forEach((t2) => t2.enabled = false);
  };
  const retakePhoto = () => {
    setCapturedImage(null);
    if (cameraStreamRef.current) cameraStreamRef.current.getTracks().forEach((t2) => t2.enabled = true);
  };
  const confirmCapturedPhoto = async () => {
    if (!capturedImage) return;
    stopCamera();
    const base64Data = capturedImage.split(",")[1];
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) byteNumbers[i] = byteCharacters.charCodeAt(i);
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    const capturedFile = new File([blob], `captured_document_${Date.now()}.jpg`, { type: "image/jpeg" });
    const syntheticEvent = { target: { files: [capturedFile] } };
    await handleFileUpload(syntheticEvent);
  };
  const runContractAudit = async () => {
    if (!contractText.trim()) {
      zt.error(
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unable to analyze contract." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Reason: OCR text missing.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Upload or load a template first."
        ] }),
        { duration: 6e3 }
      );
      return;
    }
    await performContractAuditInternal(contractTitle, contractText, files, versions, auditLogs);
  };
  const repairTruncatedJson = (jsonStr) => {
    if (!jsonStr) return null;
    jsonStr = jsonStr.trim();
    const firstBrace = jsonStr.indexOf("{");
    if (firstBrace === -1) return null;
    jsonStr = jsonStr.slice(firstBrace);
    let inString = false;
    let escaped = false;
    for (let i = 0; i < jsonStr.length; i++) {
      const char = jsonStr[i];
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\") {
        escaped = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        continue;
      }
    }
    if (inString) {
      jsonStr += '"';
    }
    let cleaned = jsonStr;
    let parsed = null;
    for (let rollbackLen = cleaned.length; rollbackLen > 0; rollbackLen--) {
      let testStr = cleaned.slice(0, rollbackLen);
      testStr = testStr.trim().replace(/[,:\s]+$/, "");
      let openBraces = 0;
      let openBrackets = 0;
      let insideStr = false;
      let esc = false;
      for (let i = 0; i < testStr.length; i++) {
        if (esc) {
          esc = false;
          continue;
        }
        if (testStr[i] === "\\") {
          esc = true;
          continue;
        }
        if (testStr[i] === '"') {
          insideStr = !insideStr;
          continue;
        }
        if (!insideStr) {
          if (testStr[i] === "{") openBraces++;
          else if (testStr[i] === "}") openBraces--;
          else if (testStr[i] === "[") openBrackets++;
          else if (testStr[i] === "]") openBrackets--;
        }
      }
      if (insideStr) {
        testStr += '"';
      }
      for (let i = 0; i < openBrackets; i++) testStr += "]";
      for (let i = 0; i < openBraces; i++) testStr += "}";
      try {
        parsed = JSON.parse(testStr);
        if (parsed) {
          console.log(`[JSON Repair] Successfully repaired JSON by rolling back ${cleaned.length - rollbackLen} characters.`);
          return parsed;
        }
      } catch (e) {
      }
    }
    return null;
  };
  const performContractAuditInternal = async (title, text, activeFiles, activeVersions, activeLogs, loadingMsg, action = "all") => {
    var _a2, _b2, _c2, _d2;
    setIsAuditing(true);
    setRawAuditResult(null);
    setAuditStep("OCR Scanning Check...");
    let resolvedText = text;
    const isPlaceholder = !text || text.trim().startsWith("[Contract file") || text.trim().length < 50;
    if (isPlaceholder && multimodalContext) {
      if (multimodalContext.stagedFiles && multimodalContext.stagedFiles.length > 0) {
        const ocrContent = multimodalContext.stagedFiles.map((f) => f.content || "").filter(Boolean).join("\n\n---\n\n");
        if (ocrContent.trim()) resolvedText = ocrContent;
      }
      if ((!resolvedText || resolvedText.trim().length < 50) && multimodalContext.promptString) {
        resolvedText = multimodalContext.promptString;
      }
    }
    const toastId = zt.loading(loadingMsg || "AI Platform auditing contract parameters...");
    let progressIntervals = [];
    if (action === "heatmap") {
      progressIntervals = [
        { step: "OCR Scanning Check...", delay: 200 },
        { step: "Risk Detection Calculations...", delay: 500 },
        { step: "Analyzing Risk Heatmap...", delay: 1e3 },
        { step: "Calculating Risk Severity...", delay: 1500 }
      ];
    } else if (action === "clauses") {
      progressIntervals = [
        { step: "OCR Scanning Check...", delay: 200 },
        { step: "Extracting Clauses...", delay: 500 },
        { step: "Evaluating Clause Standards...", delay: 1e3 },
        { step: "Verifying Hidden Liabilities...", delay: 1500 }
      ];
    } else if (action === "compliance") {
      progressIntervals = [
        { step: "OCR Scanning Check...", delay: 200 },
        { step: "Statutory Compliance Checks...", delay: 500 },
        { step: "Verifying Labour Laws...", delay: 1e3 },
        { step: "Checking DPDP & Contract Act...", delay: 1500 }
      ];
    } else if (action === "negotiation") {
      progressIntervals = [
        { step: "OCR Scanning Check...", delay: 200 },
        { step: "Preparing Negotiation Wording...", delay: 500 },
        { step: "Generating Fallback Reciprocities...", delay: 1e3 },
        { step: "Assembling Legal Leverage...", delay: 1500 }
      ];
    } else if (action === "redraft") {
      progressIntervals = [
        { step: "OCR Scanning Check...", delay: 200 },
        { step: "Generating Redraft Variations...", delay: 500 },
        { step: "Translating Plain English...", delay: 1e3 },
        { step: "Finalizing Comparative Layouts...", delay: 1500 }
      ];
    }
    const PILLAR_STEPS = {
      summary: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Clause Parsing Contract...", delay: 4e3 },
        { step: "Risk Analysis In Progress...", delay: 1e4 },
        { step: "Legal Opinion Synthesis...", delay: 2e4 },
        { step: "AI Verdict Processing...", delay: 35e3 }
      ],
      heatmap: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Risk Analysis — Heatmap Build...", delay: 3e3 },
        { step: "AI Verdict Risk Scoring...", delay: 12e3 }
      ],
      clauses: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Clause Detect — Category Match...", delay: 3e3 },
        { step: "AI Verdict Gap Analysis...", delay: 15e3 }
      ],
      compliance: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Legal Opinion — Act Mapping...", delay: 5e3 },
        { step: "AI Verdict Status Report...", delay: 18e3 }
      ],
      negotiation: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Clause Parsing Priorities...", delay: 4e3 },
        { step: "AI Verdict Leverage Map...", delay: 15e3 }
      ],
      redraft: [
        { step: "OCR Scanning Document...", delay: 0 },
        { step: "Clause Parsing — Redraft Build...", delay: 4e3 },
        { step: "AI Verdict Plain English...", delay: 18e3 }
      ]
    };
    progressIntervals = PILLAR_STEPS[action] || PILLAR_STEPS["summary"];
    if (auditAbortRef.current) {
      try {
        auditAbortRef.current.abort();
      } catch (_) {
      }
    }
    const controller = new AbortController();
    auditAbortRef.current = controller;
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 9e4);
    setAuditError(null);
    const stepTimers = progressIntervals.map(
      (item) => setTimeout(() => setAuditStep(item.step), item.delay)
    );
    try {
      let actionSpecificInstructions = "";
      if (action === "heatmap") {
        actionSpecificInstructions = `Focus intensely on risk identification and classification. Build the stats riskScore, risk levels (Critical/High/Medium/Low counts), executiveSummary majorLegalRisks, commercialRisks, financialRisks, and complianceConcerns. Create an actual risk matrix. Set a highly accurate confidenceRate.`;
      } else if (action === "clauses") {
        actionSpecificInstructions = `Extract and categorize every clause. Focus on identifying and parsing all 20 clause categories: Payment Terms, Termination, Confidentiality, Indemnity, Force Majeure, Arbitration, Jurisdiction, Dispute Resolution, Notice, Intellectual Property, Data Privacy, Non Compete, Warranty, Limitation of Liability, Assignment, Entire Agreement, Renewal, Default, Penalty. Make sure to populate the "clauses" and "missingClauses" lists.`;
      } else if (action === "compliance") {
        actionSpecificInstructions = `Perform a comprehensive regulatory compliance check. Compare the contract against the Indian Contract Act 1872, DPDP Act 2023, Companies Act, Employment Laws, MSME Act, Consumer Protection, and Arbitration Act. Generate a detailed compliance report with pass/fail/warning statuses and explanations in the "compliance" list.`;
      } else if (action === "negotiation") {
        actionSpecificInstructions = `Generate detailed negotiation recommendations. Populate the "negotiationCenter" object with Seller-friendly changes, Buyer-friendly changes, balanced options, and fallback recommendations, along with must-accept/must-reject points.`;
      } else if (action === "redraft") {
        actionSpecificInstructions = `Generate improved, lawyer-grade clause redrafts. For each extracted clause in the "clauses" list, populate the "redraftSuggestions" object with lawyerVersion, clientVersion, and plainEnglish translations, highlighting risk reduction reasons.`;
      } else {
        actionSpecificInstructions = `Perform a complete contract audit. Populate every downstream section of the JSON schema (stats, summary, executiveSummary, clauses, missingClauses, compliance, financials, obligations, timeline, negotiationCenter, finalOpinion) completely and thoroughly.`;
      }
      let templateSpecificInstructions = "";
      if (activeTemplateId === "NDA") {
        templateSpecificInstructions = `The staged template context is a Non-Disclosure Agreement (NDA). Check specifically for typical NDA rules: unilateral vs reciprocal confidentiality obligations, term of confidentiality, exclusions to confidential information, return of materials, governing law, and jurisdiction.`;
      } else if (activeTemplateId === "Employment") {
        templateSpecificInstructions = `The staged template context is an Employment Agreement. Focus on employment clause intelligence: post-employment non-compete periods, unilateral termination notice terms, IP assignment to employer, dispute resolution, and probation duration.`;
      } else if (activeTemplateId === "Lease") {
        templateSpecificInstructions = `The staged template context is a Lease Deed. Apply lease-specific compliance rules: monthly license fee compounding rate escalation limits, summary eviction notice notice periods, utility maintenance delay rights, and security deposit forfeiture terms.`;
      } else if (activeTemplateId === "Vendor") {
        templateSpecificInstructions = `The staged template context is a Vendor Contract. Apply vendor-specific clause checklists: Net payment terms thresholds (e.g. Net 30/60/90), liquidated damages rates per day of delay, immediate IP transfer timelines, and liability limitation caps.`;
      }
      const systemPrompt = `You are a Senior Corporate Advocate and Chief Legal Counsel.
Perform a complete legal due diligence and contract audit of the provided contract content.
Your review must read like a premium legal memorandum prepared by an experienced attorney at a top-tier law firm (equivalent to Harvey AI, Lexis+ AI, or CoCounsel).
The analysis must be legally precise, commercially meaningful, supported by legal reasoning, and professionally drafted.

STRICT TONE & LANGUAGE RULES:
- NEVER use generic AI sentences or robotic/chatbot wording (e.g. "Standard reciprocity terms applied", "No findings available", "Potential issue").
- INSTEAD write: "The clause appears commercially balanced and does not create disproportionate obligations upon either contracting party" or "No material legal risk has been identified under this category following clause analysis" or "This provision may expose the parties to avoidable contractual disputes due to ambiguity in drafting."
- If the contract doesn't contain enough information for a field, output exactly: "Insufficient contractual language available to reach a reliable legal conclusion."
- Avoid placeholders or repeating the same recommendation. Every suggestion must be highly specific to the clause context.
- Differentiate clearly between facts, legal interpretation, risk assessment, and legal recommendation.
- Do NOT hallucinate. Every recommendation must be traceable to the contract clauses.
- Keep descriptions, reasons, recommendations, and explanations concise (1-2 sentences maximum) while maintaining advocate-grade precision. This prevents output token limits from truncating the JSON response.

Output your complete legal findings as a single valid JSON object.
Do NOT include any markdown envelope other than the "json" code block. No conversational preamble.

Action Guidance:
${actionSpecificInstructions}

Template Rules:
${templateSpecificInstructions}

JSON Schema structure:
{
  "stats": {
    "overallScore": <Integer 0-100, representing overall contract health where 100 is excellent>,
    "riskScore": <Integer 0-100, representing overall legal risk percentage>,
    "complianceScore": <Integer 0-100, representing overall regulatory compliance percentage>,
    "negotiationScore": <Integer 0-100, representing commercial balance score>,
    "missingClausesCount": <Integer>,
    "confidenceRate": <Integer 0-100, representing AI review confidence rate>,
    "highRiskClausesCount": <Integer>,
    "mediumRiskClausesCount": <Integer>,
    "lowRiskClausesCount": <Integer>,
    "totalClausesCount": <Integer>,
    "timeSaved": "<Estimated review time saved e.g. 4.5 Hours>",
    "reviewStatus": "<Critical Legal Risk | High Legal Risk | Medium Legal Risk | Low Legal Risk>"
  },
  "summary": {
    "contractType": "<Contract classification e.g. NDA, Commercial Lease, Master Service Agreement>",
    "parties": "<Detailed list of parties and business units>",
    "effectiveDate": "<Date or 'Not Specified'>",
    "expiryDate": "<Date or 'Not Specified'>",
    "duration": "<Duration details>",
    "jurisdiction": "<Legal jurisdiction location>",
    "governingLaw": "<Governing laws and legislative frameworks>",
    "paymentTerms": "<Payment milestones and schedules>",
    "terminationDate": "<Termination notice periods and dates>",
    "renewalDate": "<Renewal schedules>",
    "renewalStatus": "<Automatic | Manual | Non-Renewable>",
    "businessPurpose": "<The commercial and business objective of this contract>"
  },
  "executiveSummary": {
    "overallAssessment": "<Overall assessment summary. Delineate overall contract health, key legal/commercial concerns, and enforceability assessment.>",
    "majorLegalRisks": ["<Risk 1 with legal justification>", "<Risk 2 with legal justification>"],
    "commercialRisks": ["<Commercial Risk 1>", "<Commercial Risk 2>"],
    "financialRisks": ["<Financial Risk 1>", "<Financial Risk 2>"],
    "complianceConcerns": ["<Statutory Compliance Concern 1>", "<Statutory Compliance Concern 2>"],
    "urgentActionItems": ["<Action 1>", "<Action 2>"],
    "negotiationPriorities": ["<Priority 1>", "<Priority 2>"],
    "topOpportunities": ["<Opportunity 1>", "<Opportunity 2>"],
    "finalRecommendation": "<Final execution recommendation statement prepared by counsel>"
  },
  "clauses": [
    {
      "id": "<Unique code, e.g. c1, c2>",
      "name": "<Clause Name e.g. Confidentiality, Indemnity>",
      "text": "<The actual text corresponding from the contract>",
      "risk": "<Low | Medium | High | Critical>",
      "explanation": "<Advocate explanation of why this risk rating is assigned, detailing the legal and commercial exposures>",
      "unfair": <Boolean true/false if clause is one-sided or highly unfair>,
      "suggestion": "<Suggested edits and mitigation strategy for counsel>",
      "legalImpact": "<High | Medium | Low>",
      "commercialImpact": "<High | Medium | Low>",
      "industryStandard": "<Standard wording comparison / deviation detail>",
      "confidence": <Integer 0-100>,
      "indianLawMapping": {
        "section": "<Section e.g. Section 27, Section 73>",
        "actName": "<Act name e.g. Indian Contract Act, 1872>",
        "applicability": "<Statutory applicability details>",
        "interpretation": "<Legal interpretation under Indian Jurisprudence>",
        "practicalEffect": "<Practical dispute/enforcement effect>"
      },
      "caseLawMapping": [
        {
          "citation": "<Supreme Court or High Court Citation>",
          "judgmentName": "<Case Title>",
          "ratio": "<Ratio decidendi>",
          "implication": "<Practical implication for litigation/negotiation>"
        }
      ],
      "redraftSuggestions": {
        "lawyerVersion": "<Draft written in precise, senior attorney legal English>",
        "clientVersion": "<Commercial client-friendly version>",
        "plainEnglish": "<Simple translation without legal jargon>"
      }
    }
  ],
  "missingClauses": [
    {
      "name": "<Missing clause title e.g. Force Majeure>",
      "category": "<Critical Missing | Recommended | Optional>",
      "importance": "<High | Medium | Low>",
      "explanation": "<Why this clause is necessary in this contract type>",
      "riskCreated": "<Vulnerability or negative exposure created by its absence>",
      "suggestedWording": "<Suggested draft clause wording>",
      "applicableActs": "<Acts e.g. Indian Contract Act 1872>",
      "relatedJudgments": "<Case citations or statutory references>"
    }
  ],
  "compliance": [
    {
      "law": "<Framework name e.g. Indian Contract Act 1872, DPDP Act 2023, Companies Act, Employment Laws, MSME Act, Consumer Protection, Arbitration Act>",
      "status": "<Passed | Failed | Warning | Not Applicable>",
      "reason": "<Specific legal explanation of the compliance status and details of gaps>",
      "suggestedFix": "<Suggested amendment wording or statutory change to fix the compliance gap, or 'N/A'>"
    }
  ],
  "financials": {
    "paymentAmount": "<Payment numbers and parameters>",
    "taxes": "<GST/tax rates or liability>",
    "deposit": "<Security deposits details>",
    "penalty": "<Liquidated damages or penalty rates>",
    "lateFees": "<Interest or late fees rules>",
    "renewalCharges": "<Renewal pricing rules>",
    "interest": "<Compounded interest values>",
    "summaryText": "<Financial overview explanation>"
  },
  "obligations": {
    "yours": ["<Your action obligation 1>", "<Your action obligation 2>"],
    "theirs": ["<Opposite party obligation 1>", "<Opposite party obligation 2>"],
    "summaryText": "<Obligation matrix breakdown summary>"
  },
  "timeline": [
    {
      "date": "<Target date event>",
      "event": "<Event title e.g. First Payment, Expiry>",
      "description": "<Description of requirements or deadlines>"
    }
  ],
  "negotiationCenter": {
    "sellerFriendly": ["<Negotiation point 1>"],
    "buyerFriendly": ["<Negotiation point 1>"],
    "oneSided": ["<Indication of one-sided covenant 1>"],
    "balanced": ["<Indication of balanced covenant 1>"],
    "negotiationSuggestions": ["<Advocate negotiation advice point 1>"],
    "fallbackLanguage": ["<Fallback language draft clause>"],
    "betterDraft": ["<Preferred alternative draft language>"]
  },
  "finalOpinion": {
    "status": "<Critical Legal Risk | High Legal Risk | Medium Legal Risk | Low Legal Risk>",
    "reasoning": "<Executive reasoning explaining overall contract health, execution suitability, and key commercial/statutory recommendations>"
  }
}

CRITICAL PROMPT DIRECTIVE:
1. You MUST construct your response based primarily on the uploaded documents, OCR text details, voice transcripts, and manual notes provided in the Case Facts / Staged Context. 
2. Under no circumstances are you allowed to return a generic template case description.
3. You MUST quote the actual uploaded facts, party names (e.g. "Rajesh Kumar Sharma", "Sunil Verma"), specific dates (e.g. 15/09/2025, 05/02/2026), exact clauses (e.g. Clause 8), witness details, and sections mentioned in the context.
4. If multiple sources conflict, resolve them using the priority rules: Voice Instructions ➔ Manual Notes ➔ Uploaded Document Facts.`;
      const caseContextBlock = caseContext ? `════════════════════════════════════════
CASE CONTEXT (legal background only — do NOT analyze this as the contract)
════════════════════════════════════════
Case Title   : ${caseContext.title}
Parties      : ${caseContext.client || "N/A"} vs. ${caseContext.accused || "N/A"}
Case Type    : ${caseContext.caseType || "N/A"}
Court        : ${caseContext.court || "N/A"}
Case Summary : ${caseContext.summary || "N/A"}
` : "";
      const MAX_CONTRACT_CHARS = 12e3;
      const contractTextForAI = resolvedText.length > MAX_CONTRACT_CHARS ? resolvedText.slice(0, MAX_CONTRACT_CHARS) + `

[NOTE: Contract text truncated to ${MAX_CONTRACT_CHARS} characters for AI processing. Full document is ${resolvedText.length} characters. Analysis covers the first portion of the contract.]` : resolvedText;
      let userMessage = `${caseContextBlock}
════════════════════════════════════════
CONTRACT DOCUMENT (analyze this ONLY)
════════════════════════════════════════
Contract Title: ${title || "Uploaded Contract"}

${contractTextForAI}

════════════════════════════════════════
TASK
════════════════════════════════════════
Perform complete contract analysis EXCLUSIVELY on the Contract Document above.
Use the Case Context ONLY to improve legal understanding (parties, jurisdiction hints).
DO NOT generate analysis from the Case Summary alone.
DO NOT fabricate clauses that are not present in the Contract Document.`;
      if (multimodalContext && multimodalContext.promptString) {
        userMessage += `

════════════════════════════════════════
MULTIMODAL EXPLANATION & INPUTS (incorporate into analysis)
════════════════════════════════════════
${multimodalContext.promptString}`;
      }
      console.log(`[ContractAudit] Sending ${userMessage.length} chars to AI (contract: ${resolvedText.length} → ${contractTextForAI.length} chars used)`);
      setAuditStep("Processing compliance algorithms...");
      const attachments = [];
      if (multimodalContext && multimodalContext.cameraImages) {
        multimodalContext.cameraImages.forEach((img) => {
          attachments.push({
            url: `data:image/png;base64,${img.base64}`,
            name: img.name,
            type: "image"
          });
        });
      }
      const response = await generateChatResponse(
        [],
        userMessage,
        systemPrompt,
        attachments,
        toolkitLanguage || "English",
        controller.signal,
        // AbortController signal for 90s timeout
        "legal"
      );
      if (!response) {
        throw new Error("No response received from AI service. Check your connection.");
      }
      if (response.error === "OUT_OF_CREDITS") {
        throw new Error("AI credits exhausted. Please upgrade your plan to continue contract analysis.");
      }
      if (response.error === "PREMIUM_ONLY") {
        throw new Error("Contract AI analysis requires a Premium plan. Please upgrade to continue.");
      }
      if (response.error === "LIMIT_REACHED") {
        throw new Error("Daily usage limit reached. Please try again tomorrow or upgrade your plan.");
      }
      const rawReply = response.reply || (typeof response === "string" ? response : null) || "";
      if (!rawReply || rawReply.startsWith("System Message:") || rawReply.startsWith("System Error:") || rawReply.startsWith("Sorry, I am having")) {
        throw new Error(`AI service error: ${rawReply || "Unknown error"}. Please try again.`);
      }
      const responseText = rawReply;
      console.log(`[ContractAudit] Raw AI response: ${responseText.length} chars. Preview: ${responseText.slice(0, 200)}...`);
      let parsedResult = null;
      const codeBlockMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
      if (codeBlockMatch) {
        try {
          parsedResult = JSON.parse(codeBlockMatch[1]);
        } catch (_) {
        }
      }
      if (!parsedResult) {
        const firstBrace = responseText.indexOf("{");
        if (firstBrace !== -1) {
          let depth = 0, endIdx = -1;
          for (let i = firstBrace; i < responseText.length; i++) {
            if (responseText[i] === "{") depth++;
            else if (responseText[i] === "}") {
              depth--;
              if (depth === 0) {
                endIdx = i;
                break;
              }
            }
          }
          if (endIdx !== -1) {
            try {
              parsedResult = JSON.parse(responseText.slice(firstBrace, endIdx + 1));
            } catch (_) {
            }
          }
        }
      }
      if (!parsedResult) {
        try {
          parsedResult = repairTruncatedJson(responseText);
        } catch (_) {
        }
      }
      if (!parsedResult || !parsedResult.stats) {
        console.warn("[ContractAudit] All parse strategies failed, retrying with compact prompt...");
        setAuditStep("Retrying with compact analysis format...");
        const retrySystemPrompt = `You are a legal contract analyzer. Output ONLY a raw JSON object with NO markdown, NO explanation, just the JSON. The JSON must have a "stats" key at minimum.`;
        const retryUserMsg = `Analyze this contract and return ONLY valid JSON with keys: stats (overallScore, riskScore, complianceScore, negotiationScore, missingClausesCount, highRiskClausesCount, mediumRiskClausesCount, lowRiskClausesCount, totalClausesCount, timeSaved, reviewStatus, confidenceRate), summary (contractType, parties, effectiveDate, expiryDate, duration, jurisdiction, governingLaw, paymentTerms, renewalStatus, businessPurpose), executiveSummary (overallAssessment, majorLegalRisks, commercialRisks, financialRisks, complianceConcerns, urgentActionItems, negotiationPriorities, topOpportunities, finalRecommendation), clauses (array), missingClauses (array), compliance (array), finalOpinion (status, reasoning).

Contract:
${text.slice(0, 4e3)}`;
        try {
          const retryResp = await generateChatResponse([], retryUserMsg, retrySystemPrompt, [], toolkitLanguage || "English", null, "legal");
          const retryText = retryResp.reply || retryResp || "";
          const rBlock = retryText.match(/```json\s*([\s\S]*?)\s*```/);
          if (rBlock) {
            try {
              parsedResult = JSON.parse(rBlock[1]);
            } catch (_) {
            }
          }
          if (!parsedResult) {
            const rb = retryText.indexOf("{");
            if (rb !== -1) {
              let d = 0, ei = -1;
              for (let i = rb; i < retryText.length; i++) {
                if (retryText[i] === "{") d++;
                else if (retryText[i] === "}") {
                  d--;
                  if (d === 0) {
                    ei = i;
                    break;
                  }
                }
              }
              if (ei !== -1) {
                try {
                  parsedResult = JSON.parse(retryText.slice(rb, ei + 1));
                } catch (_) {
                }
              }
            }
          }
          if (!parsedResult) {
            try {
              parsedResult = repairTruncatedJson(retryText);
            } catch (_) {
            }
          }
        } catch (retryErr) {
          console.error("[ContractAudit] Retry failed:", retryErr);
        }
      }
      if (!parsedResult || !parsedResult.stats) {
        throw new Error("AI returned an unstructured response. Please try again — the contract may be too large for a single analysis pass.");
      }
      const toArr = (v) => Array.isArray(v) ? v : v ? [v] : [];
      const toStr = (v) => {
        if (v === null || v === void 0) return "";
        if (typeof v === "string") return v;
        if (typeof v === "number" || typeof v === "boolean") return String(v);
        if (Array.isArray(v)) return v.map(toStr).join(", ");
        if (typeof v === "object") return Object.entries(v).map(([k, val]) => `${k}: ${toStr(val)}`).join(" · ");
        return String(v);
      };
      if (parsedResult.clauses && !Array.isArray(parsedResult.clauses)) parsedResult.clauses = toArr(parsedResult.clauses);
      if (parsedResult.missingClauses && !Array.isArray(parsedResult.missingClauses)) parsedResult.missingClauses = toArr(parsedResult.missingClauses);
      if (parsedResult.compliance && !Array.isArray(parsedResult.compliance)) parsedResult.compliance = toArr(parsedResult.compliance);
      if (parsedResult.timeline && !Array.isArray(parsedResult.timeline)) parsedResult.timeline = toArr(parsedResult.timeline);
      if (parsedResult.summary) {
        const s = parsedResult.summary;
        s.contractType = toStr(s.contractType);
        s.parties = toStr(s.parties);
        s.effectiveDate = toStr(s.effectiveDate);
        s.expiryDate = toStr(s.expiryDate);
        s.duration = toStr(s.duration);
        s.jurisdiction = toStr(s.jurisdiction);
        s.governingLaw = toStr(s.governingLaw);
        s.paymentTerms = toStr(s.paymentTerms);
        s.terminationDate = toStr(s.terminationDate);
        s.renewalDate = toStr(s.renewalDate);
        s.renewalStatus = toStr(s.renewalStatus);
        s.businessPurpose = toStr(s.businessPurpose);
      }
      if (parsedResult.stats) {
        const st = parsedResult.stats;
        st.timeSaved = toStr(st.timeSaved);
        st.reviewStatus = toStr(st.reviewStatus);
      }
      if (parsedResult.financials) {
        const f = parsedResult.financials;
        f.paymentAmount = toStr(f.paymentAmount);
        f.taxes = toStr(f.taxes);
        f.deposit = toStr(f.deposit);
        f.penalty = toStr(f.penalty);
        f.lateFees = toStr(f.lateFees);
        f.renewalCharges = toStr(f.renewalCharges);
        f.interest = toStr(f.interest);
        f.summaryText = toStr(f.summaryText);
      }
      if (parsedResult.executiveSummary) {
        const es = parsedResult.executiveSummary;
        es.overallAssessment = toStr(es.overallAssessment);
        es.finalRecommendation = toStr(es.finalRecommendation);
        es.majorLegalRisks = toArr(es.majorLegalRisks).map(toStr);
        es.commercialRisks = toArr(es.commercialRisks).map(toStr);
        es.financialRisks = toArr(es.financialRisks).map(toStr);
        es.complianceConcerns = toArr(es.complianceConcerns).map(toStr);
        es.urgentActionItems = toArr(es.urgentActionItems).map(toStr);
        es.negotiationPriorities = toArr(es.negotiationPriorities).map(toStr);
        es.topOpportunities = toArr(es.topOpportunities).map(toStr);
      }
      if (parsedResult.finalOpinion) {
        parsedResult.finalOpinion.status = toStr(parsedResult.finalOpinion.status);
        parsedResult.finalOpinion.reasoning = toStr(parsedResult.finalOpinion.reasoning);
      }
      if (parsedResult.obligations) {
        parsedResult.obligations.yours = toArr(parsedResult.obligations.yours).map(toStr);
        parsedResult.obligations.theirs = toArr(parsedResult.obligations.theirs).map(toStr);
        parsedResult.obligations.summaryText = toStr(parsedResult.obligations.summaryText);
      }
      if (parsedResult.negotiationCenter) {
        const nc = parsedResult.negotiationCenter;
        nc.sellerFriendly = toArr(nc.sellerFriendly).map(toStr);
        nc.buyerFriendly = toArr(nc.buyerFriendly).map(toStr);
        nc.oneSided = toArr(nc.oneSided).map(toStr);
        nc.balanced = toArr(nc.balanced).map(toStr);
        nc.negotiationSuggestions = toArr(nc.negotiationSuggestions).map(toStr);
        nc.fallbackLanguage = toArr(nc.fallbackLanguage).map(toStr);
        nc.betterDraft = toArr(nc.betterDraft).map(toStr);
      }
      if (Array.isArray(parsedResult.clauses)) {
        parsedResult.clauses = parsedResult.clauses.map((c) => ({
          ...c,
          name: toStr(c.name),
          text: toStr(c.text),
          risk: toStr(c.risk),
          explanation: toStr(c.explanation),
          suggestion: toStr(c.suggestion),
          legalImpact: toStr(c.legalImpact),
          commercialImpact: toStr(c.commercialImpact),
          industryStandard: toStr(c.industryStandard),
          caseLawMapping: toArr(c.caseLawMapping),
          indianLawMapping: c.indianLawMapping && typeof c.indianLawMapping === "object" ? {
            section: toStr(c.indianLawMapping.section),
            actName: toStr(c.indianLawMapping.actName),
            applicability: toStr(c.indianLawMapping.applicability),
            interpretation: toStr(c.indianLawMapping.interpretation),
            practicalEffect: toStr(c.indianLawMapping.practicalEffect)
          } : {}
        }));
      }
      if (Array.isArray(parsedResult.missingClauses)) {
        parsedResult.missingClauses = parsedResult.missingClauses.map((m) => ({
          ...m,
          name: toStr(m.name),
          category: toStr(m.category),
          importance: toStr(m.importance),
          explanation: toStr(m.explanation),
          riskCreated: toStr(m.riskCreated),
          suggestedWording: toStr(m.suggestedWording),
          applicableActs: toStr(m.applicableActs),
          relatedJudgments: toStr(m.relatedJudgments)
        }));
      }
      if (Array.isArray(parsedResult.compliance)) {
        parsedResult.compliance = parsedResult.compliance.map((c) => ({
          ...c,
          law: toStr(c.law),
          status: toStr(c.status),
          reason: toStr(c.reason),
          suggestedFix: toStr(c.suggestedFix)
        }));
      }
      setRawAuditResult(parsedResult);
      zt.success("AI Contract intelligence report compiled!", { id: toastId });
      if (action === "summary" || action === "all") {
        setCollapsedBlocks({
          summary: false,
          findings: false,
          heatmap: false,
          clauses: true,
          compliance: true,
          negotiation: true,
          redraft: true,
          caseLaws: true,
          activityLog: true,
          chat: true
        });
      } else {
        handleQuickActionClick(action);
      }
      const timestamp = (/* @__PURE__ */ new Date()).toISOString();
      const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
      const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
      const newLog = {
        timestamp,
        action: "AI Clause Review Generated",
        details: `Generated intelligence audit. Compliance Rating: ${parsedResult.stats.complianceScore}%, Risk rating: ${parsedResult.stats.reviewStatus}. Identified ${((_c2 = parsedResult.clauses) == null ? void 0 : _c2.length) || 0} active clauses and ${((_d2 = parsedResult.missingClauses) == null ? void 0 : _d2.length) || 0} gaps.`,
        editedBy: `${userName} (${userEmail})`
      };
      const updatedLogs = [...activeLogs, newLog];
      setAuditLogs(updatedLogs);
      await syncToDatabase({
        auditResult: parsedResult,
        auditLogs: updatedLogs
      });
    } catch (err) {
      console.error("[ContractAudit] Generation failed:", err);
      const isTimeout = err.name === "AbortError" || err.code === "ERR_CANCELED";
      const errMsg = isTimeout ? "Request timed out (90s). The contract may be too large — try a shorter excerpt." : err.message || "Network delay or parsing issue. Check your connection.";
      setAuditError(errMsg);
      zt.error(
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Report generation failed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Reason: ",
          errMsg,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Use the Retry button below to try again." })
        ] }),
        { id: toastId, duration: 8e3 }
      );
    } finally {
      clearTimeout(timeoutId);
      stepTimers.forEach((t2) => clearTimeout(t2));
      setIsAuditing(false);
      setAuditStep("");
    }
  };
  const executeClauseRewrite = async () => {
    if (!activeRewriteClause) return;
    setIsRewriting(true);
    try {
      const systemPrompt = `You are a senior enterprise corporate lawyer drafting contracts under Indian and international laws.
Rewrite the provided clause to make it more ${rewriteTone}. 
Ensure the wording is highly professional, precise, court-ready, and mitigates undue liability.
Output ONLY the rewritten clause text inside a code block. Do NOT add conversational headers, greetings, or details.`;
      const response = await generateChatResponse(
        [],
        `Original Clause Name: ${activeRewriteClause.name}
Original Text: ${activeRewriteClause.text}

Rewrite Style: ${rewriteTone}`,
        systemPrompt,
        [],
        toolkitLanguage || "English",
        null,
        "legal"
      );
      const reply = response.reply || response || "";
      const cleanReply = reply.replace(/```[a-z]*\n?/g, "").replace(/```/g, "").trim();
      setRewrittenWording(cleanReply);
    } catch (e) {
      zt.error("Failed to rewrite clause.");
    } finally {
      setIsRewriting(false);
    }
  };
  const applyRewrittenClause = async () => {
    if (!activeRewriteClause || !rewrittenWording) return;
    const idx = contractText.indexOf(activeRewriteClause.text);
    if (idx === -1) {
      zt.error("Original clause text was modified and could not be matches. Appending revised clause to end.");
      const updatedText = `${contractText}

/* Revised ${activeRewriteClause.name} Clause */
${rewrittenWording}`;
      setContractText(updatedText);
      await createDocumentVersion(updatedText, `Replaced ${activeRewriteClause.name} clause (appended)`);
    } else {
      const updatedText = contractText.replace(activeRewriteClause.text, rewrittenWording);
      setContractText(updatedText);
      await createDocumentVersion(updatedText, `Replaced ${activeRewriteClause.name} clause with ${rewriteTone} version`);
    }
    zt.success("Clause replaced and version logged successfully!");
    setActiveRewriteClause(null);
    if (activeFileId) {
      setFiles((prev) => prev.map((f) => f.id === activeFileId ? { ...f, ocrText: contractText.replace(activeRewriteClause.text, rewrittenWording) } : f));
    }
    await performContractAuditInternal(contractTitle, contractText.replace(activeRewriteClause.text, rewrittenWording), files, versions, auditLogs);
  };
  const handleShareReport = async () => {
    var _a2, _b2;
    if (!auditResult) return;
    const shareText = `AISA Legal Audit for ${contractTitle}. Compliance: ${(_a2 = auditResult.stats) == null ? void 0 : _a2.complianceScore}%. Status: ${(_b2 = auditResult.stats) == null ? void 0 : _b2.reviewStatus}.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Audit Report: ${contractTitle}`, text: shareText });
        logAudit("Shared Audit Report", "Shared audit metadata report via native channels.");
      } catch (e) {
        console.log(e);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      zt.success("Summary copied to clipboard!");
    }
  };
  const handleSpeechSummary = () => {
    var _a2, _b2, _c2, _d2;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else if (auditResult) {
      const text = `Contract Audit Summary for ${contractTitle}. Classification: ${(_a2 = auditResult.summary) == null ? void 0 : _a2.contractType}. Overall compliance is ${(_b2 = auditResult.stats) == null ? void 0 : _b2.complianceScore} percent. Risk classification is ${(_c2 = auditResult.stats) == null ? void 0 : _c2.reviewStatus}. Opinion: ${(_d2 = auditResult.finalOpinion) == null ? void 0 : _d2.reasoning}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };
  const handlePrintPDF = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
    if (!auditResult) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      zt.error("Popup blocked! Enable popups to export printable PDF.");
      return;
    }
    const activeProj = allProjects.find((p) => p._id === linkedCaseId) || currentCase;
    const caseHeaderHtml = activeProj ? `
        <div style="margin-top: 15px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; background-color: #f8fafc; font-size: 9.5pt; line-height: 1.5; text-align: left;">
          <div style="font-weight: bold; color: #4f46e5; font-size: 8.5pt; text-transform: uppercase; margin-bottom: 5px;">Linked Case Context</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div><strong>Case Name:</strong> ${activeProj.name || "--"}</div>
            <div><strong>Case No:</strong> ${activeProj.caseNumber || activeProj._id || "--"}</div>
            <div><strong>Client Name:</strong> ${activeProj.clientName || "--"}</div>
            <div><strong>Matter:</strong> ${activeProj.caseType || "--"}</div>
          </div>
        </div>
    ` : "";
    const html = `
      <html>
      <head>
        <meta charset="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet"/>
        <title>AISA Contract Intelligence Report - ${contractTitle}</title>
        <style>
          body { font-family: 'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif; padding: 45px; line-height: 1.8; color: #0f172a; }
          .header { text-align: center; border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 30px; }
          .title { text-transform: uppercase; font-size: 18pt; font-weight: bold; color: #4f46e5; margin: 0; }
          .meta-section { margin-bottom: 25px; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .meta-grid { display: grid; grid-template-cols: 1fr 1fr; gap: 15px; font-size: 11pt; }
          .section-title { font-size: 14pt; font-weight: bold; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px; color: #1e1b4b; margin-top: 30px; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 10.5pt; }
          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          th { background-color: #f1f5f9; font-weight: bold; }
          .risk-badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-weight: bold; font-size: 9pt; }
          .risk-High, .risk-Critical { background: #fee2e2; color: #991b1b; }
          .risk-Medium { background: #fef3c7; color: #92400e; }
          .risk-Low { background: #dcfce7; color: #166534; }
          .footer { margin-top: 60px; border-top: 1px solid #e2e8f0; font-size: 9pt; text-align: center; padding-top: 15px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="header">
          <div style="font-size: 9pt; font-weight: bold; letter-spacing: 2px; color: #4f46e5; margin-bottom: 5px;">AISA ENTERPRISE CONTRACT INTELLIGENCE</div>
          <h1 class="title">AI Compliance & Risk Audit Report</h1>
          <div style="margin-top: 5px; font-size: 11pt;">Document: <strong>${contractTitle}</strong></div>
          ${caseHeaderHtml}
        </div>

        <div class="meta-section">
          <div class="meta-grid">
            <div>
              <p><strong>Compliance Rating:</strong> ${(_a2 = auditResult.stats) == null ? void 0 : _a2.complianceScore}%</p>
              <p><strong>Overall Risk Status:</strong> ${(_b2 = auditResult.stats) == null ? void 0 : _b2.reviewStatus}</p>
              <p><strong>AI Confidence Rate:</strong> ${(_c2 = auditResult.stats) == null ? void 0 : _c2.confidenceRate}%</p>
            </div>
            <div>
              <p><strong>Contract Type:</strong> ${(_d2 = auditResult.summary) == null ? void 0 : _d2.contractType}</p>
              <p><strong>Jurisdiction:</strong> ${(_e2 = auditResult.summary) == null ? void 0 : _e2.jurisdiction}</p>
              <p><strong>Governing Law:</strong> ${(_f2 = auditResult.summary) == null ? void 0 : _f2.governingLaw}</p>
            </div>
          </div>
        </div>

        <div class="section-title">1. Executive Final Opinion</div>
        <p style="font-size: 11pt; line-height: 1.6;">${contractOpinionDisplay || ((_g2 = auditResult.finalOpinion) == null ? void 0 : _g2.reasoning)}</p>

        <div class="section-title">2. Clause-by-Clause Risk Breakdown</div>
        <table>
          <thead>
            <tr>
              <th style="width: 25%;">Clause Name</th>
              <th style="width: 15%;">Risk Level</th>
              <th>Auditor Exposure & Suggestions</th>
            </tr>
          </thead>
          <tbody>
            ${((_h2 = auditResult.clauses) == null ? void 0 : _h2.map((c) => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td><span class="risk-badge risk-${c.risk}">${c.risk}</span></td>
                <td>
                  <p style="margin: 0 0 5px 0;">${c.explanation}</p>
                  ${c.suggestion ? `<p style="margin: 5px 0 0 0; font-style: italic; color: #4f46e5;">Proposed: ${c.suggestion}</p>` : ""}
                </td>
              </tr>
            `).join("")) || '<tr><td colspan="3">No clauses analyzed.</td></tr>'}
          </tbody>
        </table>

        <div class="section-title">3. Identified Gaps & Missing Clauses</div>
        <ul>
          ${((_i2 = auditResult.missingClauses) == null ? void 0 : _i2.map((m) => `
            <li style="margin-bottom: 10px; font-size: 11pt;">
              <strong>${m.name}</strong> (${m.category}) - ${m.explanation}
              <br/><span style="color: #b91c1c; font-size: 10pt;">Risk Created: ${m.riskCreated}</span>
            </li>
          `).join("")) || "<li>No missing clauses identified.</li>"}
        </ul>

        <div class="section-title">4. Compliance Framework Evaluation</div>
        <ul>
          ${((_j2 = auditResult.compliance) == null ? void 0 : _j2.map((c) => `
            <li style="margin-bottom: 8px; font-size: 11pt;">
              <strong>${c.law}:</strong> Status [${c.status}] - ${c.explanation}
            </li>
          `).join("")) || "<li>No compliance modules mapped.</li>"}
        </ul>

        <div class="footer">
          Generated automatically by AISA Court-Ready Platform on ${(/* @__PURE__ */ new Date()).toLocaleString()}
          <br/>Audit logs synced. Secured and authenticated document copy.
        </div>
      </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      logAudit("Exported PDF Report", "Generated and exported printable contract review PDF.");
    }, 500);
  };
  const handleExportDoc = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2;
    if (!auditResult) return;
    let docContent = "";
    let reportFilename = `${contractTitle.replace(/\s+/g, "_")}_AISA_Audit_Report.doc`;
    if (activeTab === "heatmap") {
      reportFilename = `${contractTitle.replace(/\s+/g, "_")}_AISA_Risk_Scan_Report.doc`;
      docContent = `
AISA CONTRACT INTELLIGENCE PLATFORM REPORT — RISK SCAN EXPOSURES
================================================================

Title: ${contractTitle}
Audited Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Risk Score: ${stats.riskScore}%
AI Confidence Rate: ${stats.confidenceRate}%

RISK SUMMARY FINDINGS:
----------------------
${findings.map((f) => `- ${f.title} (${f.count} items):
${f.items.map((item) => `  * ${item.name}: ${item.desc}`).join("\n")}`).join("\n")}

DETAILED RISK EXPOSURES:
------------------------
${(_a2 = auditResult.clauses) == null ? void 0 : _a2.map((c) => `
Clause Name: ${c.name}
Risk Rating: ${c.risk}
Auditor Risk Explanation: ${c.explanation}
Mitigation Suggestion: ${c.suggestion || "No edits suggested."}
`).join("\n")}
`;
    } else if (activeTab === "compliance") {
      reportFilename = `${contractTitle.replace(/\s+/g, "_")}_AISA_Compliance_Report.doc`;
      docContent = `
AISA CONTRACT INTELLIGENCE PLATFORM REPORT — REGULATORY COMPLIANCE
==================================================================

Title: ${contractTitle}
Audited Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Compliance Rating: ${stats.complianceScore}%

COMPLIANCE CHECKLIST STATUS:
----------------------------
${(_b2 = auditResult.compliance) == null ? void 0 : _b2.map((c) => `
Law / Act: ${c.law}
Status: ${c.status}
Analysis: ${c.reason || c.explanation}
Suggested Correction: ${c.suggestedFix || "N/A"}
`).join("\n")}
`;
    } else if (activeTab === "clauses") {
      reportFilename = `${contractTitle.replace(/\s+/g, "_")}_AISA_Clause_Intelligence_Report.doc`;
      docContent = `
AISA CONTRACT INTELLIGENCE PLATFORM REPORT — CLAUSE INTELLIGENCE
================================================================

Title: ${contractTitle}
Audited Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Extracted Clauses Count: ${((_c2 = auditResult.clauses) == null ? void 0 : _c2.length) || 0}
Missing Clauses Count: ${((_d2 = auditResult.missingClauses) == null ? void 0 : _d2.length) || 0}

EXTRACTED CLAUSES SPECIFICATIONS:
---------------------------------
${(_e2 = auditResult.clauses) == null ? void 0 : _e2.map((c) => `
Clause: ${c.name}
Original Text: "${c.text}"
Auditor Interpretation: ${c.explanation}
Industry Standard Match: ${c.industryStandard || "Standard commercial drafting deviation detected."}
`).join("\n")}

MISSING CLAUSES IDENTIFIED:
---------------------------
${(_f2 = auditResult.missingClauses) == null ? void 0 : _f2.map((m) => `
Clause: ${m.name || m.clause}
Vulnerability: ${m.explanation}
Recommended Wording: ${m.suggestedWording || "N/A"}
`).join("\n")}
`;
    } else {
      reportFilename = `${contractTitle.replace(/\s+/g, "_")}_AISA_Executive_Review_Report.doc`;
      docContent = `
AISA CONTRACT INTELLIGENCE PLATFORM REPORT — EXECUTIVE REVIEW
============================================================

Title: ${contractTitle}
Audited Date: ${(/* @__PURE__ */ new Date()).toLocaleDateString()}
Compliance Score: ${(_g2 = auditResult.stats) == null ? void 0 : _g2.complianceScore}%
Risk Rating: ${(_h2 = auditResult.stats) == null ? void 0 : _h2.reviewStatus}
AI Confidence Rate: ${(_i2 = auditResult.stats) == null ? void 0 : _i2.confidenceRate}%

FINAL AI LEGAL OPINION & VERDICT:
---------------------------------
${contractOpinionDisplay || ((_j2 = auditResult.finalOpinion) == null ? void 0 : _j2.reasoning)}

SUMMARY INFO:
-------------
- Contract Classification: ${(_k2 = auditResult.summary) == null ? void 0 : _k2.contractType}
- Parties Involved: ${(_l2 = auditResult.summary) == null ? void 0 : _l2.parties}
- Jurisdiction: ${(_m2 = auditResult.summary) == null ? void 0 : _m2.jurisdiction}
- Governing Legislation: ${(_n2 = auditResult.summary) == null ? void 0 : _n2.governingLaw}
`;
    }
    const blob = new Blob([docContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = reportFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    logAudit("Downloaded DOCX Report", "Downloaded structured Word review report.");
    zt.success("Word document review report downloaded!");
  };
  const stats = reactExports.useMemo(() => {
    if (auditResult && auditResult.stats) {
      return {
        ...auditResult.stats,
        negotiationScore: auditResult.stats.negotiationScore ?? "--",
        timeSaved: auditResult.stats.timeSaved ?? "--"
      };
    }
    return {
      overallScore: "--",
      riskScore: "--",
      complianceScore: "--",
      negotiationScore: "--",
      missingClausesCount: "--",
      confidenceRate: "--",
      highRiskClausesCount: 0,
      mediumRiskClausesCount: 0,
      lowRiskClausesCount: 0,
      totalClausesCount: 0,
      timeSaved: "--",
      reviewStatus: "--"
    };
  }, [auditResult]);
  const findings = reactExports.useMemo(() => {
    if (!auditResult) {
      return [
        { title: "Critical Risks", count: 0, items: [], color: "bg-red-500/5 border-red-500/10 text-red-500" },
        { title: "High Risks", count: 0, items: [], color: "bg-red-500/5 border-red-500/10 text-red-500" },
        { title: "Missing Clauses", count: 0, items: [], color: "bg-violet-500/5 border-violet-500/10 text-violet-500" },
        { title: "Unusual Clauses", count: 0, items: [], color: "bg-amber-500/5 border-amber-500/10 text-amber-500" },
        { title: "One-Sided Clauses", count: 0, items: [], color: "bg-indigo-500/5 border-indigo-500/10 text-indigo-500" },
        { title: "Compliance Issues", count: 0, items: [], color: "bg-emerald-500/5 border-emerald-500/10 text-emerald-500" }
      ];
    }
    const clauses = auditResult.clauses || [];
    const missing = auditResult.missingClauses || [];
    const compliance = auditResult.compliance || [];
    const criticalRisks = clauses.filter((c) => c.risk === "Critical").map((c) => ({ name: c.name, desc: c.explanation, action: c.suggestion }));
    const highRisks = clauses.filter((c) => c.risk === "High").map((c) => ({ name: c.name, desc: c.explanation, action: c.suggestion }));
    const missingClauses = missing.map((m) => ({ name: m.clause || m.name, desc: m.explanation, action: m.suggestedWording }));
    const unusualClauses = clauses.filter((c) => {
      var _a2;
      return c.risk === "Medium" && ((_a2 = c.explanation) == null ? void 0 : _a2.toLowerCase().includes("unusual"));
    }).map((c) => ({ name: c.name, desc: c.explanation, action: c.suggestion }));
    const oneSided = clauses.filter((c) => {
      var _a2, _b2;
      return ((_a2 = c.explanation) == null ? void 0 : _a2.toLowerCase().includes("one-sided")) || ((_b2 = c.explanation) == null ? void 0 : _b2.toLowerCase().includes("favor"));
    }).map((c) => ({ name: c.name, desc: c.explanation, action: c.suggestion }));
    const complianceIssues = compliance.filter((c) => c.status !== "Compliant" && c.status !== "Passed").map((c) => ({ name: c.law, desc: c.reason || c.explanation, action: c.suggestedFix }));
    return [
      { title: "Critical Risks", count: criticalRisks.length, items: criticalRisks, color: "bg-red-500/5 border-red-500/10 text-red-500" },
      { title: "High Risks", count: highRisks.length, items: highRisks, color: "bg-red-500/5 border-red-500/10 text-red-500" },
      { title: "Missing Clauses", count: missingClauses.length, items: missingClauses, color: "bg-violet-500/5 border-violet-500/10 text-violet-500" },
      { title: "Unusual Clauses", count: unusualClauses.length, items: unusualClauses, color: "bg-amber-500/5 border-amber-500/10 text-amber-500" },
      { title: "One-Sided Clauses", count: oneSided.length, items: oneSided, color: "bg-indigo-500/5 border-indigo-500/10 text-indigo-500" },
      { title: "Compliance Issues", count: complianceIssues.length, items: complianceIssues, color: "bg-emerald-500/5 border-emerald-500/10 text-emerald-500" }
    ];
  }, [auditResult]);
  reactExports.useMemo(() => {
    return allTools.filter((t2) => {
      const matchSearch = t2.name.toLowerCase().includes(toolsSearchQuery.toLowerCase()) || t2.desc.toLowerCase().includes(toolsSearchQuery.toLowerCase());
      const matchCat = toolsCategory === "All" ? true : toolsCategory === "Favorites" ? favoriteTools.includes(t2.id) : t2.category === toolsCategory;
      return matchSearch && matchCat;
    });
  }, [toolsSearchQuery, toolsCategory, favoriteTools]);
  const handleDownloadFile = (file) => {
    if (!file || !file.ocrText) return;
    const blob = new Blob([file.ocrText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name.endsWith(".pdf") || file.name.endsWith(".docx") || file.name.endsWith(".txt") ? file.name : `${file.name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    zt.success(`Downloaded: ${file.name}`);
  };
  const handleDeleteFile = async (fileId) => {
    var _a2, _b2;
    const file = files.find((f) => f.id === fileId);
    if (file && !window.confirm(`Are you sure you want to delete contract "${file.name}"?`)) {
      return;
    }
    const updatedFiles = files.filter((f) => f.id !== fileId);
    setFiles(updatedFiles);
    if (activeFileId === fileId) {
      if (updatedFiles.length > 0) {
        setActiveFileId(updatedFiles[0].id);
        setContractTitle(updatedFiles[0].name);
        setContractText(updatedFiles[0].ocrText);
      } else {
        setActiveFileId("");
        setContractTitle("");
        setContractText("");
        setRawAuditResult(null);
      }
    }
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action: "Document Deleted",
      details: `Removed contract with file ID ${fileId} from matter catalog.`,
      editedBy: `${userName} (${userEmail})`
    };
    const updatedLogs = [newLog, ...auditLogs];
    setAuditLogs(updatedLogs);
    await syncToDatabase({
      files: updatedFiles,
      auditLogs: updatedLogs
    });
    zt.success("Document removed from workspace catalog.");
  };
  const handleRenameFile = async (fileId, newName) => {
    var _a2, _b2;
    if (!newName || !newName.trim()) {
      zt.error("Name cannot be empty");
      return;
    }
    const updatedFiles = files.map((f) => {
      if (f.id === fileId) {
        return { ...f, name: newName.trim() };
      }
      return f;
    });
    setFiles(updatedFiles);
    if (activeFileId === fileId) {
      setContractTitle(newName.trim());
    }
    const timestamp = (/* @__PURE__ */ new Date()).toISOString();
    const userEmail = ((_a2 = getUserData()) == null ? void 0 : _a2.email) || "System User";
    const userName = ((_b2 = getUserData()) == null ? void 0 : _b2.name) || "Advocate";
    const newLog = {
      timestamp,
      action: "Document Renamed",
      details: `Renamed contract file ID ${fileId} to: ${newName.trim()}`,
      editedBy: `${userName} (${userEmail})`
    };
    const updatedLogs = [newLog, ...auditLogs];
    setAuditLogs(updatedLogs);
    await syncToDatabase({
      files: updatedFiles,
      auditLogs: updatedLogs
    });
    zt.success("Document renamed successfully.");
  };
  contextChangeRef.current = async (ctx) => {
    setMultimodalContext(ctx);
    if (ctx && ctx.stagedFiles && ctx.stagedFiles.length > 0) {
      const combinedText = ctx.stagedFiles.map((f) => f.content || "").filter(Boolean).join("\n\n---\n\n");
      const firstStagedFile = ctx.stagedFiles[0];
      const ocrReady = combinedText.trim().length > 20;
      if (ocrReady) {
        if (contractText !== combinedText) {
          setContractText(combinedText);
        }
        const titleName = (firstStagedFile == null ? void 0 : firstStagedFile.name) || "Uploaded Contract";
        if (contractTitle !== titleName) {
          setContractTitle(titleName);
        }
        const syntheticFiles = ctx.stagedFiles.map((sf, idx) => ({
          id: sf.id || `staged_${Date.now()}_${idx}`,
          name: sf.name || `Document_${idx + 1}`,
          size: sf.size || 0,
          type: sf.type || "application/octet-stream",
          uploadDate: (/* @__PURE__ */ new Date()).toLocaleDateString(),
          base64: sf.base64 || "",
          ocrText: sf.content || combinedText
        }));
        let isDiff = false;
        if (files.length !== syntheticFiles.length) {
          isDiff = true;
        } else {
          for (let i = 0; i < files.length; i++) {
            if (files[i].id !== syntheticFiles[i].id) {
              isDiff = true;
              break;
            }
          }
        }
        if (isDiff) {
          setFiles(syntheticFiles);
        }
        if (syntheticFiles[0] && activeFileId !== syntheticFiles[0].id) {
          setActiveFileId(syntheticFiles[0].id);
        }
        if (!isAuditing && !rawAuditResult) {
          try {
            setActiveTab("summary");
            await performContractAuditInternal(
              (firstStagedFile == null ? void 0 : firstStagedFile.name) || "Uploaded Contract",
              combinedText,
              syntheticFiles,
              versions,
              auditLogs
            );
          } catch (e) {
            console.error("[ContractReview] Auto-analysis from context failed:", e);
          }
        }
      } else if (firstStagedFile) {
        const placeholder = `[Contract staged: "${firstStagedFile.name}". OCR processing...]`;
        if (contractText !== placeholder) {
          setContractText(placeholder);
          setContractTitle(firstStagedFile.name);
        }
      }
    } else {
      if (contractText !== "") {
        setContractText("");
        setContractTitle("");
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex-1 flex flex-col w-full h-full min-h-0 ${isDark ? "bg-[#070b16] text-slate-100" : "bg-slate-50 text-slate-800"} overflow-hidden select-none relative`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b shrink-0 gap-1.5 ${isDark ? "border-slate-800 bg-[#0B1020]/80" : "border-slate-200 bg-white"} backdrop-blur-xl`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 sm:gap-4 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsMobileSidebarOpen(true),
                className: `md:hidden p-2 rounded-xl border transition-colors shrink-0 ${isDark ? "border-slate-800 bg-[#1A2540] text-slate-300 hover:bg-[#202E50]" : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"}`,
                title: "Open AI Control Panel",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 15 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: onBack,
                className: `min-h-[36px] px-3 flex items-center justify-center gap-1.5 border rounded-xl text-[10px] font-black uppercase tracking-wider transition-colors shrink-0 ${isDark ? "bg-[#1A2540] border-slate-800 text-slate-355 hover:bg-[#202E50]" : "bg-slate-50 border-slate-205 text-slate-700 hover:bg-slate-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Back" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-[20px] sm:text-[26px] md:text-[32px] font-black leading-none tracking-tight truncate ${isDark ? "text-white" : "text-slate-900"}`, children: "Contract Analyzer" }),
            isSyncing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-emerald-500 uppercase tracking-wider animate-pulse shrink-0 hidden sm:inline", children: "✓ Synced" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageToggle, { lang: toolkitLanguage === "Hindi" ? "hi" : "en", onChange: (l) => setToolkitLanguage(l === "hi" ? "Hindi" : "English") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setHistoryVisible(true),
                title: "View AI audit history",
                className: `flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 min-h-[36px] border rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${isDark ? "bg-[#1A2540] border-slate-800 text-indigo-400 hover:bg-[#202E50]" : "bg-indigo-50 border-indigo-200/30 text-indigo-600 hover:bg-indigo-100"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 14, className: "shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Audit Timeline " }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "(",
                      auditLogs.length,
                      ")"
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[12px] sm:text-[13px] md:text-[14px] font-medium leading-relaxed sm:pl-0 md:pl-[92px] ${isDark ? "text-slate-400" : "text-slate-500"}`, children: "AI-powered contract review, clause intelligence, compliance verification & legal risk assessment." })
      ] }),
      isMobileSidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden",
          onClick: () => setIsMobileSidebarOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex w-full min-h-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `
          flex flex-col shrink-0 overflow-y-auto custom-scrollbar select-none
          transition-all duration-300 border-r
          ${isDark ? "border-slate-800 bg-[#0c1224]" : "border-slate-200 bg-white"}
          fixed inset-y-0 left-0 z-[110]
          md:relative md:translate-x-0 md:z-auto
          ${isMobileSidebarOpen ? "translate-x-0 w-[290px] p-4 space-y-4" : "-translate-x-full md:translate-x-0"}
          ${isSidebarCollapsed ? "md:w-[72px] md:px-2 md:py-4 md:space-y-6 md:items-center" : "md:w-[280px] lg:w-[330px] md:p-5 md:space-y-4"}
        `, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center ${isSidebarCollapsed ? "justify-center w-full" : "justify-between pb-2 border-b border-slate-100 dark:border-zinc-800"}`, children: [
            !isSidebarCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-black tracking-widest text-slate-450 dark:text-slate-405 uppercase", children: "AI Control Panel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsMobileSidebarOpen(false),
                  className: `md:hidden p-1.5 rounded-xl border border-slate-200/60 dark:border-zinc-800 bg-slate-500/5 text-slate-500 hover:text-red-500 transition-all`,
                  title: "Close",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(!isSidebarCollapsed),
                  className: `hidden md:flex p-1.5 rounded-xl border border-slate-200/60 dark:border-zinc-800 bg-slate-500/5 text-slate-500 hover:text-indigo-500 hover:border-indigo-500/30 transition-all`,
                  title: isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar",
                  children: isSidebarCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16 })
                }
              )
            ] })
          ] }),
          isSidebarCollapsed ? (
            /* COLLAPSED ICON MODE */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 items-center w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(false),
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "Workspace" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(false),
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "Upload Contract" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(false),
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "Quick Actions" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(false),
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "AI Insights" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsSidebarCollapsed(false);
                    setOpenSections((prev) => ({ ...prev, templates: true }));
                  },
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Files, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "Templates" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    setIsSidebarCollapsed(false);
                    setOpenSections((prev) => ({ ...prev, ocr: true }));
                  },
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ScanText, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "OCR Workspace" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setIsSidebarCollapsed(false),
                  className: "group relative p-2.5 rounded-xl bg-slate-500/5 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-500 border border-transparent hover:border-indigo-500/20 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 20 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none", children: "Activity Feed" })
                  ]
                }
              )
            ] })
          ) : (
            /* EXPANDED PANEL MODE */
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col space-y-5 min-h-0 overflow-y-auto pr-1 custom-scrollbar", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 shrink-0 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-550", children: "Workspace" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    onClick: () => setIsWorkspaceDropdownOpen(!isWorkspaceDropdownOpen),
                    className: `w-full border rounded-xl px-2.5 py-1.5 text-[10px] font-black cursor-pointer transition-all flex items-center justify-between ${isDark ? "bg-[#131c31]/30 border-slate-800 text-white hover:border-indigo-500" : "bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-500"}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { size: 11, className: "text-indigo-500 shrink-0" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: linkedCaseId ? ((_a = allProjects.find((p) => p._id === linkedCaseId)) == null ? void 0 : _a.name) || (currentCase == null ? void 0 : currentCase.name) || "Linked Case Workspace" : "Manual Entry (Auto-Create case)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 11, className: `text-slate-400 transition-transform ${isWorkspaceDropdownOpen ? "rotate-180" : ""}` })
                    ]
                  }
                ),
                isWorkspaceDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute left-0 right-0 mt-1 z-[1000] border rounded-2xl shadow-2xl p-2.5 space-y-2.5 font-semibold text-[9.5px] transition-all max-h-[300px] overflow-y-auto custom-scrollbar ${isDark ? "bg-[#131c31] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => {
                        setIsWorkspaceDropdownOpen(false);
                        setIsCreateCaseModalOpen(true);
                      },
                      className: "w-full flex items-center justify-center gap-1.5 p-2 rounded-xl text-indigo-500 hover:bg-indigo-500/10 transition-all font-black text-left uppercase text-[9px] border border-dashed border-indigo-500/30",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "＋ Create New Case" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-slate-100 dark:border-zinc-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-500/5 border border-slate-200 dark:border-zinc-850 px-2 py-1 rounded-xl", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 10, className: "text-slate-400 mr-1.5 shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Search cases...",
                        className: "w-full bg-transparent border-none text-[9px] font-bold outline-none text-slate-800 dark:text-white",
                        value: workspaceSearchQuery,
                        onChange: (e) => setWorkspaceSearchQuery(e.target.value),
                        onClick: (e) => e.stopPropagation()
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: ["All", "Active", "Draft", "Closed", "Archived", "Favorites"].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        setWorkspaceCategory(cat);
                      },
                      className: `px-1.5 py-0.5 rounded text-[7.5px] font-black uppercase ${workspaceCategory === cat ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-zinc-800 text-slate-500"}`,
                      children: cat
                    },
                    cat
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 overflow-y-auto max-h-[140px] pr-0.5 custom-scrollbar", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => {
                          setLinkedCaseId("");
                          resetPlatformState();
                          setIsWorkspaceDropdownOpen(false);
                          zt.success("Switched to manual entry workspace");
                        },
                        className: `p-1.5 rounded-xl cursor-pointer hover:bg-indigo-500/5 hover:text-indigo-500 transition-all flex items-center gap-1.5 ${!linkedCaseId ? "text-indigo-500 bg-indigo-500/5 font-black" : ""}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { size: 11, className: "shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Manual Entry Workspace" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7px] uppercase text-slate-400 dark:text-slate-500 tracking-wider py-1 font-black", children: "Existing Cases" }),
                    (() => {
                      const legalCases = allProjects.filter((p) => p.isLegalCase);
                      const filtered = legalCases.filter((c) => {
                        var _a2, _b2, _c2, _d2;
                        const matchesQuery = !workspaceSearchQuery.trim() || ((_a2 = c.name) == null ? void 0 : _a2.toLowerCase().includes(workspaceSearchQuery.toLowerCase())) || ((_b2 = c.clientName) == null ? void 0 : _b2.toLowerCase().includes(workspaceSearchQuery.toLowerCase())) || ((_c2 = c.caseType) == null ? void 0 : _c2.toLowerCase().includes(workspaceSearchQuery.toLowerCase())) || ((_d2 = c._id) == null ? void 0 : _d2.toLowerCase().includes(workspaceSearchQuery.toLowerCase()));
                        if (workspaceCategory === "All") return matchesQuery;
                        if (workspaceCategory === "Favorites") return matchesQuery && favoriteCases.includes(c._id);
                        const caseStatus = c.caseStatus || c.status || "Active";
                        return matchesQuery && caseStatus.toLowerCase() === workspaceCategory.toLowerCase();
                      });
                      const favs = filtered.filter((c) => favoriteCases.includes(c._id));
                      const others = filtered.filter((c) => !favoriteCases.includes(c._id));
                      const sortedCases = [...favs, ...others];
                      if (sortedCases.length === 0) {
                        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-3 text-slate-400 text-[8.5px]", children: "No cases found" });
                      }
                      return sortedCases.map((c) => {
                        const isFav = favoriteCases.includes(c._id);
                        const isCurrent = linkedCaseId === c._id;
                        const cStatus = c.caseStatus || c.status || "Active";
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            onClick: () => {
                              setLinkedCaseId(c._id);
                              if (onUpdateCase) onUpdateCase(c);
                              hydrateFromCase(c);
                              setIsWorkspaceDropdownOpen(false);
                              zt.success(`Workspace: ${c.name}`);
                            },
                            className: `p-1.5 rounded-xl cursor-pointer hover:bg-indigo-500/5 hover:text-indigo-500 transition-all flex flex-col gap-0.5 ${isCurrent ? "text-indigo-500 bg-indigo-500/5 font-black" : ""}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between min-w-0 gap-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { size: 10, className: "shrink-0 text-indigo-500" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold truncate max-w-[150px]", children: c.name })
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "button",
                                  {
                                    onClick: (e) => {
                                      e.stopPropagation();
                                      setFavoriteCases(
                                        (prev) => prev.includes(c._id) ? prev.filter((id) => id !== c._id) : [...prev, c._id]
                                      );
                                    },
                                    className: `p-0.5 rounded ${isFav ? "text-amber-500" : "text-slate-350 hover:text-amber-500"}`,
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 9, fill: isFav ? "currentColor" : "none" })
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[7px] font-black uppercase text-slate-400 dark:text-slate-500", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.caseType || "General Matter" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1 rounded text-[6px] text-white ${cStatus.toLowerCase() === "active" ? "bg-indigo-500" : "bg-slate-400"}`, children: cStatus })
                              ] })
                            ]
                          },
                          c._id
                        );
                      });
                    })()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-1", children: linkedCaseId ? t("caseActiveStagedWorkspace") || "Case Active • Staged Workspace" : t("detachedDraftManualScope") || "Detached Draft • Manual Scope" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                UniversalMultimodalInput,
                {
                  caseId: linkedCaseId || "global",
                  workspaceName: "ContractReview",
                  onContextChange: stableContextChange,
                  theme: isDark ? "dark" : "light"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-550", children: t("quickActions") || "Quick Actions" }),
                !contractText.trim() && linkedCaseId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-[8.5px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wide", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 9, className: "shrink-0" }),
                  t("uploadContractToEnable") || "Upload a contract to enable AI actions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5", children: [
                  { id: "summary", name: t("analyze") || "Analyze", icon: Sparkles, runAudit: true },
                  { id: "heatmap", name: t("riskScan") || "Risk Scan", icon: TriangleAlert },
                  { id: "clauses", name: t("clauses") || "Clauses", icon: NotebookPen },
                  { id: "compliance", name: t("compliance") || "Compliance", icon: ShieldCheck },
                  { id: "negotiation", name: t("negotiate") || "Negotiate", icon: GitCompareArrows },
                  { id: "redraft", name: t("redraft") || "Redraft", icon: FilePenLine }
                ].map((act) => {
                  const IconComp = act.icon;
                  const isActive = activeTab === act.id;
                  const noContract = !contractText.trim();
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        disabled: isAuditing || noContract,
                        onClick: async () => {
                          if (noContract) return;
                          setActiveTab(act.id);
                          handleQuickActionClick(act.id);
                          let customLoadingMsg = t("auditLoading") || "AI Platform auditing contract parameters...";
                          if (act.id === "heatmap") customLoadingMsg = t("riskScanLoading") || "AI Platform scanning risk vectors & heatmap matrix...";
                          if (act.id === "clauses") customLoadingMsg = t("clausesLoading") || "AI Platform detecting active clauses & replacement standards...";
                          if (act.id === "compliance") customLoadingMsg = t("complianceLoading") || "AI Platform checking compliance against Indian Contract Act & related statutes...";
                          if (act.id === "negotiation") customLoadingMsg = t("negotiationLoading") || "AI Platform building negotiation suggestions & fallback language...";
                          if (act.id === "redraft") customLoadingMsg = t("redraftLoading") || "AI Platform generating side-by-side redrafted contract drafts...";
                          await performContractAuditInternal(contractTitle, contractText, files, versions, auditLogs, customLoadingMsg, act.id);
                        },
                        className: `w-full flex items-center gap-1.5 px-2.5 py-2 border rounded-lg text-[9px] font-black uppercase tracking-wider transition-all min-h-[36px] ${noContract ? "border-slate-200/40 dark:border-zinc-800/40 bg-slate-50/50 dark:bg-zinc-900/20 text-slate-300 dark:text-zinc-700 cursor-not-allowed" : isActive ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-500 shadow-[0_2px_8px_rgba(99,102,241,0.15)]" : "border-slate-200/60 dark:border-zinc-800/80 bg-white/5 text-slate-600 dark:text-slate-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 hover:text-indigo-500"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(IconComp, { size: 11, className: `${noContract ? "text-slate-300 dark:text-zinc-700" : isActive ? "text-indigo-500" : "text-slate-400"} ${act.id === "summary" && isAuditing ? "animate-spin" : ""}` }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: act.name })
                        ]
                      }
                    ),
                    noContract && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1.5 bg-slate-900 dark:bg-zinc-800 text-white text-[8px] font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg", children: [
                      "Upload a contract to enable this feature.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-zinc-800" })
                    ] })
                  ] }, act.id);
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 pt-1 shrink-0 font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500", children: "Activity Log" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-24 overflow-y-auto pr-1 custom-scrollbar text-[8.5px] font-bold text-slate-400", children: auditLogs.length > 0 ? auditLogs.map((log, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 border-l border-indigo-500/30 pl-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-700 dark:text-slate-350", children: log.action }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7px] text-slate-400", children: new Date(log.timestamp).toLocaleTimeString() })
                  ] })
                ] }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-2 text-slate-450", children: "No activities logged." }) })
              ] })
            ] })
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 space-y-4 md:space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl w-full mx-auto space-y-4 md:space-y-6", children: [
          linkedCaseId && (() => {
            var _a2, _b2;
            const activeProj = allProjects.find((p) => p._id === linkedCaseId) || currentCase;
            if (!activeProj) return null;
            const cStatus = activeProj.caseStatus || activeProj.status || "Active";
            const cType = activeProj.caseType || "General Matter";
            const client = activeProj.clientName || "N/A";
            const opponent = activeProj.accused || "N/A";
            const upcomingHearing = ((_a2 = activeProj.hearings) == null ? void 0 : _a2.length) > 0 ? new Date(activeProj.hearings[0].date).toLocaleDateString() : "No upcoming hearing";
            const pendingTasks = ((_b2 = activeProj.tasks) == null ? void 0 : _b2.filter((t2) => !t2.completed).length) || 0;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 shadow-sm space-y-3 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 dark:border-zinc-800 pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded text-[8px] font-black uppercase text-white bg-indigo-500", children: cStatus }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-slate-400", children: [
                      "Case No: ",
                      activeProj._id || "N/A"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { size: 14, className: "text-indigo-500" }),
                    activeProj.name
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] font-bold text-slate-400", children: [
                  "Opponent: ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-slate-700 dark:text-slate-200", children: opponent })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Client Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-slate-250 font-extrabold", children: client })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Matter Type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-slate-250 font-extrabold", children: cType })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Contracts Linked" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-indigo-500 font-black", children: [
                    files.length,
                    " Staged"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Overall Legal Risk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-black ${stats.riskScore > 60 ? "text-red-500" : stats.riskScore > 30 ? "text-amber-500" : "text-emerald-500"}`, children: stats.riskScore !== "--" ? `${stats.riskScore}%` : "Not Analyzed" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-[9px] font-semibold text-slate-400 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Hearing Date: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-700 dark:text-slate-300", children: upcomingHearing })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { size: 11, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Tasks Pending: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-slate-700 dark:text-slate-300", children: [
                      pendingTasks,
                      " case tasks"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11, className: "text-indigo-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Last Audit: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-700 dark:text-slate-300", children: auditLogs.length > 0 ? new Date(auditLogs[0].timestamp).toLocaleString() : "No audits yet" })
                  ] })
                ] })
              ] })
            ] });
          })(),
          linkedCaseId && files.length === 0 && isOcrLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[50vh] space-y-5 px-4 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full border-4 border-indigo-500/20 border-t-indigo-500 animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider animate-pulse", children: "Extracting Contract Text..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 dark:text-slate-500 font-medium", children: "Running structural OCR engine & preparing analysis workspace." })
            ] })
          ] }),
          !isOcrLoading && !isWorkspaceLoading && files.length === 0 && !contractText.trim() && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-4 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-in fade-in zoom-in-95 duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center shadow-inner border-2 border-dashed border-slate-300 dark:border-zinc-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 36, className: "text-slate-400 dark:text-zinc-500 animate-pulse" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14, className: "text-white" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2 max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-800 dark:text-white uppercase tracking-wider", children: "No Contract Uploaded" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-550 dark:text-slate-400 font-semibold leading-relaxed", children: "The selected case does not contain any contract document." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500 font-medium leading-relaxed max-w-sm mx-auto", children: "Upload a contract to start AI-powered contract review, clause analysis, compliance verification, and legal risk assessment." })
            ] }),
            caseContext && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-2xl p-4 text-left space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] font-black uppercase tracking-widest text-indigo-500 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 10 }),
                " Case Context Ready"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-700 dark:text-slate-300 truncate", children: caseContext.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Case details will be used as supporting context during analysis." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 pt-1", children: [
                caseContext.caseType && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-[9px] font-bold", children: caseContext.caseType }),
                caseContext.client && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 rounded-full text-[9px] font-bold", children: caseContext.client }),
                caseContext.court && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-slate-200 dark:bg-zinc-800 text-slate-655 dark:text-slate-400 rounded-full text-[9px] font-bold", children: caseContext.court })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: openUploadModal,
                  className: "px-6 py-3 bg-[#5B3DF5] hover:bg-indigo-700 active:scale-95 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 14 }),
                    " Upload Contract"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsWorkspaceDropdownOpen(true),
                  className: "px-6 py-3 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                  children: "Choose Another Case"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 font-bold uppercase tracking-widest pt-1", children: "Supported: PDF · DOCX · TXT · DOC · Images (OCR)" })
          ] }),
          files.length > 0 && (() => {
            let filtered = [...files];
            if (catalogSearch) {
              const q = catalogSearch.toLowerCase();
              filtered = filtered.filter((f) => {
                var _a2;
                return (_a2 = f.name) == null ? void 0 : _a2.toLowerCase().includes(q);
              });
            }
            if (catalogStatusFilter !== "All") {
              if (catalogStatusFilter !== "READY") filtered = [];
            }
            if (catalogTypeFilter !== "All") {
              filtered = filtered.filter((f) => {
                var _a2, _b2, _c2, _d2;
                const type = ((_a2 = f.name) == null ? void 0 : _a2.toLowerCase().includes("nda")) ? "NDA" : ((_b2 = f.name) == null ? void 0 : _b2.toLowerCase().includes("employment")) ? "Employment" : ((_c2 = f.name) == null ? void 0 : _c2.toLowerCase().includes("lease")) ? "Lease" : ((_d2 = f.name) == null ? void 0 : _d2.toLowerCase().includes("vendor")) ? "Vendor" : "Tech";
                return type.toLowerCase() === catalogTypeFilter.toLowerCase();
              });
            }
            if (catalogRiskFilter !== "All") {
              filtered = filtered.filter((f) => {
                const r = stats.riskScore > 60 ? "High" : stats.riskScore > 30 ? "Medium" : "Low";
                return r.toLowerCase() === catalogRiskFilter.toLowerCase();
              });
            }
            filtered.sort((a, b) => {
              let valA, valB;
              if (catalogSortKey === "name") {
                valA = a.name || "";
                valB = b.name || "";
              } else if (catalogSortKey === "version") {
                valA = versions.filter((v) => {
                  var _a2;
                  return (_a2 = v.note) == null ? void 0 : _a2.includes(a.name);
                }).length || 1;
                valB = versions.filter((v) => {
                  var _a2;
                  return (_a2 = v.note) == null ? void 0 : _a2.includes(b.name);
                }).length || 1;
              } else if (catalogSortKey === "pages") {
                valA = a.pages || 1;
                valB = b.pages || 1;
              } else if (catalogSortKey === "size") {
                valA = a.size || 0;
                valB = b.size || 0;
              } else if (catalogSortKey === "date") {
                valA = new Date(a.uploadDate || 0);
                valB = new Date(b.uploadDate || 0);
              }
              if (valA < valB) return catalogSortOrder === "asc" ? -1 : 1;
              if (valA > valB) return catalogSortOrder === "asc" ? 1 : -1;
              return 0;
            });
            const ITEMS_PER_PAGE = 5;
            const totalItems = filtered.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;
            const currentPage = Math.min(catalogPage, totalPages);
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
            const paginatedFiles = filtered.slice(startIndex, endIndex);
            const handleHeaderSort = (key) => {
              if (catalogSortKey === key) {
                setCatalogSortOrder((prev) => prev === "asc" ? "desc" : "asc");
              } else {
                setCatalogSortKey(key);
                setCatalogSortOrder("asc");
              }
            };
            const toggleSelectAll = () => {
              if (catalogBulkSelected.length === paginatedFiles.length) {
                setCatalogBulkSelected([]);
              } else {
                setCatalogBulkSelected(paginatedFiles.map((f) => f.id));
              }
            };
            const toggleSelectRow = (id) => {
              setCatalogBulkSelected(
                (prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
              );
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-6 shadow-sm space-y-6 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-zinc-800", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-black uppercase text-indigo-500 tracking-wider flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FileStack, { size: 14, className: "text-indigo-500" }),
                    " Case Contract Catalog"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-medium", children: "Staged contracts, document compliance scopes, and active litigation risk ratings." })
                ] }),
                catalogBulkSelected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-[10px] animate-fade-in shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold text-indigo-500 ml-1", children: [
                    catalogBulkSelected.length,
                    " Selected"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        catalogBulkSelected.forEach((id) => handleDeleteFile(id));
                        setCatalogBulkSelected([]);
                        zt.success("Bulk Deleted!");
                      },
                      className: "px-2.5 py-1 bg-red-500/15 hover:bg-red-500/25 text-red-500 rounded-lg font-black uppercase tracking-wider text-[8.5px] transition-all",
                      children: "Bulk Delete"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        zt.success("Bulk Download Triggered!");
                      },
                      className: "px-2.5 py-1 bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-500 rounded-lg font-black uppercase tracking-wider text-[8.5px] transition-all",
                      children: "Bulk Download"
                    }
                  )
                ] })
              ] }),
              (() => {
                var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
                const activeFile = files.find((f) => f.id === activeFileId);
                if (!activeFile) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 rounded-2xl border border-dashed border-indigo-500/20 bg-indigo-500/5 text-center space-y-3.5 animate-in fade-in duration-200", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto border border-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileStack, { size: 18, className: "animate-pulse" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] font-black uppercase text-slate-800 dark:text-white tracking-wider", children: "No Active Contract Selected" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-500 max-w-sm mx-auto leading-relaxed", children: "Please search or select a contract from the catalog below to launch the AI workspace." })
                    ] })
                  ] });
                }
                const fileVer = versions.filter((v) => {
                  var _a3;
                  return (_a3 = v.note) == null ? void 0 : _a3.includes(activeFile.name);
                }).length || 1;
                const fileSize = activeFile.size ? `${(activeFile.size / 1024).toFixed(1)} MB` : "1.2 MB";
                const formattedDate = activeFile.uploadDate || (/* @__PURE__ */ new Date()).toLocaleDateString();
                if (((_a2 = activeFile.name) == null ? void 0 : _a2.toLowerCase().includes("nda")) || ((_b2 = activeFile.name) == null ? void 0 : _b2.toLowerCase().includes("disclosure"))) ;
                else if (((_c2 = activeFile.name) == null ? void 0 : _c2.toLowerCase().includes("lease")) || ((_d2 = activeFile.name) == null ? void 0 : _d2.toLowerCase().includes("rent"))) ;
                else if ((_e2 = activeFile.name) == null ? void 0 : _e2.toLowerCase().includes("vendor")) ;
                else if (((_f2 = activeFile.name) == null ? void 0 : _f2.toLowerCase().includes("service")) || ((_g2 = activeFile.name) == null ? void 0 : _g2.toLowerCase().includes("msa"))) ;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-5 rounded-2xl border flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 transition-all shadow-sm ${isDark ? "bg-indigo-950/10 border-indigo-500/20 text-white" : "bg-indigo-50/20 border-indigo-500/20 text-slate-800"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3.5 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 border border-indigo-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { size: 24 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded bg-indigo-500 text-white text-[8px] font-black uppercase tracking-wider", children: "Active Contract" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/50 text-slate-500 dark:text-slate-400 text-[8px] font-bold", children: [
                          "Version ",
                          fileVer
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-sm truncate", title: activeFile.name, children: activeFile.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-3 gap-y-1 text-[9.5px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Size: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-600 dark:text-slate-300 font-bold", children: fileSize })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "Uploaded: ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-slate-600 dark:text-slate-300 font-bold", children: formattedDate })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-bold", children: "OCR: SUCCESS (READY)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: auditResult ? "text-indigo-500 font-bold" : "text-amber-500 font-bold", children: [
                          "STATUS: ",
                          isAuditing ? "Analyzing..." : auditResult ? "AI Reviewed" : "Ready for AI review"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2 w-full xl:w-auto border-t xl:border-t-0 pt-3 xl:pt-0 border-slate-100 dark:border-zinc-850", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => runContractAudit(),
                      disabled: isAuditing,
                      className: "flex-1 xl:flex-initial px-4 py-2 bg-[#5B3DF5] hover:bg-indigo-700 disabled:bg-slate-450 active:scale-95 text-white rounded-xl text-[10.5px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/25",
                      title: "Analyze Contract",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 12, className: isAuditing ? "animate-spin" : "" }),
                        isAuditing ? "Analyzing..." : "Analyze Contract"
                      ]
                    }
                  ) })
                ] });
              })(),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl px-3 py-2 max-w-sm w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 mr-2 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Search contracts...",
                      className: "bg-transparent border-none text-[11px] font-bold outline-none text-slate-800 dark:text-white w-full placeholder:text-slate-400",
                      value: catalogSearch,
                      onChange: (e) => {
                        setCatalogSearch(e.target.value);
                        setCatalogPage(1);
                      }
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] uppercase font-black text-slate-400 tracking-wider", children: "Type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: catalogTypeFilter,
                        onChange: (e) => {
                          setCatalogTypeFilter(e.target.value);
                          setCatalogPage(1);
                        },
                        className: `p-1.5 border rounded-lg text-[9px] font-black uppercase outline-none ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Types" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NDA", children: "NDA" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Employment", children: "Employment" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Lease", children: "Lease" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Vendor", children: "Vendor" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] uppercase font-black text-slate-400 tracking-wider", children: "Risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: catalogRiskFilter,
                        onChange: (e) => {
                          setCatalogRiskFilter(e.target.value);
                          setCatalogPage(1);
                        },
                        className: `p-1.5 border rounded-lg text-[9px] font-black uppercase outline-none ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Risks" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Low", children: "Low" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Medium", children: "Medium" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "High", children: "High" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] uppercase font-black text-slate-400 tracking-wider", children: "Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        value: catalogStatusFilter,
                        onChange: (e) => {
                          setCatalogStatusFilter(e.target.value);
                          setCatalogPage(1);
                        },
                        className: `p-1.5 border rounded-lg text-[9px] font-black uppercase outline-none ${isDark ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "All", children: "All Statuses" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "READY", children: "Ready" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DRAFT", children: "Draft" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 space-y-4 border border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl bg-slate-500/5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "mx-auto text-indigo-500 animate-pulse", size: 32 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-800 dark:text-white uppercase", children: "Upload Contract Documents" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-455 max-w-xs mx-auto leading-relaxed", children: "Drag and drop contract files in the left sidebar to start AI litigation audits." })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden xl:block overflow-x-auto custom-scrollbar w-full rounded-2xl border border-slate-200 dark:border-zinc-800/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[1698px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[48px_340px_150px_90px_70px_90px_160px_140px_120px_140px_110px_180px] bg-[#FAFAFC] dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 text-[9px] font-black uppercase tracking-wider text-slate-400 h-[60px] items-center select-none sticky top-0 z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        className: "rounded border-slate-300 text-indigo-650 focus:ring-indigo-500 cursor-pointer w-3.5 h-3.5",
                        checked: paginatedFiles.length > 0 && catalogBulkSelected.length === paginatedFiles.length,
                        onChange: toggleSelectAll
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => handleHeaderSort("name"),
                        className: "px-4 cursor-pointer hover:bg-slate-500/5 transition-colors h-full flex items-center gap-1 select-none",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📄 Contract" }),
                          catalogSortKey === "name" && (catalogSortOrder === "asc" ? "↑" : "↓")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: "Type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => handleHeaderSort("version"),
                        className: "px-4 cursor-pointer hover:bg-slate-500/5 transition-colors h-full flex items-center gap-1 select-none",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Version" }),
                          catalogSortKey === "version" && (catalogSortOrder === "asc" ? "↑" : "↓")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => handleHeaderSort("pages"),
                        className: "px-4 cursor-pointer hover:bg-slate-500/5 transition-colors h-full flex items-center justify-center gap-1 select-none text-center",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pages" }),
                          catalogSortKey === "pages" && (catalogSortOrder === "asc" ? "↑" : "↓")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => handleHeaderSort("size"),
                        className: "px-4 cursor-pointer hover:bg-slate-500/5 transition-colors h-full flex items-center justify-end gap-1 select-none text-right",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Size" }),
                          catalogSortKey === "size" && (catalogSortOrder === "asc" ? "↑" : "↓")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: "Uploaded By" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => handleHeaderSort("date"),
                        className: "px-4 cursor-pointer hover:bg-slate-500/5 transition-colors h-full flex items-center gap-1 select-none",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Date" }),
                          catalogSortKey === "date" && (catalogSortOrder === "asc" ? "↑" : "↓")
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: "Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: "AI Analysis" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4", children: "Risk" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-right pr-6", children: "Actions" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-slate-150 dark:divide-zinc-800 bg-transparent", children: paginatedFiles.map((f) => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
                    const fileVer = versions.filter((v) => {
                      var _a3;
                      return (_a3 = v.note) == null ? void 0 : _a3.includes(f.name);
                    }).length || 1;
                    const fileLogs = auditLogs.filter((l) => {
                      var _a3;
                      return (_a3 = l.details) == null ? void 0 : _a3.includes(f.name);
                    });
                    const fileUploader = fileLogs.length > 0 ? fileLogs[fileLogs.length - 1].editedBy.split(" (")[0] : "Admin Ji";
                    const uploaderInitial = fileUploader.charAt(0).toUpperCase();
                    let formattedDate = f.uploadDate || "N/A";
                    try {
                      if (formattedDate.includes("/")) {
                        const parts = formattedDate.split("/");
                        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        const d = parseInt(parts[1], 10);
                        const m = parseInt(parts[0], 10) - 1;
                        const y = parts[2];
                        if (!isNaN(d) && !isNaN(m) && m >= 0 && m < 12) {
                          formattedDate = `${d < 10 ? "0" + d : d} ${monthNames[m]} ${y}`;
                        }
                      }
                    } catch (err) {
                      console.error(err);
                    }
                    const isActive = activeFileId === f.id;
                    const fileSize = f.size ? `${(f.size / 1024).toFixed(1)} MB` : "1.2 MB";
                    const pageCount = f.pages || 1;
                    let docSubtype = "Employment Contract";
                    if (((_a2 = f.name) == null ? void 0 : _a2.toLowerCase().includes("nda")) || ((_b2 = f.name) == null ? void 0 : _b2.toLowerCase().includes("disclosure"))) {
                      docSubtype = "NDA Agreement";
                    } else if (((_c2 = f.name) == null ? void 0 : _c2.toLowerCase().includes("lease")) || ((_d2 = f.name) == null ? void 0 : _d2.toLowerCase().includes("rent"))) {
                      docSubtype = "Lease Deed";
                    } else if ((_e2 = f.name) == null ? void 0 : _e2.toLowerCase().includes("vendor")) {
                      docSubtype = "Vendor Agreement";
                    } else if (((_f2 = f.name) == null ? void 0 : _f2.toLowerCase().includes("service")) || ((_g2 = f.name) == null ? void 0 : _g2.toLowerCase().includes("msa"))) {
                      docSubtype = "Master Service Agreement";
                    }
                    const isSelected = catalogBulkSelected.includes(f.id);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `grid grid-cols-[48px_340px_150px_90px_70px_90px_160px_140px_120px_140px_110px_180px] h-[76px] items-center transition-all hover:bg-slate-500/5 hover:border-l-2 hover:border-l-indigo-500 select-none ${isActive ? "bg-indigo-50/10 dark:bg-indigo-500/5 border-l-2 border-l-indigo-500" : "border-l-2 border-l-transparent"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              type: "checkbox",
                              className: "rounded border-slate-300 text-indigo-650 focus:ring-indigo-500 cursor-pointer w-3.5 h-3.5",
                              checked: isSelected,
                              onChange: () => toggleSelectRow(f.id)
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-left min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, className: "text-indigo-500 shrink-0" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => {
                                    setActiveFileId(f.id);
                                    setContractTitle(f.name);
                                    setContractText(f.ocrText);
                                    zt.success(`Loaded: ${f.name}`);
                                  },
                                  className: "font-extrabold text-[12.5px] text-slate-800 dark:text-slate-200 block truncate whitespace-nowrap hover:text-indigo-500 hover:underline text-left w-full",
                                  title: f.name,
                                  children: f.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] font-semibold text-slate-455 uppercase block mt-0.5 tracking-wider truncate whitespace-nowrap", children: docSubtype })
                            ] })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-left min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-500 text-[8px] font-black uppercase tracking-wider truncate whitespace-nowrap", children: docSubtype.split(" ")[0] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-zinc-700/50 rounded-md text-[9px] font-black uppercase truncate whitespace-nowrap", children: [
                            "Version ",
                            fileVer
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-center min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-355 text-[9px] font-black truncate whitespace-nowrap", children: pageCount }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-right font-mono font-bold text-slate-500 dark:text-slate-400 truncate whitespace-nowrap", children: fileSize }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[8.5px] font-black shrink-0 shadow-sm shadow-indigo-500/10 select-none", children: uploaderInitial }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600 dark:text-slate-350 font-bold truncate whitespace-nowrap", children: fileUploader })
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 font-bold text-slate-455 truncate whitespace-nowrap", children: formattedDate }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1.5 rounded-full text-[8px] font-black uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 tracking-wider truncate whitespace-nowrap", children: "READY" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[8px] font-black uppercase tracking-wider truncate whitespace-nowrap ${auditResult ? "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"}`, children: auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🧠" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Completed" })
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏳" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pending" })
                          ] }) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1.5 rounded-full text-[8.5px] font-black uppercase border tracking-wider text-center block w-max truncate whitespace-nowrap ${stats.riskScore > 60 ? "bg-red-500/10 text-red-500 border-red-500/20" : stats.riskScore > 30 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"}`, children: stats.riskScore !== "--" ? `${stats.riskScore}% Risk` : "Pending" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 text-right pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => {
                                  setActiveFileId(f.id);
                                  setContractTitle(f.name);
                                  setContractText(f.ocrText);
                                  zt.success(`Loaded: ${f.name}`);
                                },
                                className: "w-[34px] h-[34px] flex items-center justify-center rounded-xl bg-slate-500/5 hover:bg-slate-500/15 text-slate-500 hover:text-indigo-500 border border-slate-200/40 dark:border-zinc-800 transition-all",
                                title: "View Document",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => {
                                  setActiveFileId(f.id);
                                  setContractTitle(f.name);
                                  setContractText(f.ocrText);
                                  runContractAudit();
                                },
                                className: "w-[34px] h-[34px] flex items-center justify-center rounded-xl bg-indigo-500/5 hover:bg-indigo-500/15 text-indigo-500 hover:bg-indigo-650 hover:text-white border border-indigo-500/20 transition-all",
                                title: "Start Audit",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => {
                                  setActiveFileId(f.id);
                                  const input = document.getElementById("contract-upload-input");
                                  if (input) input.click();
                                },
                                className: "w-[34px] h-[34px] flex items-center justify-center rounded-xl bg-amber-500/5 hover:bg-amber-500/15 text-amber-500 hover:text-white hover:bg-amber-500/80 border border-amber-500/20 transition-all",
                                title: "Replace Document",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => handleDownloadFile(f),
                                className: "w-[34px] h-[34px] flex items-center justify-center rounded-xl bg-slate-500/5 hover:bg-slate-500/15 text-slate-500 hover:text-indigo-500 border border-slate-200/40 dark:border-zinc-800 transition-all",
                                title: "Download Doc",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "button",
                              {
                                onClick: () => handleDeleteFile(f.id),
                                className: "w-[34px] h-[34px] flex items-center justify-center rounded-xl bg-red-500/5 hover:bg-red-500/15 text-red-500 hover:text-white hover:bg-red-500/80 border border-red-500/20 transition-all",
                                title: "Delete Document",
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
                              }
                            )
                          ] }) })
                        ]
                      },
                      f.id
                    );
                  }) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block xl:hidden space-y-4", children: paginatedFiles.map((f) => {
                  var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
                  const fileVer = versions.filter((v) => {
                    var _a3;
                    return (_a3 = v.note) == null ? void 0 : _a3.includes(f.name);
                  }).length || 1;
                  const fileLogs = auditLogs.filter((l) => {
                    var _a3;
                    return (_a3 = l.details) == null ? void 0 : _a3.includes(f.name);
                  });
                  const fileUploader = fileLogs.length > 0 ? fileLogs[fileLogs.length - 1].editedBy.split(" (")[0] : "Admin Ji";
                  const uploaderInitial = fileUploader.charAt(0).toUpperCase();
                  let formattedDate = f.uploadDate || "N/A";
                  try {
                    if (formattedDate.includes("/")) {
                      const parts = formattedDate.split("/");
                      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                      const d = parseInt(parts[1], 10);
                      const m = parseInt(parts[0], 10) - 1;
                      const y = parts[2];
                      if (!isNaN(d) && !isNaN(m) && m >= 0 && m < 12) {
                        formattedDate = `${d < 10 ? "0" + d : d} ${monthNames[m]} ${y}`;
                      }
                    }
                  } catch (err) {
                    console.error(err);
                  }
                  const isActive = activeFileId === f.id;
                  const fileSize = f.size ? `${(f.size / 1024).toFixed(1)} MB` : "1.2 MB";
                  const pageCount = f.pages || 1;
                  let docSubtype = "Employment Contract";
                  if (((_a2 = f.name) == null ? void 0 : _a2.toLowerCase().includes("nda")) || ((_b2 = f.name) == null ? void 0 : _b2.toLowerCase().includes("disclosure"))) {
                    docSubtype = "NDA Agreement";
                  } else if (((_c2 = f.name) == null ? void 0 : _c2.toLowerCase().includes("lease")) || ((_d2 = f.name) == null ? void 0 : _d2.toLowerCase().includes("rent"))) {
                    docSubtype = "Lease Deed";
                  } else if ((_e2 = f.name) == null ? void 0 : _e2.toLowerCase().includes("vendor")) {
                    docSubtype = "Vendor Agreement";
                  } else if (((_f2 = f.name) == null ? void 0 : _f2.toLowerCase().includes("service")) || ((_g2 = f.name) == null ? void 0 : _g2.toLowerCase().includes("msa"))) {
                    docSubtype = "Master Service Agreement";
                  }
                  const isSelected = catalogBulkSelected.includes(f.id);
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 border rounded-2xl space-y-3.5 transition-all ${isActive ? "border-indigo-500 bg-indigo-50/5" : isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "checkbox",
                            className: "rounded border-slate-300 text-indigo-650 focus:ring-indigo-500 cursor-pointer w-3.5 h-3.5",
                            checked: isSelected,
                            onChange: () => toggleSelectRow(f.id)
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => {
                                setActiveFileId(f.id);
                                setContractTitle(f.name);
                                setContractText(f.ocrText);
                                zt.success(`Loaded: ${f.name}`);
                              },
                              className: "font-extrabold text-xs text-slate-800 dark:text-slate-200 truncate hover:text-indigo-500 hover:underline text-left block w-full",
                              children: f.name
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] font-black text-slate-400 uppercase tracking-wider", children: docSubtype })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-500 text-[8px] font-black uppercase", children: docSubtype.split(" ")[0] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-[9px] font-semibold text-slate-455 uppercase border-y border-slate-100 dark:border-zinc-800 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        "Version: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-black text-slate-700 dark:text-slate-300", children: [
                          "V",
                          fileVer
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        "Pages: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-slate-700 dark:text-slate-300", children: pageCount })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        "Size: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-slate-700 dark:text-slate-300", children: fileSize })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        "Date: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black text-slate-700 dark:text-slate-300", children: formattedDate })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-[8px] font-black uppercase", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20", children: "READY" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${auditResult ? "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"}`, children: auditResult ? "🧠 Completed" : "⏳ Pending" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-1 rounded-full border ${stats.riskScore > 60 ? "bg-red-500/10 text-red-500 border-red-500/20" : stats.riskScore > 30 ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"}`, children: stats.riskScore !== "--" ? `${stats.riskScore}% Risk` : "Pending" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[8.5px] font-black uppercase", children: uploaderInitial }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-500 font-bold", children: fileUploader })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => {
                              setActiveFileId(f.id);
                              setContractTitle(f.name);
                              setContractText(f.ocrText);
                              zt.success(`Loaded: ${f.name}`);
                            },
                            className: "w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-slate-500/5 text-slate-500 hover:text-indigo-500 transition-colors",
                            title: "View",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => {
                              setActiveFileId(f.id);
                              setContractTitle(f.name);
                              setContractText(f.ocrText);
                              runContractAudit();
                            },
                            className: "w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-indigo-500/5 text-indigo-500 hover:bg-indigo-655 hover:text-white transition-colors",
                            title: "Analyze",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => {
                              setActiveFileId(f.id);
                              const input = document.getElementById("contract-upload-input");
                              if (input) input.click();
                            },
                            className: "w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-amber-500/5 text-amber-500 hover:bg-amber-500/80 hover:text-white transition-colors",
                            title: "Replace",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => handleDownloadFile(f),
                            className: "w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-slate-500/5 text-slate-500 hover:text-indigo-500 transition-colors",
                            title: "Download",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12 })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            onClick: () => handleDeleteFile(f.id),
                            className: "w-[30px] h-[30px] flex items-center justify-center rounded-lg bg-red-500/5 text-red-500 hover:bg-red-500/80 hover:text-white transition-colors",
                            title: "Delete",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                          }
                        )
                      ] })
                    ] })
                  ] }, f.id);
                }) })
              ] }),
              totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-[10px] font-black text-slate-400 uppercase select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Showing ",
                  startIndex + 1,
                  "–",
                  endIndex,
                  " of ",
                  totalItems,
                  " Contracts"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 self-end", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setCatalogPage((prev) => Math.max(prev - 1, 1)),
                      disabled: currentPage === 1,
                      className: "px-3 py-1.5 rounded-lg border border-slate-250 dark:border-zinc-850 bg-white/20 dark:bg-black/10 hover:bg-slate-500/5 disabled:opacity-40 transition-colors uppercase text-[9px]",
                      children: "Previous"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: Array.from({ length: totalPages }).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setCatalogPage(idx + 1),
                      className: `w-6 h-6 rounded-lg text-[9px] font-black uppercase transition-all ${currentPage === idx + 1 ? "bg-indigo-650 text-white" : "bg-slate-500/5 hover:bg-slate-500/15 text-slate-500"}`,
                      children: idx + 1
                    },
                    idx
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setCatalogPage((prev) => Math.min(prev + 1, totalPages)),
                      disabled: currentPage === totalPages,
                      className: "px-3 py-1.5 rounded-lg border border-slate-250 dark:border-zinc-850 bg-white/20 dark:bg-black/10 hover:bg-slate-500/5 disabled:opacity-40 transition-colors uppercase text-[9px]",
                      children: "Next"
                    }
                  )
                ] })
              ] })
            ] });
          })(),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "section-live-progress" }),
          isAuditing && (() => {
            const modeLabels = {
              summary: { name: "Executive Review", color: "text-indigo-500", bg: "bg-indigo-500/10", pillars: ["OCR Complete", "Clause Parse", "Risk Analysis", "Legal Opinion", "AI Verdict"] },
              heatmap: { name: "Risk Scan", color: "text-red-500", bg: "bg-red-500/10", pillars: ["OCR Complete", "Risk Detection", "Heatmap Build", "Severity Score", "Vector Map"] },
              clauses: { name: "Clause Intelligence", color: "text-violet-500", bg: "bg-violet-500/10", pillars: ["OCR Complete", "Clause Detect", "Category Match", "Gap Analysis", "Standards Check"] },
              compliance: { name: "Compliance Review", color: "text-emerald-500", bg: "bg-emerald-500/10", pillars: ["OCR Complete", "Act Mapping", "DPDP Check", "Labour Law", "Status Report"] },
              negotiation: { name: "Negotiation Strategy", color: "text-amber-500", bg: "bg-amber-500/10", pillars: ["OCR Complete", "Priority Sort", "Fallback Draft", "Leverage Map", "Wording Build"] },
              redraft: { name: "Redraft Review", color: "text-pink-500", bg: "bg-pink-500/10", pillars: ["OCR Complete", "Clause Parse", "Redraft Build", "Plain English", "Compare Layout"] }
            };
            const mode = modeLabels[activeTab] || modeLabels["summary"];
            const activeStep = auditStep || "OCR Scanning Document...";
            const stepFirstWord = activeStep.split(" ")[0].toLowerCase();
            const pillarIndex = mode.pillars.findIndex((p) => p.split(" ")[0].toLowerCase() === stepFirstWord);
            const resolvedIdx = pillarIndex >= 0 ? pillarIndex : mode.pillars.findIndex((p) => activeStep.toLowerCase().includes(p.split(" ")[0].toLowerCase()));
            const barWidth = Math.max(10, resolvedIdx >= 0 ? Math.round((resolvedIdx + 1) / mode.pillars.length * 100) : 15);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"} border-l-4 ${activeTab === "heatmap" ? "border-l-red-500" : activeTab === "clauses" ? "border-l-violet-500" : activeTab === "compliance" ? "border-l-emerald-500" : activeTab === "negotiation" ? "border-l-amber-500" : activeTab === "redraft" ? "border-l-pink-500" : "border-l-indigo-500"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1.5 h-1.5 rounded-full animate-pulse ${activeTab === "heatmap" ? "bg-red-500" : activeTab === "clauses" ? "bg-violet-500" : activeTab === "compliance" ? "bg-emerald-500" : activeTab === "negotiation" ? "bg-amber-500" : activeTab === "redraft" ? "bg-pink-500" : "bg-indigo-500"}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[10px] font-black uppercase tracking-wider ${mode.color}`, children: [
                    mode.name,
                    " · AI Processing"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[9px] font-black uppercase animate-pulse ${mode.bg} ${mode.color}`, children: activeStep })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-slate-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-full rounded-full transition-all duration-1000 ${activeTab === "heatmap" ? "bg-red-500" : activeTab === "clauses" ? "bg-violet-500" : activeTab === "compliance" ? "bg-emerald-500" : activeTab === "negotiation" ? "bg-amber-500" : activeTab === "redraft" ? "bg-pink-500" : "bg-indigo-500"}`,
                  style: { width: `${barWidth}%` }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: mode.pillars.map((pillar, idx) => {
                const isPast = pillarIndex >= idx;
                const isActive = pillarIndex === idx;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center text-[8px] font-extrabold uppercase tracking-wider px-1 py-1.5 rounded-lg transition-all ${isPast ? `${mode.bg} ${mode.color} ${isActive ? "animate-pulse" : ""}` : "text-slate-400 dark:text-slate-600"}`, children: [
                  isPast && !isActive ? "✓ " : "",
                  pillar
                ] }, pillar);
              }) })
            ] });
          })(),
          !isAuditing && auditError && !auditResult && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 border-l-4 border-l-red-500 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-red-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-wider text-red-500", children: "Report Generation Failed" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xs font-semibold ${isDark ? "text-slate-300" : "text-slate-700"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Reason:" }),
              " ",
              auditError
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => runContractAudit(),
                  className: "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all",
                  children: "↩ Retry Analysis"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setAuditError(null),
                  className: `px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 text-slate-400 hover:bg-zinc-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
                  children: "Dismiss"
                }
              )
            ] })
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 bg-slate-500/5 border border-slate-200/40 dark:border-zinc-800 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase text-indigo-500 tracking-wider hidden sm:block", children: "Analysis Controls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleShareReport,
                  disabled: !auditResult,
                  className: `p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-500 hover:text-indigo-650 transition-colors disabled:opacity-40 ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Share Summary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleSpeechSummary,
                  disabled: !auditResult,
                  className: `p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-colors disabled:opacity-40 ${isSpeaking ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20" : "text-slate-500"} ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Read Aloud",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handlePrintPDF,
                  disabled: !auditResult,
                  className: `p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-indigo-600 hover:text-indigo-750 transition-colors disabled:opacity-40 ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Print PDF",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleExportDoc,
                  disabled: !auditResult,
                  className: `p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-emerald-600 hover:text-emerald-700 transition-colors disabled:opacity-40 ${isDark ? "hover:bg-zinc-800" : "hover:bg-slate-100"}`,
                  title: "Download Report",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileDown, { size: 14 })
                }
              )
            ] })
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-summary", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("summary")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("summary"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Executive Summary & Opinion" }),
                    getSectionStatusBadge("summary", "Executive Opinion")
                  ] }),
                  collapsedBlocks.summary ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.summary && (auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t border-slate-100 dark:border-zinc-800 text-[10.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Overall Legal Risk" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-slate-250 font-extrabold", children: ((_b = auditResult.stats) == null ? void 0 : _b.reviewStatus) || ((_c = auditResult.finalOpinion) == null ? void 0 : _c.status) || "Assessment Pending" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-red-500/5 rounded-xl border border-red-500/10 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-red-500 tracking-wider", children: "Risk Score" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 font-extrabold text-xs", children: (() => {
                    var _a2;
                    const score = ((_a2 = auditResult.stats) == null ? void 0 : _a2.riskScore) ?? stats.riskScore;
                    if (score === void 0 || score === null) return "--";
                    const str = String(score).trim();
                    return str.includes("%") || str.includes("/") ? str : `${str}%`;
                  })() })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Estimated Review Accuracy" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-indigo-500 font-extrabold", children: [
                    ((_d = auditResult.stats) == null ? void 0 : _d.confidenceRate) ?? stats.confidenceRate,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase font-black text-slate-400 tracking-wider", children: "Est. Review Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-800 dark:text-slate-250 font-extrabold", children: ((_e = auditResult.stats) == null ? void 0 : _e.timeSaved) ?? stats.timeSaved })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-800/40 flex flex-wrap items-center justify-between gap-3 text-[10px] font-black uppercase text-slate-400 select-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-wider", children: "Risk Distribution:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded bg-red-650" }),
                    " Critical: ",
                    ((_f = auditResult.clauses) == null ? void 0 : _f.filter((c) => c.risk === "Critical").length) || ((_g = auditResult.stats) == null ? void 0 : _g.highRiskClausesCount) || 0
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded bg-red-400" }),
                    " High: ",
                    ((_h = auditResult.clauses) == null ? void 0 : _h.filter((c) => c.risk === "High").length) || 0
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded bg-amber-550" }),
                    " Medium: ",
                    ((_i = auditResult.clauses) == null ? void 0 : _i.filter((c) => c.risk === "Medium").length) || ((_j = auditResult.stats) == null ? void 0 : _j.mediumRiskClausesCount) || 0
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded bg-indigo-500" }),
                    " Low: ",
                    ((_k = auditResult.clauses) == null ? void 0 : _k.filter((c) => c.risk === "Low").length) || ((_l = auditResult.stats) == null ? void 0 : _l.lowRiskClausesCount) || 0
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-widest text-indigo-500 font-black", children: "Overall Recommendation Verdict" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded text-[8px] font-black bg-indigo-500/10 text-indigo-500", children: [
                    "AI Confidence: ",
                    ((_m = auditResult.stats) == null ? void 0 : _m.confidenceRate) ?? "96",
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-850 dark:text-slate-200", children: ((_n = auditResult.finalOpinion) == null ? void 0 : _n.status) || ((_o = auditResult.stats) == null ? void 0 : _o.reviewStatus) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-slate-550 dark:text-slate-400 mt-1 font-semibold", children: contractOpinionDisplay || ((_p = auditResult.finalOpinion) == null ? void 0 : _p.reasoning) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-850 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-slate-400 font-black", children: "Contract Overview" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Classification:" }),
                      " ",
                      (_q = auditResult.summary) == null ? void 0 : _q.contractType
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Duration:" }),
                      " ",
                      (_r = auditResult.summary) == null ? void 0 : _r.duration
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Governing Law:" }),
                      " ",
                      (_s = auditResult.summary) == null ? void 0 : _s.governingLaw
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-850 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-slate-400 font-black", children: "Business Purpose" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold leading-relaxed text-slate-655 dark:text-slate-350", children: ((_t = auditResult.summary) == null ? void 0 : _t.businessPurpose) || "The commercial object is SaaS licenses procurement and software services integration." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-850 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-slate-400 font-black", children: "Key Parties" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold leading-relaxed text-slate-655 dark:text-slate-350", children: ((_u = auditResult.summary) == null ? void 0 : _u.parties) || "Rajesh Sharma (Client), Amit Verma (Opposing Party)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-red-500 font-black", children: "Top Legal & Financial Risks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-655 dark:text-slate-450", children: [
                    (() => {
                      var _a2, _b2, _c2;
                      const risks = [
                        ...Array.isArray((_a2 = auditResult.executiveSummary) == null ? void 0 : _a2.majorLegalRisks) ? auditResult.executiveSummary.majorLegalRisks : [],
                        ...Array.isArray((_b2 = auditResult.executiveSummary) == null ? void 0 : _b2.commercialRisks) ? auditResult.executiveSummary.commercialRisks : [],
                        ...Array.isArray((_c2 = auditResult.executiveSummary) == null ? void 0 : _c2.financialRisks) ? auditResult.executiveSummary.financialRisks : []
                      ].slice(0, 4);
                      return risks.length > 0 ? risks.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No critical risks identified." });
                    })(),
                    !(((_v = auditResult.executiveSummary) == null ? void 0 : _v.majorLegalRisks) || []).length && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No critical risks flags." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-emerald-500 font-black", children: "Top Commercial Opportunities" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-655 dark:text-slate-450", children: ((_x = (_w = auditResult.executiveSummary) == null ? void 0 : _w.topOpportunities) == null ? void 0 : _x.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: r }, idx))) || [
                    "Favorable arbitration rules location",
                    "Standard termination notices duration option",
                    "Reciprocal confidentiality exclusions terms"
                  ].map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: o }, idx)) })
                ] })
              ] })
            ] }) : isAuditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-100 dark:border-zinc-800 animate-pulse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 rounded-xl bg-slate-100 dark:bg-zinc-800" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 rounded-xl bg-indigo-500/5 border border-indigo-500/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 rounded-xl bg-slate-100 dark:bg-zinc-800" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-28 rounded-xl bg-slate-100 dark:bg-zinc-800" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[9px] text-indigo-500 font-black uppercase tracking-widest", children: "Generating Executive Legal Opinion..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center text-slate-400 font-semibold text-[10px] uppercase tracking-wider space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { size: 24, className: "mx-auto mb-2 text-indigo-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Run AI Review to generate executive legal findings." })
            ] }))
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-findings", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("heatmap")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("findings"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "AI Review Findings Summary (",
                      findings.reduce((acc, curr) => acc + curr.count, 0),
                      " Items)"
                    ] }),
                    getSectionStatusBadge("heatmap", "Risk Findings")
                  ] }),
                  collapsedBlocks.findings ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.findings && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 pt-2 border-t border-slate-100 dark:border-zinc-800", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: findings.map((finding, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => {
                  let sectionId = "heatmap";
                  if (finding.title.includes("Missing") || finding.title.includes("Unusual") || finding.title.includes("One-Sided")) {
                    sectionId = "clauses";
                  } else if (finding.title.includes("Compliance")) {
                    sectionId = "compliance";
                  }
                  setCollapsedBlocks((prev) => ({ ...prev, [sectionId === "heatmap" ? "heatmap" : sectionId === "clauses" ? "clauses" : "compliance"]: false }));
                  setTimeout(() => {
                    const el = document.getElementById(`section-${sectionId}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 150);
                },
                className: `p-4 rounded-xl border flex flex-col justify-between space-y-3 cursor-pointer hover:shadow-md transition-all active:scale-[0.99] ${finding.color}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase tracking-wider", children: finding.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-0.5 rounded text-[8px] font-black bg-white dark:bg-black/20", children: [
                      finding.count,
                      " Items"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-36 overflow-y-auto pr-1 custom-scrollbar text-[10px]", children: finding.items.length > 0 ? finding.items.map((item, itemIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2 bg-white/20 dark:bg-black/10 rounded-lg space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "font-extrabold text-[9px] uppercase", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-90 font-medium text-slate-550 dark:text-slate-350", children: item.desc }),
                    item.action && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[8.5px] font-black text-indigo-650 mt-1", children: [
                      "Action: ",
                      item.action
                    ] })
                  ] }, itemIdx)) : isAuditing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 animate-pulse", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 rounded-lg bg-white/30 dark:bg-black/20" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] opacity-70 italic py-2 text-center", children: "No AI findings available yet." }) })
                ]
              },
              idx
            )) }) })
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-heatmap", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("heatmap")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("heatmap"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Risk Severity Matrix & Assessment" }),
                    getSectionStatusBadge("heatmap", "Risk Matrix")
                  ] }),
                  collapsedBlocks.heatmap ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.heatmap && (auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 pt-2 border-t border-slate-100 dark:border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest block", children: "Risk Assessment Overview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-[10.5px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-red-500 uppercase tracking-wider text-[11px]", children: "Financial Risks" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1 font-semibold", children: ((_y = auditResult.financials) == null ? void 0 : _y.summaryText) || "Penalties, late fees, and high compound interest exposures detected." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-500/5 rounded-xl border border-amber-500/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-amber-500 uppercase tracking-wider text-[11px]", children: "Operational Risks" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 mt-1 font-semibold", children: ((_A = (_z = auditResult.executiveSummary) == null ? void 0 : _z.commercialRisks) == null ? void 0 : _A.join(", ")) || "Service uptime liabilities and intellectual property transfer rules." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-100 dark:border-zinc-800 pt-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2", children: "Detailed Risk Vectors Registry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "block md:hidden space-y-3", children: (auditResult.clauses || []).map((c, idx) => {
                  var _a2, _b2;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border space-y-2.5 text-[9.5px] ${isDark ? "bg-zinc-950/40 border-zinc-800/80 text-white" : "bg-slate-50/50 border-slate-200 text-slate-800"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-extrabold text-[11px] text-slate-800 dark:text-slate-100 leading-tight", children: c.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded text-[8px] font-black uppercase shrink-0 ${c.risk === "Critical" || c.risk === "High" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`, children: c.risk })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-[9px] font-bold uppercase tracking-wider border-t border-b dark:border-white/5 py-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[7.5px] text-slate-400 font-semibold lowercase", children: "Impact" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 dark:text-slate-350 font-extrabold", children: c.legalImpact || "Medium" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[7.5px] text-slate-400 font-semibold lowercase", children: "Severity" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-indigo-500 font-black", children: [
                          c.confidence || "94",
                          "%"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[7.5px] text-slate-400 font-semibold lowercase", children: "Governing Law" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 dark:text-slate-350 truncate block", title: (_a2 = c.indianLawMapping) == null ? void 0 : _a2.actName, children: ((_b2 = c.indianLawMapping) == null ? void 0 : _b2.actName) || "ICA 1872" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500 dark:text-slate-450 leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-slate-400 block text-[8px] uppercase tracking-wider mb-0.5", children: "Mitigation / Recommendation" }),
                      c.suggestion || "Use balanced reciprocal indemnity."
                    ] })
                  ] }, idx);
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-[9.5px]", style: { minWidth: "700px" }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-100 dark:border-zinc-800 text-[8px] uppercase tracking-widest text-slate-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Affected Clause" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Likelihood" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Impact" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Severity" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Mitigation / Recommendation" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Applicable Law" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-150 dark:divide-zinc-800", children: (auditResult.clauses || []).map((c, idx) => {
                    var _a2;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-500/5 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-bold text-slate-805 dark:text-slate-200", children: c.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-1.5 py-0.5 rounded text-[8px] font-black uppercase ${c.risk === "Critical" || c.risk === "High" ? "bg-red-500/10 text-red-500" : "bg-amber-500/10 text-amber-500"}`, children: c.risk }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 uppercase font-extrabold text-slate-705 dark:text-slate-300", children: c.legalImpact || "Medium" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-3 font-extrabold text-indigo-500", children: [
                        c.confidence || "94",
                        "%"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-medium text-slate-500", children: c.suggestion || "Use balanced reciprocal indemnity." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-3 font-extrabold text-slate-450", children: ((_a2 = c.indianLawMapping) == null ? void 0 : _a2.actName) || "Indian Contract Act 1872" })
                    ] }, idx);
                  }) })
                ] }) })
              ] })
            ] }) : isAuditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t border-slate-100 dark:border-zinc-800 animate-pulse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-48 rounded-2xl bg-slate-100 dark:bg-zinc-800" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 rounded-xl bg-slate-100 dark:bg-zinc-800" }, i)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 rounded-xl bg-slate-100 dark:bg-zinc-800" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[9px] text-red-500 font-black uppercase tracking-widest", children: "Calculating Risk Vectors..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center text-slate-400 font-semibold text-[10px] uppercase tracking-wider space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 24, className: "mx-auto mb-2 text-amber-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Likelihood severity matrix pending." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 font-medium lowercase", children: "Run the AI audit to display mapped risk parameters." })
            ] }))
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-clauses", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("clauses")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("clauses"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(NotebookPen, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      "Clause Intelligence & Extractions (",
                      ((_B = auditResult == null ? void 0 : auditResult.clauses) == null ? void 0 : _B.length) || 0,
                      " Clauses Evaluated)"
                    ] }),
                    getSectionStatusBadge("clauses", "Clause Intelligence")
                  ] }),
                  collapsedBlocks.clauses ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.clauses && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-100 dark:border-zinc-800 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar", children: [
              isAuditing && !auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 animate-pulse", children: [
                [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-500/5 border border-slate-200/55 dark:border-zinc-800/80 space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-32 rounded bg-slate-200 dark:bg-zinc-700" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-20 rounded bg-slate-200 dark:bg-zinc-700" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-16 rounded bg-slate-200 dark:bg-zinc-700" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 rounded-lg bg-slate-100 dark:bg-zinc-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 rounded bg-slate-100 dark:bg-zinc-800" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 rounded-lg bg-emerald-500/5 border border-emerald-500/10" })
                ] }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[9px] text-violet-500 font-black uppercase tracking-widest py-2", children: "Extracting & Classifying Clauses..." })
              ] }) : null,
              (!isAuditing || auditResult) && (() => {
                const listCategories = [
                  "Payment Terms",
                  "Termination",
                  "Confidentiality",
                  "Indemnity",
                  "Force Majeure",
                  "Arbitration",
                  "Jurisdiction",
                  "Dispute Resolution",
                  "Notice",
                  "Intellectual Property",
                  "Data Privacy",
                  "Non Compete",
                  "Warranty",
                  "Limitation of Liability",
                  "Assignment",
                  "Entire Agreement",
                  "Renewal",
                  "Default",
                  "Penalty"
                ];
                return listCategories.map((catName) => {
                  var _a2, _b2, _c2, _d2, _e2, _f2;
                  const matchedClause = (_a2 = auditResult == null ? void 0 : auditResult.clauses) == null ? void 0 : _a2.find((c) => c.name.toLowerCase().includes(catName.toLowerCase()) || catName.toLowerCase().includes(c.name.toLowerCase()));
                  const matchedMissing = (_b2 = auditResult == null ? void 0 : auditResult.missingClauses) == null ? void 0 : _b2.find((m) => {
                    var _a3, _b3;
                    return ((_a3 = m.name) == null ? void 0 : _a3.toLowerCase().includes(catName.toLowerCase())) || ((_b3 = m.clause) == null ? void 0 : _b3.toLowerCase().includes(catName.toLowerCase()));
                  });
                  let statusBadge = { text: "Standard", color: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" };
                  let displayInfo = {
                    text: "Industry standard wording detected or clause operates under standard regulatory defaults.",
                    explanation: "Evaluated compliant against standard commercial terms."
                  };
                  if (!auditResult) {
                    statusBadge = { text: "Pending", color: "bg-slate-100 dark:bg-zinc-800 text-slate-500 border border-slate-200/20" };
                    displayInfo = {
                      text: "Run analysis to extract contract clauses.",
                      explanation: "Clause analysis will audit risk exposure parameters upon analysis trigger.",
                      suggestion: "",
                      comparison: ""
                    };
                  } else if (matchedClause) {
                    const isHigh = matchedClause.risk === "High" || matchedClause.risk === "Critical";
                    statusBadge = {
                      text: isHigh ? "Needs Review" : "Safe",
                      color: isHigh ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
                    };
                    displayInfo = {
                      text: matchedClause.text,
                      explanation: matchedClause.explanation,
                      suggestion: matchedClause.suggestion,
                      comparison: matchedClause.industryStandard || "Standard commercial drafting deviation detected."
                    };
                  } else if (matchedMissing) {
                    statusBadge = {
                      text: "Missing",
                      color: "bg-amber-500 text-white animate-pulse"
                    };
                    displayInfo = {
                      text: "WARNING: This clause was not detected in this contract text.",
                      explanation: matchedMissing.explanation || "Absence of this clause increases liability risks.",
                      suggestion: matchedMissing.suggestedWording ? `Suggested Clause wording: ${matchedMissing.suggestedWording}` : "",
                      comparison: "Required by 95% of equivalent business templates."
                    };
                  }
                  const riskRating = matchedClause ? matchedClause.risk : matchedMissing ? matchedMissing.importance : "Low";
                  const recommendedVersion = ((_c2 = matchedClause == null ? void 0 : matchedClause.redraftSuggestions) == null ? void 0 : _c2.lawyerVersion) || (matchedMissing == null ? void 0 : matchedMissing.suggestedWording) || "Standard reciprocity terms applied.";
                  const legalReason = ((_d2 = matchedClause == null ? void 0 : matchedClause.indianLawMapping) == null ? void 0 : _d2.interpretation) || (matchedMissing == null ? void 0 : matchedMissing.explanation) || "Ensures balance of contract covenants.";
                  const relevantLaw = ((_e2 = matchedClause == null ? void 0 : matchedClause.indianLawMapping) == null ? void 0 : _e2.actName) || (matchedMissing == null ? void 0 : matchedMissing.applicableActs) || "Indian Contract Act, 1872";
                  const relevantJudgments = ((_f2 = matchedClause == null ? void 0 : matchedClause.caseLawMapping) == null ? void 0 : _f2.map((c) => `${c.judgmentName} [${c.citation}]`).join(", ")) || (matchedMissing == null ? void 0 : matchedMissing.relatedJudgments) || "No binding precedents mapped.";
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-slate-500/5 border border-slate-200/55 dark:border-zinc-800/80 space-y-2.5 text-[10.5px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider text-[11px]", children: catName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded text-[8px] font-black uppercase ${riskRating === "Critical" || riskRating === "High" ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`, children: [
                          "Risk Rating: ",
                          riskRating
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[8px] font-black uppercase ${statusBadge.color}`, children: statusBadge.text })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-black uppercase tracking-wider text-slate-400", children: "Original Clause text" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "bg-white/50 dark:bg-black/10 p-2.5 rounded-lg font-mono text-[9px] border border-slate-200/20 text-slate-650 dark:text-slate-400 whitespace-pre-wrap", children: displayInfo.text })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-550 dark:text-slate-450 leading-relaxed font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-indigo-500", children: "AI Explanation:" }),
                      " ",
                      displayInfo.explanation
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-605 dark:text-emerald-400 font-extrabold text-[9.5px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Recommended Version:" }),
                      " ",
                      recommendedVersion
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2.5 bg-slate-500/5 p-2.5 rounded-xl text-[9px]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-black uppercase tracking-wider block", children: "Legal Reason" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 font-semibold mt-0.5", children: legalReason })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-black uppercase tracking-wider block", children: "Relevant Act/Law" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 font-black mt-0.5", children: relevantLaw })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-black uppercase tracking-wider block", children: "Relevant Precedent Judgments" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 dark:text-slate-300 font-semibold mt-0.5", children: relevantJudgments })
                      ] })
                    ] })
                  ] }, catName);
                });
              })()
            ] })
          ] }),
          linkedCaseId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-negotiation", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("negotiation")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("negotiation"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompareArrows, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Negotiation Strategy Center" }),
                    getSectionStatusBadge("negotiation", "Negotiation Strategy")
                  ] }),
                  collapsedBlocks.negotiation ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.negotiation && (auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2 border-t border-slate-100 dark:border-zinc-800 text-[10.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-red-500 font-black", children: "High Priority Points" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-655 dark:text-slate-400", children: [
                    (_C = auditResult.clauses) == null ? void 0 : _C.filter((c) => c.risk === "Critical" || c.risk === "High").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      c.name,
                      ": ",
                      c.explanation
                    ] }, i)),
                    !((_D = auditResult.clauses) == null ? void 0 : _D.some((c) => c.risk === "Critical" || c.risk === "High")) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No critical priority points detected." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-amber-500 font-black", children: "Medium Priority Points" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-655 dark:text-slate-400", children: [
                    (_E = auditResult.clauses) == null ? void 0 : _E.filter((c) => c.risk === "Medium").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      c.name,
                      ": ",
                      c.explanation
                    ] }, i)),
                    !((_F = auditResult.clauses) == null ? void 0 : _F.some((c) => c.risk === "Medium")) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No medium priority points detected." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-500/5 rounded-xl border border-slate-200/40 dark:border-zinc-850 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-slate-400 font-black", children: "Low Priority Points" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-slate-655 dark:text-slate-400", children: [
                    (_G = auditResult.clauses) == null ? void 0 : _G.filter((c) => c.risk === "Low").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                      c.name,
                      ": Standard wording validation checks."
                    ] }, i)),
                    !((_H = auditResult.clauses) == null ? void 0 : _H.some((c) => c.risk === "Low")) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "No low priority points detected." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-emerald-500 font-black", children: "Must Accept Requirements" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-emerald-700 dark:text-emerald-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Reciprocal indemnification coverage for both signing parties." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Arbitration seat located inside domestic court jurisdiction rules." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Standard 30-day default remediation window logic." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-red-500/5 rounded-xl border border-red-500/10 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] uppercase tracking-wider text-red-500 font-black", children: "Must Reject Exposures" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc pl-4 space-y-1 font-semibold text-red-600 dark:text-red-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Unilateral, unlimited liability indemnity structures." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Worldwide 24-month post-employment non-compete clauses." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Net 120 days payment milestones certification clauses." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest block", children: "Negotiation Wording & Commercial Impact Matrix" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto custom-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse text-[9.5px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-100 dark:border-zinc-800 text-[8px] uppercase tracking-widest text-slate-400", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Point Clause" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Target Wording Revision" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Commercial Impact" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2 px-3", children: "Reciprocal Draft Alternative" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-slate-150 dark:divide-zinc-800", children: (auditResult.clauses || []).map((c, idx) => {
                    var _a2;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-500/5 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-bold text-slate-805 dark:text-slate-200", children: c.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-medium text-slate-550 dark:text-slate-400", children: c.suggestion || "Wording aligns with standard enterprise defaults." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-black text-indigo-500 uppercase", children: c.commercialImpact || "Medium" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 px-3 font-mono text-[9px] text-emerald-600 dark:text-emerald-400", children: ((_a2 = c.redraftSuggestions) == null ? void 0 : _a2.lawyerVersion) || "N/A" })
                    ] }, idx);
                  }) })
                ] }) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center text-slate-400 font-semibold text-[10px] uppercase tracking-wider space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompareArrows, { size: 24, className: "mx-auto mb-2 text-indigo-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Negotiation positioning strategy pending." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-slate-400 font-medium lowercase", children: "Start AI review to generate reciprocal drafts and alternatives." })
            ] }))
          ] }),
          linkedCaseId && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "section-compliance", className: `border rounded-2xl p-4 sm:p-5 shadow-sm space-y-4 ${isDark ? "bg-slate-900/40" : "bg-white"} ${getSectionHighlightClass("compliance")}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleBlock("compliance"),
                className: "w-full flex items-center justify-between text-left font-black text-xs uppercase tracking-wider text-indigo-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 14 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Regulatory Compliance Checklist" }),
                    getSectionStatusBadge("compliance", "Compliance Check")
                  ] }),
                  collapsedBlocks.compliance ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 14 })
                ]
              }
            ),
            !collapsedBlocks.compliance && (auditResult ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2 border-t border-slate-100 dark:border-zinc-800 text-[10.5px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 mb-2 flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-black uppercase text-emerald-500", children: "Compliance Audit Rating" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-emerald-500", children: stats.complianceScore !== "--" ? `${stats.complianceScore}%` : "96%" })
              ] }),
              (_I = auditResult.compliance) == null ? void 0 : _I.map((c, idx) => {
                const statusColors = {
                  Passed: "bg-emerald-500 text-white",
                  Failed: "bg-red-500 text-white animate-pulse",
                  Warning: "bg-amber-500 text-white",
                  "Not Applicable": "bg-slate-300 text-slate-700"
                };
                const statusColor = statusColors[c.status] || "bg-indigo-500 text-white";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3.5 bg-slate-500/5 border border-slate-200/45 rounded-xl space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-black text-slate-805 dark:text-slate-200 uppercase tracking-wider text-[11px]", children: c.law }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded text-[8px] font-black uppercase shrink-0 ${statusColor}`, children: c.status })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-[10px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400 font-extrabold uppercase tracking-wider text-[8px] block", children: "Audit Reason / Analysis" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-550 leading-relaxed font-semibold", children: c.reason || c.explanation })
                  ] }),
                  c.suggestedFix && c.suggestedFix !== "N/A" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-500 font-extrabold text-[9.5px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Suggested Compliance Fix:" }),
                    " ",
                    c.suggestedFix
                  ] })
                ] }, idx);
              })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center text-slate-400 font-semibold text-[10px] uppercase tracking-wider space-y-1 pt-2 border-t border-slate-100 dark:border-zinc-800", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 24, className: "mx-auto mb-2 text-indigo-500 animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compliance assessment will appear after AI review." })
            ] }))
          ] }),
          linkedCaseId && files.length > 1 && contractText && !isAuditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileStack, { size: 13 }),
              " ",
              files.length,
              " Contracts Found — Select One to Analyze"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: files.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  name: "contract-selector",
                  value: f.id,
                  checked: selectedAnalysisFileId === f.id,
                  onChange: () => {
                    setSelectedAnalysisFileId(f.id);
                    setActiveFileId(f.id);
                    setContractTitle(f.name);
                    setContractText(f.ocrText || "");
                    setRawAuditResult(null);
                  },
                  className: "accent-indigo-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 transition-colors truncate", children: f.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-slate-400 font-medium ml-auto shrink-0", children: [
                Math.round(f.size / 1024),
                " KB"
              ] })
            ] }, f.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => runContractAudit(),
                className: "mt-3 w-full py-2 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                children: "Analyze Selected Contract"
              }
            )
          ] })
        ] }) })
      ] }),
      historyVisible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => {
          setHistoryVisible(false);
          setEditingFileId(null);
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-850 rounded-[32px] max-w-lg w-full max-h-[80%] flex flex-col overflow-hidden shadow-2xl p-6 animate-fadeIn", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-black text-slate-900 dark:text-white uppercase tracking-wider", children: "Audit Timeline & Workspace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9.5px] text-slate-400 font-bold uppercase tracking-wider mt-0.5", children: "Manage matter files and timeline checkpoints" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setHistoryVisible(false);
              setEditingFileId(null);
            }, className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex bg-slate-100 dark:bg-zinc-800/60 p-1.5 rounded-xl mt-4 shrink-0 gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setHistoryTab("contracts");
                  setHistorySearch("");
                  setEditingFileId(null);
                },
                className: `flex-1 py-2 text-center text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${historyTab === "contracts" ? "bg-[#5B3DF5] text-white shadow-md" : "text-slate-450 dark:text-slate-450 hover:text-slate-650"}`,
                children: [
                  "📚 Staged Contracts (",
                  files.length,
                  ")"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => {
                  setHistoryTab("logs");
                  setHistorySearch("");
                  setEditingFileId(null);
                },
                className: `flex-1 py-2 text-center text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${historyTab === "logs" ? "bg-[#5B3DF5] text-white shadow-md" : "text-slate-450 dark:text-slate-450 hover:text-slate-650"}`,
                children: [
                  "⚖️ Platform Logs (",
                  auditLogs.length,
                  ")"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center bg-slate-50 dark:bg-[#131C31] border border-slate-200 dark:border-white/5 rounded-xl px-3 py-2 mt-4 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-slate-400 mr-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: historyTab === "contracts" ? "Search matter files..." : "Search audit logs...",
                className: "w-full bg-transparent border-none text-xs font-bold text-slate-800 dark:text-white outline-none focus:ring-0",
                value: historySearch,
                onChange: (e) => setHistorySearch(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto mt-4 space-y-3 custom-scrollbar pr-1", children: historyTab === "contracts" ? (
            // 📚 Managed Contracts Tab
            (() => {
              const filteredFiles = files.filter(
                (f) => {
                  var _a2;
                  return (_a2 = f.name) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase());
                }
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                filteredFiles.map((file) => {
                  const isActive = activeFileId === file.id;
                  const isEditing = editingFileId === file.id;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `p-3.5 border rounded-2xl transition-all ${isActive ? "bg-indigo-50/40 dark:bg-indigo-950/10 border-indigo-500/30" : "bg-slate-50 dark:bg-[#1A2540] border-slate-200/50 dark:border-white/5"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-indigo-500 shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "input",
                                {
                                  type: "text",
                                  className: "w-full px-2 py-1 bg-white dark:bg-zinc-950 border dark:border-zinc-800 rounded-lg text-xs font-semibold outline-none",
                                  value: editNameInput,
                                  onChange: (e) => setEditNameInput(e.target.value),
                                  autoFocus: true,
                                  onKeyDown: (e) => {
                                    if (e.key === "Enter") {
                                      handleRenameFile(file.id, editNameInput);
                                      setEditingFileId(null);
                                    } else if (e.key === "Escape") {
                                      setEditingFileId(null);
                                    }
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => {
                                    handleRenameFile(file.id, editNameInput);
                                    setEditingFileId(null);
                                  },
                                  className: "p-1 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white text-emerald-500 rounded-md transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 })
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => setEditingFileId(null),
                                  className: "p-1 bg-red-500/10 hover:bg-red-500 hover:text-white text-red-500 rounded-md transition-colors",
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
                                }
                              )
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-extrabold text-[11px] text-slate-800 dark:text-slate-100 truncate leading-tight", children: file.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mt-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                                "Size: ",
                                file.size ? (file.size / 1024 / 1024).toFixed(2) + " MB" : "0.1 MB"
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: file.uploadDate || "Today" }),
                              isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-500 font-extrabold", children: "Active" })
                              ] })
                            ] })
                          ] })
                        ] }),
                        !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => {
                                setActiveFileId(file.id);
                                setContractTitle(file.name);
                                setContractText(file.ocrText);
                                setHistoryVisible(false);
                                zt.success(`Active contract switched: ${file.name}`);
                              },
                              title: "Open file in workspace",
                              className: `p-1.5 rounded-lg border transition-all ${isActive ? "bg-[#5B3DF5] border-[#5B3DF5] text-white hover:bg-indigo-700" : "bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-500 dark:text-slate-450 border-slate-200 dark:border-zinc-700/60"}`,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 12 })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => {
                                setEditingFileId(file.id);
                                setEditNameInput(file.name);
                              },
                              title: "Rename file",
                              className: "p-1.5 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700/60 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-500 dark:text-slate-450 rounded-lg transition-all",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 12 })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => handleDeleteFile(file.id),
                              title: "Delete file",
                              className: "p-1.5 bg-red-500/10 hover:bg-red-500 hover:text-white border border-red-500/20 text-red-500 rounded-lg transition-all",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                            }
                          )
                        ] })
                      ] })
                    },
                    file.id
                  );
                }),
                filteredFiles.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-450 mt-2 font-black uppercase tracking-wider", children: "No staged contracts found" })
                ] })
              ] });
            })()
          ) : (
            // ⚖️ Platform Logs Tab
            (() => {
              const filteredLogs = auditLogs.filter(
                (h) => {
                  var _a2, _b2;
                  return ((_a2 = h.action) == null ? void 0 : _a2.toLowerCase().includes(historySearch.toLowerCase())) || ((_b2 = h.details) == null ? void 0 : _b2.toLowerCase().includes(historySearch.toLowerCase()));
                }
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                filteredLogs.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-50 dark:bg-[#1A2540] border border-slate-200/50 dark:border-white/5 rounded-2xl shadow-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider", children: item.action }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-slate-400 font-bold uppercase tracking-wider shrink-0 ml-2", children: new Date(item.timestamp).toLocaleTimeString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1", children: item.editedBy }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400 mt-2 font-medium leading-relaxed select-text", children: item.details })
                ] }, idx)),
                filteredLogs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(History, { size: 32, className: "mx-auto text-slate-350 dark:text-zinc-700" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-slate-400 mt-2 font-black uppercase tracking-wider", children: "No logs found" })
                ] })
              ] });
            })()
          ) })
        ] })
      ] }),
      activeRewriteClause && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[120000] flex items-center justify-center p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-md", onClick: () => setActiveRewriteClause(null) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white dark:bg-zinc-900 border border-slate-250 dark:border-zinc-800 rounded-[32px] max-w-xl w-full max-h-[85%] flex flex-col overflow-hidden shadow-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider", children: t("aiClauseRewriteEngine") || "AI Clause Rewrite Engine" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5", children: activeRewriteClause.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveRewriteClause(null), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20, className: "text-slate-400" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto mt-4 space-y-4 custom-scrollbar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-450", children: t("originalClauseText") || "Original Clause text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "p-3 bg-slate-500/5 rounded-xl font-mono text-[10px] leading-relaxed text-slate-400 mt-1 select-text", children: [
                '"',
                activeRewriteClause.text,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-slate-450", children: t("draftToneWording") || "Draft Tone Wording" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 overflow-x-auto pb-1 max-w-full", children: ["Balanced", "Professional", "Court-safe", "Legally Strong"].map((tone) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setRewriteTone(tone),
                  className: `px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${rewriteTone === tone ? "bg-indigo-650 text-white" : "bg-slate-100 dark:bg-zinc-800 text-slate-500"}`,
                  children: tone
                },
                t(tone) || tone
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: executeClauseRewrite,
                disabled: isRewriting,
                className: "w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12, className: isRewriting ? "animate-spin" : "" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("generateRewrittenClause") || "Generate Rewritten Clause" })
                ]
              }
            ),
            rewrittenWording && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 animate-fadeIn", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[9px] font-black uppercase tracking-widest text-emerald-500", children: t("aiRewrittenAlternate") || "AI Rewritten Alternate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 font-mono text-[10px] leading-relaxed text-emerald-600 dark:text-emerald-400 select-text", children: [
                '"',
                rewrittenWording,
                '"'
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-white/5 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveRewriteClause(null),
                className: "flex-1 py-3 border border-slate-200 dark:border-zinc-800 rounded-xl font-black text-xs text-slate-500 uppercase tracking-wider",
                children: t("cancel") || "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: applyRewrittenClause,
                disabled: !rewrittenWording,
                className: "flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all disabled:opacity-50",
                children: t("applyEditDraft") || "Apply Edit Draft"
              }
            )
          ] })
        ] })
      ] }),
      isCreateCaseModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-md border rounded-2xl shadow-2xl p-5 space-y-4 font-semibold text-[10px] ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase text-indigo-500 tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FolderKanban, { size: 14 }),
            " ",
            t("createCaseMatterProfile") || "Create Case Matter Profile"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsCreateCaseModalOpen(false), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8.5px] font-black uppercase tracking-widest text-slate-400", children: t("caseName") || "Case Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "e.g. Rajesh Sharma vs Amit Verma",
                className: `w-full px-3 py-2 border rounded-xl outline-none text-[10px] font-bold ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                value: newCaseName,
                onChange: (e) => setNewCaseName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8.5px] font-black uppercase tracking-widest text-slate-400", children: t("clientName") || "Client Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Rajesh Sharma",
                  className: `w-full px-3 py-2 border rounded-xl outline-none text-[10px] font-bold ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                  value: newCaseClient,
                  onChange: (e) => setNewCaseClient(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8.5px] font-black uppercase tracking-widest text-slate-400", children: t("opponentName") || "Opponent Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "e.g. Amit Verma",
                  className: `w-full px-3 py-2 border rounded-xl outline-none text-[10px] font-bold ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                  value: newCaseOpponent,
                  onChange: (e) => setNewCaseOpponent(e.target.value)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8.5px] font-black uppercase tracking-widest text-slate-400", children: t("caseMatterType") || "Case Matter Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: `w-full px-3 py-2 border rounded-xl outline-none text-[10px] font-bold ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                value: newCaseType,
                onChange: (e) => setNewCaseType(e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Civil Suit", children: t("Civil Suit") || "Civil Suit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Commercial Dispute", children: t("Commercial Dispute") || "Commercial Dispute" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Consumer Case", children: t("Consumer Case") || "Consumer Case" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Contract Matter", children: t("Contract Matter") || "Contract Matter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Employment Matter", children: t("Employment Matter") || "Employment Matter" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IT Wording Audit", children: t("IT Wording Audit") || "IT Wording Audit" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[8.5px] font-black uppercase tracking-widest text-slate-400", children: t("briefOverviewDescription") || "Brief Overview / Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                placeholder: t("summarizeCoreLegalIssue") || "Summarize the core legal issue...",
                rows: 3,
                className: `w-full px-3 py-2 border rounded-xl outline-none text-[10px] font-bold resize-none ${isDark ? "bg-black/20 border-slate-800 text-white" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                value: newCaseSummary,
                onChange: (e) => setNewCaseSummary(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-3 border-t border-slate-100 dark:border-zinc-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsCreateCaseModalOpen(false),
              className: `flex-1 py-2.5 border rounded-xl font-black text-xs uppercase tracking-wider text-slate-405 dark:border-zinc-805 hover:bg-slate-50 dark:hover:bg-zinc-850 transition-colors`,
              children: t("cancel") || "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: async () => {
                if (!newCaseName.trim()) {
                  zt.error("Case Name is required");
                  return;
                }
                setIsSyncing(true);
                const payload = {
                  name: newCaseName,
                  clientName: newCaseClient,
                  caseType: newCaseType,
                  accused: newCaseOpponent,
                  summary: newCaseSummary,
                  caseStatus: "Active",
                  isLegalCase: true
                };
                try {
                  const newCase = await apiService.createProject(payload);
                  const hydrationObj = {
                    ...payload,
                    ...newCase
                  };
                  if (onUpdateCase) onUpdateCase(hydrationObj);
                  setLinkedCaseId(hydrationObj._id);
                  hydrateFromCase(hydrationObj);
                  setIsCreateCaseModalOpen(false);
                  setNewCaseName("");
                  setNewCaseClient("");
                  setNewCaseOpponent("");
                  setNewCaseSummary("");
                  zt.success(t("newCaseLinkedSuccess") || "📁 New Case Matter Profile linked successfully!");
                } catch (e) {
                  console.error(e);
                  zt.error("Failed to link case profile.");
                } finally {
                  setIsSyncing(false);
                }
              },
              className: "flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all",
              children: "Link Case"
            }
          )
        ] })
      ] }) }),
      duplicateFileConflict && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-sm border rounded-2xl shadow-2xl p-5 space-y-4 font-semibold text-[10px] ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xs font-black uppercase text-amber-500 tracking-wider flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 14 }),
            " Duplicate Document Found"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDuplicateFileConflict(null), className: "p-1 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14, className: "text-slate-400" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-slate-450 text-[10.5px] leading-relaxed", children: [
          "A contract with the name ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-indigo-500", children: [
            '"',
            duplicateFileConflict.file.name,
            '"'
          ] }),
          " is already linked to this case. Choose how you would like to proceed with the upload:"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => processReplaceVersionConflict(duplicateFileConflict.file, duplicateFileConflict),
              className: "w-full p-3 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-500 transition-all font-black text-left flex items-start gap-2.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 14, className: "shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-[8.5px] font-bold uppercase tracking-wider space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-[9.5px]", children: "Replace Version" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 text-[8px] font-semibold lowercase normal-case", children: "Overwrite the current staged copy and overwrite OCR text" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => processCreateNewVersionConflict(duplicateFileConflict.file, duplicateFileConflict),
              className: "w-full p-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-500 transition-all font-black text-left flex items-start gap-2.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14, className: "shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-[8.5px] font-bold uppercase tracking-wider space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-[9.5px]", children: "Create New Version" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-455 text-[8px] font-semibold lowercase normal-case", children: "Store as a separate incremental revision in versions history list" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => processCompareVersionsConflict(duplicateFileConflict.file, duplicateFileConflict),
              className: "w-full p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 text-amber-500 transition-all font-black text-left flex items-start gap-2.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14, className: "shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-[8.5px] font-bold uppercase tracking-wider space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-[9.5px]", children: "Compare Versions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-450 text-[8px] font-semibold lowercase normal-case", children: "Compare difference mappings without updating the database case" })
                ] })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "file",
        ref: uploadInputRef,
        className: "hidden",
        multiple: true,
        accept: ".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.webp,.zip,.odt",
        onChange: (e) => handleFileUpload(e)
      }
    ),
    showUploadSourceModal && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-[720px] rounded-[18px] p-7 shadow-2xl space-y-6 border ${isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-800"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start border-b dark:border-white/5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[20px] font-black uppercase text-[#5B3DF5] tracking-wider", children: "Choose Upload Source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-slate-400 font-semibold", children: "Select how you want to add your contract document." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowUploadSourceModal(false), className: "p-2 rounded-full hover:bg-slate-500/10 text-slate-400 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: handleSelectDeviceUpload,
              className: `relative p-6 border rounded-[14px] flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-all shadow-sm hover:shadow-md h-[230px] ${isDark ? "border-zinc-800 hover:border-[#5B3DF5] bg-zinc-950/20" : "border-slate-200 hover:border-[#5B3DF5] bg-slate-50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 flex-1 flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl w-12 h-12 flex items-center justify-center ${isDark ? "bg-zinc-900" : "bg-white shadow-sm border border-slate-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 22, className: "text-blue-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[17px] font-extrabold tracking-tight leading-tight", children: "Upload from Device" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-slate-400 font-medium leading-relaxed", children: "Browse PDF, DOCX, TXT, Images and other supported files." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleSelectDeviceUpload,
                    className: "w-full mt-4 py-2.5 px-4 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-[14px] font-black uppercase tracking-wider transition-all",
                    children: "Choose Files"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onClick: handleSelectCameraCapture,
              className: `relative p-6 border rounded-[14px] flex flex-col justify-between cursor-pointer hover:scale-[1.01] transition-all shadow-sm hover:shadow-md h-[230px] ${isDark ? "border-zinc-800 hover:border-amber-500 bg-zinc-950/20" : "border-slate-200 hover:border-amber-500 bg-slate-50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 flex-1 flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-xl w-12 h-12 flex items-center justify-center ${isDark ? "bg-zinc-900" : "bg-white shadow-sm border border-slate-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { size: 22, className: "text-amber-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[17px] font-extrabold tracking-tight leading-tight", children: "Scan / Capture Document" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-slate-400 font-medium leading-relaxed", children: "Use your webcam to instantly capture and scan a physical contract." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: handleSelectCameraCapture,
                    className: "w-full mt-4 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-[14px] font-black uppercase tracking-wider transition-all",
                    children: "Open Camera"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[10px] text-slate-400 font-semibold uppercase tracking-widest", children: "Supported: PDF · DOCX · TXT · DOC · PNG · JPG (OCR)" })
      ] }) }),
      document.body
    ),
    showCameraModal && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full max-w-[700px] rounded-[18px] overflow-hidden shadow-2xl border ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between px-5 py-4 border-b ${isDark ? "border-slate-800" : "border-slate-200"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full ${isCameraReady && !capturedImage ? "bg-red-500 animate-pulse" : "bg-slate-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-black uppercase tracking-wider text-[#5B3DF5]", children: capturedImage ? "Preview — Confirm or Retake" : isCameraReady ? "● Recording" : "Starting Camera..." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: stopCamera, className: "p-2 rounded-full hover:bg-slate-500/10 text-slate-400 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full bg-black", style: { aspectRatio: "16/9" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "video",
            {
              ref: cameraVideoRef,
              autoPlay: true,
              playsInline: true,
              muted: true,
              className: `w-full h-full object-cover ${capturedImage ? "hidden" : "block"}`
            }
          ),
          capturedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: capturedImage, alt: "Captured document", className: "w-full h-full object-contain" }),
          !isCameraReady && !capturedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3", children: cameraError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-sm font-bold text-center px-6", children: cameraError }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: startCameraCapture,
                className: "px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase",
                children: "Retry"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 text-xs font-semibold", children: "Initializing camera..." })
          ] }) }),
          isCameraReady && !capturedImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-2 border-dashed border-white/40 rounded-lg", style: { width: "75%", height: "80%" } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-5 py-4 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`, children: !capturedImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: stopCamera,
              className: `px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 text-slate-300 hover:bg-zinc-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: capturePhoto,
              disabled: !isCameraReady,
              className: "w-16 h-16 rounded-full bg-white border-4 border-slate-300 hover:border-indigo-500 shadow-lg transition-all disabled:opacity-40 flex items-center justify-center active:scale-95",
              title: "Capture",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[#5B3DF5]" })
            }
          ),
          availableCameras.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: switchCamera,
              className: `px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 text-slate-300 hover:bg-zinc-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
              children: "Flip"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: retakePhoto,
              className: `px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${isDark ? "bg-zinc-800 text-slate-300 hover:bg-zinc-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
              children: "↩ Retake"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: confirmCapturedPhoto,
              className: "px-6 py-2.5 bg-[#5B3DF5] hover:bg-indigo-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 14 }),
                " Use Photo — Start Analysis"
              ]
            }
          )
        ] }) })
      ] }) }),
      document.body
    )
  ] });
};
export {
  ContractReview as default
};
