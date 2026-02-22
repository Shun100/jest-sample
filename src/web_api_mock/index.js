function getProfile() {
  return fetch('https://myapi.testing.com/my/profile').then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw data;
    }
    return data;
  });
}

module.exports = { getProfile };