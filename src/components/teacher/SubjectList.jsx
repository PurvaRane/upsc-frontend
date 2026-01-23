import React from 'react';
import { BookOpen } from 'lucide-react';

const SubjectList = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Subjects</h3>
      {subjects.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No subjects created yet</p>
      ) : (
        <div className="space-y-2">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              onClick={() => onSelectSubject(subject)}
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedSubject?.id === subject.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-gray-700 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                  <p className="text-sm text-gray-600">{subject.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectList;