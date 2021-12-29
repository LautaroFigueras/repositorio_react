// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar'
import Cart from '../context/Cart';
import CartContextProvider from '../context/CartContext';

function App() {
  const estilos = {backgroundColor: 'blue'}

 
  return (
      <div className="App" style={estilos} onClick={Evento}>
        <CartContextProvider>
        <NavBar/>
        <ItemListContainer />
        </CartContextProvider>
      </div>
  )
}

export default App
