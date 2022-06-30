import React from 'react'
import './nav.css'

import {BiHomeCircle} from 'react-icons/bi'
import {ImBriefcase} from 'react-icons/im'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {RiArticleLine} from "react-icons/ri";
import {BiMessageRoundedDetail} from "react-icons/bi"
import {RiCustomerService2Line} from 'react-icons/ri'

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><ImBriefcase/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      <a href="#blog" onClick={()=> setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}><RiArticleLine/></a>
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><BiMessageRoundedDetail/></a>
      <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><RiCustomerService2Line/></a>
      
    </nav>
  )
}

export default Nav