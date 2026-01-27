import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LogOut, User, Landmark } from "lucide-react";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <Landmark className="text-slate-900" size={24} />
        <span className="font-bold text-xl text-slate-900 tracking-tight font-serif uppercase">
          MPSC–UPSC Portal
        </span>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/contact" className="text-slate-500 hover:text-slate-900 font-bold uppercase tracking-widest text-[10px] transition-all">
          Contact Support
        </Link>
        
        {isAuthenticated ? (
          <div className="flex items-center gap-6 border-l pl-8 border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm border border-slate-200 flex items-center justify-center bg-slate-50">
                <User size={16} className="text-slate-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{user.role}</p>
                <p className="text-sm font-bold text-slate-800 leading-none">Dashboard</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="p-1 px-3 border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-100 transition-all text-xs font-bold uppercase"
              title="Logout"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link 
            to="/login" 
            className="btn-primary py-2 text-xs uppercase tracking-widest"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
