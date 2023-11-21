import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, onLoadTopic, onToggleFavoritesModal } =
    props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge
        isFavPhotoExist={isFavPhotoExist}
        onToggleFavoritesModal={onToggleFavoritesModal}
      />
    </div>
  );
};

export default TopNavigation;
