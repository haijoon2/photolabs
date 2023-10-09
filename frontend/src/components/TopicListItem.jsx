import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, handleClick }) => {
  return (
    <div
      className="topic-list__item"
      onClick={handleClick}
    >
      <span>
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;