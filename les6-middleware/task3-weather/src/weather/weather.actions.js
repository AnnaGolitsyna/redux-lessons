import fetchWeatherData from './weather.gateway';

export const WEATHER_DATA = 'WEATHER/WEATHER_DATA';

export const setWetherData = (weatherData) => {
  return {
    type: WEATHER_DATA,
    payload: { weatherData },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((data) => {
      dispatch(setWetherData(data));
    });
  };
};
