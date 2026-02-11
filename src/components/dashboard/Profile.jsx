import { studentProfile, subjects } from "../../data/dashboardData";
import { useAuth } from "../../context/AuthContext";
import {
  User,
  Mail,
  Phone,
  Target,
  BookOpen,
  Calendar,
  Award,
  Edit3,
} from "lucide-react";

const Profile = () => {
  const { user } = useAuth();

  const infoRows = [
    { icon: Mail, label: "Email", value: user?.email || studentProfile.email },
    { icon: Phone, label: "Phone", value: studentProfile.phone },
    { icon: Target, label: "Exam Target", value: studentProfile.examTarget },
    { icon: BookOpen, label: "Optional Subject", value: studentProfile.optionalSubject },
    { icon: Award, label: "Attempt", value: studentProfile.attempt },
    { icon: Calendar, label: "Member Since", value: studentProfile.joinedDate },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Profile</h1>
        <p className="text-sm text-slate-500">Manage your account information</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6 text-center h-fit">
          <div className="w-18 h-18 sm:w-20 sm:h-20 bg-slate-900 text-white mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold mb-4">
            {studentProfile.avatarInitials}
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-0.5">{studentProfile.name}</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">
            {studentProfile.examTarget}
          </p>
          <p className="text-xs text-slate-400">{studentProfile.attempt}</p>

          {/* Overall progress */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Syllabus Completed
            </p>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-1">
              <div
                className="h-full rounded-full bg-amber-500"
                style={{ width: `${studentProfile.syllabusCompleted}%` }}
              />
            </div>
            <p className="text-xs font-semibold text-slate-600">{studentProfile.syllabusCompleted}%</p>
          </div>

          <button className="btn-secondary w-full mt-4 text-xs py-2.5 flex items-center justify-center gap-1.5">
            <Edit3 size={13} />
            Edit Profile
          </button>
        </div>

        {/* Info Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 shadow-sm">
            <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
            </div>
            <div className="divide-y divide-slate-50">
              {infoRows.map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="w-9 h-9 bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <row.icon size={16} className="text-slate-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm font-medium text-slate-800 truncate">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Progress */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 sm:p-6">
            <h2 className="text-base font-bold text-slate-900 mb-4">Subject-wise Progress</h2>
            <div className="space-y-3">
              {subjects.map((subject) => (
                <div key={subject.id}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-slate-700 truncate">{subject.name}</p>
                    <span className="text-xs font-bold ml-2 shrink-0" style={{ color: subject.color }}>
                      {subject.progress}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
