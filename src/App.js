import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Services />
      <Skills />
      <Projects />
      <Footer/>
    
    </div>
  )
}

export default App
