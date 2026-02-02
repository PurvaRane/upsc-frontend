import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import "./App.css";
import TeacherDashboard from "./pages/TeacherDashboard";

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
