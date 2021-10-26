import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {


  return (
    <div>
      <nav className="row align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
          <img src="https://i.ibb.co/N1R381J/casa-vegana-logo.gif" alt="Logo Casa Vegana"/>
        </div>
        <ul className="col-lg-4 col-md-4 col-sm-12">
          <li>
            <Link to="/" className="btn">
              Home
            </Link>
          </li>
          {/* <li>
            <a className="btn" href="#productos">
              Productos
            </a>
          </li>
          <li>
            <a className="btn" href="#nosotros">
              Nosotros
            </a>
          </li>
          <li>
            <a className="btn" href="#contacto">
              Contacto
            </a>
          </li> */}
        </ul>
        <div className="col-lg-4 col-md-4 col-sm-12 m-auto d-flex justify-content-center">
          <Link to="/cart"> 
            <CartWidget />
          </Link>
        </div>        
      </nav>
    </div>
  );
};

export default NavBar;

// import React, { Component } from 'react'

//  class NavBar extends Component {

//     // test clase 5
//     constructor(){
//         super();
//         this.state = {name:"Damian"}
//     }

//     cambiarNombre({nombre}) {

//         this.setState({name:nombre})

//     }

//     render() {

//         return (
//             <div>
//                 <nav className="d-flex align-items-center">
//                     <span><strong>Mi Tienda</strong></span>
//                     <ul>
//                         <li><a href="#home">Home</a></li>
//                         <li><a href="#secciones">Secciones</a></li>
//                         <li><a href="#nosotros">Nosotros</a></li>
//                         <li><a href="#contacto">Contacto</a></li>
//                         {/* test clase 5 */}
//                         <li>{this.state.name}</li>
//                     </ul>
//                     <button onClick={()=>this.cambiarNombre({nombre:"Hola Juan Carlos"})}>Hola Juan Carlos</button>
//                     <button onClick={()=>this.setState({name:"Como estas chupapija"})}>Como estas chupapija</button>
//                     <CartWidget/>
//                 </nav>
//             </div>
//         )
//     }
// }
// export default NavBar
