import "./styles/App.css";

import React, { useEffect } from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

import Button from "./components/Button";
import db from "./constants/firebase";

function App() {
  useEffect(() => {
    const q = query(collection(db, "clickTracker/buttons/button-1"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log(querySnapshot.size);
    });
  }, []);

  return (
    <div className="App">
      <Button id="button-1">Hello</Button>
    </div>
  );
}

export default App;
