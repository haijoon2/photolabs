import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, onClickTopic }) => {
  return (
    <div
      className="topic-list__item"
      onClick={onClickTopic}
    >
      <span>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;