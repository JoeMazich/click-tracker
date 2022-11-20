import React, { useLayoutEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";

import classNames from "classnames";
import db from "../constants/firebase";

export enum TrackerType {
  BUTTON = "buttons",
}

interface TrackerProps {
  trackId: string;
  trackerType: TrackerType;

  className?: string;
}

const Tracker = ({ trackId, trackerType, className, ...props }: TrackerProps) => {
  const [value, setValue] = useState<number | string>(0);

  useLayoutEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, `clickTracker/${trackerType}/${trackId}`)),
      (snapshot) => {
        setValue(snapshot.size);
      },
      (error) => {
        setValue("Error grabbing snapshot");
        console.log(error);
      }
    );
  }, []);

  return (
    <div className={classNames(className, "tracker")} {...props}>
      <span>{value}</span>
    </div>
  );
};

export default Tracker;
