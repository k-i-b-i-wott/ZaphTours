import React from 'react'
import './Testimonies.css'
import logo from '../../assets/logo.png'

const Testimonies = () => {
  return (
    <>
        <Testimonials />   
        <Testimonials /> 
        <Testimonials /> 
        <Testimonials /> 
        <Testimonials />  
    </>
  )
}

export default Testimonies


function Testimonials(){
    return(
        <div className="testimony">
            <div className="imageWrapper">
                <img src={logo} alt="image" />
            </div>
            <div className="testimony-content">
                <h3>Ratings</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit tenetur ratione animi tempora ullam veniam magnam praesentium explicabo iure!
                </p>
                <h4>
                    name
                </h4>
            </div>
        </div>
    )

}