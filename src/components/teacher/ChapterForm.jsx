import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import API_CONFIG from '../../config/api';

const ChapterForm = ({ subjectId, onChapterCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CHAPTER.CREATE}`;
    const data = { ...formData, subjectId };
    console.log('Create chapter:', data, 'Endpoint:', endpoint);
    // TODO: Implement API call
    onChapterCreated && onChapterCreated(data);
    setFormData({ title: '', description: '', videoUrl: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 text-gray-900 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Add New Chapter</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chapter Title <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Introduction to Algebra"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Chapter description and learning objectives"
            required
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Video URL <span className="text-red-600">*</span>
          </label>
          <input
            type="url"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="https://youtube.com/watch?v=..."
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Add Chapter
        </button>
      </form>
    </div>
  );
};

export default ChapterForm;