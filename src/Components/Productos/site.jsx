import React from "react";
import Products from "../Products";
import Cart from "../Cart";

import styles from "./styles.module.scss";

const Site = () => {
  return (
    <div className={styles.Productos}>
      <Cart />
      <Products />
    </div>
  );
};

export default Site;
/*<Cart />
      <Products />   */
