import React from 'react'
//props devuelve el array de las frutas
const frutas = (props) => {
//   const frutas = ["🍏","🍐","🍌"];
  return (
    <>
        <ul>
            {
                props.frutas.map((fruta,index) => (
                    <li key = {index}>{fruta}</li>
                ))
            }
        </ul>
        <p>Lorem, ipsum dolor.</p>
    </>
  )
}

export default frutas
