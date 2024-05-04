import React from "react";
import styles from "../../../styles/Services/Collarbones.module.css";

import icon_first from "./images/Icon.png";
import icon_two from "./images/Icon-1.png";
import icon_three from "./images/Icon-2.png";

import icon_four from "./images/Icon-4.png";
import icon_five from "./images/Icon-5.png";
import icon_six from "./images/Icon-6.png";

import image from "./images/image.png";

import background_arrow from "./images/background_arrow.png";
import arrow from "./images/arrow.png";
import { Link } from "react-router-dom";
const Collarbones = () => {
  return (
    <div className={styles.collarbones_services}>
      <div className={styles.block_heading}>
        <h1 className={styles.heading}>What we Grow</h1>
        <h1 className={styles.paragraph_heading}>
          Better Agriculture for Better Future
        </h1>
      </div>

      <div className={styles.left_block}>
        <div className={styles.block_left_grow}>
          <img className={styles.left_icon} src={icon_first} alt="" />
          <h1 className={styles.heading_block_left_grow}>Dairy Products</h1>
          <p className={styles.paragraph_block_left_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.block_left_grow}>
          <img className={styles.left_icon} src={icon_two} alt="" />
          <h1 className={styles.heading_block_left_grow}>Store Services</h1>
          <p className={styles.paragraph_block_left_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.block_left_grow}>
          <img className={styles.left_icon} src={icon_three} alt="" />
          <h1 className={styles.heading_block_left_grow}>Delivery Services</h1>
          <p className={styles.paragraph_block_left_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
      </div>

      <div className={styles.image_backpack}>
        <img className={styles.image_backpack} src={image} alt="" />
      </div>

      <div className={styles.right_block}>
        <div className={styles.block_right_grow}>
          <img className={styles.right_icon} src={icon_four} alt="" />
          <h1 className={styles.heading_block_right_grow}>
            Agricultural Services
          </h1>
          <p className={styles.paragraph_block_right_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.block_right_grow}>
          <img className={styles.right_icon} src={icon_five} alt="" />
          <h1 className={styles.heading_block_right_grow}>Organic Products</h1>
          <p className={styles.paragraph_block_right_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.block_right_grow}>
          <img className={styles.right_icon} src={icon_six} alt="" />
          <h1 className={styles.heading_block_right_grow}>Fresh Vegetables</h1>
          <p className={styles.paragraph_block_right_grow}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremqlaudantium Sed ut perspiciatis.
          </p>
        </div>
      </div>

      <Link to="/serviceSingle">
        <button className={styles.button}>
          Explore More <img src={arrow} className={styles.arrow} alt="" />{" "}
          <img
            src={background_arrow}
            className={styles.arrow_background}
            alt=""
          />
        </button>
      </Link>
    </div>
  );
};

export default Collarbones;
