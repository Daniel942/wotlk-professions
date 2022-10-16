import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import BlacksmithingPage from './pages/blacksmithing'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blacksmithing" element={<BlacksmithingPage />} />
      </Routes>
    </div>
  )
}

export default App
