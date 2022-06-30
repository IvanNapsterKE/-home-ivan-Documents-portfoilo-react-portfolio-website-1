import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, My name is</h5>

        <h1>Ivan Nguyo</h1>

        <h5 className="text-light">Fullstack Developer</h5>  

      </div>
    </header>
  )
}

export default Header