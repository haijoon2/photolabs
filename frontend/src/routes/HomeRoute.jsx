import React, { useMemo } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  photos,
  topics,
  favorites,
  handleToggleFavorite,
  handleOpenDetailsModal,
  handleFetchPhotosByTopic,
}) => {
  const hasFavorite = useMemo(
    () => Object.entries(favorites).some(([_, isFavorite]) => isFavorite),
    [favorites]
  );

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        hasFavorite={hasFavorite}
        handleFetchPhotosByTopic={handleFetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        handleToggleFavorite={handleToggleFavorite}
        handleOpenDetailsModal={handleOpenDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
