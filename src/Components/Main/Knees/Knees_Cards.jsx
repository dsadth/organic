import React, { Component } from "react";
import Items from "./Items";
import styles from "../../../styles/Main/Knees.module.css";

export default class Knees_Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          Category: "Vegetable",
          Image: "Mung Bean.png",
          Heading: "Mung Bean",
          LastPrice: "$20.00",
          NowPrice: "$11.00",
          Stars: "stars.png",
        },
        {
          id: 2,
          Category: "Vegetable",
          Image: "Brown Hazelnut.png",
          Heading: "Brown Hazelnut",
          LastPrice: "$20.00",
          NowPrice: "$12.00",
          Stars: "stars.png",
        },
        {
          id: 3,
          Category: "Vegetable",
          Image: "Onion.png",
          Heading: "Onion",
          LastPrice: "$20.00",
          NowPrice: "$17.00",
          Stars: "stars.png",
        },
        {
          id: 4,
          Category: "Vegetable",
          Image: "Cabbage.png",
          Heading: "Cabbage",
          LastPrice: "$20.00",
          NowPrice: "$17.00",
          Stars: "stars.png",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.items}>
        <Items item={this.state.item} />
      </div>
    );
  }
}
