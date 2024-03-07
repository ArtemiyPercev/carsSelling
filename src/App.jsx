import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import carImage from './images/undraw_city_driver_jh2h.png'
import Footer from './components/footer/Footer'
import About from './components/about/about'

import './index.css'

function App() {
  return (
    <div className="font-sans  ">
      {/* <img
        src={carImage}
        alt="car image"
        className="absolute right-0 z-0 w-7/12 h-5/6"
      />
      <Header />
      <div className="w-full mx-auto">
        <Main />
        <Footer />
      </div> */}
      <About />
    </div>
  )
}

export default App
