import React from 'react';
import classes from "./new-product-item.module.css";

const NewProductItem = ({ props, image = '' }) => {
  return (
    <div className={classes.newProductItem}>
        <div className={classes.image} style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className={classes.newProductText}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>{props.price}</p>
        </div>
    </div>
  );
};

export default NewProductItem;