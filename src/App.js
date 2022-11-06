import { useState } from "react";
import AppForm from "./componente/AppForm";

function App(){
  //////////////////READ///////////////////
  const [idActual, setIdActual] = useState('');
  const [docsBD, setDocsBD] = useState([]);
  /////////////LECTURA A BD///////////////
  const fnRed = async () =>{
    console.log("Lectura de base de datos");
  }

  const fnDelete = () =>{
    console.log("Eliminar un registro");
  }

  return( 
    <div style={{background:"greenyellow", width:"350px"}}>
    <AppForm {...{idActual, setIdActual, fnRed}}/>
    </div>
    );
};

export default App;
