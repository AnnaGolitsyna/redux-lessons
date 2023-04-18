const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

const fetchWeatherData = () => {
  return fetch(baseUrl).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error();
  });
};

export default fetchWeatherData;
