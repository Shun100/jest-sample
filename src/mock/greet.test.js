const { greet, sayGoodBye } = require('./greet');

// greet.jsで定義された関数は一度undefinedになり、モックとして書き換えることが可能になる
jest.mock('./greet', () => ({
  greet: (name) => undefined,
  sayGoodBye: (name) => `Good bye, ${name}`, // モックで置き換え
}));

test('挨拶を返さない(モック)', () => {
  expect(greet('Taro')).toBe(undefined);
});

test('さよならを返す(モック)', () => {
  const message = sayGoodBye('Taro');
  expect(sayGoodBye('Taro')).toBe('Good bye, Taro');
});