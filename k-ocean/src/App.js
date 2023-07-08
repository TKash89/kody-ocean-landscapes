import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import AboutMe from './Pages/AboutMe'
import NotFound from './Pages/NotFound'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      
      <Header />
        <p>       
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend ex at orci commodo, vitae cursus justo imperdiet. Fusce lorem dolor, porta id lectus eget, tincidunt malesuada nunc. Aliquam eu pulvinar urna, in semper est. Proin tincidunt nunc ac aliquam congue. Ut vehicula ante non nisi dictum, sit amet pharetra magna porta. Aenean non nunc quam. Nunc vehicula viverra ex, eu fringilla magna viverra ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce condimentum tincidunt fermentum. Praesent commodo turpis quis augue ullamcorper vestibulum. Pellentesque eget quam ipsum.
        </p>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>   
      <Footer />
    </>
  )
}

export default App





      
        
      
    








