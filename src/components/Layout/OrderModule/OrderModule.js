import { useContext } from "react";
import useInput from "../../../hooks/use-input";
import Modal from "../../UI/Modal";
import Class from "./OrderModule.module.css";
import CartContext from "../../../store/cart-context";

const OrderModule = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  // NAME

  const {
    value: nameValue,
    valueIsValid: nameValueIsValid,
    hasError: nameHasError,
    shakeIsPresent: nameShakeIsPresent,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandlr,
  } = useInput((value) => value.trim() !== "");

  // ADDRESS

  const {
    value: addressValue,
    valueIsValid: addressValueIsValid,
    hasError: addressHasError,
    shakeIsPresent: addressShakeIsPresent,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandlr,
  } = useInput((value) => value.trim() !== "");

  // FORM

  let formIsValid = false;

  if (nameValueIsValid && addressValueIsValid) formIsValid = true;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    nameBlurHandlr();
    addressBlurHandlr();
    if (!formIsValid) return;
    const orderDetails = {
      name: nameValue,
      address: addressValue,
    };
    props.onSubmit(orderDetails);
  };
  const formCloseHandler = () => {
    props.onCancel();
  };

  const nameErrorClass = nameHasError
    ? `${Class.invalid} ${nameShakeIsPresent && Class.shake}`
    : Class.valid;
  const addressErrorClass = addressHasError
    ? `${Class.invalid} ${addressShakeIsPresent && Class.shake}`
    : Class.valid;
  return (
    <div className={Class.border}>
      <form className={Class.details_form} onSubmit={formSubmitHandler}>
        <div className={Class["order-form"]}>
          <div className={Class["form-control"]}>
            <label className={Class["position-name"]} htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandlr}
              className={nameErrorClass}
            />
            {nameHasError && (
              <p className={`${Class["error-text"]}`}>Name cannot be empty</p>
            )}
          </div>
          <div className={Class["form-control"]}>
            <label className={Class["position-name"]} htmlFor="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              value={addressValue}
              className={addressErrorClass}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandlr}
            />
            {addressHasError && (
              <p className={`${Class["error-text"]}`}>
                Address cannot be empty
              </p>
            )}
          </div>
        </div>
        <div className={Class["form-action-button"]}>
          <button
            type="button"
            className={Class["btn-cancel"]}
            onClick={formCloseHandler}
          >
            Cancel
          </button>
          <button className={Class["btn-submit"]}>Submit</button>
        </div>
      </form>
    </div>
  );
};
export default OrderModule;
