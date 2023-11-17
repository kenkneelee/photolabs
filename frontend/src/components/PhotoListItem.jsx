import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { data, favoritedPhotos, updateToFavPhotoIds, onPhotoSelect } = props;

  const openModal = () => {
    onPhotoSelect(data);
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        updateToFavPhotoIds={updateToFavPhotoIds}
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
