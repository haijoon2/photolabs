import React, { useMemo } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({
  photos,
  topics,
  favorites,
  handleToggleFavorite,
  handleOpenDetailsModal
}) => {
  const hasFavorite = useMemo(() => {
    const favoriteEntries = Object.entries(favorites)
      .filter(([_, isFavorite]) => isFavorite);

    return favoriteEntries.length > 0;    
  }, [favorites])

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        hasFavorite={hasFavorite}
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
