import React, { useCallback, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState({});

  const handleToggleFavorite = useCallback((photoId) => {
    setFavorites((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }))
  }, [])

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList
        favorites={favorites}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;
