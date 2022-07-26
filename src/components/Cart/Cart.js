import React from "react";

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import { CartContext } from "../../Context/CartContext";
import { useState,useContext } from "react";
import {collection,addDoc, getFirestore} from "firebase/firestore"
import Swal from "sweetalert2";



export  default function Cart() {

    const {cart,removeCart,buyAll,valorTotal,cantidadTotal} = useContext(CartContext)

    const [name, setName] =   useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();  
  

   function  terminarCompra (event) {

    const db = getFirestore();
    const Ventas =collection(db,"Ventas");
    event.preventDefault()

    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        total: valorTotal(),
    }; 

    addDoc(Ventas,buyer).then(({id}) => {
        Swal.fire({
            title:"COMPRA EXITOSA",
            icon:"success",
            text:"Gracias por confiar " + name,
            showConfirmButton:false,
            backdrop:true,
            background:"#000",
            footer:"Copia y guarda tu codigo de compra: " + id
            
        });
    })
    
    buyAll()
    setName("")
    setEmail("")
    setPhone("")
}

  
    return(
        <>
      <Container className="contenedor-inputs">

        <p className="texto-carrito">CARRITO</p>
        
            <Table className="table"  bordered hover variant="dark">
                    <thead>
                        <tr>
                        
                        <th>Cantidad</th>
                        <th>Nombre del auto</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Borrar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                        cart.length > 0 ? cart.map (item =>
                        <tr key={item.id}>
                        <td>{item.cantidad}</td>
                        <td>{item.nombre}</td>
                        <td>{item.precio} €</td>
                        <td>{item.cantidad * parseInt(item.precio)} € </td>
                        <td><Button variant="outline-danger" onClick={() => removeCart(item)} >X</Button></td>
                        </tr>)
                        :
                        <tr>
                        <td>vacio</td>
                        <td>vacio</td>
                        <td>vacio</td>
                        <td>vacio</td>
                        <td><Button variant="outline-danger" disabled >X</Button></td>
                        </tr>
                        }
                    </tbody>
                    <thead>
                        <tr>
                        
                        <th>{cantidadTotal()}</th>
                        <th>-</th>
                        <th>Total</th>
                        <th>{valorTotal()} €</th>
                        <th>-</th>
                        
                        </tr>
                    </thead>
            </Table>
      
        <p className="texto-datos">Ingresa tus datos para finalizar la compra</p>

            <Form className="form-contacto" onSubmit={terminarCompra}>
                <ul>
                    <li>
                        <input 
                        placeholder={"Nombre y apellido"}  
                        type={"text"} 
                        value={name}
                        required
                        pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                        maxLength={"30"}
                        title="El formato solicitado son solo MAY y min"            
                        onChange={(e) => {setName(e.currentTarget.value);}}/>
                    </li>
                    <li>
                        <input 
                        placeholder={"E-mail"} 
                        type="email"
                        value={email}
                        required
                        pattern={"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)*$"}
                        maxLength={"30"}
                        onChange={(e) => {setEmail(e.currentTarget.value);}}/>
                    </li>
                    <li>
                        <input 
                        placeholder={"Numero de Celular"} 
                        type={"tel"} 
                        value={phone}
                        required
                        pattern="^([0-9])*$"
                        title="El formato solicitado son solo numeros"
                        onChange={(e) => {setPhone(e.currentTarget.value);}}/>
                    </li>
                    <li>
                    <input 
                     className="botonSubmit"
                     type="submit"
                     value="Finalizar Compra"   
                    //  onClick={terminarCompra}
                     />
                    </li>
                </ul>
            </Form>

      </Container>

    </>
    )
   
   
}
