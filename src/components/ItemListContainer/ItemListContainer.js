import React,{useEffect,useState} from "react";
import {getData} from "../getData"
import {products} from "../Datos"
import ItemList from "../ItemList"
import {useParams} from "react-router-dom"



import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

function ItemsListContainer(){

    const [Item, setItem] = useState([]);
    const {categoryId}= useParams();

    useEffect (() => {

        if (categoryId) {
            getData(2000,products)
                    .then(resultado => setItem(resultado.filter (Item => Item.category===categoryId)))
                    .catch(error => console.log(error));
        }else {
           getData(2000,products)
                    .then(resultado => setItem(resultado))
                    .catch(error => console.log(error));
           
        }

    },[categoryId])

    return (

        <Container className="contenedor-motos">
        
            <Row  xs={1} md={2}   className="g-4">

            <ItemList products={Item}/>

            </Row >
        
        </Container >
    )
}
export default ItemsListContainer; 