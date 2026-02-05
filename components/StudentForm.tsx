
import React, { useState } from 'react';
import { StudentInfo } from '../types';

interface Props {
  onStart: (info: StudentInfo) => void;
}

const StudentForm: React.FC<Props> = ({ onStart }) => {
  const [fullName, setFullName] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && className.trim()) {
      onStart({ fullName, className, startTime: new Date() });
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border-4 border-blue-100">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Xin chào! 👋</h2>
        <p className="text-gray-500">Vui lòng nhập thông tin để bắt đầu ôn tập nhé.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Họ và Tên</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="Ví dụ: Nguyễn Văn A"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Lớp</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="Ví dụ: 10A1"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-lg"
        >
          Bắt Đầu Ngay 🚀
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
