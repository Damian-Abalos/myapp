import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from '../components/NavBar/NavBar'

const home = ({greeting}) => {
    return (
        <div>
            <ItemListContainer greeting={greeting}/>
        </div>
    )
}

export default home
