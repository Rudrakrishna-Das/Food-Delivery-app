import React from "react";

import cart from "../../../assets/Shopping_Cart.png";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.cart}>
      <span></span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.number_of_items}>0</span>
    </button>
  );
};

export default HeaderCartButton;
