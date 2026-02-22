const { getProfile } = require('./index');

describe('getProfile', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('APIからプロファイルを取得する', async () => {
    const mockData = { name: 'Taro' };

    // fetch関数を模擬する
    // jest.spyOn(globalThis, 'fetch').mockResolvedValue({
    //   ok: true,
    //   json: jest.fn().mockResolvedValue(mockData)
    // });
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData)
    });

    const result = await getProfile();

    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://myapi.testing.com/my/profile');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});