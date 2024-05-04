import React, { Component } from "react";

import styles from "../../../styles/Portfolio/Collarbones.module.css"
import { Link } from "react-router-dom";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item_block}>
        <div className={styles.item}>
        <a className={styles.link} href={this.props.item.link}><Link to={this.props.item.link}></Link></a>
        <img  className={styles.image} src={"./img/Portfolio/Collarbones/" + this.props.item.image} alt="" />
        <h1 className={styles.heading} >{this.props.item.heading}</h1>
        <p className={styles.paragraph} >{this.props.item.paragraph}</p>
        </div>
      </div>
    );
  }
}
