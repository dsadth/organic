import React, { useState } from "react";

import styles from "../styles/Header.module.css";

import Logo from "./images/Logo.png";
import Organick from "./images/Organick.png";
import search_background from "./images/search_background.png";
import search from "./images/search.png";
import cart_background from "./images/cart_background.png";
import cart from "./images/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [page, setPage] = useState(true);

  const [offpage, setOffPage] = useState(true);

  const handleClick = () => {
    setPage(!page);
  };

  const handleOff = () => {
    setOffPage();
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_block}>
        <img src={Logo} className={styles.logo} alt="" />

        <img src={Organick} className={styles.organick} alt="" />

        <div className={styles.block_menu_list}>
          <Link to="/">
            <h1 className={styles.menu_list}>Home</h1>
          </Link>

          <Link to="/about">
            <h1 className={styles.menu_list}>About</h1>
          </Link>

          <h1 onClick={handleClick} className={styles.menu_list}>
            <span>Pages</span>
          </h1>

          {!page ? (
            <div
              className={styles.page_menu}
              style={{ display: !setOffPage ? "none" : "block" }}
            >
              <Link to="/service">
                <h1 className={styles.page_service}>Service</h1>
              </Link>

              <Link to="/portfolio">
                <h1 className={styles.page_portfolio}>Portfilio</h1>
              </Link>

              <Link to="/team">
                <h1 className={styles.page_team}>Team</h1>
              </Link>

              <Link to="/blog">
                <h1 className={styles.page_blog}>Blog</h1>
              </Link>

              <Link to="/contact">
                <h1 className={styles.page_contact}>Contact</h1>
              </Link>
              
            </div>
          ) : (
            true
          )}

          <Link to="/shop">
            <h1 className={styles.menu_list}>Shop</h1>
          </Link>
          <h1 className={styles.menu_list}>Projects</h1>
          <h1 className={styles.menu_list}>News</h1>
        </div>

        <div className={styles.input_block}>
          <input type="text" className={styles.input} />
          <img
            className={styles.search_background}
            src={search_background}
            alt=""
          />
          <img className={styles.search} src={search} alt="" />
        </div>

        <div className={styles.cart_block}>
          <img
            className={styles.cart_background}
            src={cart_background}
            alt=""
          />
          <img className={styles.cart} src={cart} alt="" />

          <h1 className={styles.cart_numbers}>Cart (0) </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
