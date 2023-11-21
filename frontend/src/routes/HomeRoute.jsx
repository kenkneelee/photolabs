import React from "react";

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
    onLoadTopic,
    onToggleFavoritesModal,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={favoritedPhotos.length > 0}
        onLoadTopic={onLoadTopic}
        onToggleFavoritesModal = {onToggleFavoritesModal}
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
