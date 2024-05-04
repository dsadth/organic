import React, { Component } from "react";

import styles from "../../../styles/Main/Belly.module.css";
import Items from "./Items";

import background_arrow from "./images/background_arrow.png";
import arrow from "./images/arrow.png";

export default class Belly extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [
        {
          id: 1,
          Category: "Vegetable",
          Image: "Calabrese Broccoli.png",
          Heading: "Calabrese Broccoli",
          LastPrice: "$20.00",
          NowPrice: "$13.00",
          Stars: "stars.png",
        },
        {
          id: 2,
          Category: "Fresh",
          Image: "Fresh Banana Fruites.png",
          Heading: "Fresh Banana Fruites",
          LastPrice: "$20.00",
          NowPrice: "$14.00",
          Stars: "stars.png",
        },
        {
          id: 3,
          Category: "Millets",
          Image: "White Nuts.png",
          Heading: "White Nuts",
          LastPrice: "$20.00",
          NowPrice: "$15.00",
          Stars: "stars.png",
        },
        {
          id: 4,
          Category: "Vegetable",
          Image: "Vegan Red Tomato.png",
          Heading: "Vegan Red Tomato",
          LastPrice: "$20.00",
          NowPrice: "$17.00",
          Stars: "stars.png",
        },
        {
          id: 5,
          Category: "Health",
          Image: "Mung Bean.png",
          Heading: "Mung Bean",
          LastPrice: "$20.00",
          NowPrice: "$11.00",
          Stars: "stars.png",
        },
        {
          id: 6,
          Category: "Nuts",
          Image: "Brown Hazelnut.png",
          Heading: "Brown Hazelnut",
          LastPrice: "$20.00",
          NowPrice: "$12.00",
          Stars: "stars.png",
        },
        {
          id: 7,
          Category: "Fresh",
          Image: "Eggs.png",
          Heading: "Eggs",
          LastPrice: "$20.00",
          NowPrice: "$17.00",
          Stars: "stars.png",
        },
        {
          id: 8,
          Category: "Fresh",
          Image: "Zelco Suji Elaichi Rusk.png",
          Heading: "Zelco Suji Elaichi Rusk",
          LastPrice: "$20.00",
          NowPrice: "$15.00",
          Stars: "stars.png",
        },
      ],
    };
  }
  render() {
    return (
      <div className={styles.belly}>
        <div className={styles.heading_categories}>
          <h1 className={styles.categories_heading}>Categories </h1>
          <h1 className={styles.our_products}>Our Products</h1>
        </div>

        <div className={styles.items}>
          <Items item={this.state.item} />
        </div>

        <button className={styles.button}>
          Load More <img src={arrow} className={styles.arrow} alt="" />{" "}
          <img
            src={background_arrow}
            className={styles.arrow_background}
            alt=""
          />
        </button>
      </div>
    );
  }
}
