import React, { useState } from "react";
import { higherThanStock } from "../../helpers";
import "./ItemCount.css";

function ItemCount({ stock, initial, nombre}) {

  const [qty, setQty] = useState(initial);

  const addOne = () => {
    if (!higherThanStock(qty,stock)) setQty(qty + 1);
  };

  const removeOne = () => {
    if (higherThanStock(qty, 1)) setQty(qty - 1);
  };

  const onAdd = (qty) => {
    alert(`HAS AGREGADO ${qty} ${nombre} AL CARRITO`)

  }
  
  return (
    <div>
      <div id="ItemCount">
        <button className="btn btn-danger btn-remove" onClick={() => removeOne()}>-</button>
        <p className="text-dark">{qty}</p>
        <button className="btn btn-primary btn-add text-center" onClick={() => addOne()}>+</button>
      </div>
      <div>
          <button className="btn btn-primary btnAddCart" onClick={() => onAdd(qty)}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
