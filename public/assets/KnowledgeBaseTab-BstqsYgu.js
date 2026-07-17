const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/KnowledgeUpload-DoKghtKw.js","assets/index-DjJL8ne1.js","assets/index-aY25SibZ.css","assets/KnowledgeManagement-8F1LrwNX.js"])))=>i.map(i=>d[i]);
import { v as useLanguage, r as reactExports, j as jsxRuntimeExports, O as React, _ as __vitePreload, z as zt } from "./index-DjJL8ne1.js";
import { a as SectionCard } from "./AdminDashboard-CKddou_s.js";
import "./chart-pie-5enm9Zpo.js";
const KnowledgeUpload = React.lazy(() => __vitePreload(() => import("./KnowledgeUpload-DoKghtKw.js"), true ? __vite__mapDeps([0,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
const KnowledgeManagement = React.lazy(() => __vitePreload(() => import("./KnowledgeManagement-8F1LrwNX.js"), true ? __vite__mapDeps([3,1,2]) : void 0).catch(() => ({ default: () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-subtext", children: "AI Base Module not found." }) })));
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
