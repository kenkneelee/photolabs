import React, { useState, useEffect } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos } = props;
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // log updated favorites list on state change
  useEffect(() => {
    console.log("Favorites: ", favoritedPhotos);
  }, [favoritedPhotos]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist = {favoritedPhotos.length > 0} />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
      />
    </div>
  );
};

export default HomeRoute;
