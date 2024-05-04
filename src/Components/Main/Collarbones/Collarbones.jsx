import React from "react";

import styles from "../../../styles/Main/Collarbones.module.css";

import image from "./images/image.png";
import image_right from "./images/image (2).png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.left_image}>

        <h1 className={styles.heading_image}>Natural!!</h1>
        <h1 className={styles.heading_paragraph_image}>Get Garden Fresh Fruits</h1>

        <img className={styles.image} src={image} alt="" />
      </div>

      <div className={styles.right_image}>
      <h1 className={styles.heading_image}>Offer!!</h1>
        <h1 className={styles.heading_paragraph_image}>Get 10% offon Vegetables</h1>
        <img className={styles.image_right} src={image_right} alt="" />
      </div>


    </div>
  );
};

export default Collarbones;
