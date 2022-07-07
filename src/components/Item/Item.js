import React from "react"
import {Link} from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./style.css"

function Item({id,nombre,imagen,stock,precio,categoy}){
    return ( 
       
        <Col >
                        <Card className="card">
                            <Card.Img className="imagen" variant="top" src={imagen} />
                            <Card.Body className="cuerpo-carta">
                            <Card.Title className="nombre-moto">{nombre}</Card.Title >

                            <Card.Text>
                                {/* <h3>{precio}</h3> */}
                                {/* <ButtonGroup className="mb-2">
                                    <ItemCount inicial={1} stock={stock} />
                                </ButtonGroup>  */}
                                    {/* <h5> #{category} </h5>
                                <p> Stock Disponible: {stock}</p> */}
                             </Card.Text>
                             <Button variant="outline-dark" className="boton-detalle" > <Link to={`/detalles/${id}`}> Ver Detalles </Link></Button>
                            </Card.Body >
                        </Card >
        </Col>
                
    )
}
export default Item