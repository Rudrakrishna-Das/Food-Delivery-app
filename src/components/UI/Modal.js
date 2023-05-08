import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Overlay = () => {
  return <div className={classes.overlay} />;
};
const CartBox = (props) => {
  return (
    <div className={classes.cart_items}>
      <Card>{props.children}</Card>
    </div>
  );
};
const Modal = (props) => {
  const parentEl = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay />, parentEl)}
      {ReactDOM.createPortal(<CartBox>{props.children}</CartBox>, parentEl)}
    </React.Fragment>
  );
};

export default Modal;
