import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = () => {
  const arrWeatherInCities = useSelector((state) => weatherDataSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {arrWeatherInCities.map(({ id, temperature, name }) => {
          return (
            <li key={id} className="city">
              <span className="city__name">{name}</span>
              <span className="city__temperature">{temperature}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Weather;
