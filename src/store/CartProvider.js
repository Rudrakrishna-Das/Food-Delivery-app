import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (prevState, action) => {
  if (action.type === "ADD") {
    const updatedItem = prevState.items.concat(action.item);
    const updatedTotalAmount =
      prevState.totalAmount + action.item.price * action.item.addToCartValue;

    return { items: updatedItem, totalAmount: updatedTotalAmount };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartValue, dispatchCartValue] = useReducer(cartReducer, defaultState);
  const addToCart = (item) => {
    dispatchCartValue({ type: "ADD", item: item });
  };
  const removeFromCart = (id) => {
    dispatchCartValue({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartValue.items,
    totalAmount: cartValue.totalAmount,
    addItem: addToCart,
    removeItem: removeFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
