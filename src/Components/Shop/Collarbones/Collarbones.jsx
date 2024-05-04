import React, { Component } from "react";
import styles from "../../../styles/Shop/Collarbones.module.css";
import Items from "./Items";
export default class Collarbones extends Component {
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
        {
          id: 9,
          Category: "Health",
          Image: "Mung Bean.png",
          Heading: "Mung Bean",
          LastPrice: "$20.00",
          NowPrice: "$11.00",
          Stars: "stars.png",
        },
        {
          id: 10,
          Category: "Nuts",
          Image: "White Hazelnut.png",
          Heading: "Brown Hazelnut",
          LastPrice: "$20.00",
          NowPrice: "$12.00",
          Stars: "stars.png",
        },
        {
          id: 11,
          Category: "Fresh",
          Image: "Fresh Corn.png",
          Heading: "Eggs",
          LastPrice: "$20.00",
          NowPrice: "$17.00",
          Stars: "stars.png",
        },
        {
          id: 12,
          Category: "Fresh",
          Image: "Organic Almonds.png",
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
      <div className={styles.collarbones}>
        <div className={styles.items}>
          <Items item={this.state.item} />
        </div>
      </div>
    );
  }
}
