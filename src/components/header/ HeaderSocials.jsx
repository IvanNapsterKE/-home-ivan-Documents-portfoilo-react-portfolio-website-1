import React from 'react'
import {FiTwitter} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'


const  HeaderSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://twitter.com" target="_blank"><FiTwitter/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>
        <a href="https://facebook.com" target="_blank"><FiFacebook/></a>
        <a href="https://linkedin.com" target="_blank"><FiLinkedin/></a>
    </div>
  )
}

export default  HeaderSocials