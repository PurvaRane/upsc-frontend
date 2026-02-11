import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { User, Mail, Lock, GraduationCap, Briefcase, ChevronRight, Check, Phone, MapPin, Building, Clock, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [role, setRole] = useState(null); // null, 'student', 'teacher'
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    district: "",
    taluka: "",
    city: "",
    organization: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (role === 'teacher') {
      setIsSuccess(true);
    } else {
      navigate("/login");
    }
  };

  if (isSuccess) {
    return (
      <>
        <Navbar />
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-[#fdfbf7]">
          <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm p-10 mt-16 text-center">
            <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-[#d97706] mx-auto mb-6">
              <Clock size={40} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Registration Received</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thank you for applying to the MPSC–UPSC Portal faculty. Your account is currently <strong>waiting for admin approval</strong>.
            </p>
            <p className="text-sm text-slate-500 mb-10">
              We will notify you via email once your credentials have been verified.
            </p>
            <button 
              onClick={() => navigate("/login")}
              className="btn-primary w-full"
            >
              Return to Login
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 bg-[#fdfbf7]">
        <div className="w-full max-w-3xl bg-white border border-slate-200 shadow-sm p-4 sm:p-10 mt-16 relative">
          
          <div className="absolute -top-12 left-0 right-0 flex justify-center sm:justify-end px-2">
            <Link 
              to="/login" 
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition-colors"
            >
              Already have an account? <span className="text-amber-600 underline decoration-2 underline-offset-4">Sign In</span>
            </Link>
          </div>

          {!role ? (
            <div className="max-w-md mx-auto text-center py-10">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-600 mb-10">Select your role to continue with the registration.</p>
              
              <div className="grid gap-4">
                <button
                  onClick={() => setRole("student")}
                  className="group flex items-center justify-between p-6 border border-slate-200 rounded-sm hover:border-slate-800 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-sm flex items-center justify-center text-[#d97706]">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Student</h3>
                      <p className="text-xs text-slate-500">Access courses and exam prep.</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-800 transition-colors" />
                </button>

                <button
                  onClick={() => setRole("teacher")}
                  className="group flex items-center justify-between p-6 border border-slate-200 rounded-sm hover:border-slate-800 hover:bg-slate-50 transition-all text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-sm flex items-center justify-center text-[#d97706]">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Teacher / Mentor</h3>
                      <p className="text-xs text-slate-500">Share knowledge and guide students.</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-800 transition-colors" />
                </button>
              </div>

              <p className="mt-10 text-sm text-slate-500">
                Joining as a student? <button onClick={() => setRole("student")} className="text-slate-800 font-bold hover:underline">Click here</button>
              </p>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 whitespace-nowrap">
                    {role === "student" ? "Student Registration" : "Teacher Registration"}
                  </h1>
                  <p className="text-sm text-slate-600">Join the MPSC–UPSC academic hub.</p>
                </div>
                <button 
                  onClick={() => setRole(null)}
                  className="text-xs font-bold text-slate-400 hover:text-slate-800 uppercase tracking-widest border-b border-transparent hover:border-slate-800 ml-4"
                >
                  Change Role
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-8">
                {/* 1. Identity Section */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97706]">1. Identity & Credentials</h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">First Name</label>
                      <div className="relative">
                        {formData.firstName === "" && (
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input name="firstName" value={formData.firstName} onChange={handleChange} className={`input ${formData.firstName === "" ? "pl-10" : "pl-4"}`} required />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Last Name</label>
                      <div className="relative">
                        {formData.lastName === "" && (
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input name="lastName" value={formData.lastName} onChange={handleChange} className={`input ${formData.lastName === "" ? "pl-10" : "pl-4"}`} required />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <div className="relative">
                        {formData.email === "" && (
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input name="email" value={formData.email} onChange={handleChange} className={`input ${formData.email === "" ? "pl-10" : "pl-4"}`} type="email" required />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mobile Number</label>
                      <div className="relative">
                        {formData.mobile === "" && (
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input name="mobile" value={formData.mobile} onChange={handleChange} className={`input ${formData.mobile === "" ? "pl-10" : "pl-4"}`} type="tel" required />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Password</label>
                      <div className="relative">
                        {formData.password === "" && (
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input 
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className={`input ${formData.password === "" ? "pl-10" : "pl-4"} pr-10`} 
                          type={showPassword ? "text" : "password"} 
                          required 
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Confirm Password</label>
                      <div className="relative">
                        {formData.confirmPassword === "" && (
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                        )}
                        <input 
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className={`input ${formData.confirmPassword === "" ? "pl-10" : "pl-4"} pr-10`} 
                          type={showConfirmPassword ? "text" : "password"} 
                          required 
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Role Specific Section */}
                {role === "student" ? (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97706]">2. Exam Information</h3>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Exam Type</label>
                        <select className="input appearance-none bg-white">
                          <option>MPSC</option>
                          <option>UPSC</option>
                          <option>Both</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Attempt Stage</label>
                        <select className="input appearance-none bg-white">
                          <option>Beginner</option>
                          <option>Appearing this year</option>
                          <option>Repeater</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d97706]">2. Professional & Location Information</h3>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">District</label>
                        <div className="relative">
                          {formData.district === "" && (
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                          )}
                          <input name="district" value={formData.district} onChange={handleChange} className={`input ${formData.district === "" ? "pl-10" : "pl-4"}`} required />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Taluka</label>
                        <div className="relative">
                          {formData.taluka === "" && (
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                          )}
                          <input name="taluka" value={formData.taluka} onChange={handleChange} className={`input ${formData.taluka === "" ? "pl-10" : "pl-4"}`} required />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">City</label>
                        <div className="relative">
                          {formData.city === "" && (
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                          )}
                          <input name="city" value={formData.city} onChange={handleChange} className={`input ${formData.city === "" ? "pl-10" : "pl-4"}`} required />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Organization</label>
                        <div className="relative">
                          {formData.organization === "" && (
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={16} />
                          )}
                          <input name="organization" value={formData.organization} onChange={handleChange} className={`input ${formData.organization === "" ? "pl-10" : "pl-4"}`} required />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Consent Section */}
                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <div className="flex items-start gap-3">
                    <div className="relative flex items-center mt-0.5">
                      <input type="checkbox" required id="terms" className="peer appearance-none w-5 h-5 border border-slate-300 rounded-sm checked:bg-slate-800 checked:border-slate-800 transition-all cursor-pointer" />
                      <Check className="absolute left-0.5 pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={16} />
                    </div>
                    <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                      I agree to the <span className="text-slate-800 font-bold underline">Terms & Conditions</span> and understand that my account is subject to verification.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-sm tracking-widest uppercase">
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
