import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      
      <a href="#" className='footer__logo'>NapsterKE</a>
      
      <ul className='permalinks'>

          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contacts</a></li>

      </ul>

        <div className="footer__socials">
          
        <a href="https://twitter.com" target="_blank"><FiTwitter/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://facebook.com" target="_blank"><FiFacebook/></a>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
          
          
          
          </div>   


          <div className="footer__copyright">

            <small>&copy; NapsterKE Inc. All rights reserved</small>
          </div>
    
    
    
    </footer>
  )
}
export default Footer