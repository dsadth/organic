import React from "react";

import styles from "../../../styles/BlogSingle/Neck.module.css";

import background from "./images/background.png";
import logo from "./images/logo.png";

const Neck = () => {
  return (
    <div className={styles.neck_blog_single}>
      <div className={styles.background}>
        <img src={background} alt="" />

        <div className={styles.block_research}>
          <div className={styles.block_data_time}>
            <h1 className={styles.posted}> Posted On:</h1>

            <h1 className={styles.data_posted}>January 6, 2022</h1>

            <img className={styles.logo} src={logo} alt="" />

            <h1 className={styles.by}>By Rachi Card</h1>
          </div>

          <div className={styles.block_heading_block_research}>
            <h1 className={styles.research_heading}>
              Research More Organic Food
            </h1>

            <p className={styles.research_paragraph}>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neck;
