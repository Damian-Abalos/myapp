import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import { useCartContext } from "../../context/cartContext";
import { higherThanStock } from "../../helpers";
import "./ItemCount.css";

function ItemCount({ stock, initial, nombre, img}) {

  const Swal = require('sweetalert2')

  const {cartList, agregarItem} = useCartContext()

  const [qty, setQty] = useState(initial);

  const addOne = () => {
    if (!higherThanStock(qty,stock)) setQty(qty + 1);
  };

  const removeOne = () => {
    if (higherThanStock(qty, 1)) setQty(qty - 1);
  };
  
  const onAdd = (qty) => {
    Swal.fire(`HAS AGREGADO ${qty} ${nombre} AL CARRITO`)
    agregarItem({item:nombre , cantidad: qty , img:img})
    apagarBoton()
  }
  
  const [botonActivo, setBotonActivo] = useState(false) 

  function apagarBoton() {
    setBotonActivo(true)
  }

  return (
    <div>
      {!botonActivo ? (
        <div>
        <div id="ItemCount">
          <button className="btn btn-danger btn-remove" onClick={() => removeOne()}>-</button>
          <p className="text-dark">{qty}</p>
          <button className="btn btn-primary btn-add text-center" onClick={() => {addOne()}}>+</button>
        </div>
        <div>
          <button className="btn btn-primary btnAddCart" onClick={() => onAdd(qty)}>Añadir al carrito</button>
        </div>
      </div>
      ) : (
      <div className="text-center">
        <Link to="/cart" className="btn btn-success m-3">Terminar mi Compra</Link>
        <Link to="/" className="btn btn-primary m-3">Seguir comprando</Link>
      </div> 
      )}
      
           
    </div>
  );
}

export default ItemCount;
