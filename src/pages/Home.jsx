import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from '../components/NavBar/NavBar'

const home = () => {
    return (
        <div>
            <h1>Home</h1>
            <NavBar/>
            <ItemListContainer/>
        </div>
    )
}

export default home
