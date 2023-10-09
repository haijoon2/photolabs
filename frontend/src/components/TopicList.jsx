import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({
  topics,
  handleFetchPhotosByTopic
}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          title={topic.title}
          onClickTopic={() => {
            handleFetchPhotosByTopic(topic.id);
          }}
        />
      ))}
    </div>
  );
};

export default TopicList;
