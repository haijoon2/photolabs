import React, { useCallback, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favorites,
    detailsModalProps,
    handleToggleFavorite,
    handleOpenDetailsModal,
    handleCloseDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favorites={favorites}
        handleToggleFavorite={handleToggleFavorite}
        handleOpenDetailsModal={handleOpenDetailsModal} />
      {detailsModalProps.isOpen && (
        <PhotoDetailsModal
          favorites={favorites}
          handleToggleFavorite={handleToggleFavorite}
          handleCloseDetailsModal={handleCloseDetailsModal}
          photoData={detailsModalProps.photoData}
          isFavorite={favorites[detailsModalProps.photoData.id]}
        />
      )}
    </div>
  );
};

export default App;
