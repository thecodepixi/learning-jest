const functions = require('./functions');

test('function.add returns the sum of two numbers', () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(3, 3)).toBe(6);
  expect(functions.add(10, 10)).toBe(20);
});

test('function.add(2,2) should NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

/* CHECK FOR TRUTHY OR FALSY VALUES
 * toBeNull checks for null
 * toBeUndefined checks for undefined
 * toBeDefined is the opposite
 * toBeTruthy/toBeFalsy check for truthy/falsy values
 */

//  toBeNull
test('functions.isNull should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeTruthy
test('functions.checkValue should be falsy when passed falsy value', () => {
  expect(functions.checkValue(false)).toBeFalsy();
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(!true)).toBeFalsy();
  expect(functions.checkValue(2 == 3)).toBeFalsy();
});

// toBeFalsy
test('functions.checkValue should be truthy when passed truthy value', () => {
  expect(functions.checkValue(true)).toBeTruthy();
  expect(functions.checkValue(1)).toBeTruthy();
  expect(functions.checkValue('yes')).toBeTruthy();
  expect(functions.checkValue(2 == 2)).toBeTruthy();
});

// test object equality (toBe will fail because object reference)
test('user should be Emily Harber object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Emily',
    lastName: 'Harber',
  });
});

// check number values
test('num 1 + num 2 should be less than num3', () => {
  let num1 = 5;
  let num2 = 6;
  let num3 = 15;
  expect(num1 + num2).toBeLessThan(num3);
});

test('num 1 + num 2 should be less than or equal to num3', () => {
  let num1 = 5;
  let num2 = 6;
  let num3 = 15;
  expect(num1 + num2).toBeLessThanOrEqual(num3);
  num2 = 10;
  expect(num1 + num2).toBeLessThanOrEqual(num3);
});

// regex
test('there is no "i" in team', () => {
  expect('team').not.toMatch(/i/i);
});

//arrays

test('admin should be in username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// async data tests expecting assertions and returned promise
test('functions.fetchUser should return a user with the name Leanne Graham', () => {
  expect.hasAssertions();
  return functions.fetchUser().then((user) => {
    expect(user.name).toEqual('Leanne Graham');
  });
});

// async test with async/await
test('functions.fetchUser tested with async/await', async () => {
  let user = await functions.fetchUser();
  expect(user.name).toEqual('Leanne Graham');
});

// async test with try/catch (also uses to async/await)
test('functions.fetchUser tested with try/catch', async () => {
  try {
    let user = await functions.fetchUser();
    expect(user.name).toEqual('Leanne Graham');
  } catch (err) {
    console.error(err);
  }
});
