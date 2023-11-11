import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  /* Insert React */
  const { data } = props;
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img src={data.imageSource} alt="image" className="photo-list__image" />

      <div className="photo-list__user-details">
        <img
          src={data.profile}
          alt="poster's profile photo"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-username">{data.username}</div>
          <div className="photo-list__user-location">
            {data.location.city}, {data.location.country}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
