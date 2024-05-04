import React from "react";

import styles from "../../../styles/Blog/Neck.module.css";

import background from "./images/background.png";

const Neck = () => {
  return (
    <div className={styles.neck_blog}>
      <div className={styles.background}>
        <img src={background} alt="" />
      </div>
    </div>
  );
};

export default Neck;
