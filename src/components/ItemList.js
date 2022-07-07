import React from "react"
import Item from "./Item/Item";


function ItemsList ({products})  {
    return (
        products.map( p => (
            <Item
            id={p.id}
            key={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            estilo={p.estilo}
            />
        ))
    )
}
export default ItemsList;