import React, { useState, useEffect } from 'react';
import CitySearch from './CitySearch';
import WeatherDisplay from './WeatherDisplay';
import FavoriteCities from './FavoriteCities';
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/favorites')
      .then(response => response.json())
      .then(data => setFavorites(data));
  }, []);

  const handleSearch = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6ec5d020c2b0ebcc629a070f02884027`)
      .then(response => response.json())
      .then(data => setWeatherData(data));
  };

  const handleAddFavorite = (city) => {
    const newFavorite = { city };
    fetch('http://localhost:5000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFavorite)
    })
      .then(response => response.json())
      .then(data => setFavorites([...favorites, data]));
  };

  const handleRemoveFavorite = (id) => {
    fetch(`http://localhost:5000/favorites/${id}`, {
      method: 'DELETE'
    })
      .then(() => setFavorites(favorites.filter(fav => fav.id !== id)));
  };

  return (
    <div className="weather-dashboard">
      <CitySearch onSearch={handleSearch} />
      {weatherData && (
        <WeatherDisplay weatherData={weatherData} onAddFavorite={handleAddFavorite} />
      )}
      <FavoriteCities favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
};

export default WeatherDashboard;
