import React from "react";

import styles from "../../../styles/PortfolioSingle/Collarbones.module.css";

import carrot from "./images/carrot.png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones_service_single}>
      <div className={styles.block_about}>
        <div className={styles.description_block_about_first}>
          <h1 className={styles.heading_description_block_about_first}>
            About The Farm:
          </h1>

          <p className={styles.paragraph_description_block_about_first}>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.{" "}
          </p>

          <p className={styles.paragraph_two_description_block_about_first}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>

        <div className={styles.description_block_about_two}>
          <img src={carrot} alt="" />

          <h1 className={styles.paragraph_description_block_about_two}>
            The Organic Products
          </h1>
        </div>

        <div className={styles.description_block_about_three}>
          <h1 className={styles.heading_description_block_about_three}>
            How To Farm:
          </h1>

          <p className={styles.paragraph_description_block_about_three}>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.{" "}
          </p>

          <p className={styles.paragraph_two_description_block_about_three}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>

        <div className={styles.description_block_about_four}>
          <h1 className={styles.heading_description_block_about_four}>
            Conclusion:
          </h1>

          <p className={styles.paragraph_description_block_about_four}>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.{" "}
          </p>

          <p className={styles.paragraph_two_description_block_about_four}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
