import React from 'react'
import logo from '../../assets/logo.png'
import './Destination.css'
import mountKenya from '../../assets/kenya.jpeg'
import nakuru from '../../assets/nakuru.jpeg'
import hellsGate from '../../assets/hells gate.jpeg'
import diani from '../../assets/diani.jpeg'
import mara from '../../assets/maasai-mara.jpeg'
import Lamu from '../../assets/lamu.jpeg'
import { Link } from 'react-router-dom'
import { FaUserGroup } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
const Destinations = () => {
  return (
    <div className='destinations'>

      <Destination image={mara} Name={"Maasai Mara National Reserve"} Description={"One of Africa's famous wildlife reserves, Maasai Mara is a vast wilderness area in Kenya known for its diverse wildlife reserves,Maasai Mara is known for it's biodiversity and the great Wildebeest Migration, one of the Seven Wonders of the World.Visitors can witness the Big Five and a wide variety of bird species, The Maasai Mara offers a true Safari adventure with stunning landscapes, rich Maasai culture and wildlife."} individualPrice={"ksh 4000 "} groupPrice={"ksh 7000 "} />
      <Destination image={diani} Name={"Diani Beach"} Description={"Located on the Southern coast of Kenya, Diani Beach is a paradise for beach lovers, offering soft white sands, warm Indian Ocean Waters, and lush palm trees. It is perfect for snorkelling, scuba diving, Kitesurfing, and deep-sea fishing. Diani is also home to vibrant nightlife, luxurius beachfront resorts and breathtaking sunsets. Whether you're looking for relaxation or adventure, Diani Beach is a must-visit destination in Kenya."} individualPrice={"ksh 6000 "} groupPrice={"ksh 10000 "} />

      <Destination image={nakuru}  Name={"Lake Nakuru National Park"} Description={" Famous for it's spectacular pink flamingo population, Lake Nakuru is a UNESCO-listed park that is also home to black and white rhinos, giraffes, lions and leapards. The lake is surrounded by beatiful acacia forests and rolling hills, making it a scenic and peaceful destination. Lake Nakuru offers a fantastic wildlife experience,birdwatching opportunities and breathtaking viewpoints."} individualPrice={"ksh 5000 "} groupPrice={"ksh 8000 "}/>

      <Destination image={Lamu} Name={"Lamu Island"} Description={"Lamu Island is one of the Oldest and most well-preserved Swahili settlements. With its narrow, winding streets, centuries-old architecture and car-free environment, it offers unique cultural experience. Visitors can explore ancient mosques, visit Lamu Meuseum, sail on traditional dhow boats and relax on secluded beaches."} individualPrice={"ksh 7000 "} groupPrice={"ksh 12000 "} />
     
     <Destination image={hellsGate} Name={"Hell's Gate National Park"} Description={"A unique destination known for it's towering cliffs,gorges and geothermal activity.Hell's Gate National Park offers breathtaking views, diverse wildlife and stunning geothermal activity. Adventure seekers can hike through Hell's Gate Gorge, spot zebras and giraffes or explore Olkaria GeothermalSpa. "} individualPrice={"ksh 4000 "} groupPrice={"ksh 9000 "} />


    <Destination image={mountKenya}  Name={"Mount Kenya"} Description={"Offers an exciting challenge for climbers and nature lovers. The Mountains rugged peaks, glaciers and alpine meadows provide a stunning backdrop for hiking and trekking expeditions. Mount Kenya combines adventure and breathtaking natural beauty."} individualPrice={"ksh 5000 "} groupPrice={"ksh 10000 "}/>

   
    </div>
  )
}

export default Destinations

function Destination({image,Name,Description,individualPrice,groupPrice}){
  return(
    <div className="destinationWrapper">
      <div className="imageWrapper">
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <h3>{Name}</h3>
        <p>{Description}</p>
      </div>
      <div className="moreInfo">
        <Link to="#"><button>More Info</button></Link>
      </div>
      <div className="pricing-section">
        <h4><IoMdPerson /> &nbsp; <strong>{individualPrice}</strong></h4>
        <h4><FaUserGroup />&nbsp; <strong>{groupPrice}</strong></h4>
      </div>
    </div>
  )
}