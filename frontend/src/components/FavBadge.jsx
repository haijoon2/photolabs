import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ selected, displayAlert, onToggleFavIcon }) => {
  return (
    <div
      className="fav-badge"
      onClick={onToggleFavIcon}
    >
      <FavIcon
        selected={selected}
        displayAlert={displayAlert}
      />
    </div>
  ) 
};

export default FavBadge;