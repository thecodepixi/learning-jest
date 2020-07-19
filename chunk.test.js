const chunkArray = require('./chunk');

test('chunkArray is defined', () => {
  expect(chunkArray).toBeDefined();
});

test('chunk an array of 10 values into sub arrays of length 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(arr, len);
  expect(chunkedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});
