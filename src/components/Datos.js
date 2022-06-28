//Array de obj
const products = [
    {
 id: 1 , 
 nombre:"Honda CBR 1000RR SP2",
 precio:"14200€",
 estilo:"Deportivo",
 stock:2,
 imagen: require("../catalogo/Honda.jpg"),

 },
    {
 id: 2 , 
 nombre:"Yamaha R7",
 precio:"9.899€",
 estilo:"Deportivo",
 stock:2,
 imagen: require("../catalogo/Yamaha.jpg"),
 },
    {
 id: 3 , 
 nombre:"Kawasaki Z125",
 precio:" 4.625 €",
 estilo:"Deportivo",
 stock:2,
 imagen: require("../catalogo/Kawasaki.jpg"),
 },
    {
 id: 4 , 
 nombre:"BMW R 1250 RS",
 precio:" 16.280 €",
 estilo:"Deportivo",
 stock:2,
 imagen: require("../catalogo/BMW.jpg"),
 },
 
    {
 id: 5 , 
 nombre:"Suzuki V-Strom 650",
 precio:"  8.795 €",
 estilo:"Deportivo",
 stock:2,
 imagen: require("../catalogo/Suzuki.jpg"),
 },


];


export const getData = new Promise ((resolve, reject) =>{
  //acciones
  let condition = true
  setTimeout(()=>{
    if(condition){
      resolve(products)
    }else{
      reject('salio mal :(')
    }
  },3000)
})