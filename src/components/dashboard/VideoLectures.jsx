import { useState } from "react";
import { videoLectures, subjects } from "../../data/dashboardData";
import {
  Video,
  Play,
  Clock,
  User,
  Filter,
  CheckCircle2,
} from "lucide-react";

const subjectColors = {
  "Indian Polity": "#312e81",
  "History": "#9333ea",
  "Economy": "#d97706",
  "Geography": "#059669",
  "Environment": "#65a30d",
  "CSAT": "#dc2626",
};

const VideoLectures = () => {
  const [filterSubject, setFilterSubject] = useState("All");

  const filtered = videoLectures.filter(
    (v) => filterSubject === "All" || v.subject === filterSubject
  );

  const continueWatching = videoLectures.filter((v) => v.progress > 0 && v.progress < 100);
  const completed = videoLectures.filter((v) => v.progress === 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Video Lectures</h1>
        <p className="text-sm text-slate-500">Watch expert lectures at your own pace</p>
      </div>

      {/* Continue Watching */}
      {continueWatching.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-4">Continue Watching</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {continueWatching.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow transition-shadow group cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div
                  className="h-32 sm:h-36 relative flex items-center justify-center"
                  style={{ backgroundColor: (subjectColors[video.subject] || "#1e293b") + "12" }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-slate-800 ml-1" />
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold bg-black/70 text-white px-2 py-0.5">
                    {video.duration}
                  </span>
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                    <div
                      className="h-full bg-amber-500"
                      style={{ width: `${video.progress}%` }}
                    />
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-1"
                    style={{ color: subjectColors[video.subject] || "#1e293b" }}
                  >
                    {video.subject}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug line-clamp-2">
                    {video.title}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 truncate">
                      <User size={12} className="shrink-0" />
                      {video.teacher}
                    </span>
                    <span className="shrink-0">{video.progress}% done</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        <button
          onClick={() => setFilterSubject("All")}
          className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold border transition-all ${
            filterSubject === "All"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
          }`}
        >
          All
        </button>
        {Object.keys(subjectColors).map((subj) => (
          <button
            key={subj}
            onClick={() => setFilterSubject(subj)}
            className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold border transition-all ${
              filterSubject === subj
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            {subj}
          </button>
        ))}
      </div>

      {/* All Videos */}
      <div>
        <h2 className="text-base font-bold text-slate-900 mb-4">
          {filterSubject === "All" ? "All Lectures" : filterSubject}
          <span className="text-slate-400 font-normal ml-2 text-sm">({filtered.length})</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((video) => (
            <div
              key={video.id}
              className="bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow transition-shadow group cursor-pointer"
            >
              <div
                className="h-32 sm:h-36 relative flex items-center justify-center"
                style={{ backgroundColor: (subjectColors[video.subject] || "#1e293b") + "12" }}
              >
                {video.progress === 100 ? (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} className="text-green-600" />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-slate-800 ml-1" />
                  </div>
                )}
                <span className="absolute bottom-2 right-2 text-[10px] font-bold bg-black/70 text-white px-2 py-0.5">
                  {video.duration}
                </span>
                {video.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                    <div
                      className="h-full"
                      style={{
                        width: `${video.progress}%`,
                        backgroundColor: video.progress === 100 ? "#16a34a" : "#d97706",
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-1"
                  style={{ color: subjectColors[video.subject] || "#1e293b" }}
                >
                  {video.subject}
                </p>
                <p className="text-sm font-semibold text-slate-800 mb-2 leading-snug line-clamp-2">
                  {video.title}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 truncate">
                    <User size={12} className="shrink-0" />
                    {video.teacher}
                  </span>
                  {video.progress === 100 && (
                    <span className="text-green-600 font-semibold shrink-0 ml-2">Completed</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoLectures;
