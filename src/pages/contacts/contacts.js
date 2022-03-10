import React from 'react';
import Slider from "../../components/slider/slider";
import Map from "../../components/map/map";
import classes from "./contacts.module.css";

const Contacts = () => {
  return (
    <main>
      <section>
        <Slider />
      </section>
      <section className={classes.map}>
        <Map />
        <div className={classes.contact}>
          <p className={classes.phone}>+375 33 680 19 44</p>
          <p className={classes.address}>ул. Проспект Вернадского 86В</p>
          <p>Доставка и самовывоз 10:00 — 23:00</p>
        </div>
      </section>
    </main>
  );
};

export default Contacts;