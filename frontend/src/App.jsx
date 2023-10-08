import React, { useCallback, useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const defaultDetailsModalProps = {
  photoData: undefined,
  isOpen: false
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [detailsModalProps, setDetailsModalProps] = useState(defaultDetailsModalProps);
  const [favorites, setFavorites] = useState({});

  const handleToggleFavorite = useCallback((photoId) => {
    setFavorites((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  }, []);

  const handleOpenDetailsModal = useCallback((photoData) => {
    setDetailsModalProps({
      photoData,
      isOpen: true
    });
  }, []);

  const handleCloseDetailsModal = useCallback(() => {
    setDetailsModalProps(defaultDetailsModalProps);
  }, [])

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
