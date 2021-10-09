import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'

import ItemCount from '../ItemCount/ItemCount'
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <div className="container-fluid">
                <ItemList item={Item}/>
            </div>
        </div>
    )
}

export default ItemListContainer
