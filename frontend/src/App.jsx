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

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        setActivePhoto={setActivePhoto}
      />
      {modalVisibility && (
        <PhotoDetailsModal
          setModalVisibility={setModalVisibility}
          activePhoto={activePhoto}
        />
      )}
    </div>
  );
};

export default App;
