import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useCartContext } from "../../context/cartContext";

const NavBar = () => {

  const {iconCart, cantidadItems} = useCartContext()
  let miVisibility

  {!cantidadItems ? miVisibility = "hidden" : miVisibility = "visible"}

  return (
    <div>
      <nav className="row align-items-center m-auto">
        <div className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
          <img src="https://i.ibb.co/N1R381J/casa-vegana-logo.gif" alt="Logo Casa Vegana"/>
        </div>
        <ul className="col-lg-4 col-md-4 col-sm-12">
          <li>
            <Link to="/" className="btn">
              Home
            </Link>
          </li>
        </ul>
        <div  className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
          <Link style={{visibility:`${miVisibility}`}} className="d-flex align-items-center" to="/cart"> 
            <p className="fs-2 m-0">{iconCart()}</p>
            <CartWidget />
          </Link>

        </div>        
      </nav>
    </div>
  );
};

export default NavBar;
