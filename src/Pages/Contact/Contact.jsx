import React from 'react'
import './Contact.css'

import { FaLinkedinIn,FaPhone , FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";




const Contact = () => {
  return (
    <>
      <ContactInfo />
    </>
  )
}

export default Contact

function ContactInfo(){
  return(
  <div className="contact-info">
    <div className="title">
      <h2>Get In touch</h2>
    </div>
    <div className="contact-details">
      <form action="">
      <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send Message</button>
      </form>

      
          <div className='info'>
              <h4>Call Us</h4>
              <p className="phone"><FaPhone /> &nbsp; +254 123 456 789</p>
              <h4>Email Us</h4>
              <p className="email"><MdMailOutline/> &nbsp; zaphtours@tours.com</p>
              <h4>Visit Us</h4>
              <p className="address"> <FaMapMarkerAlt/> &nbsp; 123 Main Street, Nairobi, Kenya</p>  

              <h3>Follow Us</h3>
                  <div className="socials">
                  
                  <FaFacebookF />
                  <FaSquareXTwitter />
                  <FaInstagramSquare />
                  <FaLinkedinIn />
                  </div>      
            </div>
           
    </div>
    <div className="map">
    <iframe width="600" height="200" title='Nairobi' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=123%20Main%20Street,%20Nairobi,%20Kenya+(Zaph%20Tours)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">best drones</a></iframe>
    </div>
  </div>
           
    
  )
}