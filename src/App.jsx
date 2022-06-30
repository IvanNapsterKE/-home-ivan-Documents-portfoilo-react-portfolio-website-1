 import React from 'react'



 import Header from './components/header/Header'
 import Nav from './components/nav/Nav'
//  import About from './components/about/About'
 import Blog from './components/blog/Blog'
 import Services from './components/services/Services'
 import Portfolio from './components/portfolio/Portfolio'
 import Testimonials from './components/testimonials/Testimonials'
 import Contacts from "./components/contacts/Contacts"
 import Footer from './components/footer/Footer'



const App = () => {
  return (

    <> 
    
        <Header />
        <Nav />
        {/* <About />  */}
        <Portfolio />
        <Services />
        <Blog />
        <Testimonials />
        <Contacts />
        <Footer />
    </>



  )
}

export default App