import React from 'react';
import {HiOutlineUser, HiOutlineShoppingBag} from "react-icons/hi";
import Menu from "./menu/menu";
import {Link} from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>
          <Link to='/'><img src="/img/icons/logo.png" alt="Logo"/></Link>
        </div>
        <Menu />
        <div className={classes.btn}>
          <button type='button' className={classes.user}> <HiOutlineUser /></button>
          <button type='button' className={classes.cart}><HiOutlineShoppingBag /></button>
        </div>
    </header>
  );
};

export default Header;