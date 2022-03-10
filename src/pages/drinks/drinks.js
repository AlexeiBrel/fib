import React from 'react';
import Slider from "../../components/slider/slider";
import Product from "../../components/product/product";

const Drinks = () => {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section>
        <Product title='Напитки' index='3'/>
      </section>
    </main>
  );
};

export default Drinks;