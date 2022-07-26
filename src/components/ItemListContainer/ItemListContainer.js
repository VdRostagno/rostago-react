import React,{useEffect,useState} from "react";
import ItemsList from "../ItemsList"
import {useParams} from "react-router-dom"

import {collection,getDocs, getFirestore,query,where} from "firebase/firestore"

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { NewtonsCradle } from '@uiball/loaders'



function ItemsListContainer(){


    const [Items, setItem] = useState([]);
    const {categoryId }= useParams();


    useEffect (() => {

        const db = getFirestore();

        let productsRef =(collection(db,"products"));
        if (categoryId ) productsRef = query(productsRef,where("category","==",categoryId ));


        getDocs(productsRef).then((res)=> {
            setItem(res.docs.map((item)=> ({id:item.id, ...item.data() })));
        })

    },[categoryId ])

    return (

        <Container className="contenedor-motos">
        
            <Row xs={1} md={2}   className="g-4">

            {
            Items.length > 0 ?
            <ItemsList products={Items}/>
            :
            <div className="divLoader">
            <NewtonsCradle 
            size={70}
            speed={1.4} 
            color="black" 
            />
            </div>
            }

            </Row>
        
        </Container>
    )
}
export default ItemsListContainer; 