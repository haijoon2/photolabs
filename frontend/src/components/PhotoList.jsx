import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem, index) => (
        <PhotoListItem
          key={index}
          photoItem={photoItem}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
