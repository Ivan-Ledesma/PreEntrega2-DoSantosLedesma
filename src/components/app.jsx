import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/itemListContainer';

function App(){
    return(
        <>
            <Navbar></Navbar>
            <h1>Ecommerce</h1>
            <ItemListContainer greeting={"lista de productos"}></ItemListContainer>
        </>
    )
}
export default App;