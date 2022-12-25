import React from 'react'
import './feature.css'

const Feature = ({title,text,upper}) => {

  return (

    <div className='gpt3__features-container__feature'>
      
      <div className= { `gpt3__features-container__feature-title ${upper ? 'opinion' :''}`} >
        
        <div style={{flex:1}}>
          <div className='div'/> {/*ED */}
          <h1>{title}</h1>
        </div>

        <div className='gpt3__features-container__feature-text'>
          {text}
        </div>
      </div>
      
    </div>

  )
}

export default Feature;