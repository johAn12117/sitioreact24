
import {collection, addDoc, updateDoc} from "firebase/firestore";
import React,{useEffect, useState} from 'react';
import firebase, { db } from './firebase';

const AppFrom = (props) => {

    const camposRegistro ={nombre:"", edad:"", genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);

    
    
    const controlarEstadoCambio = (e) => {  
        const {name, value} = e.target;
        setObjeto({...objeto,[name]:value});   
    };
    
    const controlSubmit = async (e) => {
        e.preventDefault();

        if(props.idActual ===""){
            
            if(validarForm()){
                addDoc(collection(db, 'persona'),objeto);
                console.log('Se guardo...');
                props.fnRead();
            }else{
                console.log('No se guardo...');
            }
        }else{

        }
        setObjeto(camposRegistro);
         
    }
    const validarForm = () => {
        if(objeto.nombre==="" ||/^\s+$/.test(objeto.nombre)){
            alert("Escriba nombres...");
            return false;
        }
        return true;
    }
    

    return(
        <div style={{background:"orange", padding:"10px",textAlign:"center"}}>
        <h1>AppFrom.js</h1>
        <form onSubmit={controlSubmit}>
            <input type="text" name="nombre" placeholder="Nombres..."
            onChange={controlarEstadoCambio} value={objeto.nombre}/><br/>

            <input type="text" name="edad" placeholder="Edad..."
            onChange={controlarEstadoCambio} value={objeto.edad}/><br/>

            <input type="text" name="genero" placeholder="Genero..."
            onChange={controlarEstadoCambio} value={objeto.genero}/><br/>

            <button>
                {props.idActual === ""? "Guardar" : "Actualizar"}
            </button>
        </form>
        </div>
        );
};
export default AppFrom;