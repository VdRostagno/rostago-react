import React, { useContext, useState } from "react";
import "./style.css";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button"


function ItemDetail ({product})  {

  const [Number,setNumber] = useState(0)

  const agregarCarrito = (cantidad) =>(
      setNumber(cantidad)
  )
  // console.log(Number)
  

  return (
      <>
      <Container className="div-nombre">
          <h1 className="h1-nombre">Detalles del {product.nombre}</h1>
      </Container>
      <Container>
      <Col >
          <Card>
              <Card.Img variant="top" src={product.imagen} />
              <Card.Body>

                  <div className="texto-carta">

                       <h2 className="precio">{product.precio} €</h2>

                      { 
                      Number <= 0 
                      ?
                      <ButtonGroup className="mb-2">
                          <ItemCount inicial={1} stock={product.stock} prod={product} agregarCarrito={agregarCarrito} />
                      </ButtonGroup> 
                      :
                      <ButtonGroup className="mb-2">
                          <Link to={"/cart"}><Button variant="outline-dark" className="boton-agregar" >Ir al Carrito </Button></Link>
                      </ButtonGroup>
                      }

                      <p className="estilo"> #{product.category} </p>
                      <p className="stock">  Stock Disponible: {product.stock}</p>
                      
                      <Link to={`/`}><Button variant="outline-dark" className="boton-volver" > Volver </Button></Link>
                  </div>

              </Card.Body>
          </Card>
       </Col>
       </Container>
      </>

  )
}
export default ItemDetail;