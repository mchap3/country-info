/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const InfoDisplay = ({ country }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
    .then(response => setData(response.data));
  }, [country]);

  
  if (data) {
    return (
      <div>
        <h2>{data.name.common} </h2>
        <p><strong>Capital:</strong> {data.capital} </p>
        <p><strong>Population:</strong> {data.population.toLocaleString()} </p>
        <strong>Languages:</strong>
        <ul>
          {Object.values(data.languages)
            .map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <p><strong>Flag:</strong></p>
        <img
          src={data.flags.png}
          alt={`Flag of ${country}`} 
        />
        <WeatherDisplay 
          country={country}
          data={data}
        />
      </div>
    );
  }
};

export default InfoDisplay