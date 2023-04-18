import { WEATHER_DATA } from './weather.actions';

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return {
        ...state,
        cities: action.payload.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReducer;
