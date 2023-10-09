import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigation = ({
  topics,
  hasFavorite,
  handleFetchPhotosByTopic
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        handleFetchPhotosByTopic={handleFetchPhotosByTopic}
      />
      <FavIcon selected displayAlert={hasFavorite} />
    </div>
  )
}

export default TopNavigation;