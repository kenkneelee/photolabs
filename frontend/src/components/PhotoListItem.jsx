import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { data } = props;
  return (
    <div>
      <img src={data.imageSource}></img>
      <img src={data.profile}></img>
      <p>{data.username}</p>
      <p>
        {data.location.city}, {data.location.country}
      </p>
    </div>
  );
};

export default PhotoListItem;
