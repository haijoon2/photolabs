import React, { useMemo } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useAppContext } from 'AppContextProvider';

const TopNavigation = () => {
  const { favorites } = useAppContext();

  const hasFavorite = useMemo(
    () => Object.entries(favorites).some(([_, isFavorite]) => isFavorite),
    [favorites]
  );

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList />
      <FavBadge
        selected
        displayAlert={hasFavorite}
      />
    </div>
  )
}

export default TopNavigation;