import React, { Component } from "react";

import styles from "../../../styles/Blog/Collarbones.module.css";
import { Link } from "react-router-dom";

export default class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.item_block}>
          <div className={styles.white_block}>
            <img
              className={styles.logo}
              src={"./img/Blog/" + this.props.item.white_block.logo}
              alt=""
            />
            <h1 className={styles.by}>{this.props.item.white_block.by}</h1>
            <h1 className={styles.heading}>
              {this.props.item.white_block.heading}
            </h1>

            <h1 className={styles.paragraph}>
              {this.props.item.white_block.paragraph}
            </h1>
            <a className={styles.link} href={this.props.item.white_block.link}>
              <div className={styles.arrow_wheel}>
                <img
                  className={styles.read_wheel}
                  src={
                    "./img/Blog/" + this.props.item.white_block.read_wheel_arrow
                  }
                  alt=""
                />
                <img
                  className={styles.read_arrow}
                  src={"./img/Blog/" + this.props.item.white_block.read_arrow}
                  alt=""
                />
              </div>

              <Link to={this.props.item.white_block.link}></Link>

              <h1 className={styles.read}>
                {this.props.item.white_block.ReadMore}
              </h1>
            </a>
          </div>

          <div className={styles.date_wheel}>
            <h1 className={styles.date_first}>{this.props.item.date_first}</h1>
            <h1 className={styles.date_mounth}>
              {this.props.item.date_mounth}
            </h1>
          </div>

          <img
            className={styles.image}
            src={"./img/Blog/" + this.props.item.image}
            alt=""
          />
        </div>
      </div>
    );
  }
}
