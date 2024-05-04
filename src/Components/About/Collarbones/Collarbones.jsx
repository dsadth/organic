import React from "react";

import styles from "../../../styles/About/Collarbones.module.css";

import salad from "./images/salad.png";
import tractor from "./images/tractor.png";
import plant from "./images/zavod.png";

import background_arrow from "./images/background_arrow.png";
import arrow from "./images/arrow.png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.left_block}>
        <img src={salad} alt="" />
      </div>

      <div className={styles.right_block}>
        <h1 className={styles.heading}>About Us</h1>

        <h1 className={styles.heading_paragraph}>
          We do Creative Things for Success
        </h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div className={styles.bottom_right_block}>
          <div className={styles.tractor_block}>
            <img className={styles.tractor_image} src={tractor} alt="" />
            <h1 className={styles.tractor_heading}>
              Modern Agriculture Equipment
            </h1>
          </div>

          <div className={styles.plant_block}>
            <img className={styles.plant_image} src={plant} alt="" />
            <h1 className={styles.plant_heading}>
              Modern Agriculture Equipment
            </h1>
          </div>

          <button className={styles.button}>
          Explore More
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
  );
};

export default Collarbones;
