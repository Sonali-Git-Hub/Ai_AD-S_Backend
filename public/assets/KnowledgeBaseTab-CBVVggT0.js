const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KnowledgeUpload-BWEEy9ou.js","assets/index-BpSYSyeq.js","assets/index-CLXYdOrw.css","assets/KnowledgeManagement-DOn4AiY8.js"])))=>i.map(i=>d[i]);
import { v as useLanguage, r as reactExports, j as jsxRuntimeExports, O as React, _ as __vitePreload, z as zt } from "./index-BpSYSyeq.js";
import { a as SectionCard } from "./AdminDashboard-CeGtD70A.js";
import "./chart-pie-B2rjBWY8.js";
const KnowledgeUpload = React.lazy(() => __vitePreload(() => import("./KnowledgeUpload-BWEEy9ou.js"), true ? __vite__mapDeps([0,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const KnowledgeManagement = React.lazy(() => __vitePreload(() => import("./KnowledgeManagement-DOn4AiY8.js"), true ? __vite__mapDeps([3,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const KnowledgeBaseTab = () => {
  const { t } = useLanguage();
  const [refreshTrigger, setRefreshTrigger] = reactExports.useState(0);
  const handleUploadSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
    zt.success(t("uploadSuccessKnowledge"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" }) }), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: t("ingestNewKnowledge"),
        action: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-subtext font-medium", children: t("addFilesWebsitesRAG") }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeUpload, { onUploadSuccess: handleUploadSuccess })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { title: t("knowledgeAssetsManagement"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(KnowledgeManagement, {}, refreshTrigger) })
  ] }) });
};
export {
  KnowledgeBaseTab as default
};
