import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const {
    photos,
    data,
    favoritedPhotos,
    setFavoritedPhotos,
    setModalVisibility,
    setActivePhoto,
  } = props;

  const addToFavorites = () => {
    !favoritedPhotos.some((photo) => photo.id === data.id)
      ? setFavoritedPhotos([...favoritedPhotos, data])
      : setFavoritedPhotos(
          favoritedPhotos.filter((photo) => photo.id !== data.id)
        );
  };

  const openModal = () => {
    setModalVisibility(true);
    const completePhoto = photos.find((photo) => photo.id === data.id);
    setActivePhoto(completePhoto);
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        addToFavorites={addToFavorites}
        photo={data}
        favoritedPhotos={favoritedPhotos}
      />
      <img
        src={data.urls.regular}
        alt="image"
        className="photo-list__image"
        onClick={openModal}
      />

      <div className="photo-list__user-details">
        <img
          src={data.user.profile}
          alt="poster's profile photo"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-username">{data.user.name}</div>
          <div className="photo-list__user-location">
            {data.location.city}, {data.location.country}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
