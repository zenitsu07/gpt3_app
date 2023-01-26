import React from 'react'
import './footer.css'

import gpt3Logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>

      <div className="gpt3__footer-heading">
        
        <div className="gradient__text heading">
         <h1> Do you want to strip in to the future with others
         </h1>
        </div>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
      </div>

        <div className="gpt3__footer-links">

          <div className="gpt3__footer-links_logo">
            
            <img src={gpt3Logo} alt='logo' />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          
          </div>

          <div className="gpt3__footer-links_div">

            <h4>Links</h4>

            <p>Overons</p>
            <p>Social Network</p>
            <p>Counters</p>
            <p>Contact</p>

          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms $ Conditions</p>
            <p>Private Policy</p>
            <p>Contact</p>
            
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in Touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
            
          </div>
          <div className="gpt3__footer-copyright">
          <p>© 2021 GPT-3. All rights reserved.</p>
          </div>

        </div>
        
    </div>
  )
}

export default Footer