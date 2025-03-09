import React from 'react'
import './Home.css'
import Contact from '../Contact/Contact'
import About from '../../Components/About/About'
import Destinations from '../../Components/destinations/Destinations'
import Testimonies from '../../Components/Testimonies/Testimonies'
import { Link } from 'react-router-dom'
import { Newsletter } from '../../Components/NewsLetter/Newsletter'
const Home = () => {
  return (
  <>
  <LandingPage />
  <About />
  <Destinations />
  <Testimonies />
  <Newsletter />
  </>
  )
}

export default Home


function LandingPage() {
  return (
    <div className='landing-page'>
      <h1>Welcome to <span>Z</span>aph <span>T</span>ours</h1>

      <p>
        <strong>Best Safaris and Adventures!!</strong> 
        Experience breathtaking Safaris ,scenic landscapes and unforgettable adventures across Kenya with expertly curated travel packages.
      </p>

      <Link to="/contact"><button>Explore The World with Us</button></Link>
      
    </div>
  );
}