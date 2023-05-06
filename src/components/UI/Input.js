import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.amount}>
      <label htmlFor={`amount_1`}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
