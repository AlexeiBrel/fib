import React from 'react';
import Slider from "../../components/slider/slider";
import classes from "./pizza.module.css";
import Product from "../../components/product/product";

const Pizza = () => {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section className={classes.products}>
        <Product title='Пицца' index='0'/>
      </section>
    </main>
  );
};

export default Pizza;