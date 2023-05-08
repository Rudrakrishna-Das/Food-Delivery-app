import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
  const closeOrderWindow = () => {
    props.onClick();
  };
  return (
    <React.Fragment>
      <div className={classes.order}>
        <h1>ORDER SUCCESSFUL</h1>
        <p>Thank You For Your ORDER. It is on your way.</p>
        <h3>ENJOY YOUR MEAL!</h3>
        <button className={classes.close} onClick={closeOrderWindow}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
};

export default Order;
