import { teachers } from "../../data/dashboardData";
import {
  MessageSquare,
  CalendarCheck,
  Star,
  Clock,
  Circle,
} from "lucide-react";

const ConnectTeachers = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Connect with Teachers</h1>
        <p className="text-sm text-slate-500">Get guidance from experienced faculty members</p>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 bg-indigo-50 flex items-center justify-center shrink-0">
            <MessageSquare size={22} className="text-indigo-700" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800 mb-0.5">Live Chat</p>
            <p className="text-xs text-slate-400">Chat with available mentors in real time</p>
          </div>
          <button className="btn-primary text-xs py-2 px-4 w-full sm:w-auto">Start Chat</button>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 flex items-center justify-center shrink-0">
            <CalendarCheck size={22} className="text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800 mb-0.5">Book Doubt Session</p>
            <p className="text-xs text-slate-400">Schedule a one-on-one doubt clearing session</p>
          </div>
          <button className="btn-secondary text-xs py-2 px-4 w-full sm:w-auto">Book Now</button>
        </div>
      </div>

      {/* Teacher List */}
      <div className="bg-white border border-slate-200 shadow-sm">
        <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-900">Faculty Members</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 px-4 sm:px-6 py-5 hover:bg-slate-50/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-lg font-bold text-slate-600">
                  {teacher.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{teacher.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{teacher.subject}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-xs text-amber-600">
                      <Star size={12} fill="currentColor" />
                      {teacher.rating}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock size={12} />
                      {teacher.experience}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pl-16 sm:pl-0 shrink-0">
                <span
                  className={`flex items-center gap-1.5 text-xs font-semibold ${
                    teacher.available ? "text-green-600" : "text-slate-400"
                  }`}
                >
                  <Circle
                    size={8}
                    fill="currentColor"
                    className={teacher.available ? "text-green-500" : "text-slate-300"}
                  />
                  {teacher.available ? "Available" : "Offline"}
                </span>
                {teacher.available ? (
                  <button className="btn-primary text-xs py-1.5 px-3">Connect</button>
                ) : (
                  <button
                    className="text-xs font-semibold px-3 py-1.5 border border-slate-200 text-slate-400 cursor-not-allowed rounded-sm"
                    disabled
                  >
                    Unavailable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectTeachers;
