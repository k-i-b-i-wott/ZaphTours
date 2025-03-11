import './Trips.css'
import logo from '../../assets/logo.png'

const Trips = () => {
  return (
    <div className='packages-wrapper'>
      <PackageContent tittle="HoneyMoon Bliss Safari" description={"Celebrate your love with an intimate and unforgettable Safari experience. This package combines thrilling wildlife adventures in Amboseli National Park with serene moments in a luxurious, secluded lodge. Enjoy private game drives, a hot air balloon ride at dawn, and a romantic dinner under th stars."} logo={logo} price={"20,000 per couple for 6days/5nights"} offerPrice={"Free couples Massage for bookings made by June 15,2025"} />
    
 <PackageContent title={"Family Wildlife Adventure"} description={"Bring your family on a journey filled with discovery. This package includes guided safaris, cultural experiences, and accommodations tailored for all ages. Spot wildlife, learn local traditions, and enjoy evenings by the campfire-ideal for creating shared memories in Kenya's stunning landscapes"} logo={logo} price={"Ksh 10000 for a family of 4 for 5 days/4 nights"} offerPrice={"Free activity pack for kids under 12"} />

 <PackageContent title={"Thrilling Adventure Trek"}  logo={logo} description={"Designed for adrenaline enthusiast, this package offers heart-pounding experiences across Kenya's rugged terrain. Hike volcanic craters, kayak serene lakes, and explore off-the-beaten-path trails with expert guides.It's the ultimate adventure for those craving excitement in the wild."} price={"Ksh 15500 per person for 7 days/6 nights"} offerPrice={"10% off for bookings of 4+ adventurers "} />
 <PackageContent title={"Eco-Friendly Explorer"} logo={logo} description={"Travel with purpose on this eco-conscious adventure. Engage in conservation projects, stay in sustainable lodges and explore Kenya's ecosystems with minimal impact. Perfect for nature lovers who want to protect the beauty they experience"} price={"Ksh 10,000 per person for 5 days/4 nights"} offerPrice={"ksh 1000 donated to conservation per booking"} />

 <PackageContent title={"Tropical Beach Escape"} logo={logo}  description={"Relax and recharge on Kenya's breathtaking coast. This package offers sun-soaked days on white sandy beaches, water sports, and stays in beachfront resorts. Add a short safari for a perfect mix of coastal bliss and wild adventure."} price={"Ksh 14000 per person for 5 days/4 nights"} offerPrice={"Free scuba lesson for bookings by July 31, 2025"}/>

<PackageContent title={"Holistic Wellness Retreat"} description={"Restore balance with this wellness-focused package. Enjoy yoga, mediation and spa treatments in the peaceful natural surroundings, complemented by nutritious cuisine. A rejuvenating escape that nurtures both body and soul amidst Kenya's beauty."} logo={logo} price={"Ksh 17 per person for 5 days/4 nights"} offerPrice={"Free guided meditation session with every booking"} />





 









    </div>
  )
}

export default Trips


function PackageContent({title,logo, description, price, offerPrice}){
 return(
  <div className="package-wrapper">
    <h2>{title}</h2>
      <div className="gallery">
        <img src={logo}alt="img1" />
        <img src={logo} alt="img3" />
        <img src={logo} alt="img4" />
        <img src={logo}alt="img4" />    
      </div>      
      <div className="description">
       {description}
      </div>
      <div className="pricing">
        <h5>{price}</h5>
        <h5>{offerPrice}</h5>        
      </div>
</div>
 )
}