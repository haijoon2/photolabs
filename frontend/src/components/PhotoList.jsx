import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const noop = () => {};

const PhotoList = ({
  photos,
  favorites,
  handleToggleFavorite,
  // handleOpenDetailsModal will be undefined when
  // PhotoList is rendered within PhotoDetailsModal
  handleOpenDetailsModal = noop
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <PhotoListItem
          key={index}
          photo={photo}
          selected={favorites[photo.id]}
          handleToggleFavorite={(event) => {
            event.stopPropagation()
            handleToggleFavorite(photo.id);
          }}
          handleOpenDetailsModal={() => {
            handleOpenDetailsModal(photo);
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
