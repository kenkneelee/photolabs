import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topics}
        photos={state.photos}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        favoritedPhotos={state.favoritedPhotos}
      />
      {state.modalVisibility && (
        <PhotoDetailsModal
          photos={state.photos}
          activePhoto={state.activePhoto}
          onPhotoSelect={onPhotoSelect}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          favoritedPhotos={state.favoritedPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
