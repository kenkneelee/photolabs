import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const {
    photos,
    favoritedPhotos,
    activePhoto,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
  } = props;

  const handleCloseModal = () => {
    onClosePhotoDetailsModal();
  };

  // -- Note: This is my solution to make similar photos properly update. Assigning activePhoto.similar_photos directly only works for one "level" of similar photos. --
  // Convert the similar_photos object to an array of similar photos
  const similarPhotosArray = Object.values(activePhoto.similar_photos);
  // Extract the IDs of similar photos
  const similarPhotoIds = similarPhotosArray.map((photo) => photo.id);
  // Filter the photos array to include only the similar photos
  const similarPhotos = photos.filter((photo) =>
    similarPhotoIds.includes(photo.id)
  );

  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModal} />
      </button>
      {/* the photo */}
      <div className="photo-details-modal__images">
        <PhotoFavButton
          updateToFavPhotoIds={updateToFavPhotoIds}
          photo={activePhoto}
          favoritedPhotos={favoritedPhotos}
        />
        <img
          src={activePhoto.urls.full}
          alt="Image"
          className="photo-details-modal__image"
        />
        {/* photographer details */}
        <div className="photo-details-modal__photographer-details">
          <img
            src={activePhoto.user.profile}
            alt="Photographer"
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">
              {activePhoto.user.name}
            </div>
            <div className="photo-details-modal__photographer-location">
              {activePhoto.location.city}, {activePhoto.location.country}
            </div>
          </div>
        </div>
      </div>

      {/* similar images */}
      <div className="photo-details-modal__images">
        <h2 className="photo-details-modal__header">Similar Images</h2>
      </div>
      {activePhoto && activePhoto.similar_photos && (
        <PhotoList
          photos={similarPhotos}
          favoritedPhotos={favoritedPhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default PhotoDetailsModal;
