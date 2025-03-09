import React from 'react'
import aboutUs from '../../assets/about-us.jpg'
import './About.css'
const About = () => {
  return (
    // <div className="about">
    //   <AboutUs />
    // </div>
    <>
    <AboutUs />
    </>
  )
}

export default About

function AboutUs(){
    return (
        <div className="about-section">
            <div className="description-section">
                <h2>About Us</h2>
                <p>Welcome to Zaph Tours, your gateway to unforgettable Safaris and Adventures in Kenya and beyond. We specialize in expertly crafted travel experiences that show case breathtaking landscapes and unique cultures.</p>
              <p>
                whether it's witnessing the <strong>Great Migration</strong>
                relaxing on <strong>Diani Beach</strong>, or trekking <strong>Mount Kenya</strong>, we ensured a seamless and personalized experience for you. With, Zaph Tours, you can expect the best of Kenya and beyond.
              </p>
              <h3>Why choose Us</h3>
              <ul>
                <li>Unforgettable Safaris and Adventures</li>
                <li>Expertly Curated Travel Packages</li>
                <li>Personalized Experience</li>
                <li>Exceptional Service</li>
              </ul>
            </div>
            <div className="image-wrapper">
                <img src={aboutUs} alt="About Us" />
            </div>
        </div>
    )
} 