import React from "react";

import styles from "../../../styles/Contact/Collarbones.module.css";

import banana from "./images/image.jpg";

import message from "./images/message.png";
import phone from "./images/phone.png";

import insta from "./images/insta.png";
import face from "./images/face.png";
import twitter from "./images/twitter.png";
import pateron from "./images/patreon.png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones}>
      <div className={styles.banana}>
        <img className={styles.banana} src={banana} alt="" />
      </div>

      <div className={styles.right_block}>
        <h1 className={styles.heading}>
          We'd love to talk about how we can work together.
        </h1>

        <p className={styles.paragraph}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div className={styles.contact_block}>
          <div className={styles.message_block}>
            <img className={styles.message_logo} src={message} alt="" />
            <h1 className={styles.message_heading}>Massege</h1>
            <p className={styles.message_paragraph}>support@organic.com</p>
          </div>

          <div className={styles.phone_block}>
            <img className={styles.phone_logo} src={phone} alt="" />
            <h1 className={styles.phone_heading}>Contact Us</h1>
            <p className={styles.phone_number}>+01 123 456 789</p>
          </div>

          <div className={styles.contact_social_logo}>
            <img  src={insta} alt="" />
            <img className={styles.contact_logos} src={face} alt="" />
            <img className={styles.contact_logos} src={twitter} alt="" />
            <img className={styles.contact_logos} src={pateron} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
