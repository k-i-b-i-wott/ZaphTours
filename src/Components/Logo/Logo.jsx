import React from 'react'
import logo from '../../assets/logo.png'
import './Logo.css'
const Logo = () => {
  return (
   <div className='logo-section'>
     <div className='logo'>
        <img src={logo} alt="Logo" />
    </div>
    <h3><span className="head">Z</span>aph <span>T</span>ours</h3>
   </div>
  )
}

export default Logo