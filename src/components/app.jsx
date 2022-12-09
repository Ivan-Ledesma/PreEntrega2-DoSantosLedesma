import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}></Route>
                    <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
                    <Route path='/category/:category' element={<ItemListContainer/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;