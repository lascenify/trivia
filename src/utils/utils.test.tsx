import { Answer } from '../model/Question';
import { getRandomNumberInRange, moveElementWithinArray } from './utils';

const array: Answer[] = [
  { text: 'answer_1', isCorrect: false },
  { text: 'answer_2', isCorrect: false },
  { text: 'answer_3', isCorrect: false },
  { text: 'answer_4', isCorrect: true },
];

const max = array.length;

it('get random number in range', () => {
  const randomNumber = getRandomNumberInRange(max);
  expect(randomNumber).toBeLessThan(max);
  expect(randomNumber).toBeGreaterThan(0);
});

it('element is moved to another position in an array', () => {
  let randomPosition = getRandomNumberInRange(max);
  while (randomPosition === 3) {
    randomPosition = getRandomNumberInRange(max);
  }
  const newArray = moveElementWithinArray(array, 3, randomPosition);
  const newPosition = newArray.findIndex((answer) => answer.isCorrect);
  expect(newPosition).toBe(randomPosition);
});
