import React from "react";

import styles from "../../../styles/Main/Hips.module.css";

import background from "./images/background.png";
import background_card from "./images/Chart.png";

import Swiper from "./Swiper";

const Hips = () => {
  return (
    <div className={styles.hips}>
      <div className={styles.background}>
        <Swiper />
        <div className={styles.wheels_card_block}>
          <div className={styles.card}>
            <h1 className={styles.number}>100%</h1>
            <h1 className={styles.names}>Organic</h1>
            <img src={background_card} alt="" />
          </div>
          <div className={styles.two_card}>
            <h1 className={styles.two_number}>285</h1>
            <h1 className={styles.two_names}>Active Product</h1>
            <img src={background_card} alt="" />
          </div>
          <div className={styles.three_card}>
            <h1 className={styles.three_number}>350+</h1>
            <h1 className={styles.three_names}>Organic Orchads</h1>
            <img src={background_card} alt="" />
          </div>
          <div className={styles.four_card}>
            <h1 className={styles.four_number}>25+</h1>
            <h1 className={styles.four_names}>Years of Farming</h1>
            <img src={background_card} alt="" />
          </div>
        </div>
        <img className={styles.background} src={background} alt="" />
      </div>
    </div>
  );
};

export default Hips;
