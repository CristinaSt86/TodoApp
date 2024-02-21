import "./Input.css";

const Input = ({completed, ...rest}) => {
  return <input className="primary-input" {...rest} />;
};


export default Input;
