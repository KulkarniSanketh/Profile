import React from 'react'
import './App.css'
import Front from './Components/Front'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Navigation from './Components/Navigation'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Router>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App