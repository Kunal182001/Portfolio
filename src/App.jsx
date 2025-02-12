import { useState } from 'react'
import Navbar from './Components/NavbarComp/Navbar'
import Home from './Components/HomePage/Home'
import Cursor from './Components/Cursorpointer/Cursor'

function App() {

  return (
    <>
      <Navbar/>
      <Home />
      <Cursor/>
    </>
  )
}

export default App
