import React from "react";

import styles from "../../../styles/Main/Neck.module.css";

import background from "./images/background.png";
import background_image from "./images/Background_image.png";

import background_arrow from "./images/background_arrow.png"
import arrow from "./images/arrow.png"

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.background}>
        <img className={styles.background} src={background} alt="" />
        <img
          className={styles.background_images}
          src={background_image}
          alt=""
        />
      </div>

      <h1 className={styles.heading_natural_food}>100% Natural Food</h1>
      <h1 className={styles.heading_choose_the_best}>Choose the best healthier way <br />of life</h1>
      <button className={styles.button}>Explore Now <img src={arrow} className={styles.arrow} alt="" /> <img src={background_arrow} className={styles.arrow_background} alt="" /></button>
    </div>
  );
};

export default Neck;
