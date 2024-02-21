import React from "react";
import "./Input.css";

const TextArea = ({ completed, ...rest}) => {
  return <textarea className="primary-input textarea" rows="3" {...rest} />;
};

export default TextArea;
