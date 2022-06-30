import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, My name is</h5>

        <h1>Ivan Nguyo</h1>

        <h5 className="text-light">Fullstack Developer</h5>  

        <CTA/>

        <div className="me">

          <img src={ME} alt="NapsterKE" />
        </div>

      </div>
    </header>
  )
} 

export default Header