import React,{useEffect,useState} from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

import {useParams} from "react-router-dom"

import {doc,getDoc, getFirestore} from "firebase/firestore"


function ItemDetailContainer() {

    const [productito,setProductito] = useState({})
    const {id}= useParams();

    useEffect ( () => {

            const db =getFirestore();
            const productsRef = doc(db,"products", id);

            getDoc(productsRef).then((res) => {

                setProductito ( {id: res.id, ...res.data() } );
               
            });

    },[id])
    

    return (
        <>
        {         
            <ItemDetail producto={productito}/>          
        }</>
        
    )
}

export default ItemDetailContainer;