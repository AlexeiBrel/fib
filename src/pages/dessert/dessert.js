import React from 'react';
import Slider from "../../components/slider/slider";
import Product from "../../components/product/product";

const Dessert = () => {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section>
        <Product title='Десерты' index='2'/>
      </section>
    </main>
  );
};

export default Dessert;