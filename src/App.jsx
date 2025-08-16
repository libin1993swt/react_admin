import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  return (
    <div className='grid-container'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  )
}

export default App
