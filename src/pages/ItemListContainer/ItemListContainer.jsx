
import  ItemList  from "../../Components/ItemList/ItemList";
import { useState, useEffect } from "react";

const arreglo = [
  {   name:'Charizard', 
        id:'charizard1',
        animal:'Dragon',
        precio: 5.00 ,
        descripcion:'fire pokemon',
        img:'/media/charibaseset.jpg'
        },
        {   name:'Pikachu', 
        id:'pikachu1',
        animal:'Rata',
        precio: 5.00 ,
        descripcion:'electric pokemon',
        img:'/media/Pikachu.jpg'
        },
        {   name:'Charmander', 
        id:'charmander1',
        animal:'Lagarto',
        precio: 5.00 ,
        descripcion:'fire pokemon',
        img:'/media/Charmander.jpg'
        },
        {   name:'Squirtle ', 
        id:'squirtle1',
        animal:'Tortuga',
        precio: 5.00 ,
        descripcion:'water pokemon',
        img:'/media/Squirtle.jpg'
        },
        {   name:'Bulbasaur', 
        id:'bulbasaur1',
        animal:'Lagarto',
        precio: 5.00 ,
        descripcion:'earth pokemon',
        img:'/media/Bulbasaur.jpg'
        },
        {   name:'Psyduck', 
        id:'psyduck1',
        animal:'Pato',
        precio:5.00 ,
        descripcion:'psyco pokemon',
        img:'/media/Psyduck.jpg'
        },
]

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  
  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(arreglo);
      console.log(arreglo)
    }, 2000);
   });

   useEffect(() => {
    getProducts
    .then((response)=>{
      console.log(response);
      setProducts(response);
    })
    .catch((error => {console.log(error)},[]));
   })

  
  
  
  return (
     
    <div>        
    <h4>Bienvenido a la tienda de pokemon,  solo tenemos stock de los siguientes pokemons tradicionales:</h4>
        <ItemList productos = {products}/>
        
    </div>
  )
}

export default ItemListContainer;