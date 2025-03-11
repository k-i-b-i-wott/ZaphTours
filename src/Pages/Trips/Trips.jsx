import './Trips.css'
import logo from '../../assets/logo.png'
import deluxe1 from '../../assets/deluxe1.jpeg'
import deluxe2 from '../../assets/deluxe2.jpeg'
import deluxe3 from '../../assets/deluxe3.jpeg'
import deluxe4 from '../../assets/deluxe4.jpeg'
import eco1 from '../../assets/eco1.jpg'
import eco2 from '../../assets/eco2.jpg'
import eco3 from '../../assets/eco3.jpg'
import eco4 from '../../assets/eco4.jpg'
import cuisin1 from '../../assets/cuisin1.jpeg'
import cuisin2 from '../../assets/cuisin2.jpeg'
import cuisin3 from '../../assets/cuisin3.jpeg'
import cuisin4 from '../../assets/cuisin4.jpeg'

import fam1 from '../../assets/fam1.jpeg'
import fam2 from '../../assets/fam2.jpeg'
import fam3 from '../../assets/fam3.jpeg'
import fam4 from '../../assets/fam4.jpeg'
import beach1 from '../../assets/beach1.jpeg'
import beach2 from '../../assets/beach2.jpeg'
import beach3 from '../../assets/beach3.jpeg'
import beach4 from '../../assets/beach4.jpeg'

import honey1 from '../../assets/honey1.jpg'
import honey2 from '../../assets/honey2.jpg'
import honey3 from '../../assets/honey3.jpg'
import honey4 from '../../assets/honey4.jpg'
 import maa1 from '../../assets/maa1.jpeg'
 import maa2 from '../../assets/maa2.jpeg'
 import maa3 from '../../assets/maa3.jpeg'
 import maa4 from '../../assets/maa4.jpeg'
 import trek1 from '../../assets/trek1.jpeg'
 import trek2 from '../../assets/trek1.jpg'
 import trek3 from '../../assets/trek3.jpeg'
 import trek4 from '../../assets/trek4.jpeg'
 import wellness1 from '../../assets/wellness1.jpeg'
 import wellness2 from '../../assets/wellness2.jpeg'
 import wellness3 from '../../assets/wellness3.jpeg'
 import wellness4 from '../../assets/wellness4.jpg'
 import saf1 from '../../assets/saf1.jpeg'
 import saf2 from '../../assets/saf2.jpeg'
 import saf3 from '../../assets/saf3.jpeg'
 import saf4 from '../../assets/saf4.jpeg'

const Trips = () => {
  return (
    <div className='packages-wrapper'>
      <PackageContent title={"HoneyMoon Bliss Safari"} img1={honey1} img2={honey2} img3={honey3} img4={honey4} description={"Celebrate your love with an intimate and unforgettable Safari experience. This package combines thrilling wildlife adventures in Amboseli National Park with serene moments in a luxurious, secluded lodge. Enjoy private game drives, a hot air balloon ride at dawn, and a romantic dinner under th stars."} logo={logo} price={"20,000 per couple for 6dayy"} offerPrice={"Free couples Massage for bookings made by June 15,2025"} />
    
 <PackageContent title={"Family Wildlife Adventure"} img1={fam1} img2={fam2} img3={fam3} img4={fam4} description={"Bring your family on a journey filled with discovery. This package includes guided safaris, cultural experiences, and accommodations tailored for all ages. Spot wildlife, learn local traditions, and enjoy evenings by the campfire-ideal for creating shared memories in Kenya's stunning landscapes"} logo={logo} price={"Ksh 12000 for a family of 4 for 5 days/4 nights"} offerPrice={"Free activity pack for kids under 12"} />

 <PackageContent title={"Thrilling Adventure Trek"} img1={trek1} img2={trek2} img3={trek3} img4={trek4} logo={logo} description={"Designed for adrenaline enthusiast, this package offers heart-pounding experiences across Kenya's rugged terrain. Hike volcanic craters, kayak serene lakes, and explore off-the-beaten-path trails with expert guides.It's the ultimate adventure for those craving excitement in the wild."} price={"Ksh 15500 per person for 7 days/6 nights"} offerPrice={"10% off for bookings of 4+ adventurers "} />
 <PackageContent title={"Eco-Friendly Explorer"} logo={logo} description={"Travel with purpose on this eco-conscious adventure. Engage in conservation projects, stay in sustainable lodges and explore Kenya's ecosystems with minimal impact. Perfect for nature lovers who want to protect the beauty they experience"} 
 img1={eco1} img2={eco2} img3={eco3} img4={eco4}
 price={"Ksh 10,000 per person "} offerPrice={"ksh 1000 donated to conservation per booking"} />

 <PackageContent title={"Tropical Beach Escape"}  description={"Relax and recharge on Kenya's breathtaking coast. This package offers sun-soaked days on white sandy beaches, water sports, and stays in beachfront resorts. Add a short safari for a perfect mix of coastal bliss and wild adventure."}
 img1={beach1} img2={beach2} img3={beach3} img4={beach4} 
 price={"Ksh 14000 per person for 5 days/4 nights"} offerPrice={"Free scuba lesson for bookings by July 31, 2025"}/>

<PackageContent title={"Holistic Wellness Retreat"} description={"Restore balance with this wellness-focused package. Enjoy yoga, mediation and spa treatments in the peaceful natural surroundings, complemented by nutritious cuisine. A rejuvenating escape that nurtures both body and soul amidst Kenya's beauty."} img1={wellness1} img2={wellness2} img3={wellness3} img4={wellness4} price={"Ksh 17 per person for 5 days/4 nights"} offerPrice={"Free guided meditation session with every booking"} />
<PackageContent title={"Cultural Odyssey Tour"} description={"Step into kenya's rich cultural taestry with this immersive package. Visit indigenous communities, explore ancient sites and participate in traditional crefts and dances. This tour offers an authentic connection to the people and heritage that define kenya's soul." }
img1={maa1} img2={maa2} img3={maa3} img4={maa4} 
  price={"Ksh 9000"} offerPrice={"Free guided market tour with every booking"}/>



<PackageContent  title={"Signature Wildlife Safaris "} description={"Discover Kenya's legendary wildlife with our flagship safari package. Journey through iconic parks like Maasai Mara and Amboselli, tracking the Nig Five and witnessing the Great Migration. Expert guides and cozy camps ensure an unparralleled safari experience."} img1={saf1} img2={saf2} img3={saf3} img4={saf4}  price={"Ksh 6000"} offerPrice={"Early bird discount of Ksh 150 for bookings 60 days in advance"}/>


<PackageContent title={"Deluxe Vacations Package"} description={"Indulge in extravagance with this luxury package. Enjoy private safaris, world-class accommodations, and personalized service in Kenya's most stunning locations. From fine dining to exclusive dining and tours, this is travel redefined for the discerning explorer."} img1={deluxe1} img2={deluxe2} img3={deluxe3} img4={deluxe4} price={"Ksh 4500 per person for 7 days/6 nights"} offerPrice={"Free private transfer for bookings over Ksh 10000"} />

<PackageContent  title={"Culinary Tours Package"}  description={"Embark on a flavorful journey through Kenya's Cuisin. Learn traditional recipes, taste local delicacies, and dine at unique locations from bustling markets to coastal eateries. A treat for foodies eager to explore Kenya's edible heritage."}  img1={cuisin1} img2={cuisin2} img3={cuisin3} img4={cuisin4} price={"Ksh 7000 "} offerPrice={"Free spice kit for bookings of 2+ people"}/>





    </div>
  )
}

export default Trips


function PackageContent({title,img1, img2, img3, img4, description, price, offerPrice}){
 return(
  <div className="package-wrapper">
    <h2>{title}</h2>
      <div className="gallery">
        <img src={img1}alt="img1" />
        <img src={img2} alt="img3" />
        <img src={img3} alt="img4" />
        <img src={img4}alt="img4" />    
      </div>      
      <div className="description">
       {description}
      </div>
      <div className="pricing">
        <h5>{price}</h5>
        <h5>{offerPrice}</h5>        
      </div>
      <button>Book Now</button>
</div>
 )
}