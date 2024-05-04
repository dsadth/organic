import React from "react";

import styles from "../../../styles/About/Hips.module.css";

import first_image from "./images/first_image.png";
import two_image from "./images/two_image.png";
import three_image from "./images/three_image.png";
import four_image from "./images/four_image.png";

const Hips = () => {
  return (
    <div className={styles.hips}>
      <div className={styles.heading_block}>
        <h1 className={styles.heading}>About Us</h1>

        <h1 className={styles.heading_paragraph}>What We Offer for You</h1>
      </div>
      <div className={styles.block_images}>
        <img className={styles.image} src={first_image} alt="" />
        <img className={styles.image} src={two_image} alt="" />
        <img className={styles.image} src={three_image} alt="" />
        <img className={styles.image} src={four_image} alt="" />
      </div>
    </div>
  );
};

export default Hips;
