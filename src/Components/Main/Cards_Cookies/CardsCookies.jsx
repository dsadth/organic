import React from "react";

import styles from "../../../styles/Main/Cards_Cookies.module.css";

import first_image from "./images/first_image.jpg";
import two_image from "./images/two_image.png";
import three_image from "./images/first_image.jpg";

const CardsCookies = () => {
  return (
    <div className={styles.cards_cookies}>
      <div className={styles.card_block}>
        <div className={styles.first_card}>
          <div className={styles.heading_block}>
            <h1 className={styles.heading}>Organic Juice</h1>
          </div>
          <img src={first_image} alt="" />
        </div>
        <div className={styles.two_card}>
          <div className={styles.heading_block}>
            <h1 className={styles.heading}>Organic Food</h1>
          </div>
          <img className={styles.card_image} src={two_image} alt="" />
        </div>
        <div className={styles.three_card}>
          <div className={styles.heading_block}>
            <h1 className={styles.heading}>Nuts Cookis</h1>
          </div>
          <img className={styles.card_image} src={three_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardsCookies;
