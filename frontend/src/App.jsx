import React from "react";

import "./App.scss";
import HomeRoute from "./components/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <HomeRoute />
    </div>
  );
};

export default App;
