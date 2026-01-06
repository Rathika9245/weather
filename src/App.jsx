import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Weather from './components/weather.jsx'

function App() {
  return(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Weather />} />

    </Routes>
  </BrowserRouter>
  )
};

export default App
