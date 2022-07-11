import React, { useContext, useState } from "react";
import "./style.css";
import { cartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ItemDetail = ({ producto }) => {
    const [buyfinalized, setBuyFinalized] = useState(false);
    const { addCartProduct } = useContext(cartContext);
  
    const onAdd = (amount) => {
      addCartProduct({ ...producto, cantidad: amount });
      setBuyFinalized(true);
    };
  
    return ( <>
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
                          <div>
                          {buyfinalized ? (
                            <Link to="/cart">
                              <button className="btn btn-dark">Finalizar la Compra</button>
                            </Link>
                          ) : (
                            <ItemCount initial={1} stock={producto.stock} prod={producto}onAdd={onAdd} />
                          )}
                        </div>
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