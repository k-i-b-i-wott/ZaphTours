import React from 'react'
 
import './NewsLettter.css'
export const Newsletter = () => {
  return (
   <>
   
   <div className="newsletter-sec">
        <NewsLetter />
   </div>
   </>
  )
}


function NewsLetter() {
    return (
        <div className="form">
            <h2>Subscribe to our Newsletter</h2>
            <p>Subscribe to our newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
            <div className="input-box">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}