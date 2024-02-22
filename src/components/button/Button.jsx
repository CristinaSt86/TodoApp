import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      className="primary-button"
      {...props}
      onClick={props.onClick}
      onSubmit={props.handleData}
    >
      {props.children}
    </button>
  );
};

export default Button;
