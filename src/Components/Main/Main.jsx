import React from "react";

import styles from "../../styles/Main/Main.module.css";

import Header from "../../App/Header";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Belly from "./Belly/Belly";
import Hips from "./Hips/Hips";
import Knees from "./Knees/Knees";
import Legs from "./Legs/Legs";
import CardsCookies from "./Cards_Cookies/CardsCookies";
import News from "./News/News";
import Subscribe from "../../FullTimeComponents/Subscribe";
import Footer from "../../FullTimeComponents/Footer";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Neck />
      <Collarbones />
      <Ribs />
      <Belly />
      <Hips />
      <Knees />
      <Legs />
      <CardsCookies />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Main;
