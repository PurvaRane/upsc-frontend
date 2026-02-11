import { useState } from "react";
import { assignments } from "../../data/dashboardData";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileCheck,
} from "lucide-react";

const statusConfig = {
  pending: { label: "Pending", color: "bg-amber-100 text-amber-700", icon: Clock },
  overdue: { label: "Overdue", color: "bg-red-100 text-red-700", icon: AlertCircle },
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-700", icon: FileCheck },
  graded: { label: "Graded", color: "bg-green-100 text-green-700", icon: CheckCircle2 },
};

const tabs = ["All", "Pending", "Submitted", "Graded"];

const Assignments = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = assignments.filter((a) => {
    if (activeTab === "All") return true;
    if (activeTab === "Pending") return a.status === "pending" || a.status === "overdue";
    return a.status === activeTab.toLowerCase();
  });

  const pendingCount = assignments.filter((a) => a.status === "pending" || a.status === "overdue").length;
  const submittedCount = assignments.filter((a) => a.status === "submitted").length;
  const gradedCount = assignments.filter((a) => a.status === "graded").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Assignments</h1>
        <p className="text-sm text-slate-500">Track and submit your assignments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={16} className="text-amber-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Pending</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{pendingCount}</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <FileCheck size={16} className="text-blue-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Submitted</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{submittedCount}</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 size={16} className="text-green-500" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Graded</p>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">{gradedCount}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-white border border-slate-200 p-1 w-fit overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeTab === tab
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Assignment List */}
      <div className="bg-white border border-slate-200 shadow-sm">
        {filtered.length === 0 ? (
          <div className="p-8 sm:p-12 text-center">
            <ClipboardList size={32} className="text-slate-200 mx-auto mb-3" />
            <p className="text-sm text-slate-400">No assignments in this category.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filtered.map((assignment) => {
              const config = statusConfig[assignment.status];
              const StatusIcon = config.icon;
              return (
                <div
                  key={assignment.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <ClipboardList size={18} className="text-slate-500" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-800 truncate">{assignment.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {assignment.subject} &middot; Due: {assignment.dueDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pl-[52px] sm:pl-0 shrink-0">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-sm ${config.color}`}>
                      <StatusIcon size={12} />
                      {config.label}
                    </span>
                    {assignment.marks && (
                      <span className="text-sm font-semibold text-slate-700">{assignment.marks}</span>
                    )}
                    {(assignment.status === "pending" || assignment.status === "overdue") && (
                      <button className="btn-primary text-xs py-1.5 px-4">Submit</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;
