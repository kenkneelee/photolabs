import { useReducer } from "react";
import topics from "mocks/topics";
import photos from "mocks/photos";

/* insert app levels actions below */
const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload.photoId],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (id) => id !== action.payload.photoId
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.newPhotos,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.newTopics,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        activePhoto: action.payload.selectedPhoto,
        modalVisibility: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        activePhoto: null,
        modalVisibility: action.payload.showDetails,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  // The state object will contain the entire state of the application.
  const initialState = {
    topics: topics,
    photos: photos,
    modalVisibility: false,
    activePhoto: null,
    favoritedPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // The onPhotoSelect action can be used when the user selects a photo.
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { selectedPhoto: photo },
    });
  };

  // The updateToFavPhotoIds action can be used to set the favourite photos.
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: state.favoritedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      payload: { photoId },
    });
  };

  // The onLoadTopic does something..
  const onLoadTopic = (newTopics) => {
    dispatch({
      type: ACTIONS.SET_TOPIC_DATA,
      payload: { newTopics },
    });

  };

  // The onClosePhotoDetailsModal action can be used to close the modal.
  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS,
      payload: { showDetails: false },
    });
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
