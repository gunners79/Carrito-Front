import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  const { editItemToCart } = useContext(CartContext);

  const { amount } = item;

  return (
    <div className={styles.cartItems}>
      <img src={item.src} alt={item.nombre} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.nombre}</p>
          <div className={styles.buttons}>
          <button onClick={() => editItemToCart(item._id, 'add', amount)}>AGREGAR</button>
          <button onClick={() => editItemToCart(item._id, 'del', amount)}>ELIMINAR</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            {item.amount}
            <p>Total: ${item.amount * item.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
