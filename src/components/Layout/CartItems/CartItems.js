import React, { useContext, useState } from "react";

import CartView from "./CartView/CartView";
import Modal from "../../UI/Modal";
import OrderModule from "../OrderModule/OrderModule";
import Order from "../../Order/Order";
import CartContext from "../../../store/cart-context";

import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const [orderIsPlaced, setOrderIsPlaced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [errorIsPresent, setErrorIsPresent] = useState("");
  const [userName, setUserName] = useState("");
  const cartCtx = useContext(CartContext);

  let { items } = cartCtx;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, addToCartValue: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
    if (items.length === 1 && items[0].addToCartValue === 1) {
      setOrderIsPlaced(false);
    }
  };
  const orderPlaceHandler = () => {
    setOrderIsPlaced(true);
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

  const orderSubmitHandler = async (user) => {
    setUserName(user.name);

    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://food-delivery-app-5df87-default-rtdb.firebaseio.com/orders/${user.name}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            user: user,
            order: items,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong! Please try Again!");
      }
      cartCtx.orderPlaced();
    } catch (err) {
      setErrorIsPresent(err.message);
    }
    setIsSubmitting(false);
    setOrderIsPlaced(false);
    setOrderSubmitted(true);
    props.onAddMeal();
  };
  const cartContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.amount}>
        <div className={classes.total_amount}>
          <h2>Total Amount</h2>
          <span>${totalAmount}</span>
        </div>
        {orderIsPlaced && (
          <OrderModule onSubmit={orderSubmitHandler} onCancel={props.onClose} />
        )}
        {!orderIsPlaced && (
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
        )}
      </div>
    </React.Fragment>
  );
  const fetchingStatus = <p className={classes.fetch}>SENDING....</p>;
  const errorStatus = (
    <React.Fragment>
      <p className={classes.err}>{errorIsPresent}</p>
      <button className={classes["err-close"]} onClick={props.onClose}>
        Close
      </button>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {isSubmitting && fetchingStatus}
      {!isSubmitting && !orderSubmitted && cartContent}
      {!isSubmitting && errorIsPresent !== "" && errorStatus}
      {!isSubmitting && orderSubmitted && errorIsPresent === "" && (
        <Order onClick={props.onClose} onUserName={userName} />
      )}
    </Modal>
  );
};

export default CartItems;
