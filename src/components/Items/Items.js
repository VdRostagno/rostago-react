import React from "react"
import {Link} from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Items({id,nombre,imagen}){
    return ( 
       
                    <Col >
                        <Card >
                            <Card.Img className="imagen-car" variant="top" src={imagen} />
                            <Card.Body className="cuerpo-carta">
                            <Card.Title className="nombre-auto">{nombre}</Card.Title>

                            <Card.Text>
                               
                             </Card.Text>
                             <Link to={`/detalles/${id}`} className="boton-detalle"><Button variant="outline-dark" className="boton-detalle" > Ver Detalles </Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                
    )
}
export default Items