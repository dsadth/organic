import React from "react";

import styles from "../../../styles/About/Ribs.module.css";

import product from "./images/product.png";
import resistance from "./images/resistance.png";
import background from "./images/background.png";

import logo_cart from "./images/logo_cart.png";
import logo_page from "./images/logo_page.png";
import logo_clock from "./images/logo_clock.png";
import logo_card from "./images/logo_card.png";

const Ribs = () => {
  return (
    <div className={styles.ribs}>
      <div className={styles.left_block}>
        <h1 className={styles.heading}>Why Choose us?</h1>

        <h1 className={styles.heading_paragraph}>
          We do not buy from the open market & traders.
        </h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard the 1500s, when an unknown
        </p>

        <div className={styles.left_top_block}>
          <img className={styles.image} src={product} alt="" />
          <h1 className={styles.heading_bottom_blocks}>
            Simply dummy text of the printing and typesetting industry Lorem
            Ipsum
          </h1>
        </div>

        <div className={styles.left_bottom_block}>
          <img className={styles.image} src={resistance} alt="" />
          <h1 className={styles.heading_bottom_blocks}>
            Simply dummy text of the printing and typesetting industry Lorem
            Ipsum
          </h1>
        </div>
      </div>

      <div className={styles.right_block}>
        <img className={styles.background} src={background} alt="" />
      </div>

      <div className={styles.bottom_block}>
        <div className={styles.blocks}>
          <img className={styles.image_card} src={logo_cart} alt="" />
          <h1 className={styles.heading_card}>Return Policy</h1>
          <p className={styles.paragraph_card}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.blocks}>
          <img className={styles.image_card} src={logo_page} alt="" />
          <h1 className={styles.heading_card}>100% Fresh</h1>
          <p className={styles.paragraph_card}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.blocks}>
          <img className={styles.image_card} src={logo_clock} alt="" />
          <h1 className={styles.heading_card}>Support 24/7</h1>
          <p className={styles.paragraph_card}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.blocks}>
          <img className={styles.image_card} src={logo_card} alt="" />
          <h1 className={styles.heading_card}>Secured Payment</h1>
          <p className={styles.paragraph_card}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ribs;
