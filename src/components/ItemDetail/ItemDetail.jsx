import React from 'react'

import "./ItemDetail.css" 

const ItemDetail = ({nombre, img, descripcion, precio, stock}) => {
    return (
        <div className="ItemDetail row d-flex align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 divImg">
                
                <img src={img} alt="..." />
                
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 divText">
                <h3>{nombre}</h3>
                <p className="w-50">Descripcion: <br /> {descripcion}</p>
                <p>${precio}</p>
                <p>Disponibles: {stock}</p>
            </div>

        </div>
    )
}

export default ItemDetail
