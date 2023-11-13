import React, { useCallback, useEffect, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { photo, favoritedPhotos, addToFavorites } = props;

  const [favorited, setFavorited] = useState(
    favoritedPhotos.some((favPhoto) => favPhoto.id === photo.id)
  );

  useEffect(() => {
    // Update 'favorited' state when 'favoritedPhotos' change
    setFavorited(favoritedPhotos.some((favPhoto) => favPhoto.id === photo.id));
  }, [favoritedPhotos, photo]);

  const handleClick = () => {
    addToFavorites();
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
