import { useState } from 'react'
import Header  from './components/Header'
import Footer from './components/footer'
import Navbar from './components/NavBar'
import './App.css'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Contact from './Sections/contact'
import Icons from './components/icons'


function App() {


  return (
    <>
    <Navbar />
    {/* <Header /> */}
    <Home />
    <About />
    <Skills />
    <Contact />
    <Footer />
    <Icons />
   
    </>
  )
}

export default App
