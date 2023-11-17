import { useReducer, useEffect } from "react";

/* App level actions */
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
        photoData: action.payload.data,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.data,
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
    topicData: [],
    photoData: [],
    modalVisibility: false,
    activePhoto: null,
    favoritedPhotos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Populate app with initial data upon first render
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } });
      });
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } });
      });
  }, []);

  /**
   * The onPhotoSelect action can be used when the user selects a photo.
   * @param {object} photo
   */
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { selectedPhoto: photo },
    });
  };

  /**
   * The updateToFavPhotoIds action can be used to set the favourite photos.
   * @param {number} photoId
   */
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: state.favoritedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      payload: { photoId },
    });
  };

  /**
   * The onLoadTopic action can be used when the user selects a specific category of photos.
   * @param {object} newTopic
   */
  const onLoadTopic = (newTopic) => {
    fetch(`/api/topics/photos/${newTopic.id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { data },
        });
      })
      .catch((err) => {
        console.log("Error fetching topic data");
      });
  };

  /**
   *  The onClosePhotoDetailsModal action can be used to close the modal.
   */
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
