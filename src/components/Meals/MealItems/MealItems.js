import { useContext } from "react";

import classes from "./MealsItems.module.css";
import MealsForm from "../MealsForm/MealsForm";
import CartContext from "../../../store/cart-context";

const MealsItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const cartHandler = (prop) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      addToCartValue: prop,
    });
  };
  return (
    <li id="fullCartItem" className={classes.items}>
      <div id="meals" className={classes.item_details}>
        <h3 id="name">{props.name}</h3>
        <div id="description" className={classes.meal_description}>
          {props.des}
        </div>
        <div id="price" className={classes.meal_price}>
          {price}
        </div>
      </div>

      <div className={classes.cart_amount}>
        <MealsForm onAddToCart={cartHandler} />
      </div>
    </li>
  );
};

export default MealsItems;
