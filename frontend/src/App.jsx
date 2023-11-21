import React from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import FavoritesModal from "routes/FavoritesModal";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    onToggleFavoritesModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favoritedPhotos={state.favoritedPhotos}
        onLoadTopic={onLoadTopic}
        onToggleFavoritesModal={onToggleFavoritesModal}
      />
      {state.modalVisibility && (
        <PhotoDetailsModal
          photos={state.photoData}
          activePhoto={state.activePhoto}
          onPhotoSelect={onPhotoSelect}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          favoritedPhotos={state.favoritedPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
      {state.favoritesModalVisibility && (
        <FavoritesModal
          photos={state.photoData}
          favoritedPhotos={state.favoritedPhotos}
          onPhotoSelect={onPhotoSelect}
          onToggleFavoritesModal={onToggleFavoritesModal}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
