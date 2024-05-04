import React from "react";
import styles from "../../../styles/Main/Legs.module.css";

import background from "./images/background.png";

const Legs = () => {
  return (
    <div className={styles.legs}>
      <div className={styles.left_block}>
        <img src={background} alt="" />
      </div>

      <div className={styles.right_block}>
        <div className={styles.eco_card}>
          <h1 className={styles.eco_heading}>Eco Friendly</h1>
        </div>

        <div className={styles.heading_paragraph}>
          Econis is a Friendly Organic Store
        </div>

        <div className={styles.card_block_sed}>
          <h1 className={styles.heading_card_block}>
            Econis is a Friendly Organic Store
          </h1>
          <p className={styles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.card_block_sed}>
          <h1 className={styles.heading_card_block}>
            Learn How to Grow Yourself
          </h1>
          <p className={styles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className={styles.card_block_sed}>
          <h1 className={styles.heading_card_block}>
            Farming Strategies of Today
          </h1>
          <p className={styles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legs;
