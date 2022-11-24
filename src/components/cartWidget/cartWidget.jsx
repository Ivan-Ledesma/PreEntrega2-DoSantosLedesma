import React from "react";

const cartWidget = () =>{
    return(
        <ul className="navbar-nav me-auto">
            <li className="nav-link">
                <button className="btn btn-danger">Carrito</button>
            </li>
            <p>0</p>
        </ul>
    );
}
export default cartWidget;