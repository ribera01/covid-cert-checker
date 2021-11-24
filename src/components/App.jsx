import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import '../styles/App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Scann</h1>
      </header>
      <div>
        <button><h1>Scanneja el Certificat</h1></button>
      </div>
      <nav className="fixed-bottom">
        <button className=".col-6 .col-sm-4">Recent</button>
        <button className=".col-6 .col-sm-4">QR</button>
        <button className=".col-6 .col-sm-4">Info</button>
      </nav>
    </div>
  )
}

export default App
