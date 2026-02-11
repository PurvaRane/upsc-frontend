import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardHome from "./components/dashboard/DashboardHome";
import StudyMaterial from "./components/dashboard/StudyMaterial";
import VideoLectures from "./components/dashboard/VideoLectures";
import Assignments from "./components/dashboard/Assignments";
import MockTests from "./components/dashboard/MockTests";
import DailyPlanner from "./components/dashboard/DailyPlanner";
import CalendarView from "./components/dashboard/CalendarView";
import PerformanceAnalytics from "./components/dashboard/PerformanceAnalytics";
import Profile from "./components/dashboard/Profile";
import ConnectTeachers from "./components/dashboard/ConnectTeachers";
import "./App.css";


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

          {/* Student Dashboard Routes */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/dashboard/student" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="notes" element={<StudyMaterial />} />
              <Route path="videos" element={<VideoLectures />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="mock-tests" element={<MockTests />} />
              <Route path="planner" element={<DailyPlanner />} />
              <Route path="calendar" element={<CalendarView />} />
              <Route path="analytics" element={<PerformanceAnalytics />} />
              <Route path="profile" element={<Profile />} />
              <Route path="teachers" element={<ConnectTeachers />} />
            </Route>
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
