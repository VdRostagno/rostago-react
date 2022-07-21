import React,{useEffect,useState} from "react";
import ItemsList from "../ItemList"
import {useParams} from "react-router-dom"

import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";




function ItemsListContainer(){


    const [Item, setItem] = useState([]);
    const {category}= useParams();


    useEffect (() => {

        const db = getFirestore();

        let productosRef =(collection(db,"products"));
        if (category) productosRef = query(productosRef,where("category","==",category));


        getDocs(productosRef).then((res)=> {
            setItem(res.docs.map((item)=> ({id:item.id, ...item.data() })));
        })

    },[category])

    return (

        <Container className="contenedor-motos">
        
            <Row xs={1} md={2}   className="g-4">

            {
        
            <ItemsList productos={Item}/>
           
            }

            </Row>
        
        </Container>
    )
}
export default ItemsListContainer; 