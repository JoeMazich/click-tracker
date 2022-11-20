import "./styles/App.css";

import Tracker, { TrackerType } from "./components/Tracker";

import Button from "./components/Button";
import React from "react";

function App() {
  return (
    <div className="App">
      <Button id="button-1">Hello</Button>
      <Tracker trackId="button-1" trackerType={TrackerType.BUTTON} />
    </div>
  );
}

export default App;
