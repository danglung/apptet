
export interface StudentInfo {
  fullName: string;
  className: string;
  startTime?: Date;
  endTime?: Date;
  score?: number;
}

export interface FlashcardData {
  id: string;
  title: string;
  definition: string;
  icon: string;
  color: string;
  image: string;
}

export interface Question {
  id: number;
  content: string;
  options: string[];
  answer: string;
  image: string;
}

export type AppStep = 'INTRO' | 'FLASHCARDS' | 'QUIZ' | 'RESULT';
