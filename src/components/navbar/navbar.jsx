import './Categorias/Categorias';
import './navbar.css'
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';

function App(){
    return(
        <nav className="nav">
          <a className="" href="#">Home</a>
          <Categorias></Categorias>
          <CartWidget></CartWidget>
        </nav>
    )
}
export default App;