import React, { useLayoutEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";

import classNames from "classnames";
import db from "../constants/firebase";

// enum for type of tracker, we only care about buttons for now
export enum TrackerType {
  BUTTON = "buttons",
}

interface TrackerProps {
  trackId: string;
  trackerType: TrackerType;

  className?: string;

  [props: string]: any;
}

const Tracker = ({ trackId, trackerType, className, ...props }: TrackerProps) => {
  const [value, setValue] = useState<number | string>(0);

  useLayoutEffect(() => {
    // we always want to listen, so no need to make an unsubscribe for later
    onSnapshot(
      query(collection(db, `clickTracker/${trackerType}/${trackId}`)),
      (snapshot) => {
        setValue(snapshot.size);
      },
      // basic error handle
      (error) => {
        setValue("Error grabbing snapshot");
        console.log(error);
      }
    );
  }, []);

  return (
    <div className={classNames(className, "tracker")} {...props}>
      <div>{value}</div>
    </div>
  );
};

export default Tracker;
