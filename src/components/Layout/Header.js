import React, { useState, useEffect } from "react";

import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import MyOrderButton from "./HeaderCartButton/MyOrderButton/MyOrderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <h1 className={classes.website_name}>ApnaMeals</h1>
          <MyOrderButton onClick={props.onOrderOpen} />
          <HeaderCartButton onClick={props.onOpen} />
        </nav>

        <img src={mealsImage} alt="table full of foods" />
      </header>
    </React.Fragment>
  );
};
export default Header;
