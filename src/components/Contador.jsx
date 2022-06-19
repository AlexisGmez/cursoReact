import React, { useState } from 'react'

//usando hook state que sirve para informacion dinamica en el dom
const Contador = () => {
    const [contador, setContador] = useState(0);

    const aumentar = () => {
        
        setContador(contador+1);
        console.log(contador);

    };

  return (
    <>
        <p>contador</p>
        <p>{contador}</p>
        
        <button 
        className='btn btn-primary'
        onClick={aumentar}
        >
            Click
        </button>
    </>
  )
}

export default Contador
