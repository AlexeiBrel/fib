import React from 'react';
import classes from "./card-cover.module.css";

const CardCover = ({ image = '' }) => {
  return (
    <div
      className={classes.cardCover}
      style={{ backgroundImage: `url(${image})` }}
    />
  )
};

export default CardCover;