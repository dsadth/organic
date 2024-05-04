import React, { Component } from "react";
import Items from "./Items";
import styles from "../../../styles/Portfolio/Collarbones.module.css";

export default class Collarbones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          image: "image (1).png",
          heading: "Green & Tasty Lemon",
          paragraph: "Fruits",
        },
        {
          id: 2,
          image: "image (2).png",
          heading: "Organic Carrot",
          paragraph: "Farmer",
        },
        {
          id: 3,
          image: "image (3).png",
          heading: "Organic Betel Leaf",
          paragraph: "Leaf",
        },
        {
          id: 4,
          image: "image (4).png",
          heading: "Natural Tommato",
          paragraph: "Fruits",
        },
        {
          id: 5,
          image: "image (5).png",
          heading: "Black Raspberry",
          paragraph: "Farmer",
          link: "/portfolioSingle",
        },
        {
          id: 6,
          image: "image (6).png",
          heading: "Honey Orange",
          paragraph: "Farmer",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className={styles.item_block_props}>
          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
