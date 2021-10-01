import React from "react";
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {

    // let apagado = true
    // let blackTheme = apagado ? 



    return (
        <div>
            <nav className="d-flex align-items-center">
                <span><strong>Mi Tienda</strong></span>
                <ul>
                    <li><a href="#home">Home</a></li>                        
                    <li><a href="#secciones">Secciones</a></li>                        
                    <li><a href="#nosotros">Nosotros</a></li>                        
                    <li><a href="#contacto">Contacto</a></li>                        
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )
}



export default NavBar;