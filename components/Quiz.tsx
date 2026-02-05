
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';

interface Props {
  onFinish: (score: number) => void;
}

const Quiz: React.FC<Props> = ({ onFinish }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = QUESTIONS[currentIdx];

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    const choiceLetter = option.substring(0, 1);
    setSelectedOption(choiceLetter);
    setIsAnswered(true);

    if (choiceLetter === question.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(score + (selectedOption === question.answer ? 1 : 0));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-50">
        <h2 className="text-2xl font-bold text-gray-800">Câu Hỏi {currentIdx + 1}</h2>
        <div className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-bold">
          Điểm: {score}/{QUESTIONS.length}
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-white mb-6">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <p className="text-2xl font-bold text-gray-700 leading-tight">
              {question.content}
            </p>
          </div>
          <div className="w-full md:w-48 h-48 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
             <img src={question.image} alt="Question" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, idx) => {
            const letter = option.substring(0, 1);
            let btnClass = "text-left p-4 rounded-2xl border-2 text-lg font-semibold transition-all ";
            
            if (isAnswered) {
              if (letter === question.answer) {
                btnClass += "bg-green-100 border-green-500 text-green-700 ring-4 ring-green-50";
              } else if (letter === selectedOption) {
                btnClass += "bg-red-100 border-red-500 text-red-700 ring-4 ring-red-50";
              } else {
                btnClass += "bg-gray-50 border-gray-100 text-gray-400";
              }
            } else {
              btnClass += "bg-white border-gray-100 hover:border-blue-300 hover:bg-blue-50 text-gray-600";
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionClick(option)}
                className={btnClass}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className={`p-4 rounded-2xl mb-6 text-center animate-bounce font-bold text-xl ${selectedOption === question.answer ? 'text-green-600' : 'text-red-600'}`}>
          {selectedOption === question.answer ? 'Chính xác! 🎉' : `Tiếc quá! Đáp án đúng là ${question.answer}`}
        </div>
      )}

      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all text-xl"
        >
          {currentIdx < QUESTIONS.length - 1 ? 'Câu Tiếp Theo ➔' : 'Xem Kết Quả 📊'}
        </button>
      )}
    </div>
  );
};

export default Quiz;
