const { add, sub } = require('./index');

// test(テストタイトル, テスト関数)
test('add: 1+2は3', () => {
  expect(add(1,2)).toBe(3);
});

// 関連するいくつかのテストをグルーピングする場合、describe関数を使う
describe('add', () => {
  test('1+1は2', () => {
    expect(add(1, 1)).toBe(2);
  });
  test('1+2は3', () => {
    expect(add(1, 2)).toBe(3);
  });
});

// describeはネスト可能
describe('四則演算', () => {
  describe('add', () => {
    test('1+1は2', () => {
      expect(add(1,2)).toBe(3);
    });
  });

  describe('sub', () => {
    test('1-1は0', () => {
      expect(sub(1,1)).toBe(0);
    });
  })
});