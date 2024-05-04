import React from "react";

import styles from "../../../styles/Blog/Footer.module.css";

import logo from "./images/logo.png";
import logo_text from "./images/logo_text.png";

import insta from "./images/1.png";
import face from "./images/2.png";
import twitter from "./images/3.png";
import p from "./images/4.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_block}>
        <div className={styles.left_block}>
          <h1 className={styles.heading}>Contact Us</h1>

          <div className={styles.contact_blocks_email}>
            <h1 className={styles.email}>Email</h1>
            <p className={styles.email_adress}>needhelp@Organia.com</p>
          </div>

          <div className={styles.contact_blocks_phone}>
            <h1 className={styles.phone}>Phone</h1>
            <p className={styles.phone_number}>666 888 888</p>
          </div>

          <div className={styles.contact_blocks_street}>
            <h1 className={styles.street}>Address</h1>
            <p className={styles.street_map}>88 road, borklyn street, USA</p>
          </div>
        </div>

        <div className={styles.border_left}></div>

        <div className={styles.middle_block}>
          <img className={styles.logo} src={logo} alt="" />
          <img className={styles.logo_text} src={logo_text} alt="" />
          <p className={styles.paragraph}>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          \
          <div className={styles.contact_block}>
            <img className={styles.contact_image} src={insta} alt="" />
            <img className={styles.contact_image} src={face} alt="" />
            <img className={styles.contact_image} src={twitter} alt="" />
            <img className={styles.contact_image} src={p} alt="" />
          </div>
        </div>


        <div className={styles.border_two}></div>

        <div className={styles.right_block}>
          <h1 className={styles.heading_right_block}>Utility Pages</h1>

          <div className={styles.utility_block}>
            <h1 className={styles.utility_list}>Style Guide</h1>
            <h1 className={styles.utility_list}>404 Not Found</h1>
            <h1 className={styles.utility_list}>Password Protected</h1>
            <Link to="/licenses">
              <h1 className={styles.utility_list}>Licences</h1>
            </Link>
            <h1 className={styles.utility_list}>Changelog</h1>
          </div>


        </div>

        <div className={styles.border_bottom}></div>

        <h1 className={styles.footer_copyright}>Copyright © <span>Organick</span></h1>
      </div>
    </div>
  );
};

export default Footer;
