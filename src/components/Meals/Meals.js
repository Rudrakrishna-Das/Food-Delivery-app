import React from "react";

import classes from "./Meals.module.css";
import Card from "../UI/Card";

const Meals = () => {
  return (
    <Card>
      <ul>
        <li>
          <div className={classes.item_details}>
            <h3>Sushi</h3>
            <div className={classes.meal_description}>
              Finest fish and veggies
            </div>
            <div className={classes.meal_price}>$22.99</div>
          </div>

          <div className={classes.cart_amount}>
            <form className={classes.mealitem_form}>
              <div className={classes.amount}>
                <label for="amount_m1">Amount</label>
                <input id="amount_m1" type="number" min="1" max="5" />
              </div>
              <div classname={classes.action}>
                <button type="submit" className={classes.btn}>
                  +Add
                </button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default Meals;
