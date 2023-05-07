import React, { useState, useContext, useEffect } from "react";

import CartIcon from "../CartItems/CartIcon/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfitemsInCart = items.reduce((curNumber, item) => {
    return curNumber + item.addToCartValue;
  }, 0);

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClasses = `${classes.cart} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.title}>Your Cart</span>
      <span className={classes.number_of_items}>{numberOfitemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
