import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photoItem }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton id={photoItem.id} />
      <img className="photo-list__image" src={photoItem.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoItem.user.profile} />
        <div className="photo-list__user-info">
          {photoItem.user.name}
          <br />
          <span className="photo-list__user-location">{photoItem.location.city}, {photoItem.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;