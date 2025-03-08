import React from 'react'
import './Testimonies.css'
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'


const Testimonies = () => {
  return (
    <>
        <div className="testimonies">            
        
        <Testimonials image={person1} testimony={"Zaph Tours took us on a breathtaking journey through Kenya's breathtaking landscapes. The guides were knowlegeable and th wildlife sightings were beyond our dream"} name={" Sarah M,, UK"} title={`"Unforgetable Safari Experience"`} /> 
        <Testimonials image={person2} testimony={"From climbing Mount Kenyato exploring the Savanah, Zaph Tours made every moment thrilling and seamless. Highly recommend their expert team!"} name={"Aish K, SA"} title={`"Adventure of a Lifetime"`}  /> 

        <Testimonials image={person3} testimony={"We saw Big five in one day, thanks to our amazing guides. Zaph Tours provided a safe and enjoyable safari experience i've evr had!"} name={"Michael L, Australia"} title={`"Wildlife Wonders with Zaph Tours"`}/> 
        </div>
    </>
  )
}

export default Testimonies


function Testimonials({name, testimony, image, title}) {
    return(
        <div className="testimony">
            <div className="imageWrapper">
                <img src={image} alt="image" />
            </div>
            <div className="testimony-content">
                <h3>{title}</h3>
                <p>
                    {testimony}
                </p>
                <h4>
                    ~{name}
                </h4>
            </div>
        </div>
    )

}