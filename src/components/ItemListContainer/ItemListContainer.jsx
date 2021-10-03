import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default ItemListContainer
