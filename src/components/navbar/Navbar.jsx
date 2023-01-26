import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri'

import logo from './logo.svg';
import './navbar.css'
//Use () parentheis instead of braces while passing multiple elements using Freagments
const Menu = () =>(
  <>
  <p> <a href="#home">Home </a></p>
  <p> <a href="#wgpt3">What is GPT3 </a></p>
  <p> <a href="#possibility">OpenAI </a></p>
  <p> <a href="#features">CaseStudies</a></p>
  <p> <a href="#blog">Library </a></p>
  </>
)

// Usign BEM -> Block Element MOdifier to name classes

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);
  // this is for to toggle views i.e. desktop to mobile

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
            <img src={logo} alt="logo" />
        </div>
          {/* import all assetas now */}
        <div className="gtp3__navbar-links_container">

          <Menu />

        </div>
      </div>

      <div className='gpt3__navbar-sign'>

        <p>Sign in</p>
        <button type='button'> Sign up</button>

      </div>
      {/* to add a mobile menu */}
      <div className='gpt3__navbar-menu'>

          {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} /> 
          :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} /> 
          } 
          
          {/* if toggleMenu is true only then render the following component */}
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container'>

                  <Menu />
                  <div className='gpt3__navbar-menu_container-links-sign'>

                    <p>Sign in</p>
                    <button type='button'> Sign up</button>

                  </div>
              </div>
            </div>
          )} 
          

      </div>
    </div>
  )
}

export default Navbar;