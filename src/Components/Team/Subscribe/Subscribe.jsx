import React from "react";

import styles from "../../../styles/Team/Subscribe.module.css";

import background from "./images/background.jpg";

const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe_block}>
        <h1 className={styles.heading_subscribe}>
          Subscribe to our Newsletter
        </h1>

        <input
          type="text"
          placeholder="Your Email Address"
          className={styles.input}
        />

        <button className={styles.button}>Subscribe</button>
        <img className={styles.background} src={background} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
