import React, { useCallback, useEffect, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MyOrders from "./components/Order/MyOrders";
import CartItems from "./components/Layout/CartItems/CartItems";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState();
  const [myOrdeIsOpen, setMyOrderIsOpen] = useState();
  const [orderdItems, setOrderedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeliverd, setIsDelivered] = useState(false);
  const [mealAdded, setMealAdded] = useState(false);

  const foodHandler = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://food-delivery-app-5df87-default-rtdb.firebaseio.com/orders.json"
    );

    const data = await response.json();

    let arrayOfMeal = [];

    for (const key in data) {
      for (const orders in data[key]) {
        const { order } = data[key][orders];
        const meals = order.map((meal) => {
          return { ...meal, user: key };
        });
        arrayOfMeal.push(meals);
      }
    }
    setOrderedItems(arrayOfMeal.flat());
    setIsLoading(false);
  }, []);

  setTimeout(() => {
    setIsDelivered(true);
  }, 6000);

  const openCart = () => {
    setCartIsOpen(true);
  };
  const closeCart = () => {
    setCartIsOpen(false);
  };

  const openOrder = () => {
    setMyOrderIsOpen(true);
  };

  const closeOrder = () => {
    setMyOrderIsOpen(false);
  };
  const mealAdd = () => {
    setMealAdded(true);
  };

  useEffect(() => {
    setMealAdded(false);
    foodHandler();
  }, [foodHandler, mealAdded]);
  return (
    <CartProvider>
      {cartIsOpen && <CartItems onClose={closeCart} onAddMeal={mealAdd} />}
      {myOrdeIsOpen && (
        <MyOrders
          onOrderClose={closeOrder}
          onOrder={orderdItems}
          onLoading={isLoading}
          onDelivered={isDeliverd}
        />
      )}
      <Header onOpen={openCart} onOrderOpen={openOrder} />
      <Meals />
    </CartProvider>
  );
}

export default App;
