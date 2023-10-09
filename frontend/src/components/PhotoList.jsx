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
      {photos.map((photoItem, index) => (
        <PhotoListItem
          key={index}
          photoItem={photoItem}
          isFavorite={favorites[photoItem.id]}
          handleToggleFavorite={handleToggleFavorite}
          handleOpenDetailsModal={() => {
            handleOpenDetailsModal(photoItem);
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
