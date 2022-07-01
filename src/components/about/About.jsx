import React from 'react'
import './about.css'

import {TbMilitaryAward} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import {VscGroupByRefType} from 'react-icons/vsc'

import ME from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">

      <h5>Get to know me</h5>
      <h2>Bio</h2>

    <div className="container about__container">

      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className="about__card">

              <TbMilitaryAward className='about__icon'/>

              <h5>Experience</h5>
              <small>7+ years</small>

          </article>

          <article className="about__card">
          <FaUsers className='about__icon'/>

              <h5>Clientelle</h5>
              <small>30 + Clients</small>
              
          </article>

          <article className="about__card">
          <VscGroupByRefType className='about__icon'/>

              <h5>Projects</h5>
              <small>100+</small>
              
          </article>
        </div>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, culpa labore harum pariatur 
          at tempore voluptates quo architecto dolore. Dignissimos id incidunt eaque ullam fugit, 
          neque voluptas ducimus quam odit.
        </p>
        <a href="#contacts" className='btn btn-primary'> Buzz me</a>
      </div>
    </div>


    </section>
  )
}

export default About