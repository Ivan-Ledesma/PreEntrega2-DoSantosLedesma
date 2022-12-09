import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

//genera la Card producto

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    
    useEffect(()=>{
        consultarBDD('../json/productos.json').then(productos =>{
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return(
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;