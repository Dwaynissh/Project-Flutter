import React from 'react'
import Hero from './Hero'
import Features from './Features'
import About from './About'
import Contact from './Contact'
import Upload from './Upload'

const Homescreen = () => {
  return (
    <div>
        <Hero/>
        
        <Features/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Homescreen