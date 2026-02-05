
import React, { useState } from 'react';
import { FLASHCARDS } from '../constants';

interface Props {
  onComplete: () => void;
}

const Flashcards: React.FC<Props> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    if (currentIndex < FLASHCARDS.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 150);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Thẻ Ghi Nhớ 📚</h2>
        <p className="text-gray-600">Bấm vào thẻ để xem định nghĩa nhé!</p>
      </div>

      <div 
        className={`flip-card w-full h-[400px] cursor-pointer ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card-inner relative w-full h-full shadow-2xl rounded-3xl">
          {/* Front */}
          <div className={`flip-card-front absolute inset-0 bg-white border-8 border-white rounded-3xl flex flex-col items-center justify-center p-8 ${card.color}`}>
            <div className="bg-white/90 p-6 rounded-full text-7xl mb-6 shadow-inner">{card.icon}</div>
            <h3 className="text-4xl font-extrabold text-white text-center drop-shadow-md">
              {card.title}
            </h3>
            <div className="mt-8 text-white/80 font-medium animate-bounce">Chạm để lật 🔄</div>
          </div>
          
          {/* Back */}
          <div className="flip-card-back absolute inset-0 bg-white border-8 border-blue-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center">
             <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-xl mb-4 shadow-sm" />
             <h3 className="text-2xl font-bold text-blue-600 mb-4">{card.title} là gì?</h3>
             <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {card.definition}
             </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between w-full">
        <div className="text-gray-500 font-bold">
          {currentIndex + 1} / {FLASHCARDS.length}
        </div>
        <button
          onClick={handleNext}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all text-lg flex items-center gap-2"
        >
          {currentIndex < FLASHCARDS.length - 1 ? 'Tiếp Theo' : 'Vào Làm Quiz'} 
          <span className="text-xl">➔</span>
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
