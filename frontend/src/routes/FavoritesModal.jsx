import React from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoFavButton.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const FavoritesModal = (props) => {
  const {
    photos,
    favoritedPhotos,
    onPhotoSelect,
    onToggleFavoritesModal,
    updateToFavPhotoIds,
  } = props;

  const handleCloseModal = () => {
    onToggleFavoritesModal();
  };

  const onPhotoSelectWithCloseFavorites = (photo) => {
    onPhotoSelect(photo);
    onToggleFavoritesModal();
  };

  // Filter the photos array to include only the favorite photos
  const parsedFavoritePhotos = photos.filter((photo) =>
    favoritedPhotos.includes(photo.id)
  );

  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={handleCloseModal} />
      </button>
      {/* Favorited images */}
      <div className="photo-details-modal__images">
        <h2 className="photo-details-modal__header">Favorite Images</h2>
      </div>

      <PhotoList
        photos={parsedFavoritePhotos}
        favoritedPhotos={favoritedPhotos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelectWithCloseFavorites}
      />
    </div>
  );
};

export default FavoritesModal;
