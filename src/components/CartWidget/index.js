import React from "react";
import {useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import shopping_cart from "../../assets/images/shopping-cart.png";



export  default function CartWidget() {

  const {cantidadTotal} = useContext(CartContext)

  return(
      <>
       <button className="cart-btn">
        <img src={shopping_cart} alt="Cart Icon" className="cart-widget" />
      </button>({cantidadTotal()})
      </>
  )
}
 