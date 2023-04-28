import React from "react";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className={classes.website_name}>ReactMeals</h1>
        <HeaderCartButton />
      </nav>
      <img src={mealsImage} alt="table full of foods" />
    </header>
  );
};
export default Header;
