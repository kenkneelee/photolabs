const { useState } = require("react");
import topics from "mocks/topics";
import photos from "mocks/photos";

const useApplicationData = () => {
  // The state object will contain the entire state of the application.
  const [state, setState] = useState({
    topics: topics,
    photos: photos,
    modalVisibility: false,
    activePhoto: null,
    favoritedPhotos: [],
  });

  // The onPhotoSelect action can be used when the user selects a photo.
  const onPhotoSelect = (photo) => {
    setState((prevState) => ({
      ...prevState,
      activePhoto: photo,
      modalVisibility: true,
    }));
  };

  // The updateToFavPhotoIds action can be used to set the favourite photos.
  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => ({
      ...prevState,
      favoritedPhotos: prevState.favoritedPhotos.includes(photoId)
        ? prevState.favoritedPhotos.filter((id) => id !== photoId)
        : [...prevState.favoritedPhotos, photoId],
    }));
  };

  const onLoadTopic = (topics) => {
    setState((prevState) => ({
      ...prevState, topics: topics
    }));
  };

  // The onClosePhotoDetailsModal action can be used to close the modal.
  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      activePhoto: null,
      modalVisibility: false,
    }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;