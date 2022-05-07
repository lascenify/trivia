import { Answer } from './Question';

export interface OpenTDBResponse {
  response_code: string;
  results: OpenTDBResponseQuestion[];
}

export interface OpenTDBResponseQuestion {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export function mapOpenTDBAnswerToAnswer(answers: string[]): Answer[] {
  return answers.map((answerText) => {
    return { text: answerText, isCorrect: false };
  });
}
