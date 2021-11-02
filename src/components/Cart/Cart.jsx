import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
// import { getFirestore } from "../../services/getFirebase";
// import { getFirestore } from '../../services/getFirebase';

const Cart = () => {
  const { cartList, eliminarItem, vaciarCart, subTotal } = useCartContext();

  // const generarCompra = () => {
  //   const compra = {};

  //   // const db = getFirestore()

  //   compra.buyer = {name:'Damian', phone:'1533710828', email:'damianabalos@hotmail.com'};
  //   compra.total = subTotal;
  //   compra.items = cartList.map(cartItem => {
  //     const id = cartItem.item.id;
  //     const title = cartItem.item.nombre;
  //     const price = cartItem.item.precio * cartItem.item.cantidad;

  //     return {id, title, price}

  //   })
  // }

  // const dbQuery = getFirestore()
  // const compraQuery = dbQuery.collection('compras')
  // compraQuery.add(compra)
  // .then(result => console.log(result))
  // .catch(err => console.log(err))

  return (
      
    <div className="text-center" style={{width:"50%", margin:"auto"}}>
      <h2>Carrito de Compras</h2>
      {subTotal === 0 ? (
          <p>No hay productos en el carrito</p>
      ) : (
          cartList.map((item) => (

        <div
          className="d-flex align-items-center justify-content-between mb-2"
          key={item.item}
        >
          <img style={{ width: "100px", boxShadow:" 0 0 5px -2px black", borderRadius:"5px" }} src={item.img} alt="" />
          <div className="m-0 d-flex">
            <Link to={`/productos/${item.id}`} className="btn btn-info">
              {item.item}
            </Link>
            <p className="fs-5 mt-0 me-2 mb-0 ms-2">
              {" "}
              x {item.cantidad} = ${item.cantidad * item.price}
            </p>
          </div>
          <button onClick={() => eliminarItem(item)} className="btn btn-danger">X</button>
        </div>
      )))}
      

    
      <div className="w-100 text-center">
        <h5>Subtotal: ${subTotal}</h5>
      </div>
      {cartList === "" ? (
      <Link className="btn btn-primary m-3" to="">
        Seguir comprando
      </Link>
      ) : (
        <div>
            <Link className="btn btn-primary m-3" to="">Seguir comprando</Link>
            <button className="btn btn-danger m-3" onClick={() => vaciarCart()}>Vaciar carrito</button> 
        </div>
        
      )}
      <div>
        <button
        //  onClick={()=>generarCompra()}
         >Terminar compra</button>
      </div>
      
      
    </div>
  );
};

export default Cart;
