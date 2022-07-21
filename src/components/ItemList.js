import React from "react"
import Items from "./Items/Items";


function ItemsList ({productos})  {
    return (
        productos.map( p => (
            <Items
            id={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
            precio={p.precio}
            stock={p.stock}
            category={p.category}
            />
        ))
    )
}
export default ItemsList;