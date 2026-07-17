import { v as useLanguage, r as reactExports, a as apiService, j as jsxRuntimeExports, bR as Plus, A as AnimatePresence, m as motion, Q as Pen, T as Trash2, b as Clock, B as CreditCard, D as DeleteConfirmModal, z as zt } from "./index-DjJL8ne1.js";
import { L as LoadingSpinner } from "./AdminDashboard-CKddou_s.js";
import "./chart-pie-5enm9Zpo.js";
const formatFeatureString = (feature, plan) => {
  if (!feature || !plan) return feature;
  let result = feature;
  if (/total AI messages/i.test(result) || /total messages/i.test(result) || /AI messages/i.test(result)) {
    if (plan.chatLimit === -1 || plan.chatScope === "unlimited") {
      return "Unlimited AI Chat";
    } else {
      result = result.replace(/\d+/, plan.chatLimit ?? 100);
    }
  }
  if (/months validity/i.test(result) || /month validity/i.test(result) || /days validity/i.test(result)) {
    const months = Math.round((plan.validityDays || 90) / 30);
    result = result.replace(/\d+/, months);
  }
  if (/Images\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.imageLimit ?? 0);
  }
  if (/Carousel\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.carouselLimit ?? 0);
  }
  if (/Videos\/day/i.test(result)) {
    result = result.replace(/\d+/, plan.videoLimit ?? 0);
  }
  return result;
};
const PlansTab = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editingPlan, setEditingPlan] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    planId: "",
    planName: "",
    priceMonthly: "",
    priceYearly: "",
    validityDays: "",
    features: ""
  });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, planId: null });
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetchPlans();
  }, []);
  const fetchPlans = async () => {
    setLoading(true);
    try {
      const data = await apiService.getPlans();
      setPlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    setSaving(true);
    try {
      const body = {
        planId: form.planId,
        planName: form.planName,
        priceMonthly: Number(form.priceMonthly),
        priceYearly: Number(form.priceYearly),
        validityDays: Number(form.validityDays),
        features: form.features.split(",").map((f) => f.trim()).filter(Boolean)
      };
      let data;
      if (editingPlan) {
        data = await apiService.updatePlan(editingPlan._id, body);
      } else {
        data = await apiService.createPlan(body);
      }
      if (data.success) {
        zt.success(editingPlan ? "Plan updated" : "Plan created");
        resetForm();
        fetchPlans();
      } else {
        zt.error(data.message || "Failed");
      }
    } catch (err) {
      zt.error("Failed to save plan");
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async () => {
    if (!deleteModal.planId) return;
    try {
      await apiService.deletePlan(deleteModal.planId);
      zt.success("Plan deleted");
      setDeleteModal({ isOpen: false, planId: null });
      fetchPlans();
    } catch (err) {
      zt.error("Failed to delete plan");
      setDeleteModal({ isOpen: false, planId: null });
    }
  };
  const startEdit = (plan) => {
    var _a, _b, _c;
    setEditingPlan(plan);
    setForm({
      planId: plan.planId || "",
      planName: plan.planName || "",
      priceMonthly: ((_a = plan.priceMonthly) == null ? void 0 : _a.toString()) || "",
      priceYearly: ((_b = plan.priceYearly) == null ? void 0 : _b.toString()) || "",
      validityDays: ((_c = plan.validityDays) == null ? void 0 : _c.toString()) ?? "90",
      features: (plan.features || []).map((f) => formatFeatureString(f, plan)).join(", ")
    });
    setShowForm(true);
  };
  const resetForm = () => {
    setForm({
      planId: "",
      planName: "",
      priceMonthly: "",
      priceYearly: "",
      validityDays: "",
      features: ""
    });
    setEditingPlan(null);
    setShowForm(false);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          resetForm();
          setShowForm(!showForm);
        },
        className: "flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          " New Plan"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: showForm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-maintext", children: editingPlan ? "Edit Plan" : "Create New Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. starter-plan",
                  value: form.planId,
                  onChange: (e) => setForm((p) => ({ ...p, planId: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Plan Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. Starter",
                  value: form.planName,
                  onChange: (e) => setForm((p) => ({ ...p, planName: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Monthly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 499",
                  type: "number",
                  value: form.priceMonthly,
                  onChange: (e) => setForm((p) => ({ ...p, priceMonthly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Yearly Price (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 4990",
                  type: "number",
                  value: form.priceYearly,
                  onChange: (e) => setForm((p) => ({ ...p, priceYearly: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Validity (Days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  placeholder: "e.g. 30",
                  type: "number",
                  value: form.validityDays,
                  onChange: (e) => setForm((p) => ({ ...p, validityDays: e.target.value })),
                  className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext no-spinner"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold uppercase tracking-wider text-subtext", children: "Features List (Comma-separated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                placeholder: "e.g. Unlimited AI Chat, CashFlow Explorer, Web & Deep Search",
                value: form.features,
                onChange: (e) => setForm((p) => ({ ...p, features: e.target.value })),
                className: "w-full bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary/50 text-maintext"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetForm, className: "px-4 py-2 rounded-xl text-sm font-bold text-subtext hover:text-maintext hover:bg-white/20 transition-all", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, className: "px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20", children: editingPlan ? "Update" : "Create" })
          ] })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:border-primary/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-maintext", children: plan.planName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-black text-primary leading-none", children: [
                "₹",
                plan.priceMonthly,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-subtext font-normal ml-1", children: "/mo" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-subtext", children: [
                "Yearly: ₹",
                plan.priceYearly,
                " (₹",
                Math.round(plan.priceYearly / 12),
                "/mo)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startEdit(plan), className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDeleteModal({ isOpen: true, planId: plan._id }), className: "p-2 rounded-lg hover:bg-red-500/10 text-subtext hover:text-red-500 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-xs text-subtext border-t border-white/10 pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5 text-primary animate-pulse" }),
            "Validity: ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-maintext", children: [
              plan.validityDays,
              " days"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-[10px] opacity-70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3.5 h-3.5" }),
            "ID: ",
            plan.planId
          ] })
        ] })
      ] }, plan._id)),
      plans.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-subtext text-sm col-span-full text-center py-8", children: "No plans created yet" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, planId: null }),
        onConfirm: handleDelete,
        title: "Delete Plan?",
        description: "Are you sure you want to delete this plan? This action cannot be undone."
      }
    )
  ] });
};
export {
  PlansTab as default
};
