import React from "react";
import { Link } from "react-router-dom";
import cartWidget from './cartWidget.css'

const CartWidget = () =>{
    return(
        <ul className="cartWidget">
            <li className="">
                <button className="">
                    <Link to={"/cart"}>
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </button>
            </li>
            <p>0</p>
        </ul>
    );
}
export default CartWidget;