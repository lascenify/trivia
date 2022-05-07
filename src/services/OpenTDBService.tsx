import { OpenTDBResponse } from '../model/OpenTDBResponse';
import { Question } from '../model/Question';
import { getRandomNumberInRange, moveElementWithinArray } from '../utils/utils';

export function getQuestion(): Promise<Question | undefined> {
  return fetch('https://opentdb.com/api.php?amount=1').then(async (res) => {
    const jsonResponse: OpenTDBResponse = await res.json();
    if (jsonResponse.results?.length > 0) {
      const questionResponse = jsonResponse.results[0];
      const wrongAnswers = questionResponse.incorrect_answers.map((answerText) => {
        return { text: answerText, isCorrect: false };
      });
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
      return;
    }
  });
}
