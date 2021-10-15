import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const {cartList, vaciarCart} = useCartContext()
    
    return (
        <div className="text-center">
            <h2>Carrito de Compras</h2>
            {cartList.map(item =><div  className="d-flex align-items-center justify-content-center m-5" key={item.item}>
                <img style={{width:"70px"}} src={item.img} alt=""/><h4>{item.item} x {item.cantidad}</h4></div>)}
            <Link className="btn btn-primary m-3" to="">Seguir comprando</Link>
            <button className="btn btn-danger m-3" onClick={()=>vaciarCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
