import React from 'react'
import "./portfolio.css"
import {BsPatchCheckFill} from 'react-icons/bs'


const Portfolio = () => {
  return (
    <section id="portfolio">

          <h5>Portfolio</h5>
          <h2>Skills & Experience</h2>

      <div className="container portfolio__container">
                  
        <div className="portfolio__frontend">
                    
            <h3>Front End Development</h3>
              
              <div className="portfolio__content">
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
              </div>
                  
        </div>
                  
        <div className="portfolio__backend">
                  
            <h3>Back End Development</h3>

            <div className="portfolio__content">
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
                  <article className='portfolio__details'>
                        <BsPatchCheckFill />
                          <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                  </article>
              </div>
                  
        </div>
                
      </div>

    </section>
  )
}
export default Portfolio