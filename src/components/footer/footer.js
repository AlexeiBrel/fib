import React from 'react';
import classes from "./footer.module.css";
import SocialLinks from "./social-links/social-links";
import {FaCcVisa, FaPaypal} from 'react-icons/fa';
import {SiQiwi} from 'react-icons/si';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.logo}>
          <img src="/img/icons/logo.png" alt="Logo"/>
        </div>
        <ul className={classes.payment}>
          <li><FaCcVisa/></li>
          <li><FaPaypal/></li>
          <li><SiQiwi/></li>
        </ul>
        <SocialLinks/>
      </div>
      <div className={classes.footerBottom}>
        <p>YaBao Все праав защищены © 2022</p>
      </div>
    </footer>
  );
};

export default Footer;