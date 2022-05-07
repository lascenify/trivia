import { Question } from './Question';

export interface OpenTDBResponse {
  response_code: string;
  results: Question[];
}
