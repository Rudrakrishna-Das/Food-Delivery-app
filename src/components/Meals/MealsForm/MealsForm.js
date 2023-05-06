import { useRef } from "react";

import Input from "../../UI/Input";
import classes from "./MealsForm.module.css";

const MealsForm = (props) => {
  const addToCartValue = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const cartValue = +addToCartValue.current.value;

    props.onAddToCart(cartValue);
  };
  return (
    <form className={classes.mealitem_form} onSubmit={submitHandler}>
      <Input
        ref={addToCartValue}
        label="CartValue"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 0,
        }}
      />
      <div className={classes.action}>
        <button type="submit">Add To Cart</button>
      </div>
    </form>
  );
};

export default MealsForm;
