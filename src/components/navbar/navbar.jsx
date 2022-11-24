import './categorias/categorias';
import Categorias from './categorias/categorias';
import CartWidget from '../cartWidget/cartWidget';

function App(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <Categorias></Categorias>
              <CartWidget></CartWidget>
            </div>
        </nav>
    )
}
export default App;