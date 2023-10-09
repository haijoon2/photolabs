import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData, usePhotoDetailsModalController } from 'hooks';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favorites,
    photoData,
    topicData,
    toggleFavoriteAction,
    fetchPhotosByTopicAction
  } = useApplicationData();
  const {
    selectedPhoto,
    isDetailsModalOpen,
    openPhotoDetailsModalAction,
    closePhotoDetailsModalAction
  } = usePhotoDetailsModalController();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        favorites={favorites}
        handleToggleFavorite={toggleFavoriteAction}
        handleOpenDetailsModal={openPhotoDetailsModalAction}
        handleFetchPhotosByTopic={fetchPhotosByTopicAction}
      />
      {isDetailsModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photos={photoData}
          favorites={favorites}
          handleToggleFavorite={toggleFavoriteAction}
          handleCloseDetailsModal={closePhotoDetailsModalAction}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
