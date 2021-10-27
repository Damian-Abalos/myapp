import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../services/getFirebase';

function ItemListContainer({greeting}) {

    let {category} = useParams();

    const[item, setItem] = useState()
    const[items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()
        // db.collection('items').get()
        // .then(resp => console.log(resp))

        // db.collection('items').doc('4EaLBhmpanu26iTPluZe').get()
        // .then(resp => setItem( {id: resp.id, ...resp.data() } ))

        db.collection('items').where('categoryId', '==', 'toques' ).get()
        .then(resp => setItems(resp.docs.map(it => ({id: it.id, ...it.data}))))


        console.log(items)

        // return () => {
        //     cleanup
        // }
    }, [category])
    
    
    return (
        <div className="div-ItemListContainer">
            <h2>{greeting}</h2>
            <div className="container-fluid">
            <ItemList category={category}/>
            </div>
        </div>
    )
}

export default ItemListContainer
