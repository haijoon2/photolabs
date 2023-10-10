import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import { useAppContext } from 'AppContextProvider';

const TopicList = () => {
  const { topics, fetchPhotosByTopicAction } = useAppContext();

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          title={topic.title}
          onClickTopic={() => {
            fetchPhotosByTopicAction(topic.id);
          }}
        />
      ))}
    </div>
  );
};

export default TopicList;
