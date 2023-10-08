import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = ({
  favorites,
  handleToggleFavorite,
  handleOpenDetailsModal
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem, index) => (
        <PhotoListItem
          key={index}
          photoItem={photoItem}
          isFavorite={favorites[photoItem.id]}
          handleToggleFavorite={handleToggleFavorite}
          handleOpenDetailsModal={() => {
            handleOpenDetailsModal(photoItem.id);
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
