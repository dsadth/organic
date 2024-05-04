import React from "react";

import styles from "../../../styles/ServicesSingle/Collarbones.module.css";

import image from "./images/image.png";

import desc_image_first from "./images/Photo (6).jpg";
import desc_image_two from "./images/Photo (7).jpg";

import img from "./images/img.png";
import imgtwo from "./images/imgtwo.png";

const Collarbones = () => {
  return (
    <div className={styles.collarbones_service_single}>
      <div className={styles.block}>
        <img className={styles.image} src={image} alt="" />

        <div className={styles.full_block_description}>
          <div className={styles.top_block_description}>
            <h1 className={styles.heading_top_block_description}>
              Organic Store Services
            </h1>

            <p className={styles.paragraph_top_block_description}>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.{" "}
            </p>
            <p className={styles.paragraph_two_top_block_description}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>

          <div className={styles.middle_block_description}>
            <div className={styles.middle_top_block_description}>
              <img
                className={styles.desc_image_first}
                src={desc_image_first}
                alt=""
              />

              <div className={styles.right_middle_top_block_description}>
                <h1
                  className={styles.heading_right_middle_top_block_description}
                >
                  Why Organic
                </h1>

                <p
                  className={
                    styles.paragraph_right_middle_top_block_description
                  }
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>

              <img
                className={styles.desc_image_two}
                src={desc_image_two}
                alt=""
              />

              <div className={styles.right_middle_bottom_block_description}>
                <h1
                  className={
                    styles.heading_right_middle_bottom_block_description
                  }
                >
                  Speciality Produce
                </h1>

                <p
                  className={
                    styles.paragraph_right_middle_bottom_block_description
                  }
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bottom_block_description}>
            <div className={styles.heading_bottom_block_description}>
              <h1 className={styles.heading_heading_bottom_block_description}>
                We farm your land
              </h1>
              <p className={styles.paragraph_heading_bottom_block_description}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </div>
            <img className={styles.img} src={img} alt="" />
            <img className={styles.imgtwo} src={imgtwo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collarbones;
