import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { data, favoritedPhotos, setFavoritedPhotos } = props;
  const addToFavorites = () => {
    !favoritedPhotos.some((photo) => photo.id === data.id)
      ? setFavoritedPhotos([...favoritedPhotos, data])
      : setFavoritedPhotos(
          favoritedPhotos.filter((photo) => photo.id !== data.id)
        );
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton addToFavorites={addToFavorites} />
      <img src={data.urls.regular} alt="image" className="photo-list__image" />

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
