import React from 'react'
import './Destinations.css'
import MountKenya from '../../assets/mount-kenya.jpeg'
import { FaMountainCity,FaWater } from "react-icons/fa6";
import { GiMountains , GiLion,GiSwanBreeze} from "react-icons/gi";
import { SiAnimalplanet } from "react-icons/si";


import Ruwenzori from '../../assets/Ruwenzori.jpeg'
import Nakuru from '../../assets/lake-nakuru.jpeg'
import Tsavo from '../../assets/Tsavo.jpeg'
import Nairobi from '../../assets/nairobi park.jpeg'
import Coast from '../../assets/coast.jpeg'
const Destinations = () => {
  return (
  < div className="destinations">
    <div className="destinations-section">
      
    <FeaturedDestinations image={MountKenya} icon={<FaMountainCity />} name={"Mount Kenya"} description={"Explore Africa's second-highest peak with breathtaking landscapes, glaciers and diverse wildlife. Perfect for hikers and climbers. Enjoy the rich biodiversity. Experience the thrill of summiting  Point , Lenana . Ideal for adventure lovers"} price={"ksh 4000 per person"}/>  

    <FeaturedDestinations image={Ruwenzori} icon={<GiMountains />} name={"Mouunt Ruwenzori"} description={"The Mountain of the Moon offer the stunning  alphine scenery, waterfalls and unique flora and fauna. Trek through the lush rainforests and giant lobelias and snowy peaks. Encounter rare species like the Ruwenzori  turaco and three-horned chameleon. The challenging trails make it perfect for experienced  hikers. A true hidden gem for explorers "} price={"ksh 4000 per person"}/> 

    <FeaturedDestinations image={Nakuru} icon={<FaWater />} name={"Lake Nakuru"} description={"Famous for its pink flamingos, Nakuru is a picturesque lake with stunning waterfalls. It's a popular destination for birdwatchers and nature lovers. Visit the area to experience the natural beauty of this unique lake. The scenic views and diverse wildlife make it a must-visit destination"}price={"ksh 4000 per person"} /> 

    <FeaturedDestinations image={Tsavo} icon={<SiAnimalplanet />} name={"Tsavo National Park"} description={"Kenya's largest parks and one of the most popular tourist destinations in the country. It's a paradise for wildlife enthusiasts and nature lovers. Visit the park to experience the diverse wildlife and stunning landscapes. Sport diverse wildlife.A thrilling safari experience awaits"}price={"ksh 7000 per person"} /> 

    <FeaturedDestinations image={Nairobi} icon={<GiLion />} name={"Nairobi National Park"} description={"A wildlife haven just outside the city of Nairobi, where you can spot lions,rhinos and giraffes with the Nairobi skyline as a backdrop.Visit the David Sheldrick Elephant Orphanage nearby. The park is home to over 100 mammal species. A perfect blend urban and wild adventures"} price={"ksh 3000 per person"}/>

    <FeaturedDestinations image={Coast} icon={<GiSwanBreeze />} name={"Coastal Kenya"} description={"Relax on prestine beaches, explore historic Swahili culture and dive into  crystal-clear waters. Visit Diani, Watamu and Lamu for stunning seaside escapes. Try exciting activities like snorkelling, scuba diving and dhow sailing. Discover ancient ruins like Gede and Fort Jesus. A paradise for beach lovers and history enthusiasts."} price={"ksh 4000 per person"}/>
  </div>
  </div>
  )
}

export default Destinations

function FeaturedDestinations({image, name, description, icon,price}) {
  return (
    <div className="featured-destinations">
        <div className="image-wrapper">
            <img src={image} alt="Image" />
        </div>
        <div className="icon-section">
            <div><h3>{icon}</h3></div>
            <div> <h2>{name}</h2></div>
        </div>
        <div className="description">
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
        <div className="book">
            <button>Book now</button>
        </div>
    </div>
  )
}