const { wait } = require('./index');

// 非同期処理のテスト方法

// 1. Promiseをreturnする書き方
// 1-1. Promiseを返しthenに渡す関数内にアサーションを書く方法
test('指定時間だけ待つと、経過時間をもってresolveされる', () => {
  return wait(50).then(duration => {
    expect(duration).toBe(50);
  });
});

// 1-2. resolvesを使用したアサーションをreturnする方法
test('指定時間待つと、経過時間をもってresolveされる', () => {
  return expect(wait(50)).resolves.toBe(50);
});

// 2. async/awaitと使った書き方
// 2-1. テスト関数をasync関数とし、関数内でPromiseが解決するのを待つ方法
// resolvesマッチャーを使用しあｔアサーションも、awaitで待つことができる
test('指定時間待つと、経過時間をもってresolveされる', async () => {
  await expect(wait(50)).resolves.toBe(50);
});

// 2-2. 検証値のPromiseが解決するのを待ってから、アサーションに展開する方法
// 最もシンプルな書き方
test('指定時間待つと、経過時間をもってresolveされる', async() => {
  expect(await wait(50)).toBe(50);
});

