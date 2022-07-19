import React,{useEffect,useState} from "react";
import ItemList from "../ItemList"
import {useParams} from "react-router-dom"

import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";




function ItemsListContainer(){


    const [Item, setItem] = useState([]);
    const {category}= useParams();


    useEffect (() => {

        const db = getFirestore();

        let productsRef =(collection(db,"products"));
        if (category) productsRef = query(productsRef,where("category","==",category));


        getDocs(productsRef).then((res)=> {
            setItem(res.docs.map((item)=> ({id:item.id, ...item.data() })));
        })

    },[category])

    return (

        <Container className="contenedor-motos">
        
            <Row xs={1} md={2}   className="g-4">

            <ItemList productos={Item}/>

            </Row>
        
        </Container>
    )
}
export default ItemsListContainer; 