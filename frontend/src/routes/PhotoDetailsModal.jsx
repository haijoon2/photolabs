import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  photoData,
  handleCloseDetailsModal,
  handleToggleFavorite,
  isFavorite,
  favorites
}) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={handleCloseDetailsModal}
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <header className="photo-details-modal__header">
          <PhotoFavButton 
            id={photoData.id}
            isFavorite={isFavorite}
            handleToggleFavorite={handleToggleFavorite}
          />
          <img
            src={photoData.urls.full}
            className="photo-details-modal__image"
          />
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={photoData.user.profile} />
            <div className="photo-details-modal__photographer-info">
              {photoData.user.name}
              <br />
              <span className="photo-details-modal__photographer-location">{photoData.location.city}, {photoData.location.country}</span>
            </div>
          </div>
          <br />
          Similar Photos
        </header>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          favorites={favorites}
          handleToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
