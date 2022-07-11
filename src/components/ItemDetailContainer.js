import React,{useEffect,useState} from "react";
import { getData } from "./getData";
import {products } from "./Datos"
import ItemDetail from "./ItemDetail/ItemDetail";

import {useParams} from "react-router-dom"





function ItemDetailContainer() {

    const [productito,setProductito] = useState([])
    const {id}= useParams();

    useEffect ( () => {
            getData(2000,products)
                .then(resultado => setProductito(resultado.find (productito => productito.id=== Number(id))))
                .catch(error => console.log(error));

    },[id])
    

    return (
        <>
            <ItemDetail producto={productito}/>          
        </>
    )
}
export default ItemDetailContainer;