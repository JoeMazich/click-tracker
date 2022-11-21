import "./styles/App.css";

import Tracker, { TrackerType } from "./components/Tracker";

import Button from "./components/Button";
import React from "react";

function App() {
  return (
    <div className="layout">
      <div>
        <Button
          id="button-1"
          onClick={() => {
            console.log("Shared!");
          }}
        >
          Share
        </Button>
        <Tracker trackId="button-1" trackerType={TrackerType.BUTTON} />
      </div>
      <div>
        <Button
          id="button-2"
          onClick={() => {
            console.log("Submitted!");
          }}
        >
          Submit
        </Button>
        <Tracker trackId="button-2" trackerType={TrackerType.BUTTON} />
      </div>
      <div>
        <Button
          className="special-button"
          id="button-3"
          onClick={() => {
            console.log("Canceled!");
          }}
        >
          Cancel
        </Button>
        <Tracker trackId="button-3" trackerType={TrackerType.BUTTON} />
      </div>
      <div>
        <Button
          id="button-4"
          onClick={() => {
            console.log("Fire!");
          }}
        >
          🔥
        </Button>
        <Tracker trackId="button-4" trackerType={TrackerType.BUTTON} />
      </div>
    </div>
  );
}

export default App;
