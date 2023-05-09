import React from "react";
import classes from "./Input.module.css";
/*
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.amount}>
      { <label htmlFor={`amount_1`}>{props.label}</label> }
      <button
        type="button"
        className={classes.decrease}
        onClick={props.onDecrease}
      >
        -
      </button>
      <input ref={ref} {...props.input} disabled />
      <button
        type="button"
        className={classes.increase}
        onClick={props.onIncrease}
      >
        +
      </button>
    </div>
  );
});
*/
const Input = (props) => {
  // const increaseButton = props
  return (
    <div className={classes.amount}>
      {/* <label htmlFor={`amount_1`}>{props.label}</label> */}
      <button
        type="button"
        className={classes.decrease}
        onClick={props.onDecrease}
        disabled={props.onDecreaseButton}
      >
        -
      </button>
      <input {...props.input} disabled />
      <button
        type="button"
        className={classes.increase}
        onClick={props.onIncrease}
        disabled={props.onIncreaseButton}
      >
        +
      </button>
    </div>
  );
};

export default Input;
