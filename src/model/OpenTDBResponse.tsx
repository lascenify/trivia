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
