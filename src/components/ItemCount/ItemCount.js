import React, { useState } from 'react'
import "./styles.css";

const ItemCount = ({ initial, onAdd, stock }) => {

    const [count, setCount] = useState(initial);

    const handlerClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handlerClickSubtrack = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handlerClickAddToCart = () => {
        onAdd(count);
    }

    return (
        <>
        <div className='container'>
          <div className='btns'>
            <button className='dec' onClick={() => handlerClickSubtrack()}>-</button>
            <h2 id="num">{count}</h2>
            <button className='inc' onClick={() => handlerClickAdd()}>+</button>
            <button onClick={() => handlerClickAddToCart()}>Agregar al carrito</button>
           </div>
        </div>
        </>
    );
}

export default ItemCount