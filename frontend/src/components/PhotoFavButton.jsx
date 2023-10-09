import React from 'react';

import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ selected, handleToggleFavorite }) => {
  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={handleToggleFavorite}  
      >
        <FavBadge selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;