export interface Question {
  category: string;
  question: string;
  answers: Answer[];
  correctAnswerIndex: number;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
