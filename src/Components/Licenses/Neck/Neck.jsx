import React from "react";

import styles from "../../../styles/Licenses/Neck.module.css";

import background from "./images/background.png";

const Neck = () => {
  return (
    <div className={styles.neck}>
      <div className={styles.background}>
        <img className={styles.background} src={background} alt="" />
      </div>

      <div className={styles.licenses_block}>
        <div className={styles.licenses_block_first}>
          <h1 className={styles.heading_licenses_block_first}>
            Icon & Graphics
          </h1>

          <p className={styles.paragraph_licenses_block_first}>
            Icons and Graphics are manually designed by the VictorFlow Templates
            team. You may download these and edit them to fit your website
            without asking for permission or providing credit.
          </p>

          <p className={styles.paragraph_two_licenses_block_first}>
            Upon purchasing Software UI Kit Template our team grants you a
            nonexclusive, worldwide copyright license to download, copy, modify,
            and use the icons.
          </p>
        </div>

        <div className={styles.licenses_block_two}>
          <h1 className={styles.photography}>Photography</h1>

          <p className={styles.paragraph_licenses_block_two}>
            All images used in the Organick Webflow Template are licensed for
            free personal and commercial use. If you'd like to use any specific
            image, you can check the licenses and download the images for free
            on Unsplash, Pexels‍. And Freepik.
          </p>

          <h1 className={styles.heading_first_block_licenses_block_two}>
            Unsplash
          </h1>

          <p className={styles.paragraph_first_block_licenses_block_two}>
            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image
            8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image
            15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21,
            Image 22, Image 23, Image 24, Image 25,
          </p>

          <div className={styles.two_block_licenses_block_two}>
            <h1 className={styles.heading_two_first_block_licenses_block_two}>
              Pixcel
            </h1>

            <p className={styles.paragraph_two_first_block_licenses_block_two}>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17,
            </p>
          </div>
        </div>

        <div className={styles.licenses_block_three}>
          <h1 className={styles.heading_licenses_block_three}>Font</h1>

          <p className={styles.paragraph_licenses_block_three}>
            Organick template uses free licensed Google Fonts. Please check
            <span> Roboto, Yellowtail</span> and <span>Open Sans</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neck;
