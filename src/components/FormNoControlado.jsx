import React from 'react'
import { useRef } from 'react';

const FormNoControlado = () => {

  const formulario = useRef(null);
  
  const handleSubmit = e =>{
    e.preventDefault();
    const datos = new FormData(formulario.current);
    console.log(...datos.entries())

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos)

    const {todoDescripcion, todoEstado, todoName} = objetoDatos;
    if(!todoDescripcion.trim()|| !todoName.trim()){
        console.log("esta vacio")
        return
    }
  }

  return (
    <>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='ingrese Todo'
            name="todoName"
            className='form-control mb-2' 
            defaultValue="{Alexis}"/>

            <textarea 
            name="todoDescripcion" 
            placeholder='ingrese descripcion del todo' 
            className='form-control mb-2'
            defaultValue="{Como}"/>

            <select
                name="todoEstado"
                className='form-control mb-2'
                defaultValue="completada">

                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>

            </select>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>

    </>
  )
}

export default FormNoControlado
