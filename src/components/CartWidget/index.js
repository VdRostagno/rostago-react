import React from "react";
import "./styles.css";
import shopping_cart from "../../assets/images/shopping-cart.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { qtyProducts } = useContext(CartContext);
  return (
    <div>
      <button className="cart-btn">
        <img src={shopping_cart} alt="Cart Icon" className="cart-widget" />
      </button>
      <div className="button">
      <p className="cart-cantidad">{qtyProducts}</p>
      </div>
    </div>
  );
};

export default CartWidget;
