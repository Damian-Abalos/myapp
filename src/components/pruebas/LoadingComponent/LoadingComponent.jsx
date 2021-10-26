import React, { useState } from 'react'

const LoadingComponent = ({otro="p-2"}) => {

    const [loading, setLoading] = useState(false)
    const [condicion, setCondicion] = useState(false)
    const cambiarEstado = () => {
        {!condicion ? setCondicion(true) : setCondicion(false)}
        
    }  
    
    
    // const config = condition
    //     ? {
    //         className: `btn btn-success`,
    //         // style: fontSize 
    //         title: "soy un h2 con cambios de estado" 
    //     } : {

    //     }
    
    return (
        <div className="text-center">
            {/* {loading ? <h2>Productos cargados</h2> : <h3>Cargando productos...</h3>} */}
            
            {/* {loading && <h2>Usted esta logueado, continue</h2>}
            {!loading && <h2>Usted no esta logueado, no puede ver la pagina</h2>} */}
        
            {/* <h2>{loading ? "Usted esta logueado, continue" : "Usted no esta logueado, no puede ver la pagina" }</h2> */}

            <h2 
                onClick={()=>cambiarEstado()}
                className={  (condicion === true) ? `btn btn-success ${otro || ""}` : "btn btn-danger"}
                style={ {fontFamily : condicion ? "Arial" : "Times New Roaman"}}
            >
                soy un h2 con cambios de estado
            </h2>

        </div>

    )
}

export default LoadingComponent
