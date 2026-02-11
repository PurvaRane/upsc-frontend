import { useState } from "react";
import { calendarEvents } from "../../data/dashboardData";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
} from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

const eventTypeLabels = {
  assignment: "Assignment",
  exam: "Exam",
  session: "Session",
  milestone: "Milestone",
};

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 11));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getEventsForDate = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return calendarEvents.filter((e) => e.date === dateStr);
  };

  const isToday = (day) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(d);
  }

  const upcoming = calendarEvents
    .filter((e) => new Date(e.date) >= new Date(2026, 1, 11))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Calendar</h1>
        <p className="text-sm text-slate-500">Track your exam dates, deadlines, and sessions</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white border border-slate-200 shadow-sm p-4 sm:p-6">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={prevMonth}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all rounded-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {MONTHS[month]} {year}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all rounded-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((day, i) => (
              <div
                key={day}
                className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 py-2"
              >
                <span className="hidden sm:inline">{day}</span>
                <span className="sm:hidden">{DAYS_SHORT[i]}</span>
              </div>
            ))}
          </div>

          {/* Calendar cells */}
          <div className="grid grid-cols-7 border-t border-l border-slate-100">
            {cells.map((day, idx) => {
              const events = day ? getEventsForDate(day) : [];
              return (
                <div
                  key={idx}
                  className={`min-h-[52px] sm:min-h-[80px] p-1 sm:p-1.5 border-r border-b border-slate-100 ${
                    day ? "hover:bg-slate-50/50" : "bg-slate-50/30"
                  } ${isToday(day) ? "bg-amber-50/40" : ""}`}
                >
                  {day && (
                    <>
                      <span
                        className={`inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-[10px] sm:text-xs font-semibold ${
                          isToday(day)
                            ? "bg-slate-900 text-white rounded-sm"
                            : "text-slate-600"
                        }`}
                      >
                        {day}
                      </span>
                      <div className="mt-0.5 space-y-0.5 overflow-hidden">
                        {events.slice(0, 2).map((event, i) => (
                          <div
                            key={i}
                            className="text-[8px] sm:text-[10px] font-semibold px-0.5 sm:px-1 py-px truncate rounded-sm"
                            style={{
                              backgroundColor: event.color + "18",
                              color: event.color,
                            }}
                            title={event.title}
                          >
                            <span className="hidden sm:inline">{event.title}</span>
                            <span className="sm:hidden">&bull;</span>
                          </div>
                        ))}
                        {events.length > 2 && (
                          <span className="text-[8px] text-slate-400 px-0.5">+{events.length - 2}</span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 h-fit">
          <h2 className="text-base font-bold text-slate-900 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcoming.map((event, idx) => {
              const eventDate = new Date(event.date);
              return (
                <div key={idx} className="flex gap-3">
                  <div className="text-center shrink-0 w-11">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {MONTHS[eventDate.getMonth()].slice(0, 3)}
                    </p>
                    <p className="text-lg font-bold text-slate-900">{eventDate.getDate()}</p>
                  </div>
                  <div className="border-l-2 pl-3 flex-1 min-w-0" style={{ borderColor: event.color }}>
                    <p className="text-sm font-medium text-slate-800 leading-snug">{event.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: event.color }}>
                      {eventTypeLabels[event.type] || event.type}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Legend</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(eventTypeLabels).map(([type, label]) => {
                const color = calendarEvents.find((e) => e.type === type)?.color || "#94a3b8";
                return (
                  <div key={type} className="flex items-center gap-2">
                    <Circle size={8} fill={color} className="shrink-0" style={{ color }} />
                    <span className="text-xs text-slate-600">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
