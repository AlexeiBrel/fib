import React from 'react';
import classes from "./new-product.module.css";
import NewProductItem from "./new-product-item/new-product-item";

const newProduct = [
  {
    image: '/img/products/pizza/item5.jpeg',
    title: 'FIB Микс',
    price: '20.90 руб',
    id: 1,
  },
  {
    image: '/img/products/pizza/item10.jpeg',
    title: 'Песто',
    price: '18.90',
    id: 2,
  },
  {
    image: '/img/products/pizza/item6.jpeg',
    title: 'Аррива',
    price: '15.90',
    id: 3,
  },
  {
    image: '/img/products/combo/item5.webp',
    title: 'Пицца и 2 закуски',
    price: '28.90 руб',
    id: 4,
  }
]


const NewProduct = () => {
  return (
    <div className={classes.newProduct}>
      <h2 className={classes.title}>Новинки</h2>
      <div className={classes.cardItem}>
        {newProduct.map(props => <NewProductItem props={props} key={props.id}/>)}
      </div>
    </div>
  );
};

export default NewProduct;