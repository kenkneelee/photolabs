import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [favorited, setFavorited] = useState(false);
  const handleClick = () => {
    setFavorited(!favorited);
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
