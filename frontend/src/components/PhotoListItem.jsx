import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photo, 
  isFavorite, 
  handleToggleFavorite,
  handleOpenDetailsModal
}) => {
  return (
    <div className="photo-list__item" onClick={handleOpenDetailsModal}>
      <PhotoFavButton
        id={photo.id}
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}  
      />
      <img className="photo-list__image" src={photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.name}
          <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;