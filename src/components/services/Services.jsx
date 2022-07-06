import React from 'react'
import './services.css'
import {BsShieldFillCheck} from 'react-icons/bs'


const Services = () => {
  return (
    <section id="services" className='pattern1'>
      
        <h5>What I offer</h5>

        <h2>Services</h2>

        <div className="container services__container">
          
          <article className="service">
          
          <div className="service__head">

            {/* --------------------------------------UI/UX Design---------------------------------- */}

            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>

          </ul>

          </article>

          {/* --------------------------------------End of UI/UX Design---------------------------------- */}

          {/* ------------------------------------Web Development----------------------------------- */}


          <article className="service">


          <div className="service__head">
             
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">

            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>

          </ul>

          </article>

          {/* ------------------------------------End of Web Development----------------------------------- */}

          {/* ------------------------------------content development----------------------------------- */}
          <article className="service">
          <div className="service__head">

        
             
            <h3>Content Development</h3>
          </div>

          <ul className="service__list">

            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>
            <li>
            <BsShieldFillCheck className="service__list__icon"/>
              <p>Lorem ipsum dolor sit amet, consectetur ad</p>
            </li>

          </ul>

          </article>
          {/* ------------------------------------End of content development----------------------------------- */}

          
        </div>




    </section>
   )
}
export default Services