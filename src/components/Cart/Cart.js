import React from 'react';
import {useContext} from 'react';
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import CartProduct from "../CartProduct/CartProduct";
import "./style.css";

const Cart = () => {
    const { productsCart, totalProducts, clearCart } = useContext(CartContext);
  
    if (productsCart.length === 0) {
      return (
        <div className="container">
          <h2>
            Tu Carrito está vacío
            <Link to="/">
              <button className="btn btn-dark">Iniciar la Compra</button>
            </Link>
          </h2>
        </div>
      );
    }
  
    return (
      <div>
        <h2>Tu Carrito de Compras: </h2>
        <div className="container">
          <div className="row">
            {productsCart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <div className="d-flex flex-row align-item-center justify-content-center mt-3">
            <p className="total-text">Total: ${totalProducts}</p>
          </div>
          <div className="d-flex flex-row align-item-center justify-content-center">
            <button onClick={() => clearCart()} className="btn btn-dark">
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;