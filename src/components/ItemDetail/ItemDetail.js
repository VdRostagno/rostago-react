import React from "react"
import {Link} from "react-router-dom";
import {useState} from "react";

import ItemCount from '../ItemCount/ItemCount'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./style.css"

function ItemDetail ({producto})  {

    const [Number,setNumber] = useState(0)

    const agregarCarrito = (cantidad) =>(
        setNumber(cantidad)
    )
    console.log(Number)
    
   
    return (
        <>
        <Container className="div-nombre">
            <h1 className="h1-nombre">Detalles de {producto.nombre}</h1>
        </Container>
        <Container>
        <Col >
            <Card>
                <Card.Img className="imagen" variant="top" src={producto.imagen} />
                <Card.Body>

                    <Card.Text className="texto-carta">
                         <h2 className="precio">{producto.precio}</h2>

                        { 
                        Number <= 0 
                        ?
                        <ButtonGroup  className="mb-2">
                            <ItemCount initial={1} stock={producto.stock} prod={producto} agregarCarrito={agregarCarrito} />
                        </ButtonGroup > 
                        :
                        <ButtonGroup  className="mb-2">
                            <ButtonGroup  variant="outline-dark" className="boton-agregar" > <Link to={"/cart"}>Ir al Carrito </Link></ButtonGroup >
                        </ButtonGroup >
                        }

                         <h3 className="estilo"> #{producto.category} </h3>
                        <p className="stock">  Stock Disponible: {producto.stock}</p>
                        <ButtonGroup variant="outline-dark" className="boton-volver" > <Link to={`/`}> Volver </Link></ButtonGroup>

                    </Card.Text >

                </Card.Body>
            </Card>
         </Col>
         </Container>
         </>

    )
}
export default ItemDetail;