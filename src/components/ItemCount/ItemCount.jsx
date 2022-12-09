import { useState } from "react";

const ItemCount = ({stock}) =>{
    const[contador, setContador] = useState(1);

    const sumar = () => contador < stock && setContador(contador +1)

    const restar = () => contador > 1 && setContador(contador -1)


    return (
        <div>
            <button className="" onClick={()=> sumar()}>+</button>
                {contador}
            <button className="" onClick={()=> restar()}>-</button>
            <button className="">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;