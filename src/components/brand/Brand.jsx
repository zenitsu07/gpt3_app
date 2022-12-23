import React from 'react'
import './brand.css'
import {google,slack,atlassian,dropbox,shopify}  from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='brands'>
        <img src={google} alt='google'></img>
      </div>
      <div className='brands' >
        <img src={slack} alt='slack'></img>
      </div>
      <div className='brands' >
        <img src={atlassian} alt='atlassian'></img>
      </div>
      <div className='brands' >
        <img src={dropbox} alt='dropbox'></img>
      </div>
      <div className='brands' >
        <img src={shopify} alt='shopify'></img>
      </div>
      Brand
      </div>
  )
}

export default Brand;

