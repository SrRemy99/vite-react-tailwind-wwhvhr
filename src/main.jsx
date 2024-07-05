import React from 'react'
import ReactDOM from 'react-dom/client'
import Example from './header.jsx'
import './main.scss'

const changeCurrent = () => {
  console.log('test')
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Example func={changeCurrent} />
    <h1 className="underline">Hola</h1>
  </React.StrictMode>
)
