import React, { useContext, useState } from "react";

import CartView from "./CartView/CartView";
import Modal from "../../UI/Modal";
import CartContext from "../../../store/cart-context";

import classes from "./CartItems.module.css";
import Order from "../../Order/Order";

const CartItems = (props) => {
  const [orderIsPlaced, setOrderIsPlaced] = useState(false);

  const cartCtx = useContext(CartContext);

  let { items } = cartCtx;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, addToCartValue: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderPlaceHandler = () => {
    cartCtx.orderPlaced();
    setOrderIsPlaced(true);
  };
  const orderClose = () => {
    setOrderIsPlaced(false);
    props.onClose();
  };
  const closeButtonClass = `${
    items.length > 0 ? classes.close : classes.close_only
  }`;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItems = (
    <div className={classes.item_details}>
      <ul>
        {items.map((item) => {
          return (
            <CartView
              key={item.id}
              id={item.id}
              name={item.name}
              addToCart={item.addToCartValue}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          );
        })}
      </ul>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!orderIsPlaced && cartItems}
      {!orderIsPlaced && (
        <div className={classes.amount}>
          <div className={classes.total_amount}>
            <h2>Total Amount</h2>
            <span>${totalAmount}</span>
          </div>
          <div className={classes.amount_action}>
            <button className={closeButtonClass} onClick={props.onClose}>
              Close
            </button>
            {items.length > 0 && (
              <button className={classes.order} onClick={orderPlaceHandler}>
                Order
              </button>
            )}
          </div>
        </div>
      )}
      {orderIsPlaced && <Order onClick={orderClose} />}
    </Modal>
  );
};

export default CartItems;
