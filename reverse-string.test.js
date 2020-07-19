const reverseString = require('./reverse-string');

test('reverseString functions exists', () => {
  expect(reverseString).toBeDefined();
});

test('correctly reverses string', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('correctly reverses string with uppercase letters', () => {
  expect(reverseString('Hello')).toEqual('olleh');
  expect(reverseString('HeLlO')).toEqual('olleh');
});
