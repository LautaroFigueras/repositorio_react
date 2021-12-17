// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
function App() {
  const estilos = {backgroundColor: 'blue'}

  const Evento = () =>{
    console.log('Hola') 
  }

  return (
      <div className="App" style={estilos} onClick={Evento}>

        <NavBar/>
        <ItemListContainer />

      </div>
  )
}

export default App
