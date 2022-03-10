import React from 'react';
import classes from "./menu.module.css";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <ul>
        <li> <Link to='/pizza'>Пицца</Link> </li>
        <li> <Link to='/dessert'>Десерты</Link> </li>
        <li> <Link to='/drinks'>Напитки</Link> </li>
        <li> <Link to='/combo'>Комбо</Link> </li>
        <li> <Link to='/contacts'>Контакты</Link> </li>
      </ul>
    </nav>
  );
};

export default Menu;