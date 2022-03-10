import React from 'react';
import classes from "./payment-delivery.module.css";
import PaymentCard from "./payment-card/payment-card";

const PaymentDelivery = () => {
  return (
    <div className={classes.paymenyDelivery}>
       <h2 className={classes.title}>Оплата и доставка</h2>
        <PaymentCard />
    </div>
  );
};

export default PaymentDelivery;