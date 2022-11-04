import React from 'react'

const AppFrom = (props) => {

    const camposRegistro ={nombre:"", edad:"", genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);

    const controlarEstadoCambio = (e) => {     
    };
    
    const controlSubmit = (e) => {
         
    };
    return(
        <div style={{background:"orange"}}>
            Formulario AppFrom.js
        </div>
        );
};
export default App;