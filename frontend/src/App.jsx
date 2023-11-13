import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        setModalVisibility={setModalVisibility}
        setActivePhoto={setActivePhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
      {modalVisibility && (
        <PhotoDetailsModal
          photos={photos}
          setModalVisibility={setModalVisibility}
          activePhoto={activePhoto}
          setActivePhoto={setActivePhoto}          
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
        />
      )}
    </div>
  );
};

export default App;
