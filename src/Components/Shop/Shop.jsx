import React from "react";

import styles from "../../styles/Shop/Shop.module.css";
import Header from "../../App/Header";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <Header />
      <Neck />
      <Collarbones />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Shop;
