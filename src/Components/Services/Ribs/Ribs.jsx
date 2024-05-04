import React from "react";

import styles from "../../../styles/Services/Ribs.module.css";

import background from "./images/background.png";

import pause from "./images/pause.png";
const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <div className={styles.background}>
        <img src={background} alt="" />
      </div>

      <div className={styles.block_heading}>
        <h1 className={styles.heading}>Organic Only</h1>

        <h1 className={styles.paragraph_heading}>Everyday Fresh & Clean</h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the{" "}
        </p>

        <div className={styles.background_wheel_}>
          <img className={styles.pause} src={pause} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ribs;
