import React, { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

import classNames from "classnames";
import db from "../constants/firebase";

interface ButtonProps {
  id: string;

  className?: string;
  onClick?: any;
  children?: any;

  [props: string]: any;
}

const Button = ({ id, className, onClick, children, ...props }: ButtonProps) => {
  const trackButtonClick = () => {
    addDoc(collection(db, `clickTracker/buttons/${id}`), { timestamp: new Date() });
  };

  return (
    <button
      className={classNames(className)}
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
