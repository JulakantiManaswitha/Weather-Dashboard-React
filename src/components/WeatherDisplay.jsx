import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData, onAddFavorite }) => {
  const { city, list } = weatherData;

  return (
    <div className="weather-display">
      <h2>{city.name}</h2>
      <div className="weather-info">
        {list.slice(0, 5).map((weather, index) => (
          <div key={index} className="weather-day">
            <p>{new Date(weather.dt_txt).toLocaleDateString()}</p>
            <p>{weather.weather[0].description}</p>
            <p>{Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
        ))}
      </div>
      <button onClick={() => onAddFavorite(city.name)}>Add to Favorites</button>
    </div>
  );
};

export default WeatherDisplay;
