import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        photos={props.photos}
        data={photo}
        key={photo.id}
        favoritedPhotos={props.favoritedPhotos}
        setFavoritedPhotos={props.setFavoritedPhotos}
        setModalVisibility={props.setModalVisibility}
        setActivePhoto={props.setActivePhoto}
      />
    );
  });

  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
