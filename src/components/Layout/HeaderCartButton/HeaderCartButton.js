import React, { useState, useContext } from "react";

import CartIcon from "../CartItems/CartIcon/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const numberOfitemsInCart = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.addToCartValue;
  }, 0);

  return (
    <button className={classes.cart} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.number_of_items}>{numberOfitemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
