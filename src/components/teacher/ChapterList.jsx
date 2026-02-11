import React from 'react';
import { PlayCircle, Trash2, Edit } from 'lucide-react';

const ChapterList = ({ chapters, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Chapters</h3>
      {chapters.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No chapters added yet</p>
      ) : (
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {chapter.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {chapter.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    <span className="truncate">{chapter.videoUrl}</span>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(chapter)}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(chapter.id)}
                    className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterList;