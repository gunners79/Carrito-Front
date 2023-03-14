import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import styles from "./styles.module.scss";


const Products = () => {
  const { addItemToCart, products } = useContext(CartContext);

  //se modifico el return por backend
  return (
    <div className={styles.productsContainer}>
      {products &&
        products.map((products, i) => (
          <div key={i} className={styles.products}>
            <img src={products.src} alt={products.nombre} />
            <div>
              <p>
                {products.nombre} - ${products.precio}
              </p>
            </div>
            {!products.inCart ? (
              <button onClick={() => addItemToCart(products)}>
                Agregar al carrito
              </button>
            ) : (
              <button> En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
