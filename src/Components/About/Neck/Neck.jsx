import React from "react";

import styles from "../../../styles/About/Neck.module.css";

import background from "./images/background.png";
import pattern from "./images/pattern.png";

const Neck = () => {
  return (
    <div className={styles.neck}>
        
      <div className={styles.pattern}>
        <img className={styles.pattern} src={pattern} alt="" />
      </div>

      <div className={styles.background}>
        <h1 className={styles.heading}>About Us</h1>
        <img className={styles.background_image} src={background} alt="" />
      </div>

    </div>
  );
};

export default Neck;
