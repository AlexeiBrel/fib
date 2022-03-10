import React from 'react';
import Slider from "../../components/slider/slider";
import Product from "../../components/product/product";

const Combo = () => {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section>
        <Product title='Комбо' index='1'/>
      </section>
    </main>
  );
};

export default Combo;