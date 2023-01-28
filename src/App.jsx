// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './components/pages/NotFound'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Store from './components/pages/Store'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>  
    
  )
}

export default App
