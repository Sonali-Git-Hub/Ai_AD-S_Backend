import { v as useLanguage, r as reactExports, a as apiService, j as jsxRuntimeExports, ae as Search, m as motion, S as Settings, P as Check, T as Trash2, D as DeleteConfirmModal, z as zt, cW as API, q as getUserData } from "./index-BpSYSyeq.js";
import { L as LoadingSpinner } from "./AdminDashboard-CeGtD70A.js";
import { B as Ban } from "./ban-BpyQl-tj.js";
import "./chart-pie-B2rjBWY8.js";
const UsersTab = () => {
  const { t } = useLanguage();
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [upgradeData, setUpgradeData] = reactExports.useState({ planName: "", expiryDate: "" });
  const [deleteModal, setDeleteModal] = reactExports.useState({ isOpen: false, userId: null });
  reactExports.useEffect(() => {
    fetchUsers();
    fetchPlans();
  }, []);
  const [availablePlans, setAvailablePlans] = reactExports.useState([]);
  const fetchPlans = async () => {
    try {
      const data = await apiService.getPlans();
      setAvailablePlans(Array.isArray(data) ? data : data.plans || []);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
    }
  };
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiService.getAllUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleBlockToggle = async (userId, currentStatus) => {
    try {
      await apiService.toggleBlockUser(userId, !currentStatus);
      zt.success(currentStatus ? "User unblocked" : "User blocked");
      fetchUsers();
    } catch (err) {
      zt.error("Failed to update user status");
    }
  };
  const handleDeleteUser = async () => {
    if (!deleteModal.userId) return;
    try {
      await apiService.deleteUser(deleteModal.userId);
      zt.success("User deleted");
      setDeleteModal({ isOpen: false, userId: null });
      fetchUsers();
    } catch (err) {
      zt.error("Failed to delete user");
      setDeleteModal({ isOpen: false, userId: null });
    }
  };
  const [isUpgrading, setIsUpgrading] = reactExports.useState(null);
  const handleManualUpgrade = async (userId) => {
    var _a;
    if (!upgradeData.planName) {
      zt.error("Please select a plan");
      return;
    }
    setIsUpgrading(userId);
    try {
      const response = await fetch(`${API}/admin/manual-upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${(_a = getUserData()) == null ? void 0 : _a.token}`
        },
        body: JSON.stringify({ userId, ...upgradeData })
      });
      const data = await response.json();
      if (data.success) {
        zt.success("Plan upgraded successfully");
        setUpgradeData({ planName: "", expiryDate: "" });
        fetchUsers();
      } else {
        zt.error(data.message || "Failed to upgrade plan");
      }
    } catch (err) {
      console.error("Upgrade error:", err);
      zt.error("Failed to upgrade plan");
    } finally {
      setIsUpgrading(null);
    }
  };
  const filteredUsers = users.filter(
    (u) => {
      var _a, _b;
      return ((_a = u.name) == null ? void 0 : _a.toLowerCase().includes(searchQuery.toLowerCase())) || ((_b = u.email) == null ? void 0 : _b.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  );
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-subtext" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: t("searchUsersPlaceholder"),
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: "w-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-primary/50 transition-all placeholder:text-subtext/50 text-maintext"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      filteredUsers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-subtext py-8 text-sm", children: t("noUsersFound") }),
      filteredUsers.map((user) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            layout: true,
            className: "bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl p-4 hover:border-primary/20 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start sm:items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10 shrink-0", children: user.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: user.avatar, alt: user.name, className: "w-full h-full object-cover", onError: (e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/account.png";
                  } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: ((_b = (_a = user.name) == null ? void 0 : _a.charAt(0)) == null ? void 0 : _b.toUpperCase()) || "U" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-maintext text-sm truncate", children: user.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-subtext truncate", children: user.email })
                  ] }),
                  user.isBlocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-md bg-red-500/10 text-red-500 text-[10px] font-bold uppercase", children: t("block") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${((_c = user.planName) == null ? void 0 : _c.toLowerCase().includes("pro")) ? "bg-amber-500/10 text-amber-500" : ((_d = user.planName) == null ? void 0 : _d.toLowerCase().includes("founder")) ? "bg-purple-500/10 text-purple-500" : "bg-primary/10 text-primary"}`, children: user.planName || user.role || "Free Plan" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setSelectedUser(selectedUser === (user._id || user.id) ? null : user._id || user.id),
                      className: "p-2 rounded-lg hover:bg-primary/10 text-subtext hover:text-primary transition-all",
                      title: t("manage"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleBlockToggle(user._id || user.id, user.isBlocked),
                      className: `p-2 rounded-lg transition-all ${user.isBlocked ? "hover:bg-green-500/10 text-green-500" : "hover:bg-amber-500/10 text-amber-500"}`,
                      title: user.isBlocked ? t("unblock") : t("block"),
                      children: user.isBlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { className: "w-4 h-4" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setDeleteModal({ isOpen: true, userId: user._id || user.id }),
                      className: "p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-all",
                      title: t("delete"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ] })
              ] }),
              selectedUser === (user._id || user.id) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden border-t border-white/10 mt-3 pt-3",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        className: "flex-1 min-w-[120px] bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.planName,
                        onChange: (e) => setUpgradeData({ ...upgradeData, planName: e.target.value }),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("selectPlan") }),
                          availablePlans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.planName, children: p.planName }, p._id))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        className: "flex-1 min-w-[120px] bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-2 py-1.5 text-xs text-maintext",
                        value: upgradeData.expiryDate,
                        onChange: (e) => setUpgradeData({ ...upgradeData, expiryDate: e.target.value })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => handleManualUpgrade(user._id || user.id),
                        disabled: isUpgrading === (user._id || user.id),
                        className: "px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:opacity-90 transition-all whitespace-nowrap",
                        children: isUpgrading === (user._id || user.id) ? t("loading") : t("upgrade")
                      }
                    )
                  ] })
                }
              )
            ]
          },
          user._id || user.id
        );
      })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DeleteConfirmModal,
      {
        isOpen: deleteModal.isOpen,
        onClose: () => setDeleteModal({ isOpen: false, userId: null }),
        onConfirm: handleDeleteUser,
        title: t("deleteUserTitle"),
        description: t("deleteUserDesc")
      }
    )
  ] });
};
export {
  UsersTab as default
};
