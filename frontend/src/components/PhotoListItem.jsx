import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  return (
    <>
      <img src={sampleDataForPhotoListItem.imageSource} />
      <img src={sampleDataForPhotoListItem.profile} />
      <div>
        {sampleDataForPhotoListItem.username}
        <br />
        {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
      </div>
    </>
  )
};

export default PhotoListItem;
