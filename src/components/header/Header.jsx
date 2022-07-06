import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './ HeaderSocials'

const Header = () => {
  return (
    <header className='pattern'>
      <div className="container header__container">
        <h5>Hi, My name is</h5>

        <h1>Ivan Nguyo</h1>

        <h5 className="text-light">Fullstack Developer</h5>  

        <CTA/>
        <HeaderSocials/>

        <div className="me">

          <img src={ME} alt="NapsterKE" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll</a>

      </div>
    </header>
  )
} 

export default Header