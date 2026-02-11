import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { Mail, ArrowLeft, Send } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    setIsSent(true);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-[#fdfbf7]">
        <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm p-4 sm:p-10 mt-16 relative">
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-800 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          {!isSent ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </label>

                  <div className="relative">
                    {email === "" && (
                      <Mail
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    )}

                    <input
                      className={`input ${email === "" ? "pl-12" : "pl-4"}`}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Check Your Email</h2>
              <p className="text-slate-500 text-sm mb-8">
                We've sent a password reset link to <span className="font-semibold text-slate-700">{email}</span>.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Didn't receive it? Try again
              </button>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link to="/login" className="text-sm text-slate-500 hover:text-slate-800 font-semibold">
              Return to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
