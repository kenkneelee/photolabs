import React, { useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    onPhotoSelect,
    updateToFavPhotoIds,
    favoritedPhotos,
    onLoadTopic
  } = props;

  // log updated favorites list on state change
  useEffect(() => {
    console.log("Favorites: ", favoritedPhotos);
  }, [favoritedPhotos]);

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={favoritedPhotos.length > 0}
        onLoadTopic={onLoadTopic}
      />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
