import React, { useState } from 'react';
import SubjectForm from '../components/teacher/SubjectForm';
import SubjectList from '../components/teacher/SubjectList';
import ChapterForm from '../components/teacher/ChapterForm';
import ChapterList from '../components/teacher/ChapterList';
import AssignmentForm from '../components/teacher/AssignmentForm';
import API_CONFIG from '../config/api';

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', description: 'Advanced mathematics topics including algebra, calculus, and geometry' },
    { id: 2, name: 'Physics', description: 'Classical and modern physics concepts' },
    { id: 3, name: 'Computer Science', description: 'Programming, algorithms, and data structures' },
  ]);

  const [chapters, setChapters] = useState([
    {
      id: 1,
      subjectId: 1,
      title: 'Linear Algebra Fundamentals',
      description: 'Introduction to matrices, determinants, and vector spaces',
      videoUrl: 'https://youtube.com/watch?v=example1',
    },
    {
      id: 2,
      subjectId: 1,
      title: 'Calculus Basics',
      description: 'Limits, derivatives, and their applications',
      videoUrl: 'https://youtube.com/watch?v=example2',
    },
    {
      id: 3,
      subjectId: 2,
      title: 'Newtons Laws of Motion',
      description: 'Understanding force, mass, and acceleration',
      videoUrl: 'https://youtube.com/watch?v=example3',
    },
  ]);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleSubjectCreated = (subject) => {
    const newSubject = { ...subject, id: Date.now() };
    setSubjects([...subjects, newSubject]);
  };

  const handleChapterCreated = (chapter) => {
    const newChapter = { ...chapter, id: Date.now() };
    setChapters([...chapters, newChapter]);
  };

  const handleChapterEdit = (chapter) => {
    setSelectedChapter(chapter);
  };

  const handleChapterDelete = async (chapterId) => {
    const endpoint = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAPTER.DELETE.replace(':id', chapterId)}`;
    console.log('Delete chapter:', chapterId, 'Endpoint:', endpoint);
    // TODO: Implement API call
    setChapters(chapters.filter((c) => c.id !== chapterId));
    if (selectedChapter?.id === chapterId) {
      setSelectedChapter(null);
    }
  };

  const handleAssignmentCreated = (assignment) => {
    console.log('Assignment created:', assignment);
  };

  const filteredChapters = selectedSubject
    ? chapters.filter((c) => c.subjectId === selectedSubject.id)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your subjects, chapters, and assignments</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SubjectForm onSubjectCreated={handleSubjectCreated} />
          <SubjectList
            subjects={subjects}
            selectedSubject={selectedSubject}
            onSelectSubject={setSelectedSubject}
          />
        </div>

        {selectedSubject && (
          <>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8 border-l-4 border-gray-900">
              <h2 className="text-xl font-semibold text-gray-900">
                Managing: {selectedSubject.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{selectedSubject.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <ChapterForm
                subjectId={selectedSubject.id}
                onChapterCreated={handleChapterCreated}
              />
              <ChapterList
                chapters={filteredChapters}
                onEdit={handleChapterEdit}
                onDelete={handleChapterDelete}
              />
            </div>

            {selectedChapter && (
              <div className="mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border-l-4 border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Assignment for: {selectedChapter.title}
                  </h2>
                </div>
                <AssignmentForm
                  chapterId={selectedChapter.id}
                  onAssignmentCreated={handleAssignmentCreated}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;