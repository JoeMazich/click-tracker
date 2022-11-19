import React from "react";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  onClick?: any;
  children?: any;
}

const Button = ({ className, onClick, children, ...props }: ButtonProps) => {
  const trackButtonClick = () => {};

  return (
    <button
      className={classNames(className, "button")}
      onClick={() => {
        trackButtonClick();
        onClick();
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
