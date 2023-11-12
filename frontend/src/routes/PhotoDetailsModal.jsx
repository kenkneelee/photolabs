import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { setModalVisibility, activePhoto } = props;
  const handleCloseModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModal} />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton />
        <img
          src={activePhoto.urls.full}
          alt="Image"
          className="photo-details-modal__image"
        />

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
      <PhotoList photos={Object.values(activePhoto.similar_photos)} />
    </div>
  );
};

export default PhotoDetailsModal;
