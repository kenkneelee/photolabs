import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        data={photo}
        key={photo.id}
        favoritedPhotos={props.favoritedPhotos}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        onPhotoSelect={props.onPhotoSelect}
      />
    );
  });

  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
