import { mockTestScores } from "../../data/dashboardData";
import {
  FileCheck,
  Clock,
  Play,
  CheckCircle2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const upcomingTests = [
  { id: 1, name: "GS Paper I – Test 3", date: "18 Feb 2026", duration: "2 hours", questions: 100, subject: "General Studies" },
  { id: 2, name: "GS Paper II – Test 3", date: "25 Feb 2026", duration: "2 hours", questions: 80, subject: "CSAT" },
  { id: 3, name: "Prelims Full Mock – 1", date: "05 Mar 2026", duration: "4 hours", questions: 200, subject: "Full Length" },
  { id: 4, name: "GS Paper I – Test 4", date: "12 Mar 2026", duration: "2 hours", questions: 100, subject: "General Studies" },
];

const MockTests = () => {
  const avgScore = Math.round(
    mockTestScores.reduce((sum, t) => sum + t.percentage, 0) / mockTestScores.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Mock Tests</h1>
        <p className="text-sm text-slate-500">Practice with UPSC-pattern mock tests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <FileCheck size={16} className="text-indigo-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Attempted</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{mockTestScores.length}</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 size={16} className="text-amber-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Avg Score</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{avgScore}%</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={16} className="text-green-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Upcoming</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{upcomingTests.length}</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={16} className="text-green-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Best Score</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">
            {Math.max(...mockTestScores.map((t) => t.percentage))}%
          </p>
        </div>
      </div>

      {/* Upcoming Tests */}
      <div className="bg-white border border-slate-200 shadow-sm">
        <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-900">Upcoming Tests</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {upcomingTests.map((test) => (
            <div
              key={test.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-indigo-50 flex items-center justify-center shrink-0">
                  <FileCheck size={18} className="text-indigo-700" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{test.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {test.date} &middot; {test.duration} &middot; {test.questions} questions
                  </p>
                </div>
              </div>
              <div className="pl-[52px] sm:pl-0">
                <button className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5 w-fit">
                  <Play size={13} />
                  Start Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Tests */}
      <div className="bg-white border border-slate-200 shadow-sm">
        <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-900">Completed Tests</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {mockTestScores.map((test) => (
            <div
              key={test.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} className="text-green-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{test.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{test.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pl-[52px] sm:pl-0 shrink-0">
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-800">
                    {test.score}/{test.total}
                  </p>
                  <p
                    className={`text-xs font-semibold ${
                      test.percentage >= 55 ? "text-green-600" : "text-amber-600"
                    }`}
                  >
                    {test.percentage}%
                  </p>
                </div>
                <button className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1">
                  Review <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTests;
