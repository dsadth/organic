import React, { useState } from "react";
import styles from "../../../styles/About/Belly.module.css";

import first_person from "./images/first_person.png";
import two_person from "./images/two_person.png";
import three_person from "./images/three_person.png";

import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagramm from "./images/instagramm.png";

const Belly = () => {
  const [block, setBlock] = useState(false);

  return (
    <div className={styles.belly}>
      <div className={styles.top_block}>
        <h1 className={styles.heading}>Team</h1>

        <h1 className={styles.heading_paragraph}>Our Organic Experts</h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>

      <div className={styles.person_block}>
        <div className={styles.first_person}>
          <img className={styles.image} src={first_person} alt="" />
          <h1 className={styles.name}>Giovani Bacardo</h1>
          <h1 className={styles.role}>Farmer</h1>
          <div className={styles.first_social_block}>
          <img className={styles.first_social_image} src={facebook} alt="" />
          <img className={styles.first_social_image} src={twitter} alt="" />
          </div>
        </div>

        <div className={styles.two_person}>
          <img className={styles.image} src={two_person} alt="" />
          <h1 className={styles.name}>Marianne Loreno</h1>
          <h1 className={styles.role}>Designer</h1>
          <div className={styles.social_block}>
          <img className={styles.social_image} src={instagramm} alt="" />
          <img className={styles.social_image} src={facebook} alt="" />
          <img className={styles.social_image} src={twitter} alt="" />
          </div>
        </div>

        <div className={styles.three_person}>
          <img className={styles.image} src={three_person} alt="" />
          <h1 className={styles.name}>Riga Pelore</h1>
          <h1 className={styles.role}>Farmer</h1>
          <div className={styles.social_block}>
          <img className={styles.social_image} src={instagramm} alt="" />
          <img className={styles.social_image} src={facebook} alt="" />
          <img className={styles.social_image} src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belly;
