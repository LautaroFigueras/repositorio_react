// import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
function App() {
  const estilos = {backgroundColor: 'blue'}

  const Evento = () =>{
    console.log('Hola') 
  }

  return (
      <div className="App" style={estilos} onClick={Evento}>

         
          <img src={logo} className="App-logo" alt="logo" />
      
        <NavBar/>

      </div>
  )
}

export default App
