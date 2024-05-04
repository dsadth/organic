import React from "react";
import styles from "../../../styles/Contact/Ribs.module.css";
import image from "./images/image.jpg";
import point from "./images/point.png";
const Ribs = () => {
  return (
    <div className={styles.ribs_contact}>
      <div className={styles.image}>


        <div className={styles.page_block_location}>
          <h1 className={styles.heading_location}>Location</h1>

          <h1 className={styles.heading_our_farms}>Our Farms</h1>

          <p className={styles.paragraph_location}>
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using.
          </p>

          <div className={styles.block_point_location}>
            <img className={styles.point} src={point} alt="" />
            <h1 className={styles.country_city}>New York, USA:</h1>
            <h1 className={styles.street}>
              299 Park Avenue New York, New York 10171
            </h1>
          </div>
          <div className={styles.block_point_location}>
            <img className={styles.point} src={point} alt="" />
            <h1 className={styles.country_city}>London, UK:</h1>
            <h1 className={styles.street}>
              30 Stamford Street, London SE1 9LQ
            </h1>
          </div>
        </div>
        <img className={styles.page_image} src={image} alt="" />
      </div>
    </div>
  );
};

export default Ribs;
