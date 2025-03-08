import { Routes,Route} from 'react-router-dom'

import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Destinations from './Pages/Destinations/Destinations'
import Trips from './Pages/Trips/Trips'
import Contact from './Pages/Contact/Contact'

function App() {


  return (
    <>
    <Header />   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/destinations' element={<Destinations />} />
      <Route path='/trips' element={<Trips />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    
    </>
  )
}

export default App
