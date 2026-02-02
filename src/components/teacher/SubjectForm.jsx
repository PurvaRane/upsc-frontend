import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import API_CONFIG from '../../config/api';

const SubjectForm = ({ onSubjectCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SUBJECT.CREATE}`;
    console.log('Create subject:', formData, 'Endpoint:', endpoint);
    // TODO: Implement API call
    onSubjectCreated && onSubjectCreated(formData);
    setFormData({ name: '', description: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <BookOpen className="w-6 h-6 text-gray-900 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Create New Subject</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Mathematics"
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
            placeholder="Brief description of the subject"
            required
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Create Subject
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;
