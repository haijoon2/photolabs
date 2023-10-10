import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import { useAppContext } from 'AppContextProvider';

const PhotoList = ({
  photosToDisplay,
  // prevents onClick related photos when on details modal
  disableDetailsModalOpen
}) => {
  const {
    photos,
    favorites,
    toggleFavoriteAction,
    openPhotoDetailsModalAction
  } = useAppContext();

  return (
    <ul className="photo-list">
      {/* do not render photos from the context when given from the parent */}
      {(photosToDisplay || photos).map((photo, index) => (
        <PhotoListItem
          key={index}
          photo={photo}
          selected={favorites[photo.id]}
          onClickFavoriteIcon={(event) => {
            event.stopPropagation()
            toggleFavoriteAction(photo.id);
          }}
          onClickPhoto={() => {
            if (!disableDetailsModalOpen) {
              openPhotoDetailsModalAction(photo);
            }
          }}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
