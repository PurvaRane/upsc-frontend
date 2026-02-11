// Dummy data for Student Dashboard

export const studentProfile = {
  name: "Purva Nitin Rane",
  email: "purva.rane@example.com",
  phone: "+91 98765 43210",
  examTarget: "UPSC CSE 2026",
  attempt: "1st Attempt",
  optionalSubject: "Political Science & IR",
  joinedDate: "15 Jan 2025",
  syllabusCompleted: 45,
  avatarInitials: "PR",
};

export const motivationalQuotes = [
  "Success in civil services is not luck — it is discipline meeting consistency.",
  "A year of focused preparation is worth more than a decade of wishful thinking.",
  "The IAS officer you admire was once a student just like you — start today.",
  "Discipline is choosing between what you want now and what you want most.",
  "Every page you read today brings you one step closer to serving the nation.",
];

export const subjects = [
  { id: 1, name: "Indian Polity", icon: "Scale", progress: 68, totalNotes: 42, color: "#312e81" },
  { id: 2, name: "History", icon: "BookOpen", progress: 55, totalNotes: 38, color: "#9333ea" },
  { id: 3, name: "Economy", icon: "TrendingUp", progress: 40, totalNotes: 30, color: "#d97706" },
  { id: 4, name: "Geography", icon: "Globe", progress: 52, totalNotes: 35, color: "#059669" },
  { id: 5, name: "Environment", icon: "Leaf", progress: 30, totalNotes: 20, color: "#65a30d" },
  { id: 6, name: "CSAT", icon: "Brain", progress: 25, totalNotes: 18, color: "#dc2626" },
  { id: 7, name: "Science & Tech", icon: "Atom", progress: 35, totalNotes: 22, color: "#0284c7" },
  { id: 8, name: "Ethics", icon: "Heart", progress: 20, totalNotes: 15, color: "#e11d48" },
];

export const recentMaterials = [
  { id: 1, title: "Fundamental Rights – Article 14 to 32", subject: "Indian Polity", date: "10 Feb 2026", type: "PDF" },
  { id: 2, title: "Indian National Movement – Phase III", subject: "History", date: "09 Feb 2026", type: "PDF" },
  { id: 3, title: "Monetary Policy & RBI Functions", subject: "Economy", date: "08 Feb 2026", type: "Notes" },
  { id: 4, title: "Climatology – Indian Monsoon", subject: "Geography", date: "07 Feb 2026", type: "PDF" },
];

export const assignments = [
  { id: 1, title: "Essay: Role of Judiciary in Democracy", subject: "Indian Polity", dueDate: "15 Feb 2026", status: "pending", marks: null },
  { id: 2, title: "Answer Writing: Economic Reforms 1991", subject: "Economy", dueDate: "12 Feb 2026", status: "pending", marks: null },
  { id: 3, title: "Map Work: Major Rivers of India", subject: "Geography", dueDate: "10 Feb 2026", status: "overdue", marks: null },
  { id: 4, title: "MCQ Set: Ancient Indian History", subject: "History", dueDate: "08 Feb 2026", status: "submitted", marks: "18/25" },
  { id: 5, title: "Ethics Case Study Analysis", subject: "Ethics", dueDate: "05 Feb 2026", status: "graded", marks: "22/25" },
  { id: 6, title: "Current Affairs Compilation – Jan 2026", subject: "General Studies", dueDate: "01 Feb 2026", status: "graded", marks: "20/25" },
];

export const videoLectures = [
  { id: 1, title: "Constitutional Framework & Amendments", subject: "Indian Polity", duration: "1h 45m", progress: 100, teacher: "Prof. Sharma", thumbnail: "polity" },
  { id: 2, title: "Mughal Administration & Legacy", subject: "History", duration: "1h 30m", progress: 72, teacher: "Dr. Mehta", thumbnail: "history" },
  { id: 3, title: "Balance of Payments & FOREX", subject: "Economy", duration: "2h 00m", progress: 45, teacher: "Prof. Iyer", thumbnail: "economy" },
  { id: 4, title: "Plate Tectonics & Earthquakes", subject: "Geography", duration: "1h 15m", progress: 0, teacher: "Dr. Singh", thumbnail: "geography" },
  { id: 5, title: "Biodiversity Hotspots of India", subject: "Environment", duration: "1h 20m", progress: 0, teacher: "Prof. Gupta", thumbnail: "environment" },
  { id: 6, title: "Data Interpretation Techniques", subject: "CSAT", duration: "1h 40m", progress: 30, teacher: "Prof. Verma", thumbnail: "csat" },
];

export const teachers = [
  { id: 1, name: "Prof. R. K. Sharma", subject: "Indian Polity & Governance", experience: "15 years", rating: 4.9, available: true },
  { id: 2, name: "Dr. Anjali Mehta", subject: "History & Culture", experience: "12 years", rating: 4.8, available: true },
  { id: 3, name: "Prof. S. Iyer", subject: "Economy & Finance", experience: "18 years", rating: 4.7, available: false },
  { id: 4, name: "Dr. Harpreet Singh", subject: "Geography & Environment", experience: "10 years", rating: 4.9, available: true },
  { id: 5, name: "Prof. Neha Gupta", subject: "Science & Technology", experience: "8 years", rating: 4.6, available: false },
];

export const calendarEvents = [
  { date: "2026-02-15", title: "Essay Submission Due", type: "assignment", color: "#d97706" },
  { date: "2026-02-18", title: "Mock Test – GS Paper I", type: "exam", color: "#dc2626" },
  { date: "2026-02-20", title: "Live Doubt Session – Polity", type: "session", color: "#312e81" },
  { date: "2026-02-22", title: "Answer Writing Practice", type: "assignment", color: "#d97706" },
  { date: "2026-02-25", title: "Mock Test – GS Paper II", type: "exam", color: "#dc2626" },
  { date: "2026-02-28", title: "Monthly Assessment", type: "exam", color: "#dc2626" },
  { date: "2026-03-05", title: "Prelims Mock – Full Length", type: "exam", color: "#dc2626" },
  { date: "2026-05-24", title: "UPSC Prelims 2026", type: "milestone", color: "#059669" },
];

export const dailyTasks = [
  { id: 1, text: "Revise Polity – Fundamental Rights", completed: true, priority: "high" },
  { id: 2, text: "Watch Economy lecture – BOP", completed: false, priority: "high" },
  { id: 3, text: "Practice 50 MCQs – History", completed: false, priority: "medium" },
  { id: 4, text: "Read The Hindu editorial", completed: true, priority: "high" },
  { id: 5, text: "Answer writing practice (2 questions)", completed: false, priority: "high" },
  { id: 6, text: "Revise Geography – Climatology notes", completed: false, priority: "medium" },
];

export const studyHours = [
  { day: "Mon", hours: 8 },
  { day: "Tue", hours: 7.5 },
  { day: "Wed", hours: 9 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 8.5 },
  { day: "Sat", hours: 10 },
  { day: "Sun", hours: 7 },
];

export const mockTestScores = [
  { id: 1, name: "GS Paper I – Test 1", date: "15 Jan 2026", score: 98, total: 200, percentage: 49 },
  { id: 2, name: "GS Paper II – Test 1", date: "22 Jan 2026", score: 112, total: 200, percentage: 56 },
  { id: 3, name: "CSAT – Test 1", date: "29 Jan 2026", score: 142, total: 200, percentage: 71 },
  { id: 4, name: "GS Paper I – Test 2", date: "05 Feb 2026", score: 118, total: 200, percentage: 59 },
  { id: 5, name: "GS Paper II – Test 2", date: "08 Feb 2026", score: 124, total: 200, percentage: 62 },
];

export const weakAreas = [
  { subject: "Economy", topic: "International Trade & WTO", strength: 30 },
  { subject: "Environment", topic: "Climate Change Agreements", strength: 25 },
  { subject: "History", topic: "Post-Independence India", strength: 35 },
  { subject: "CSAT", topic: "Reading Comprehension", strength: 40 },
];

export const notifications = [
  { id: 1, text: "New assignment posted: Essay on Judiciary", time: "2 hours ago", read: false, type: "assignment" },
  { id: 2, text: "Mock Test results available – GS Paper II", time: "5 hours ago", read: false, type: "result" },
  { id: 3, text: "Live session tomorrow: Polity Doubt Clearing", time: "1 day ago", read: true, type: "session" },
  { id: 4, text: "New study material uploaded: Economy Chapter 8", time: "2 days ago", read: true, type: "material" },
];
