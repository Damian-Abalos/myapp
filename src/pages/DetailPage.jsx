import React from 'react'
import { useParams } from 'react-router'

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const DetailPage = () => {

    let { id } = useParams();

    return (
        <main>
            <ItemDetailContainer/>
        </main>
    )
}

export default DetailPage
