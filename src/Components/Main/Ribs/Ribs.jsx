import React from "react";
import styles from "../../../styles/Main/Ribs.module.css";

import image from "./images/Image (4).png";

import card from "./images/card.png";
import card_two from "./images/card_two.png";

import background_arrow from "./images/background_arrow.png"
import arrow from "./images/arrow.png"

const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <div className={styles.left_block}>
        <img className={styles.left_block_image} src={image} alt="" />
      </div>

      <div className={styles.right_block}>
        <h1 className={styles.about_us}>About Us</h1>

        <h1 className={styles.heading_paragraph}>
          We Believe in Working Accredited Farmers
        </h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div className={styles.card}>
          <img src={card} alt="" />
          <div className={styles.text_card}>
          <h1 className={styles.heading_card}>Organic Foods Only</h1>
          <p className={styles.paragraph_card}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          </div>
        </div>

        <div className={styles.card_two}>
          <img src={card_two} alt="" />
          <div className={styles.text_card}>
            <h1 className={styles.heading_card}>Quality Standards</h1>
            <p className={styles.paragraph_card}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
      </div>
      <button className={styles.button}>Shop Now <img src={arrow} className={styles.arrow} alt="" /> <img src={background_arrow} className={styles.arrow_background} alt="" /></button>
    </div>
  );
};

export default Ribs;
