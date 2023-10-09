import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({
  selectedPhoto,
  handleCloseDetailsModal,
  handleToggleFavorite,
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
            id={selectedPhoto.id}
            isFavorite={favorites[selectedPhoto.id]}
            handleToggleFavorite={handleToggleFavorite}
          />
          <img
            src={selectedPhoto.urls.full}
            className="photo-details-modal__image"
          />
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} />
            <div className="photo-details-modal__photographer-info">
              {selectedPhoto.user.name}
              <br />
              <span className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
            </div>
          </div>
          <br />
          Similar Photos
        </header>
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={selectedPhoto.similar_photos}
          favorites={favorites}
          handleToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
