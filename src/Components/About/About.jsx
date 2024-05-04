import React from "react";
import Header from "../../App/Header";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

import styles from "../../styles/About/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <Neck />
      <Collarbones />
      <Ribs />
      <Belly />
      <Hips />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
