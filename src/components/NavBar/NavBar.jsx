import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {



  return (
    <div>
      <nav className="d-flex align-items-center justify-content-around">
        <span>
          <strong>Mi Tienda</strong>
        </span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
        <CartWidget />
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
