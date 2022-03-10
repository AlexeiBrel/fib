import React from 'react';
import classes from "./payment-card.module.css";

const PaymentCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes.cardItem}>
        <div className={classes.cardImg}>
          <img src="/img/icons/shop.svg" alt=""/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={classes.cardItem}>
        <div className={classes.cardImg}>
          <img src="/img/icons/track.svg" alt=""/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={classes.cardItem}>
        <div className={classes.cardImg}>
          <img src="/img/icons/laptop.svg" alt=""/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className={classes.cardItem}>
        <div className={classes.cardImg}>
          <img src="/img/icons/expectation.svg" alt=""/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  );
};

export default PaymentCard;