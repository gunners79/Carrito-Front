import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //Creamos un estado con array vacio (agregado para el backend)
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  //agregado backend - setear estado
  const getProducts = async () => {
    await axios
      .get("http://localhost:4000/products")
      .then(({ data }) => setProducts(data.products));
  };

  //agregado backend - traer productos del carrito
  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:4000/products-cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };


  //modificado backend -cuando se actualiza el cart, se setea el local storage
  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  //modificado backend- recibe prod.- desestructura el prod.-hacemos un post a ruta de la api y enviamos un objeto con esas 3 propiedades
  const addItemToCart = async (products) => {
    const { nombre, src, precio } = products;

    await axios.post(
      "http://localhost:4000/products-cart",
      { nombre, src, precio }
    );

    getProducts();
    getProductsCart();
  };

  //editItemToCart recibe id, quer, cant. e implementa el if
  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(
          `http://localhost:4000/products-cart/${id}`
        )
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(
          `http://localhost:4000/products-cart/${id}?query=${query}`,
          {
            amount,
          }
        )
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  //backen- se modifico el value
  return (
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;


//mongodb://gunner_arg:aaabbb@cluster0.wkrinem.mongodb.net/database1
//http://localhost:4000


