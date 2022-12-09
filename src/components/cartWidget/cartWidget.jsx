import React from "react";
import cartWidget from './cartWidget.css'

const CartWidget = () =>{
    return(
        <ul className="cartWidget">
            <li className="">
                <button className="">
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </li>
            <p>0</p>
        </ul>
    );
}
export default CartWidget;