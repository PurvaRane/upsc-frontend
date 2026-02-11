import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { notifications } from "../../data/dashboardData";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  ClipboardList,
  FileCheck,
  CalendarDays,
  ListTodo,
  BarChart3,
  UserCircle,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  X,
  Landmark,
} from "lucide-react";

const sidebarLinks = [
  { to: "/dashboard/student", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/dashboard/student/notes", icon: BookOpen, label: "Notes" },
  { to: "/dashboard/student/videos", icon: Video, label: "Videos" },
  { to: "/dashboard/student/assignments", icon: ClipboardList, label: "Assignments" },
  { to: "/dashboard/student/mock-tests", icon: FileCheck, label: "Mock Tests" },
  { to: "/dashboard/student/planner", icon: ListTodo, label: "Planner" },
  { to: "/dashboard/student/calendar", icon: CalendarDays, label: "Calendar" },
  { to: "/dashboard/student/analytics", icon: BarChart3, label: "Analytics" },
  { to: "/dashboard/student/profile", icon: UserCircle, label: "Profile" },
];

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-5 border-b border-slate-200 shrink-0">
          <Landmark className="text-slate-900 shrink-0" size={22} />
          <span className="font-bold text-base text-slate-900 tracking-tight font-serif uppercase truncate">
            MPSC–UPSC
          </span>
          <button
            className="ml-auto lg:hidden text-slate-400 hover:text-slate-800 shrink-0"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-all ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-slate-200 shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <button
              className="lg:hidden text-slate-600 hover:text-slate-900 shrink-0"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            <div className="hidden sm:block min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">
                Welcome back
              </p>
              <p className="text-sm font-semibold text-slate-800 leading-none truncate">
                {user?.email || "Student"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => {
                  setNotifOpen(!notifOpen);
                  setProfileOpen(false);
                }}
                className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-sm transition-all"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notifOpen && (
                <div className="absolute right-0 top-12 w-72 sm:w-80 bg-white border border-slate-200 shadow-lg rounded-sm z-50">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Notifications
                    </p>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${
                          !n.read ? "bg-amber-50/30" : ""
                        }`}
                      >
                        <p className="text-sm text-slate-800 leading-snug">{n.text}</p>
                        <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => {
                  setProfileOpen(!profileOpen);
                  setNotifOpen(false);
                }}
                className="flex items-center gap-2 px-2 sm:px-3 py-1.5 hover:bg-slate-50 rounded-sm transition-all"
              >
                <div className="w-8 h-8 bg-slate-900 text-white rounded-sm flex items-center justify-center text-xs font-bold shrink-0">
                  PR
                </div>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform hidden sm:block ${profileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white border border-slate-200 shadow-lg rounded-sm z-50">
                  <NavLink
                    to="/dashboard/student/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    My Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-slate-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
