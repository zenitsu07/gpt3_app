import React from 'react'
// import {Article,Brand,CTA,} from './components'//to import components from compnents dirently into App.js
import {Footer,Header,Possibility,Features,Blog,WhatGPT3 } from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      {/* header section */}
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
      {/* sections below this div  */}
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App