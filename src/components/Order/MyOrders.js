import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./MyOrders.module.css";
// const DUMMY_MEALS = [
//   { id: "m1", name: "Sushi", OrderQuantity: 4, totalPrice: 24 },
//   { id: "m2", name: "Burger", OrderQuantity: 2, totalPrice: 14 },
// ];

const MyOrder = (props) => {
  const orderdItems = props.onOrder;
  const isLoading = props.onLoading;
  const isDeliverd = props.onDelivered;

  const deliveryClass = !isDeliverd ? classes.pending : classes.delivered;
  const deliveryText = !isDeliverd ? "Delivery Pending" : "DELEVERED";

  const meals = orderdItems.map((meal, i) => {
    return (
      <li className={classes["ordered-items"]} key={meal.id + i}>
        <div className={classes["item-details"]}>
          <div className={classes.name}>
            <h2>MealName ---- {meal.name}</h2>
            <h4>Total Ordered ---- {meal.addToCartValue}</h4>
          </div>
          <h4 className={classes.price}>Total Price ---- {meal.price}$</h4>
        </div>

        <p className={deliveryClass}>{deliveryText}</p>
      </li>
    );
  });

  let content = <p className={classes.mid}>You didn't order anything yet</p>;
  if (!isLoading && orderdItems.length > 0) content = meals;
  if (isLoading) content = <p className={classes.mid}>Loading....</p>;
  return (
    <div className={classes.order}>
      <Modal onClose={props.onOrderClose}>
        <h1 className={classes["order-title"]}>My Orders</h1>
        <ul className={classes["my-orders"]}>{content}</ul>
        <button
          className={classes["close-my-order"]}
          onClick={props.onOrderClose}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default MyOrder;
