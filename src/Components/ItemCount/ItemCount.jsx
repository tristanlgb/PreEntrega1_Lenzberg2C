import './ItemCount.css';
import { useState } from 'react';
import Swal from 'sweetalert2'

const ItemCount = () => {
  const [contador, setContador] = useState(0);
  const stock = 5;
  const sumar = () => {
    if(stock === contador){
      Swal.fire({
        icon: 'error',
        title: 'Maximo 5😥',
        text: 'Solo 5 pokemons por compra',
       
      })
      return;
    }
    setContador(contador + 1)
  };
  const restar = () => {
    if(contador === 0){
      Swal.fire({
        icon: 'error',
        title: 'Maximo 5😥',
        text: 'Solo 5 pokemons por compra',
       
      })
      return;
    }
    setContador(contador -1)
  };
  
  return (
    <div className="counter">
      <div className="controllers">
        <button onClick={restar}>➖</button>
        <div>
          <span>{contador}</span>
        </div>
        <button onClick={sumar}>➕</button>
      </div>
      
      <div>
      <button>💸Comprar</button>
      </div>
    </div>
  )
}

export default ItemCount;