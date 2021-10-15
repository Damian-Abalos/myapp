import React, {useState} from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext";
import "./ItemDetail.css";

const ItemDetail = ({ nombre, img, descripcion, precio, stock}) => {

  // const {cartList, agregarItem} = useCartContext()

  // const [botonActivo, setBotonActivo] = useState(false) 

  // function apagarBoton() {
  //   setBotonActivo(true)
  // }

  // const Swal = require('sweetalert2')

  // const onAdd = (qty) => {
  //   Swal.fire(`HAS AGREGADO ${qty} ${nombre} AL CARRITO`)
  //   agregarItem({item:nombre , cantidad: qty , img:img})
  //   apagarBoton()
  // }
  
  return (
    <div className="ItemDetail row d-flex align-items-center">
      <div className="col-lg-6 col-md-6 col-sm-12 divImg">
        <img src={img} alt="..." />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 divText">
        <h3>{nombre}</h3>
        <p className="w-50">Descripcion:<br/>{descripcion}</p>
        <p>${precio}</p>
        <p>Disponibles: {stock}</p>
      </div>
      <div className="ItemCountDiv w-50 m-auto">
        <ItemCount initial={0} stock={stock} nombre={nombre} img={img}/>
      </div>      
      <Link className="d-block text-center mt-5" to="/">
        <button className="btn btn-primary">volver</button>
      </Link>
    </div>
  );
};

export default ItemDetail;
