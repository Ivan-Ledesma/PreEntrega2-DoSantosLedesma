import categorias from "./categorias.css";
import { Link } from "react-router-dom";

const Categorias = () =>{
    return(
        <ul className="categorias">
            <li className="">
              <button><Link to={"/category/1"}>Monstruos</Link></button>
            </li>
            <li className="">
              <button><Link to={"/category/2"}>Magicas</Link></button>
            </li>
            <li className="">
              <button><Link to={"/category/3"}>Trampas</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;