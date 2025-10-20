import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
      <NavBar />
      <Container contenido="Cards de Productos" />
      <Footer />
    </>
  )
}

export default App
