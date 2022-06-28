import React from 'react'


const Item = ({product}) => {
  console.log(product)
  const {img, nombre, precio, estilo}= product

  return (
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className="card-img-top" alt={nombre}/>
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