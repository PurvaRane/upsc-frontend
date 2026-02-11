const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api',
  ENDPOINTS: {
    TEACHER: {
      REGISTER: '/teacher/register',
      LOGIN: '/teacher/login',
    },
    SUBJECT: {
      CREATE: '/subjects',
      GET_ALL: '/subjects',
      GET_BY_ID: '/subjects/:id',
    },
    CHAPTER: {
      CREATE: '/chapters',
      GET_BY_SUBJECT: '/chapters/subject/:subjectId',
      UPDATE: '/chapters/:id',
      DELETE: '/chapters/:id',
    },
    ASSIGNMENT: {
      CREATE: '/assignments',
      GET_BY_CHAPTER: '/assignments/chapter/:chapterId',
    },
    STUDENT: {
      GET_SUBJECTS: '/student/subjects',
      GET_VIDEOS: '/student/videos/:subjectId',
    },
  },
};

export default API_CONFIG;