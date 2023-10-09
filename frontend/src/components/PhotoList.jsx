import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const noop = () => {};

const PhotoList = ({
  photos,
  favorites,
  // prevents onClick related photos when on details modal
  disableDetailsModalOpen,
  handleToggleFavorite,
  handleOpenDetailsModal
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <PhotoListItem
          key={index}
          photo={photo}
          selected={favorites[photo.id]}
          onClickFavoriteIcon={(event) => {
            event.stopPropagation()
            handleToggleFavorite(photo.id);
          }}
          onClickPhoto={() => {
            if (!disableDetailsModalOpen) {
              handleOpenDetailsModal(photo);
            }
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
