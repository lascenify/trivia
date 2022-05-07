import { Answer } from '../model/Question';

export function moveElementWithinArray(array: Answer[], from: number, to: number) {
  const newArray = array;
  var element = newArray[from];
  newArray.splice(from, 1);
  newArray.splice(to, 0, element);
  return newArray;
}

export function getRandomNumberInRange(max: number) {
  return Math.round(Math.random() * max);
}
