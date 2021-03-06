import React from 'react';
import classes from "./title.module.css";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Title;