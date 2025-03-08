import React from 'react'
import './Home.css'
import Contact from '../Contact/Contact'
import About from '../../Components/About/About'
import Destinations from '../../Components/destinations/Destinations'
import Testimonies from '../../Components/Testimonies/Testimonies'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <>
  <LandingPage />
  <About />
  <Destinations />
  <Testimonies />
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

          <Link><button><a href={Contact}>Explore The World with Us</a></button></Link>
      
    </div>
  );
}