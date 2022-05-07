import { Errors } from '../model/Errors';
import { mapOpenTDBAnswerToAnswer, OpenTDBResponse } from '../model/OpenTDBResponse';
import { Question } from '../model/Question';
import { API_BASE_URL } from '../utils/constants';
import { getRandomNumberInRange, moveElementWithinArray } from '../utils/utils';

export function getQuestion(): Promise<Question | undefined> {
  return fetch(API_BASE_URL).then(async (res) => {
    const jsonResponse: OpenTDBResponse = await res.json();
    if (jsonResponse.results?.length > 0) {
      const questionResponse = jsonResponse.results[0];
      const wrongAnswers = mapOpenTDBAnswerToAnswer(questionResponse.incorrect_answers);
      const answers = wrongAnswers.concat({
        text: questionResponse.correct_answer,
        isCorrect: true,
      });
      const correctAnswerIndex = getRandomNumberInRange(answers.length);
      const randomOrderedAnswers = moveElementWithinArray(
        answers,
        answers.length - 1,
        correctAnswerIndex
      );
      return {
        category: questionResponse.category,
        question: questionResponse.question,
        answers: randomOrderedAnswers,
        correctAnswerIndex,
      } as Question;
    } else {
      throw new Error(Errors.EMPTY_ANSWERS_ERROR);
    }
  });
}
