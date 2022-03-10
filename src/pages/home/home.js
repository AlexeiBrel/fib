import React from 'react';
import classes from "./home.module.css";
import Slider from "../../components/slider/slider";
import Product from "../../components/product/product";
import NewProduct from "../../components/new-product/new-product";
import PaymentDelivery from "../../components/payment-delivery/payment-delivery";


const Home = () => {
  return (
    <main className={classes.home}>
      <section>
        <Slider />
      </section>
      <section>
        <NewProduct />
        <Product title='Пицца' index='0'/>
      </section>
      <section className={classes.payment}>
        <PaymentDelivery />
      </section>
    </main>
  );
};

export default Home;