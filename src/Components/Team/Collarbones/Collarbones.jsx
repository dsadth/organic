import React, { Component } from "react";
import styles from "../../../styles/Team/Collarbones.module.css";
import Items from "./Items";

import first_person from "./images/first_person.png";
import two_person from "./images/two_person.png";
import three_person from "./images/three_person.png";
import four_person from "./images/four_person.png";
import five_person from "./images/five_person.png";
import six_person from "./images/six_person.png";

import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagramm from "./images/instagramm.png";

export default class Collarbones extends Component {
  render() {
    return (
      <div className={styles.collarbones_team}>
        <div className={styles.heading_block}>
          <h1 className={styles.heading}>Team</h1>
          <h1 className={styles.heading_paragraph}>Our Organic Experts</h1>
          <p className={styles.paragraph}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>

        <div className={styles.person_block}>
          <div className={styles.first_person}>
            <img className={styles.image} src={first_person} alt="" />
            <h1 className={styles.name}>Giovani Bacardo</h1>
            <h1 className={styles.role}>Farmer</h1>
            <div className={styles.first_social_block}>
              <img
                className={styles.first_social_image}
                src={facebook}
                alt=""
              />
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

          <div className={styles.four_person}>
            <img className={styles.image} src={four_person} alt="" />
            <h1 className={styles.name}>Riga Pelore</h1>
            <h1 className={styles.role}>Farmer</h1>
            <div className={styles.social_block}>
              <img className={styles.social_image} src={facebook} alt="" />
              <img className={styles.social_image} src={twitter} alt="" />
            </div>
          </div>

          <div className={styles.five_person}>
            <img className={styles.image} src={five_person} alt="" />
            <h1 className={styles.name}>Riga Pelore</h1>
            <h1 className={styles.role}>Farmer</h1>
            <div className={styles.social_block}>
              <img className={styles.social_image} src={instagramm} alt="" />
              <img className={styles.social_image} src={facebook} alt="" />
              <img className={styles.social_image} src={twitter} alt="" />
            </div>
          </div>

          <div className={styles.six_person}>
            <img className={styles.image} src={six_person} alt="" />
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
  }
}
