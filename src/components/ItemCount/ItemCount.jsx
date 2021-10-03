import React, { useState } from 'react'
import "./ItemCount.css"

function ItemCount({stock, initial}) {

    const [clicks, setClicks] = useState(initial)

    const addOne = () => {
        if(clicks < stock)
        setClicks(clicks+1)
    }

    const removeOne = () => {
        if(clicks > 0)
        setClicks(clicks-1)
    }


    return (
        <div id="ItemCount">
            <button onClick={()=>removeOne()}>-</button>
            <p>{clicks}</p>
            <button onClick={()=>addOne()}>+</button>
        </div>
    )
}

export default ItemCount
