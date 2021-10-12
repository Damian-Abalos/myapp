import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {
    // const [producto, setProducto] = useState(null)



    // useEffect(() => {
    //   getItem();
    // }, [])
    console.log({id})
    //poner toda la logica para filtrar mi array de productos y traerme un solo producto que coincida con el id que recibo por props
    return (
        <div className="text-center">
            <ItemDetail id={id}/>
            
            <Link to="/"><button>volver</button></Link>
            
        </div>
    )
}

export default ItemDetailContainer
