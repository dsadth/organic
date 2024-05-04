import React from "react";

import styles from "../../../styles/PortfolioSingle/Neck.module.css";

import background from "./images/background.png";

const Neck = () => {
  return (
    <div className={styles.neck_services_single}>
      <img src={background} alt="" />

      <div className={styles.raspberry}>
        <h1 className={styles.heading}>Black Raspberry</h1>

        <p className={styles.paragraph}>
          Established fact that a reader will be distracted by the readable
          content of a page when looking a layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed{" "}
        </p>

        <div className={styles.right_block}>
          <div className={styles.heading_right_block}>
            <h1 className={styles.heading_right}>Date</h1>
            <h1 className={styles.heading_right}>Client</h1>
            <h1 className={styles.heading_right}>Category</h1>
            <h1 className={styles.heading_right}>Service</h1>
          </div>

          <div className={styles.two_point_block}>
            <h1 className={styles.two_point}>:</h1>
            <h1 className={styles.two_point}>:</h1>
            <h1 className={styles.two_point}>:</h1>
            <h1 className={styles.two_point}>:</h1>
          </div>

          <div className={styles.paragraph_right_block}>
            <p className={styles.paragraph_right}>December 4, 2022</p>
            <p className={styles.paragraph_right}>Kevin Martin</p>
            <p className={styles.paragraph_right}>Agriculture , Eco</p>
            <p className={styles.paragraph_right}>Organic Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neck;
