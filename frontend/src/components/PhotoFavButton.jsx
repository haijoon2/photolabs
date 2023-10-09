import React from 'react';

import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ id, isFavorite, handleToggleFavorite }) => {
  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={(event) => {
          event.stopPropagation();
          handleToggleFavorite(id);
        }}  
      >
        <FavBadge selected={isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;