import { v as useLanguage, r as reactExports, j as jsxRuntimeExports, R as RefreshCw, bW as Save, a as apiService, z as zt } from "./index-BpSYSyeq.js";
import { L as LoadingSpinner, a as SectionCard } from "./AdminDashboard-CeGtD70A.js";
import "./chart-pie-B2rjBWY8.js";
const SettingsTab = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await apiService.getAdminSettings();
        setSettings(data);
      } catch (err) {
        console.error("Failed to fetch settings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);
  const handleSave = async () => {
    setSaving(true);
    try {
      await apiService.updateAdminSettings(settings);
      zt.success("Settings saved");
    } catch (err) {
      zt.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SectionCard,
    {
      title: "Admin Settings",
      action: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleSave,
          disabled: saving,
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50",
          children: [
            saving ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
            "Save"
          ]
        }
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Organization Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.organizationName) || "",
              onChange: (e) => setSettings((p) => ({ ...p, organizationName: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Default AI Model" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: (settings == null ? void 0 : settings.defaultModel) || "",
              onChange: (e) => setSettings((p) => ({ ...p, defaultModel: e.target.value })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Max Tokens Per User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: (settings == null ? void 0 : settings.maxTokensPerUser) || "",
              onChange: (e) => setSettings((p) => ({ ...p, maxTokensPerUser: Number(e.target.value) })),
              className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Allow Public Signup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSettings((p) => ({ ...p, allowPublicSignup: !p.allowPublicSignup })),
              className: `w-full py-3 rounded-xl font-bold text-sm transition-all border ${(settings == null ? void 0 : settings.allowPublicSignup) ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-red-500/10 border-red-500/30 text-red-500"}`,
              children: (settings == null ? void 0 : settings.allowPublicSignup) ? "Enabled" : "Disabled"
            }
          )
        ] })
      ] })
    }
  );
};
export {
  SettingsTab as default
};
