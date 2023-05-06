import React, { useRef, useState } from "react";

import classes from "./Meals.module.css";
import AvailableMeal from "./AvailableMeals/AvailableMeal";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = (props) => {
  return (
    <React.Fragment>
      <main>
        <MealsSummary />
      </main>
      <AvailableMeal />;
    </React.Fragment>
  );
};

export default Meals;
