import React from "react";

import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Just creating some sample data with identical ids. will be updated with unique ids later
const samplePhotosData = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = samplePhotosData.map((photo) => {
    return <PhotoListItem data={photo} key={photo.id} />;
  });
  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
