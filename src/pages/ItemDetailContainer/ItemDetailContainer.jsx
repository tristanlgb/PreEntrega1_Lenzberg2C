import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  
  const {id} = useParams();
  console.log(id)


  const getProduct = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve([
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
      ]);
    },1000);
    
  })


  useEffect(()=>{
    getProduct
      .then((data)=>{
        setSingleProduct(data);
        console.log(data);
      })
      .catch((error)=> {console.log(error)
      });
  },[])
  

  return (
    <div>

      <Link to="/"> ❌Cancelar❌</Link>
        
      <ItemDetail key={id} product = {singleProduct} />
        
        
        
    </div>
  )
}

export default ItemDetailContainer