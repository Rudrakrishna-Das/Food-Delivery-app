import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Meals />
    </React.Fragment>
  );
}

export default App;
