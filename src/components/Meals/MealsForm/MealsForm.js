import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealsForm.module.css";

const MealsForm = (props) => {
  // const addToCartValue = useRef();
  const [cartValue, setCartValue] = useState(0);
  const [decreseBtnIsDisabled, setDecreseBtnIsDisabled] = useState(true);
  const [increseBtnIsDisabled, setIncreseBtnIsDisabled] = useState(false);

  const increaseHandler = () => {
    if (cartValue === 4) {
      setCartValue((prevValue) => prevValue + 1);
      setIncreseBtnIsDisabled(true);
    } else {
      setCartValue((prevValue) => prevValue + 1);
      setDecreseBtnIsDisabled(false);
    }
  };

  const decreaseHandler = () => {
    if (cartValue === 5) {
      setCartValue((prevValue) => prevValue - 1);
      setIncreseBtnIsDisabled(false);
    } else if (cartValue === 1) {
      setCartValue((prevValue) => prevValue - 1);
      setDecreseBtnIsDisabled(true);
    } else {
      setCartValue((prevValue) => prevValue - 1);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const cartValue = +addToCartValue.current.value;

    props.onAddToCart(cartValue);
  };
  return (
    <form className={classes.mealitem_form} onSubmit={submitHandler}>
      <Input
        // label="CartValue"
        // ref={addToCartValue}
        onIncreaseButton={increseBtnIsDisabled}
        onDecreaseButton={decreseBtnIsDisabled}
        onIncrease={increaseHandler}
        onDecrease={decreaseHandler}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          value: cartValue,
        }}
      />

      <div className={classes.action}>
        <button type="submit">Add To Cart</button>
      </div>
    </form>
  );
};

export default MealsForm;
