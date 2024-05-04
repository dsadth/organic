import React from "react";

import styles from "../../../styles/Main/Hips.module.css";
import image from "./images/image.jpg";
import stars from "./images/stars.png";
import Swiper from "./Swiper";

const SwiperFirstBlock = () => {
  return (
    <div className={styles.swiper_first_block}>
      <h1 className={styles.heading}>Testimonial</h1>

      <h1 className={styles.heading_paragraph}>What Our Customer Saying?</h1>

      <img className={styles.image} src={image} alt="" />

      <img className={styles.stars} src={stars} alt="" />

      <p className={styles.paragraph}>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been.
      </p>

      <h1 className={styles.name}>Sara Taylor</h1>

      <h1 className={styles.role}>Consumer</h1>
    </div>
  );
};

export default SwiperFirstBlock;
