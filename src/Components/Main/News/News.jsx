import React from "react";

import styles from "../../../styles/Main/News.module.css";

import background_arrow from "./images/background_arrow.png";
import arrow from "./images/arrow.png";
import left_image from "./images/image_capusta.png";
import right_image from "./images/image_tomato.png";
import logo from "./images/logo.png";

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.block_heading}>
        <h1 className={styles.heading_news}>News</h1>

        <h1 className={styles.heading_paragraph_news}>
          Discover weekly content about organic food, & more
        </h1>

        <button className={styles.button}>
          More News
          <img src={arrow} className={styles.arrow} alt="" />{" "}
          <img
            src={background_arrow}
            className={styles.arrow_background}
            alt=""
          />
        </button>

        <div className={styles.bottom_block}>
          <div className={styles.left_image}>
            <div className={styles.date}>
              <h1 className={styles.date_number}>25 </h1>
              <h1 className={styles.date_month}>Nov</h1>
            </div>
            <img className={styles.image_left} src={left_image} alt="" />

            <div className={styles.block_description}>
              <img className={styles.logo} src={logo} alt="" />

              <h1 className={styles.name}>By Rachi Card</h1>

              <h1 className={styles.heading_description}>
                The Benefits of Vitamin D & How to Get It
              </h1>

              <p className={styles.paragraph_description}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>

              <button className={styles.button_bottom_block}>
                Read More
                <img src={arrow} className={styles.arrow} alt="" />{" "}
                <img
                  src={background_arrow}
                  className={styles.arrow_background}
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className={styles.right_image}>
            <img className={styles.image_right} src={right_image} alt="" />
            <div className={styles.date_right}>
              <h1 className={styles.date_number_right}>25 </h1>
              <h1 className={styles.date_month_right}>Nov</h1>
            </div>

            <div className={styles.block_description_right}>
              <img className={styles.logo} src={logo} alt="" />

              <h1 className={styles.name}>By Rachi Card</h1>

              <h1 className={styles.heading_description}>
                Our Favourite Summertime Tommeto
              </h1>

              <p className={styles.paragraph_description}>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>

              <button className={styles.button_bottom_block}>
                Read More
                <img src={arrow} className={styles.arrow} alt="" />{" "}
                <img
                  src={background_arrow}
                  className={styles.arrow_background}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
