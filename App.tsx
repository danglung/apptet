
import React, { useState } from 'react';
import { AppStep, StudentInfo } from './types';
import StudentForm from './components/StudentForm';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import { submitToGoogleSheet, GOOGLE_SHEET_URL } from './services/sheetService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>('INTRO');
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStart = (info: StudentInfo) => {
    setStudent(info);
    setStep('FLASHCARDS');
  };

  const handleFinishQuiz = async (score: number) => {
    if (!student) return;
    
    const finalInfo = {
      ...student,
      endTime: new Date(),
      score: score
    };
    
    setStudent(finalInfo);
    setStep('RESULT');
    
    // Auto-submit result
    setIsSubmitting(true);
    await submitToGoogleSheet(finalInfo);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const restart = () => {
    setStep('INTRO');
    setStudent(null);
    setIsSubmitted(false);
  };

  const openSheet = () => {
    window.open(GOOGLE_SHEET_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm border-b border-blue-100 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-xl text-white font-bold text-xl shadow-md">
            💻
          </div>
          <div>
            <h1 className="font-bold text-gray-800 text-lg md:text-xl">Tin Học 10 KNTT</h1>
            <p className="text-xs text-blue-500 font-bold uppercase tracking-wider">Bài 9: An Toàn Trên Không Gian Mạng</p>
          </div>
        </div>
        {student && (
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-bold text-gray-700">{student.fullName}</span>
            <span className="text-xs text-gray-500">Lớp: {student.className}</span>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        {step === 'INTRO' && <StudentForm onStart={handleStart} />}
        
        {step === 'FLASHCARDS' && (
          <Flashcards onComplete={() => setStep('QUIZ')} />
        )}
        
        {step === 'QUIZ' && (
          <Quiz onFinish={handleFinishQuiz} />
        )}

        {step === 'RESULT' && student && (
          <div className="bg-white p-10 rounded-[40px] shadow-2xl max-w-xl w-full text-center border-4 border-blue-50">
             <div className="text-6xl mb-6">🏆</div>
             <h2 className="text-4xl font-extrabold text-blue-600 mb-2">Chúc Mừng!</h2>
             <p className="text-gray-500 mb-8 text-lg">Bạn đã hoàn thành bài ôn tập.</p>
             
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-6 rounded-3xl">
                   <p className="text-sm text-blue-600 font-bold uppercase mb-1">Điểm Số</p>
                   <p className="text-4xl font-black text-blue-700">{student.score} / 5</p>
                </div>
                <div className="bg-green-50 p-6 rounded-3xl">
                   <p className="text-sm text-green-600 font-bold uppercase mb-1">Thời Gian</p>
                   <p className="text-2xl font-black text-green-700">
                     {student.startTime && student.endTime 
                       ? `${Math.floor((student.endTime.getTime() - student.startTime.getTime()) / 1000)}s` 
                       : '--'}
                   </p>
                </div>
             </div>

             <div className="bg-gray-50 p-6 rounded-3xl mb-8 text-left space-y-2">
                <p className="text-gray-600"><strong>Học sinh:</strong> {student.fullName}</p>
                <p className="text-gray-600"><strong>Lớp:</strong> {student.className}</p>
                <p className="text-gray-600"><strong>Tình trạng:</strong> {isSubmitting ? 'Đang lưu kết quả...' : (isSubmitted ? '✅ Đã lưu vào hệ thống' : 'Đang xử lý...')}</p>
             </div>

             <div className="flex flex-col gap-3">
               <button
                  onClick={openSheet}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-lg flex items-center justify-center gap-2"
               >
                  <span>📊</span> Xem Danh Sách Kết Quả
               </button>
               
               <button
                  onClick={restart}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-lg flex items-center justify-center gap-2"
               >
                  <span>🔄</span> Ôn Tập Lại Từ Đầu
               </button>
             </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm">
        <p>© 2024 - Học Tập Vui Vẻ Cùng Tin Học 10</p>
      </footer>
    </div>
  );
};

export default App;
