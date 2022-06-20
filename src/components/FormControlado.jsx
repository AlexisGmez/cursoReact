import React from 'react'
import { useState } from 'react';





const FormControlado = () => {
  const [todo, setTodo] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'pendiente',
    todoCheck: false
  });

  const [error, setError]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {todoName, todoDescripcion} = todo;
    if (!todoDescripcion.trim()||!todoName.trim()) {
        setError(true);
        return;
    }
    setError(false)
  }
  const handleChange = e =>{

    const {name, value, checked, type} = e.target;

    setTodo({
      ...todo,
      [name]: type=== "checkbox" ? checked : value
    })
  }

  const PintarError = () => (
    <div className="alert alert-danger">Campos obligatorios</div>
  )

  return (
    <>
        {
          error ? <PintarError/> : null
        }
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='ingrese Todo'
            name="todoName"
            className='form-control mb-2'
            onChange={handleChange} 
            value={todo.todoName}
            />

            <textarea 
            name="todoDescripcion" 
            placeholder='ingrese descripcion del todo' 
            className='form-control mb-2'
            onChange={handleChange} 
            value={todo.todoDescripcion}
            />

            <select
                name="todoEstado"
                className='form-control mb-2'
                onChange={handleChange}
                value={todo.todoEstado} 
                >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check">
              <input className="form-check-input" 
              type="checkbox" 
              checked={todo.todoCheck} 
              name='todoCheck' 
              onChange={handleChange}/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Dar prioridad
              </label>
          </div>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>

    </>
  )
}



export default FormControlado
