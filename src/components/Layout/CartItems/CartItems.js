import React, { useContext } from "react";
import ReactDOM from "react-dom";

import classes from "./CartItems.module.css";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";
import CartView from "./CartView/CartView";
import Modal from "../../UI/Modal";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, addToCartValue: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const CartBox = () => {
    return (
      <div className={classes.cart_items}>
        <Card>
          <div className={classes.item_details}>
            <ul>
              {cartCtx.items.map((item) => {
                console.log(item);
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

          <div className={classes.amount}>
            <div className={classes.total_amount}>
              <h2>Total Amount</h2>
              <span>${totalAmount}</span>
            </div>
            <div className={classes.amount_action}>
              <button className={classes.close} onClick={props.onClose}>
                Close
              </button>
              {cartCtx.items.length > 0 && (
                <button className={classes.order}>Order</button>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  };
  return (
    <Modal>
      <CartBox />
    </Modal>
  );
};

export default CartItems;
