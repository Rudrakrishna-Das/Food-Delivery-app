import React, { useContext } from "react";
import ReactDOM from "react-dom";

import classes from "./CartItems.module.css";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const Overlay = (props) => {
    return <div className={classes.overlay} onClick={props.onClose}></div>;
  };

  const CartBox = () => {
    return (
      <div className={classes.cart_items}>
        <Card>
          <div className={classes.item_details}>
            <ul>
              {cartCtx.items.map((item) => {
                return (
                  <li className={classes.details} key={item.id}>
                    <div>
                      <h2 className={classes.name}>{item.name}</h2>
                      <div className={classes.price_qty}>
                        <span className={classes.price}>{item.price}</span>
                        <span className={classes.quantity}>x 1</span>
                      </div>
                    </div>
                    <div className={classes.items_action}>
                      <button>
                        <span className={classes.decrease}>-</span>
                      </button>
                      <button>
                        <span className={classes.increase}>+</span>
                      </button>
                    </div>
                  </li>
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
    <React.Fragment>
      ReactDOM.createPortal(
      <Overlay />, document.getElementById("overlay")) ReactDOM.createPortal(
      <CartBox />, document.getElementById("cart"))
    </React.Fragment>
  );
};

export default CartItems;
