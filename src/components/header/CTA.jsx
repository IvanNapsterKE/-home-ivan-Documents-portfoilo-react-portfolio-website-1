import React from 'react'
import CV from '../../assets/robots cv.txt'

const CTA = () => {
  return (
    <div className="cta">

        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#Contacts" className='btn btn-primary'>Give me a Shout</a>
    </div> 
  )
}

export default CTA