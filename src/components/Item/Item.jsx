import item from './item.css'
import { Link } from 'react-router-dom';
//genera la Card producto
const Item = ({prod}) =>{
    return(
        <>
            <div className="card">
                <h3 className="card-name">Nombre : {prod.nombre}</h3>
                <div className="card-info">
                    <img src={`../imgs/${prod.img}`} alt=""/>
                    <div>
                        <p>Tipo : {prod.tipo}</p>
                        <p>Rareza : {prod.rareza}</p>
                        <p>Precio : $ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                    </div>
                </div>
                <button><Link to={`/product/${prod.id}`}>Ver producto</Link></button>
            </div>
        </>
    );
}

export default Item;