import React from 'react'
import './services.css'
import {BsShieldFillCheck} from 'react-icons/bs'


const Services = () => {
  return (
    <section id="services">
      
        <h5>What I offer</h5>

        <h2>Services</h2>

        <div className="container services__container">
          <article className="service"></article>
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

          {/* --------------------------------------End of UI/UX Design---------------------------------- */}

          {/* ------------------------------------Web Development----------------------------------- */}


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



          {/* ------------------------------------End of Web Development----------------------------------- */}

          {/* ------------------------------------content development----------------------------------- */}

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


          {/* ------------------------------------End of content development----------------------------------- */}
        </div>




    </section>
   )
}
export default Services