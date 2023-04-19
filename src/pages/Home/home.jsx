import React, { useContext } from "react";
import ProductData from "../../data/data.json";
import Product from "../../components/Product/product";
import "./home.css";
import Cart from "../../components/Cart/cart";
import { CartContext } from "../../context/cart.context";

const Home = () => {
  const { cartData } = useContext(CartContext);

  return (
    <>
      <div className="container">
        <h1>PRODUCTOS</h1>
        <span id="product_count">&#x1f6d2; {cartData.length} Productos</span>
        <div className="productList">
          {ProductData.map((item, index) => {
            return (
              <Product
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Cart/>
    </>
  );
};

export default Home;
