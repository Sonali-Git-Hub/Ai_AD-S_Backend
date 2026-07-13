import { v as useLanguage, r as reactExports, a as apiService, z as zt, j as jsxRuntimeExports, R as RefreshCw, cX as FileUp, bW as Save, T as Trash2, bR as Plus, cr as CirclePlus } from "./index-MzjM3Af-.js";
import { L as LoadingSpinner, a as SectionCard } from "./AdminDashboard-BoGLjgtK.js";
import "./chart-pie-UzKeko7R.js";
const LegalPagesTab = () => {
  const { t } = useLanguage();
  const [selectedPage, setSelectedPage] = reactExports.useState("cookie-policy");
  const [pageData, setPageData] = reactExports.useState({ sections: [] });
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [isParsing, setIsParsing] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPage();
  }, [selectedPage]);
  const fetchPage = async () => {
    setLoading(true);
    try {
      const data = await apiService.getLegalPage(selectedPage);
      if (data && data.sections && data.sections.length > 0) {
        setPageData(data);
      } else {
        setPageData({
          sections: [],
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
    } catch (err) {
      zt.error("Failed to fetch legal page data");
      setPageData({ sections: [] });
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateLegalPage(selectedPage, pageData.sections);
      zt.success("Legal page updated successfully");
    } catch (err) {
      zt.error("Failed to update legal page");
    } finally {
      setSaving(false);
    }
  };
  const addSection = () => {
    setPageData((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "New Section", content: [{ subtitle: "New Subtitle", text: "Section content here..." }] }]
    }));
  };
  const removeSection = (index) => {
    setPageData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index)
    }));
  };
  const updateSection = (index, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[index] = { ...newSections[index], [field]: value };
      return { ...prev, sections: newSections };
    });
  };
  const addContent = (sectionIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: [...newSections[sectionIndex].content, { subtitle: "New Subtitle", text: "Content text here..." }]
      };
      return { ...prev, sections: newSections };
    });
  };
  const removeContent = (sectionIndex, contentIndex) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        content: newSections[sectionIndex].content.filter((_, i) => i !== contentIndex)
      };
      return { ...prev, sections: newSections };
    });
  };
  const updateContent = (sectionIndex, contentIndex, field, value) => {
    setPageData((prev) => {
      const newSections = [...prev.sections];
      const newContent = [...newSections[sectionIndex].content];
      newContent[contentIndex] = { ...newContent[contentIndex], [field]: value };
      newSections[sectionIndex] = { ...newSections[sectionIndex], content: newContent };
      return { ...prev, sections: newSections };
    });
  };
  const handleDocUpload = async (e) => {
    var _a, _b, _c, _d;
    const file = e.target.files[0];
    if (!file) return;
    setIsParsing(true);
    try {
      const res = await apiService.parseLegalDoc(file);
      if (res.success && res.sections && res.sections.length > 0) {
        setPageData((prev) => ({ ...prev, sections: res.sections }));
        zt.success(`Successfully parsed ${res.sections.length} sections from ${file.name}!`);
      } else {
        zt.error("Could not detect sections in the document.");
      }
    } catch (err) {
      console.error("Doc upload error:", err);
      const errMsg = ((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = err.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) || err.message;
      zt.error(errMsg || "Failed to parse document. Ensure it is a valid PDF, DOCX, or TXT file.");
    } finally {
      setIsParsing(false);
      e.target.value = "";
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 bg-white/20 dark:bg-white/5 rounded-xl p-1 border border-white/10 overflow-x-auto admin-horizontal-scrollbar", children: ["cookie-policy", "terms-of-service", "privacy-policy"].map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSelectedPage(type),
          className: `px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${selectedPage === type ? "bg-primary text-white shadow-md" : "text-subtext hover:bg-white/10 hover:text-maintext"}`,
          children: type.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        },
        type
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-maintext rounded-xl font-bold text-sm transition-all border border-white/20 cursor-pointer ${isParsing ? "opacity-50 cursor-not-allowed" : ""}`, children: [
          isParsing ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { className: "w-4 h-4" }),
          isParsing ? "Parsing..." : "Upload Document",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              className: "hidden",
              accept: ".txt,.md,.pdf,.docx",
              onChange: handleDocUpload,
              disabled: isParsing
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleSave,
            disabled: saving || isParsing,
            className: "flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50",
            children: [
              saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Save Changes"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionCard,
      {
        title: `${selectedPage.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Content Management`,
        action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: addSection,
            className: "flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold text-maintext border border-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
              "Add Section"
            ]
          }
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          pageData.sections.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border-2 border-dashed border-white/10 rounded-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm mb-4", children: "No content found. Please create the first section to start building this page." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: addSection,
                className: "px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-bold hover:bg-primary/20 transition-all",
                children: "Create First Section"
              }
            )
          ] }),
          pageData.sections.map((section, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => removeSection(sIdx),
                className: "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-all shadow-lg shadow-red-500/30",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary", children: "Section Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: section.title,
                  onChange: (e) => updateSection(sIdx, "title", e.target.value),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-bold outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 ml-6 pl-6 border-l-2 border-primary/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] font-black uppercase tracking-widest text-primary/50", children: "Section Content Units" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => addContent(sIdx),
                    className: "flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] bg-primary text-white hover:opacity-90 font-bold transition-all shadow-lg shadow-primary/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
                      " Add Content Unit"
                    ]
                  }
                )
              ] }),
              section.content.map((item, cIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 dark:bg-black/40 rounded-2xl p-6 space-y-4 relative group border border-white/5 hover:border-primary/30 transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => removeContent(sIdx, cIdx),
                    className: "absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        value: item.subtitle,
                        onChange: (e) => updateContent(sIdx, cIdx, "subtitle", e.target.value),
                        placeholder: "Subtitle (e.g. 1.1 Eligibility)",
                        className: `w-full bg-transparent border-none p-0 text-sm font-bold outline-none text-maintext placeholder:text-subtext/20 ${["General Terms", "Policy Overview", "Introduction", "N/A", ""].includes(item.subtitle) ? "opacity-20 italic font-normal" : ""}`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      value: item.text,
                      onChange: (e) => updateContent(sIdx, cIdx, "text", e.target.value),
                      rows: 3,
                      className: "w-full bg-transparent border-none p-0 text-xs outline-none text-subtext resize-none placeholder:text-subtext/30"
                    }
                  )
                ] })
              ] }, cIdx))
            ] })
          ] }, sIdx))
        ] })
      }
    )
  ] });
};
export {
  LegalPagesTab as default
};
