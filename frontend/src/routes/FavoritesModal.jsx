import React, { useMemo } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import { useAppContext } from 'AppContextProvider';

const FavoritesModal = () => {
  const {
    photos: _photos,
    favorites,
    isFavoritesModalOpen,
    closeFavoritesModalAction
  } = useAppContext();

  const photos = useMemo(
    () => _photos.filter((photo) => favorites[photo.id]),
    [_photos, favorites]
  );

  return (
    isFavoritesModalOpen ?
      <div className="photo-details-modal-background">
        <div className="photo-details-modal">
          <button
            onClick={closeFavoritesModalAction}
            className="photo-details-modal__close-button">
            <img src={closeSymbol} alt="close symbol" />
          </button>
          <div className="photo-details-modal__images">
            <PhotoList
              photosToDisplay={photos}
              disableDetailsModalOpen
            />
          </div>
        </div>
      </div>
    : null
  )
};

export default FavoritesModal;
