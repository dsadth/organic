import React, { Component } from "react";

import styles from "../../../styles/Shop/Collarbones.module.css";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item_block}>
        <div className={styles.item}>
          <h1 className={styles.category}>{this.props.item.Category}</h1>

          <img className={styles.image} src="" alt="" />

          <h1 className={styles.heading}>{this.props.item.Heading}</h1>

          <h1 className={styles.last_price}>{this.props.item.LastPrice}</h1>

          <h1 className={styles.now_price}>{this.props.item.NowPrice}</h1>

          <img
            className={styles.stars}
            src={"./img/Main/" + this.props.item.Stars}
            alt=""
          />
        </div>
      </div>
    );
  }
}
