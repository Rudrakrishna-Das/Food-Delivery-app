import React, { useState, useEffect } from "react";
import MealsItems from "../MealItems/MealItems";
import Class from "./AvailableMeals.module.css";

const AvailableMeal = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [errorisPresent, setErrorIsPresent] = useState("");

  const foodFetchhandler = async () => {
    try {
      const response = await fetch(
        "https://food-delivery-app-5df87-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const DUMMY_MEALS = [];
      for (const meal in data) {
        DUMMY_MEALS.push({
          id: meal,
          name: data[meal].name,
          description: data[meal].description,
          price: data[meal].price,
        });
      }

      setLoadedMeals(DUMMY_MEALS);
    } catch (error) {
      setErrorIsPresent(error.message.toUpperCase());
    }
  };

  useEffect(() => {
    foodFetchhandler();
  }, []);

  const mealList = loadedMeals.map((meal) => {
    return (
      <MealsItems
        key={meal.id}
        id={meal.id}
        name={meal.name}
        des={meal.description}
        price={meal.price}
      />
    );
  });

  const mealStatus = (
    <p
      className={`${
        errorisPresent.trim() === ""
          ? Class["loading-text"]
          : Class["error-text"]
      }`}
    >
      {errorisPresent.trim() === "" ? "LOADING...." : errorisPresent}
    </p>
  );
  return (
    <div className={Class.meals}>
      <ul>{loadedMeals.length === 0 ? mealStatus : mealList}</ul>
    </div>
  );
};
export default AvailableMeal;
