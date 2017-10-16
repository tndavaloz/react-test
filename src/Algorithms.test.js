import { divideAndConquer, insertSort } from './Algorithms';

it('returns a sorted array by insert', () => {
  const input = [5, 9, 6, 8, 2];
  const expected = [2, 5, 6, 8, 9];

  expect(insertSort(input)).toEqual(expected);
});

it('returns a sorted array by divide and conquer', () => {
  const input = [2, 4, 5, 7, 1, 2, 3, 6];
  const expected = [1, 2, 2, 3, 4, 5, 6, 7];

  expect(divideAndConquer(input)).toEqual(expected);
});
