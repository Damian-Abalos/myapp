import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

const Item = ({ nombre, stock, img, price }) => {

  const onAdd = (qty) => {
    alert(`HAS AGREGADO ${qty} ${nombre} AL CARRITO`)

  }
  
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 miItem">
      <div className="card miCard">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{nombre}</h3>
          <p className="card-text"></p>
          <p>stock:{stock}</p> 
          <span>${price}</span>
        </div>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
