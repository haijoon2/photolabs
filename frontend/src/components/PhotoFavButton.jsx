import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ id }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = useCallback(() => {
    setIsSelected((prev) => !prev);
  }, [])
  
  return (
    <div className="photo-list__fav-icon">
      <div
        className="photo-list__fav-icon-svg"
        onClick={handleSelect}  
      >
        <FavIcon selected={isSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;