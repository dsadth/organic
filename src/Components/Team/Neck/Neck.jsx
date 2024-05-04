import React from "react";

import styles from "../../../styles/Team/Neck.module.css";

import background from "./images/background.png";

const Neck = () => {
  return (
    <div className={styles.neck_team}>
      <div className={styles.background}>
        <img className={styles.background} src={background} alt="" />
      </div>
    </div>
  );
};

export default Neck;
