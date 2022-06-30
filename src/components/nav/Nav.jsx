import React from 'react'
import './nav.css'

import {BiHomeCircle} from 'react-icons/bi'
import {ImBriefcase} from 'react-icons/im'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {BsInfoCircleFill} from "react-icons/bs";
import {BiMessageRoundedDetail} from "react-icons/bi"
import {RiCustomerService2Line} from 'react-icons/ri'



const Nav = () => {
  return (
    <nav>
      <a href="#about"><BiHomeCircle/></a>
      <a href="#experience"><ImBriefcase/></a>
      <a href="#services"><MdOutlineMiscellaneousServices/></a>
      <a href="#portfolio"><BsInfoCircleFill/></a>
      <a href="#testimonials"><BiMessageRoundedDetail/></a>
      <a href="#contacts"><RiCustomerService2Line/></a>
      
    </nav>
  )
}

export default Nav