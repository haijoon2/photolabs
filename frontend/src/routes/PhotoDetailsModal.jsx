import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import { useAppContext } from 'AppContextProvider';

const PhotoDetailsModal = () => {
  const {
    selectedPhoto,
    favorites,
    isDetailsModalOpen,
    toggleFavoriteAction,
    closePhotoDetailsModalAction
  } = useAppContext();

  const {
    id,
    urls,
    user,
    location,
    similar_photos
  } = selectedPhoto || {};

  return (
    (selectedPhoto && isDetailsModalOpen) ?
      <div className="photo-details-modal-background">
        <div className="photo-details-modal">
          <button
            onClick={closePhotoDetailsModalAction}
            className="photo-details-modal__close-button">
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="photo-details-modal__top-bar">
            <header className="photo-details-modal__header">
              <PhotoFavButton 
                selected={favorites[id]}
                onClickFavoriteIcon={() => {
                  toggleFavoriteAction(id);
                }}
              />
              <img
                src={urls.full}
                className="photo-details-modal__image"
              />
              <div className="photo-details-modal__photographer-details">
                <img
                  className="photo-details-modal__photographer-profile"
                  src={user.profile}
                />
                <div className="photo-details-modal__photographer-info">
                  {user.name}
                  <br />
                  <span className="photo-details-modal__photographer-location">
                    {location.city}, {location.country}
                  </span>
                </div>
              </div>
              <br />
              Similar Photos
            </header>
          </div>
          <div className="photo-details-modal__images">
            <PhotoList
              photos={similar_photos}
              disableDetailsModalOpen
            />
          </div>
        </div>
      </div>
    : null
  )
};

export default PhotoDetailsModal;
