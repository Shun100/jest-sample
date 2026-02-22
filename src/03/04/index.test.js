const { add, sub } = require('./index');

test('50+50は100', () => {
  expect(add(50,50)).toBe(100);
});

test('70+80は100', () => {
  expect(add(70,80)).toBe(100);
});

test('100-80は20', () => {
  expect(sub(100, 80)).toBe(20);
});

test('80-100はエラー', () => {
  expect(() => sub(80, 100)).toThrow(); // 例外が送出される場合はアロー関数でラップする
})
