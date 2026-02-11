import { Link } from "react-router-dom";
import {
  studentProfile,
  motivationalQuotes,
  subjects,
  recentMaterials,
  assignments,
  dailyTasks,
  mockTestScores,
} from "../../data/dashboardData";
import {
  BookOpen,
  ClipboardList,
  Video,
  BarChart3,
  CalendarDays,
  ArrowRight,
  Target,
  TrendingUp,
  CheckCircle2,
  FileText,
} from "lucide-react";

const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

const DashboardHome = () => {
  const pendingAssignments = assignments.filter((a) => a.status === "pending" || a.status === "overdue").length;
  const completedTasks = dailyTasks.filter((t) => t.completed).length;
  const latestScore = mockTestScores[mockTestScores.length - 1];

  return (
    <div className="space-y-6">
      {/* Welcome Hero */}
      <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              {studentProfile.examTarget}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Welcome, {studentProfile.name.split(" ")[0]}
            </h1>
            <p className="text-slate-500 text-sm italic leading-relaxed max-w-xl">
              "{quote}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
            {/* Progress circle */}
            <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 px-4 sm:px-5 py-3 sm:py-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
                <svg className="w-14 h-14 sm:w-16 sm:h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="4"
                    strokeDasharray={`${(studentProfile.syllabusCompleted / 100) * 175.9} 175.9`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-900">
                  {studentProfile.syllabusCompleted}%
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Syllabus</p>
                <p className="text-sm font-semibold text-slate-800">Completed</p>
              </div>
            </div>

            {/* Exam info */}
            <div className="flex items-center gap-4 bg-amber-50/50 border border-amber-100 px-4 sm:px-5 py-3 sm:py-4">
              <Target size={24} className="text-amber-600 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Target</p>
                <p className="text-sm font-semibold text-slate-800">{studentProfile.examTarget}</p>
                <p className="text-xs text-slate-500">{studentProfile.attempt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-indigo-50 flex items-center justify-center shrink-0">
              <BookOpen size={16} className="text-indigo-700" />
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Subjects</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{subjects.length}</p>
          <p className="text-xs text-slate-500 mt-1">Active courses</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-50 flex items-center justify-center shrink-0">
              <ClipboardList size={16} className="text-amber-600" />
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Pending</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{pendingAssignments}</p>
          <p className="text-xs text-slate-500 mt-1">Assignments due</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-green-50 flex items-center justify-center shrink-0">
              <CheckCircle2 size={16} className="text-green-600" />
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Today</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{completedTasks}/{dailyTasks.length}</p>
          <p className="text-xs text-slate-500 mt-1">Tasks done</p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-rose-50 flex items-center justify-center shrink-0">
              <TrendingUp size={16} className="text-rose-600" />
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Last Test</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{latestScore.percentage}%</p>
          <p className="text-xs text-slate-500 mt-1 truncate">{latestScore.name.split(" – ")[0]}</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Subject Progress - spans 2 cols */}
        <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Subject Progress</h2>
            <Link
              to="/dashboard/student/notes"
              className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {subjects.slice(0, 6).map((subject) => (
              <div key={subject.id} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: subject.color + "15" }}
                >
                  <BookOpen size={16} style={{ color: subject.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-slate-800 truncate">{subject.name}</p>
                    <p className="text-xs font-semibold text-slate-500 ml-2 shrink-0">{subject.progress}%</p>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Today's Plan</h2>
            <Link
              to="/dashboard/student/planner"
              className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              Open <ArrowRight size={14} />
            </Link>
          </div>
          <ul className="space-y-3">
            {dailyTasks.slice(0, 5).map((task) => (
              <li key={task.id} className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                    task.completed
                      ? "bg-green-600 border-green-600"
                      : "border-slate-300"
                  }`}
                >
                  {task.completed && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-sm leading-snug ${
                    task.completed ? "text-slate-400 line-through" : "text-slate-700"
                  }`}
                >
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Materials */}
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">Recently Accessed</h2>
            <Link
              to="/dashboard/student/notes"
              className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
            >
              Browse <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-3">
            {recentMaterials.map((material) => (
              <div
                key={material.id}
                className="flex items-center gap-3 p-3 border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all cursor-pointer"
              >
                <div className="w-9 h-9 bg-amber-50 flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{material.title}</p>
                  <p className="text-xs text-slate-400">{material.subject} &middot; {material.date}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 shrink-0 hidden sm:inline">
                  {material.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Link
            to="/dashboard/student/videos"
            className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5 hover:border-slate-300 hover:shadow transition-all group"
          >
            <div className="w-10 h-10 bg-indigo-50 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition-colors">
              <Video size={20} className="text-indigo-700" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Video Lectures</p>
            <p className="text-xs text-slate-400">Continue learning</p>
          </Link>

          <Link
            to="/dashboard/student/assignments"
            className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5 hover:border-slate-300 hover:shadow transition-all group"
          >
            <div className="w-10 h-10 bg-amber-50 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
              <ClipboardList size={20} className="text-amber-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Assignments</p>
            <p className="text-xs text-slate-400">{pendingAssignments} pending</p>
          </Link>

          <Link
            to="/dashboard/student/analytics"
            className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5 hover:border-slate-300 hover:shadow transition-all group"
          >
            <div className="w-10 h-10 bg-rose-50 flex items-center justify-center mb-3 group-hover:bg-rose-100 transition-colors">
              <BarChart3 size={20} className="text-rose-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Analytics</p>
            <p className="text-xs text-slate-400">Track performance</p>
          </Link>

          <Link
            to="/dashboard/student/calendar"
            className="bg-white border border-slate-200 shadow-sm p-4 sm:p-5 hover:border-slate-300 hover:shadow transition-all group"
          >
            <div className="w-10 h-10 bg-green-50 flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
              <CalendarDays size={20} className="text-green-600" />
            </div>
            <p className="text-sm font-semibold text-slate-800 mb-1">Calendar</p>
            <p className="text-xs text-slate-400">Upcoming events</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
