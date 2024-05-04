import React, { Component } from "react";

import styles from "../../../styles/Blog/Collarbones.module.css";
import Items from "./Items";

export default class Collarbones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (1).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
          },
        },

        {
          id: 2,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (2).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
          },
        },

        {
          id: 3,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (3).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
          },
        },

        {
          id: 4,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (4).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
            link: "/blogSingle",
          },
        },

        {
          id: 5,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (5).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
          },
        },

        {
          id: 6,
          date_first: "25",
          date_mounth: "Nov",
          date_wheel: "",
          image: "image (6).png",
          white_block: {
            logo: "logo.png",
            by: "By Rachi Card",
            heading: "The Benefits of Vitamin D & How to Get It",
            paragraph:
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            ReadMore: "Read More",
            read_wheel_arrow: "wheel_arrow.png",
            read_arrow: "arrow.png",
          },
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.collarbones_blog}>
        <div className={styles.items_blog}>
          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
