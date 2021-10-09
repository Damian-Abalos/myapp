import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {

  const [qty, setQty] = useState(initial);

  const addOne = () => {
    if (qty < stock) setQty(qty + 1);
  };

  const removeOne = () => {
    if (qty > 0) setQty(qty - 1);
  };

  
  return (
    <div>
      <div id="ItemCount">
        <button onClick={() => removeOne()}>-</button>
        <p>{qty}</p>
        <button onClick={() => addOne()}>+</button>
      </div>
      <div>
          <button className="btnAddCart" onClick={() => onAdd(qty)}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
