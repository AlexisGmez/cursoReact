import React from 'react'
import Frutas from './components/Frutas.jsx'
import Contador from './components/Contador.jsx'

const App = () =>{
    const frutas = ["🍏","🍐","🍌"];
    const objeto ={
        primary: "text-primary",
        danger: "text-danger"
    }
    const user =false;
    const saludo = "saludo desde variable";

    const SaludoBienvenida =() =>(
        <h2 className={objeto.danger}>Bienvenida</h2>
    )
    
    const SaludoDespedida = () =>(
        <h2 className={objeto.primary}>Despedida</h2>
    )
    
    const funcionClick = () =>{
        console.log("me diste click");
    }
    return(
        <div className="container " >
            <p>{saludo}</p>
            {user ? <SaludoBienvenida/> : <SaludoDespedida/>}
            <Frutas frutas = {frutas}/>
            <Contador/>
            
            <button className='btn btn-primary' onClick={funcionClick}>buttton</button>
        </div>
        
       
    );
}
export default App