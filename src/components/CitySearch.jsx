
import React, { useState } from 'react';
import './CitySearch.css';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  return (
    <div className="city-search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CitySearch;
