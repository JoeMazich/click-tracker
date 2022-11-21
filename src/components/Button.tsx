import React, { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

import db from "../constants/firebase";

interface ButtonProps {
  id: string;

  onClick?: any;
  children?: any;

  [props: string]: any;
}

const Button = ({ id, onClick, children, ...props }: ButtonProps) => {
  const trackButtonClick = () => {
    addDoc(collection(db, `clickTracker/buttons/${id}`), { timestamp: new Date() });
  };

  return (
    <button
      onClick={() => {
        trackButtonClick();
        if (onClick) onClick();
      }}
      {...props}
    >
      <div className="children">{children}</div>
      <div className="sweep" />
    </button>
  );
};

export default Button;
