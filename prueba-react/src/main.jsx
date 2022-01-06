import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { getFiresotoreApp } from './config/getFirestoreApp'

getFiresotoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
  document.getElementById('root')
)
