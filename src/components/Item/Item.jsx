import React from "react";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

const Item = ({id, nombre, stock, img, price }) => {

  const onAdd = (qty) => {
    alert(`HAS AGREGADO ${qty} ${nombre} AL CARRITO`)

  }
  
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 miItem">
      <div className="card miCard">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link to={`/productos/${id}`}><h3 className="card-title h4 text-center">{nombre}</h3></Link>
          <p className="card-text text-dark"></p>
          <p className="text-center text-dark">Disponibles: {stock}</p> 
          <p className="text-center text-dark">${price}</p>
        </div>
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
        <Link className="btn btn-info btn-ver-producto" to={`/productos/${id}`}>Ver producto</Link>
      </div>
    </div>
  );
};

export default Item;
