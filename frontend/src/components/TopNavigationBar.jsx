import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* moved TopicList right as per design feedback */}
      <div className="top-nav-bar__right">
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </div>
    </div>
  );
};

export default TopNavigation;
