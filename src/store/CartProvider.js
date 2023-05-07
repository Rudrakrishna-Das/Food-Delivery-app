import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (prevState, action) => {
  // ADD LOGIC

  if (action.type === "ADD") {
    const updatedTotalAmount =
      prevState.totalAmount + action.item.price * action.item.addToCartValue;
    const existingItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = prevState.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        addToCartValue:
          existingItem.addToCartValue + action.item.addToCartValue,
      };

      updatedItems = [...prevState.items];
      updatedItems[existingItemIndex] = updatedItem;
      console.log(updatedItem);
    } else {
      updatedItems = prevState.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  // REMOVE LOGIC
  if (action.type === "REMOVE") {
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = prevState.items[existingCartItemIndex];
    const updatedTotalAmount = prevState.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.addToCartValue === 1) {
      updatedItems = prevState.items.filter(
        (item) => item.id !== existingCartItem.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        addToCartValue: existingCartItem.addToCartValue - 1,
      };

      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  // DEFAULT LOGIC
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
