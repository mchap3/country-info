/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const WeatherDisplay = ({ country, data }) => {
  const [weatherData, setWeatherData] = useState(null);
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
  const capital = data.capital;

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${WEATHER_KEY}&units=imperial`)
      .then(response => setWeatherData(response.data));
  }, [WEATHER_KEY, capital]);

  if (weatherData) {
    const weatherIconCode = weatherData.weather[0].icon;

    return (
      <div>
        <h2>Weather for {capital}</h2>
        <p><strong>Temperature:</strong> {weatherData.main.temp.toFixed()}°F </p>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`}
          alt={`Current conditions in ${capital}, ${country}`} />
        <p><strong>Wind:</strong> {weatherData.wind.speed} mph </p>
      </div>
    );
  }
};

export default WeatherDisplay