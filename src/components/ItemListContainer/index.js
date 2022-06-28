import React, { useEffect, useState } from 'react'
import ItemList from '../../ItemList.js'
import ItemCount from '../ItemCount/ItemCount.js'
import "./styles.css";
import { getData } from '../Datos.js'




const ItemListContainer = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

    useEffect(()=>{
      getProducts()
    },[])
    const onAdd = (count) => {
        console.log('recibi: ', count);
    }
    
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
      
    </div>
  )
}

export default ItemListContainer
