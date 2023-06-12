import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

const Overlay = (props) => {
  return <div className={classes.overlay} onClick={props.onClose} />;
};
const CartBox = (prop) => {
  const cartClass = `${
    !prop.children[prop.children.length - 1]
      ? classes.cart_items
      : classes.order_cart
  }`;

  return (
    <div className={cartClass}>
      <Card>{prop.children}</Card>
    </div>
  );
};
const Modal = (props) => {
  const parentEl = document.getElementById("overlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Overlay onClose={props.onClose} />, parentEl)}
      {ReactDOM.createPortal(<CartBox>{props.children}</CartBox>, parentEl)}
    </React.Fragment>
  );
};

export default Modal;
