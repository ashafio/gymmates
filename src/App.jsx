import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer'
import GymMembers from './components/GymMembers/GymMembers'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Pricelist from './components/Pricelist/Pricelist'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-7xl text-center text-purple-600'>GymMates</h1>
    <p className='text-center md:ml-96'>... Your AI Gym Trainer</p>  
    <Intro></Intro>
    <Pricelist></Pricelist>   
    <Faqs></Faqs>
    <Dashboard></Dashboard>  

    <br />
    <hr />
    <GymMembers></GymMembers> 
    <Footer></Footer>

    </>
  )
}

export default App
