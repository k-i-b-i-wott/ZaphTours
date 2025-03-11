
import { FaFacebookF ,FaLinkedinIn} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import './Footer.css'


import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <Footer className='footer'>
      <FooterDetails />
    </Footer>
  )
}

export default Footer



function FooterDetails()
{
  return(
    <div className="footer">
    <div className="footer-details">
      <div className="company">        
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
       <h3><span className="head">Z</span>aph <span>T</span>ours</h3>  
      </div>
      <div className="quick-Links">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Destinations</a></li>
          <li><a href="">Trips</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
      </div>
      <div className="help">
        <h3>Company</h3>

      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li> <a href="#">Shipping</a> </li>
        <li> <a href="#">Order status</a></li>
        <li><a href="#">Payment Options</a> </li>
      </ul>
      </div>
      <div className="blog">
        <h3>Our Communities</h3>
        <ul>
          <li><a href="#">Zaph Community</a></li>
          <li><a href="#">Zaph Forum</a></li>
       
          <li><a href="#">Zaph Chat</a></li>
        </ul>  
      </div>
      <div className="help">
        <h3>Support</h3>
        <ul><li><a href="#">Safari Help</a></li>
        <li><a href="#">Report an issue</a></li></ul>
      </div>
      <div className="social">
        <h3>Follow Us</h3>
        <FaFacebookF />
        <FaSquareXTwitter />
        <FaInstagramSquare />
        <FaLinkedinIn />
      </div>
     
    </div>
    <div className="copy">&copy; 2025  <a href="https://github.com/k-i-b-i-wott"> &nbsp; ZaphTours</a> . All rights reserved.</div>
    </div>
  )
}
