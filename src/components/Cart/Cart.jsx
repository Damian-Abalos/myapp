import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from "../../services/getFirebase";
import firebase from 'firebase/app'

import "firebase/firestore";

const Cart = () => {
  const { cartList, eliminarItem, vaciarCart, subTotal } = useCartContext();
  const [formData, setFormData] = useState({name: "",  phone: "",  email: "",  emailConfirm:""});
  const [idDeCompra, setIdDeCompra] = useState('')

  const generarCompra = () => {
    let ordenDeCompra = {};
    ordenDeCompra.date = firebase.firestore.Timestamp.fromDate(new Date())

    ordenDeCompra.buyer = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
    };
    ordenDeCompra.total = subTotal;
    ordenDeCompra.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.item;
      const price = cartItem.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad

      return { id, title, cantidad, price };
    });

    console.log(ordenDeCompra);

    const dbQuery = getFirestore();
    const compraQuery = dbQuery.collection("Ordenes De Compra");
    compraQuery
      .add(ordenDeCompra)
      .then((result) =>{ setIdDeCompra(`su id de compra es ${result.id}`)})
      .catch((err) => {console.log(err);})
      .finally(() => {console.log("compra finalizada")});

    const itemsToUpdate = dbQuery.collection('items').where(
      firebase.firestore.FieldPath.documentId(),'in', cartList.map(i => i.id)
    )
    const batch = dbQuery.batch();

    itemsToUpdate.get()
    .then( collection => {
      collection.docs.forEach(docSnapshot => {
        batch.update(docSnapshot.ref, {
          stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
        })
      })

      batch.commit().then(res => {
        console.log('resultado batch:', res)
      })
    })
    vaciarCart()
    setFormData({name: "",  phone: "",  email: "",  emailConfirm:""})
  };

  const handleChange = (e) => {
    setFormData({ ...formData, 
      [e.target.name]: e.target.value,
    });
  };

  let validacion

  if (formData.name !== "" && formData.phone !== "" && formData.email !== "" && formData.email === formData.emailConfirm) {
    validacion = false
  } else {
    validacion = true
  }
  return (
    <div className="text-center" style={{ width: "50%", margin: "auto" }}>
      <h2>Carrito de Compras</h2>
      {subTotal === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        cartList.map((item) => (
          <div
            className="d-flex align-items-center justify-content-between mb-2"
            key={item.item}
          >
            <img
              style={{
                width: "100px",
                boxShadow: " 0 0 5px -2px black",
                borderRadius: "5px",
              }}
              src={item.img}
              alt=""
            />
            <div className="m-0 d-flex">
              <Link to={`/productos/${item.id}`} className="btn btn-info">
                {item.item}
              </Link>
              <p className="fs-5 mt-0 me-2 mb-0 ms-2">
                {" "} x {item.cantidad} = ${item.cantidad * item.price}
              </p>
            </div>
            <button
              onClick={() => eliminarItem(item)}
              className="btn btn-danger"
            >
              X
            </button>
          </div>
        ))
      )}
      <div className="w-100 text-center">
      {subTotal === 0 ? (<h5></h5>) : (<h5>Subtotal: ${subTotal}</h5>)}        
      </div>
      {cartList === "" ? (
        <Link className="btn btn-primary m-3" to="">
          Seguir comprando
        </Link>
      ) : (
        <div>
          <Link className="btn btn-primary m-3" to="">
            Seguir comprando
          </Link>
          <button className="btn btn-danger m-3" onClick={() => vaciarCart()}>
            Vaciar carrito
          </button>
        </div>
      )}
      <div>
        <form onChange={handleChange} action="POST" className="row">
          <label className="mt-3" htmlFor="">Nombre</label>
          <input type="text" id="name" name="name" placeholder="Ingrese su nombre" value={formData.name}/>
          <label className="mt-3" htmlFor="">Telefono</label>
          <input type="text" id="phone" name="phone" placeholder="Ingrese su teléfono" value={formData.phone}/>
          <label className="mt-3" htmlFor="">e-mail</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su email" value={formData.email}/>
          <label className="mt-3" htmlFor="">Confirma tu e-mail</label>
          <input type="email" id="emailConfirm" name="emailConfirm" placeholder="Confirme su email" value={formData.emailConfirm}/>
        </form>
        <button disabled={validacion} className="btn btn-success mt-3" onClick={() => generarCompra()}>Terminar compra</button>
      </div>
      <p className="mt-3">{idDeCompra}</p>
    </div>
  );
};

export default Cart;
