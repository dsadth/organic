import React from "react";

import styles from "../../../styles/Main/Knees.module.css";

import background_arrow from "./images/background_arrow.png";
import arrow from "./images/arrow.png";
import Knees_Cards from "./Knees_Cards";

const Knees = () => {
  return (
    <div className={styles.knees}>
      <div className={styles.heading_block}>
        <h1 className={styles.heading}>Offer</h1>
        <h1 className={styles.heading_paragraph}>We Offer Organic For You</h1>
      </div>
      <button className={styles.button}>
        View All Product
        <img src={arrow} className={styles.arrow} alt="" />{" "}
        <img
          src={background_arrow}
          className={styles.arrow_background}
          alt=""
        />
      </button>

      <Knees_Cards />
    </div>
  );
};

export default Knees;
