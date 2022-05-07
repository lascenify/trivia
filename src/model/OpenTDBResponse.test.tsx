import { mapOpenTDBAnswerToAnswer } from './OpenTDBResponse';

it('mapOpenTDBAnswerToAnswer', () => {
  const openTDBAnswer = 'answer';
  const answer = mapOpenTDBAnswerToAnswer([openTDBAnswer])[0];
  expect(answer.text).toBe(openTDBAnswer);
  expect(answer.isCorrect).toBe(false);
});
