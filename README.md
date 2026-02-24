# jest-sample

## 環境構築
- `Node.js`をインストール
- 依存モジュールをインストール
  - `npm install`

## 実行方法
- 全テスト実行
  - `npm test -- --coverage`
- 指定したファイルだけテスト実行
  - `npm test -- hoge/hoge.test.js --coverage`

## 検証方法
- 真偽値
  ``` JavaScript
    expect(hoge()).toBeTruthy();      // 真を判定
    expect(hoge()).not.toBeTruthy();  // 偽を判定
  ```

- 数値
  ``` JavaScript
    expect(hoge()).toBe(1);                   // 1と等しい
    expect(hoge()).toBeGreaterThan(1);        // 1より大きい
    expect(hoge()).toBeGreaterThanOrEqual(1); // 1以上
    expect(hoge()).toBeLessThan(1);           // 1未満
    expect(hoge()).toBeLessThanOrEqual(1);    // 1以下
  ```

- 文字列
  ``` JavaScript
    expect(hoge()).toEqual('hoge');       // 一致
    expect(hoge()).toContain('hoge');     // 部分一致
    expect(hoge()).not.toContain('hoge');
    expect(hoge()).toMatch('/hoge/');     // 部分一致
    expect(hoge()).not.toMatch('/hoge/');
    expect(hoge()).toHaveLength(1);       // 長さ一致
  ```

- 配列
  ``` JavaScript
    // 要素がプリミティブ型の場合
    expect(hoge()).toContain('hoge');
    expect(hoge()).toHaveLength(1);

    // 要素がオブジェクトの場合
    expect(hoge()).ContainEqual({ author: 'hoge', title: 'hoge' });  // 部分一致
    expect(hoge()).toEqual(expect.arrayContaining([
      { author: 'hoge', title: 'hoge' },
      { author: 'bar', title: 'bar' }
    ]));
  ```

- オブジェクト
  ``` JavaScript
    expect(hoge()).toEqual({ author: 'hoge', title: 'hoge' });        // 完全一致
    expect(hoge()).toMatchObject({ author: 'hoge', title: 'hoge' });  // 部分一致
    expect(hoge()).toHaveProperty('author');  // プロパティの有無
  ```

- UIコンポーネント
  - 作成中
