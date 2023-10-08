import React, { useCallback, useMemo, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState({});

  const handleToggleFavorite = useCallback((photoId) => {
    setFavorites((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  }, []);

  const hasFavorite = useMemo(() => {
    const favoriteEntries = Object.entries(favorites)
      .filter(([_, isFavorite]) => isFavorite);

    return favoriteEntries.length > 0;    
  }, [favorites])

  return (
    <div className="home-route">
      <TopNavigation
        hasFavorite={hasFavorite}
      />
      <PhotoList
        favorites={favorites}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
