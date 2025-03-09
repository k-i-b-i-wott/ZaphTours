import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'


const navigationLinks = [
    {title: 'Home', url: '/', id: 1},
    {title: 'Destinations', url: '/destinations', id: 2},
    {title: 'Trips', url: '/trips', id: 3},
    
    {title: 'Contact', url: '/contact', id: 4},
]

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
                 {navigationLinks.map((link) => <li key={link.id}><a href={link.url}>{link.title}</a></li>)} 
            </ul>
        </nav>
    )
}