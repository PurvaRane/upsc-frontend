import { useState } from "react";
import { dailyTasks, studyHours } from "../../data/dashboardData";
import {
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Clock,
  Target,
  Flame,
} from "lucide-react";

const DailyPlanner = () => {
  const [tasks, setTasks] = useState(dailyTasks);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("medium");

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        priority: newPriority,
      },
    ]);
    setNewTask("");
    setNewPriority("medium");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalHours = studyHours.reduce((sum, d) => sum + d.hours, 0);
  const avgHours = (totalHours / studyHours.length).toFixed(1);
  const maxHours = Math.max(...studyHours.map((d) => d.hours));

  const priorityColors = {
    high: "bg-red-100 text-red-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-green-100 text-green-700",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Daily Planner</h1>
        <p className="text-sm text-slate-500">Plan your day and track study hours</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-1">
            <Target size={16} className="text-amber-500" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Progress</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{completedCount}/{tasks.length}</p>
          <p className="text-xs text-slate-500 mt-0.5">tasks completed</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-1">
            <Clock size={16} className="text-indigo-500" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Avg Hours</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{avgHours}</p>
          <p className="text-xs text-slate-500 mt-0.5">hours/day this week</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-1">
            <Flame size={16} className="text-orange-500" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Streak</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">7</p>
          <p className="text-xs text-slate-500 mt-0.5">days active</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* To-do List */}
        <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Today's Tasks</h2>
            <span className="text-xs font-semibold text-slate-400">
              {completedCount}/{tasks.length} done
            </span>
          </div>

          {/* Add task form */}
          <form onSubmit={addTask} className="p-4 sm:px-6 sm:py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="What do you need to study today?"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-slate-800 placeholder-slate-400 text-sm"
              />
              <div className="flex gap-2 sm:gap-3">
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                  className="px-3 py-3 bg-white border-2 border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-slate-800 transition-all text-slate-700 text-xs font-medium w-full sm:w-28"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button
                  type="submit"
                  className="btn-primary py-3 px-4 flex items-center gap-1.5 shrink-0"
                >
                  <Plus size={16} />
                  <span className="hidden sm:inline text-sm">Add</span>
                </button>
              </div>
            </div>
          </form>

          {/* Task list */}
          <div className="divide-y divide-slate-50">
            {tasks.length === 0 ? (
              <div className="p-8 sm:p-12 text-center">
                <CheckCircle2 size={32} className="text-slate-200 mx-auto mb-3" />
                <p className="text-sm text-slate-400">No tasks yet. Add one above to get started.</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 px-4 sm:px-6 py-3.5 hover:bg-slate-50/50 transition-colors ${
                    task.completed ? "opacity-60" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="shrink-0 text-slate-400 hover:text-green-600 transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle2 size={20} className="text-green-600" />
                    ) : (
                      <Circle size={20} />
                    )}
                  </button>
                  <span
                    className={`flex-1 text-sm min-w-0 ${
                      task.completed ? "line-through text-slate-400" : "text-slate-700"
                    }`}
                  >
                    {task.text}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 shrink-0 hidden sm:inline ${
                      priorityColors[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors shrink-0"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Study Hour Tracker */}
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 h-fit">
          <h2 className="text-base font-bold text-slate-900 mb-4">Study Hours — This Week</h2>
          <div className="space-y-3">
            {studyHours.map((day) => (
              <div key={day.day} className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 w-8 shrink-0">{day.day}</span>
                <div className="flex-1 h-5 bg-slate-100 rounded-sm overflow-hidden">
                  <div
                    className="h-full rounded-sm transition-all"
                    style={{
                      width: `${(day.hours / maxHours) * 100}%`,
                      backgroundColor: day.hours >= 8 ? "#059669" : day.hours >= 6 ? "#d97706" : "#dc2626",
                    }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-600 w-8 text-right shrink-0">{day.hours}h</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400">Total this week</span>
              <span className="font-bold text-slate-800">{totalHours}h</span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-slate-400">Daily average</span>
              <span className="font-bold text-slate-800">{avgHours}h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPlanner;
