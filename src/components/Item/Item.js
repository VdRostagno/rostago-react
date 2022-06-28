import React from 'react'
import "./style.css";


const Item = ({product}) => {
  console.log(product)
  const {imagen, nombre, precio, estilo}= product

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={imagen} class="img" alt={nombre}/>
    <div className="card-body">
        <p className="card-text">{nombre}</p>
        <p className="card-text">{precio}</p>
        <p className="card-text">{estilo}</p>
    </div>
    <button className='btn btn-primary'>Ver más</button>
</div>
  )
}

export default Item