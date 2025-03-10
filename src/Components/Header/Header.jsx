import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="header">
               <Logo />
               <NavigationSection />
    </header>
    </>
  )
}

export default Header

function NavigationSection(){
    return (
        <nav className="nav">
            <ul>                
                 <Navigation to={"/"} label={"Home"} />
                 <Navigation to={"/destinations"} label={"Destinations"} />
                 <Navigation to={"/trips"} label={"Trips"} />
                 <Navigation to={"/contact"} label={"Contact"} />                 
            </ul>
        </nav>
    )
}



function Navigation({to, label}){
  return(
    <li>
      <NavLink to={to}> {label}</NavLink>
    </li>
  )
}