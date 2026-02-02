import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import "./App.css";


const StudentDashboard = () => (
  <div className="p-20 bg-[#fdfbf7] min-h-screen">
    <div className="max-w-4xl mx-auto grounded-card">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      <p className="text-slate-600">Welcome to your academic portal. Your preparation starts here.</p>
    </div>
  </div>
);

const TeacherDashboard = () => (
  <div className="p-20 bg-[#fdfbf7] min-h-screen">
    <div className="max-w-4xl mx-auto grounded-card">
      <h1 className="text-3xl font-bold mb-4">Faculty Workspace</h1>
      <p className="text-slate-600">Welcome to the educator portal. Manage your materials and students efficiently.</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Common Auth */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/dashboard/student" element={<StudentDashboard />} />
          </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
