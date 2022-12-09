import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({item}) =>{
    return(
        <div>
            <div className="card">
                <h3 className="card-name">Nombre : {item.nombre}</h3>
                <div className="card-info">
                    <img src={`../imgs/${item.img}`} alt=""/>
                    <div>
                        <p>Tipo : {item.tipo}</p>
                        <p>Rareza : {item.rareza}</p>
                        <p>Precio : $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p>stock : {item.stock}</p>
                    </div>
                </div>
                <ItemCount stock={item.stock}/>
                <button>Finalizar Compra</button>
            </div>
        </div>
    )

}
    export default ItemDetail