import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartItems from "./components/Layout/CartItems/CartItems";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState();

  const openCart = () => {
    setCartIsOpen(true);
  };
  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      {cartIsOpen && <CartItems onClose={closeCart} />}
      <Header onOpen={openCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
