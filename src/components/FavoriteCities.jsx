import React from 'react';
import './FavoriteCities.css';

const FavoriteCities = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="favorite-cities">
      <h2>Favorite Cities</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.id}>
            {fav.city}
            <button onClick={() => onRemoveFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
