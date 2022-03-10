import React from 'react';
import classes from "./card-item.module.css";
import CardCover from "../card-cover/card-cover";

const CardItem = ({props}) => {
  return (
    <div className={classes.cardItem}>
      <CardCover image={props.image}/>
      <div className={classes.cartItemDetails}>
        <p className={classes.cardItemTitle}>{props.title}</p>
        <p className={classes.cardItemText}>{props.text}</p>
      </div>
      <div className={classes.priceBlock}>
        <span className={classes.price}>{props.price}</span>
        <button type='button' className={classes.cardItemBtn}>В корзину</button>
      </div>
    </div>
  );
};

export default CardItem;