import React from "react";

const Categorias = () =>{
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <a className="nav-link" href="#">Electrodomesticos</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#">Muebles</a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#">Herramientas</a>
            </li>
        </ul>
    );
}

export default Categorias;