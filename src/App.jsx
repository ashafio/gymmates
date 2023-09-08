import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import GymMembers from './components/GymMembers/GymMembers'
import Navbar from './components/Navbar/Navbar'
import Pricelist from './components/Pricelist/Pricelist'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-7xl text-center text-purple-600'>GymMates</h1>
    <p className='text-center ml-96'>... Your AI Gym Trainer</p>  
    <Pricelist></Pricelist>   
    <Dashboard></Dashboard>  
    <br />
    <hr />
    <GymMembers></GymMembers> 
    </>
  )
}

export default App
