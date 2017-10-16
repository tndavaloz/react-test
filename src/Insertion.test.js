import { insertSort } from './Insertion';

it('returns a sorted array', () => {
  const input = [5, 9, 6, 8, 2];
  const expected = [2, 5, 6, 8, 9];

  expect(insertSort(input)).toEqual(expected);
});
