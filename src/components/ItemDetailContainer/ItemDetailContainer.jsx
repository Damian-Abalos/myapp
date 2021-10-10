import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({id}) => {

    // const getItem = () => {
        
    // }

    //poner toda la logica para filtrar mi array de productos y traerme un solo producto que coincida con el id que recibo por props
    return (
        <div>
            <ItemDetail id={id}/>
            
        </div>
    )
}

export default ItemDetailContainer
