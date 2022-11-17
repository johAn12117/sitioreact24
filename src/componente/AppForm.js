
import {collection, addDoc, updateDoc} from "firebase/firestore";
import React,{useEffect, useState} from 'react';
import firebase, { bd } from './firebase';

const AppFrom = (props) => {

    const camposRegistro ={nombre:"", edad:"", genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);

    const controlarEstadoCambio = (e) => {  
        console.log("asdsa")
        const {name, value} = e.target;
        setObjeto({...objeto,[name]:value});   
    };
    
    const controlSubmit = async (e) => {
        e.preventDefault();

        if(props.idActual === ""){
            
            if(validarForm()){
                addDoc(collection(bd, 'favoritos'),objeto);
                console.log('Se guardo...');
                
            }else{
                console.log('No se guardo...');
            }
        }else{

        }
        setObjeto(camposRegistro);
         
    };
    const validarForm = () => {
        if(objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){
            alert("Escriba nombres...");
            return false;
        }
        return true;
    };
    

    return(
        <div style={{background:"orange", padding:"10px",textAlign:"center"}}>
        <h1>AppFrom.js</h1>
        <form onSubmit={controlSubmit}>
            <input type="text" name="nombre" placeholder="nombre..."
            onChange={controlarEstadoCambio} value={objeto.url}/><br/>

            <input type="text" name="edad" placeholder="edad..."
            onChange={controlarEstadoCambio} value={objeto.nombre}/><br/>

            <input type="text" name="genero" placeholder="genero..."
            onChange={controlarEstadoCambio} value={objeto.descripcion}/><br/>

            <button>
                {props.idActual === ""? "Guardar" : "Actualizar"}
            </button>
        </form>
        </div>
    )
};
export default AppFrom;