import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


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
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <ButtonGroup aria-label="Basic example" style="width:100%;">
          <Button variant="secondary">HOME</Button>
          <Button variant="secondary">QR</Button>
          <Button variant="secondary">INFO</Button>
        </ButtonGroup>
      </nav>
    </div>
  )
}

export default App
