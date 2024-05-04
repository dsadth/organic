import React from "react";

import styles from "../../styles/Services/Services.module.css";
import Header from "../../App/Header";
import Neck from "./Neck/Neck";
import Collarbones from "./Collarbones/Collarbones";
import Ribs from "./Ribs/Ribs";
import Footer from "./Footer/Footer";

const Services = () => {
  return (
    <div className={styles.services}>
      <Header />
      <Neck />
      <Collarbones />
      <Ribs />
      <Footer />
    </div>
  );
};

export default Services;
