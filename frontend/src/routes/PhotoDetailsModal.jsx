import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({
  photoData,
  handleCloseDetailsModal
}) => {
  console.log(photoData);
  return (
    <div className="photo-details-modal">
      <button
        onClick={handleCloseDetailsModal}
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
