 import React from 'react'
 import './contacts.css'
 import { HiMail } from "react-icons/hi";
 import { BsMessenger } from "react-icons/bs";
 import { FaWhatsappSquare } from "react-icons/fa";
 
const Contact = () => {
   return (
     <section id='contacts'>
       <h5>Get in touch</h5>
       <h2>Contact me</h2>

       <div className="container contact__container">
         <div className="contact__options">
           <article className="contact__option">
           <HiMail className='contact__options__icon'/>
             <h4> E-mail </h4>
             <h5>nguyoivan@gmail.com</h5>
             <a href="mailto:nguyoivan@gmail.com" target="_blank">Send me an E-mail</a>
           </article>

           <article className="contact__option">
           <FaWhatsappSquare className='contact__options__icon'/>
             <h4> Whats App </h4>
             <h5>nguyoivan@gmail.com</h5>
             <a href="https://api.WhatsApp.com/send?phone=+254705663401" target="_blank">App me</a>
           </article>

           <article className="contact__option">
           <BsMessenger className='contact__options__icon'/>
             <h4> Messenger</h4>
             <h5>Ivan Nguyo</h5>
             <a href="https://m.me/ivanovisch.nguyo" target="_blank">Send me a message</a>
           </article>
         </div>

         {/* *********************end of contacts************************* */}

          <form action="">

            <input type="text" name='name' placeholder='Your name' required />
            <input type="email" name='email' placeholder='Your E-mail' required />
            <textarea name="message" placeholder='Leave a message' rows="17" required></textarea>
            <button type='submit' className='btn btn-primary'>Send</button>


          </form>

       </div>

     </section>
   )
 }
 
 export default Contact