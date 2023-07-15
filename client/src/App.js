import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useUser } from './hooks/useUser'
import Header from './components/Header'
import Start from './components/StartPage'
import Home from './components/HomePage'
import TripsList from './components/TripsList'
import TripPage from './components/TripPage'
import AddTripPage from './components/AddTripPage'
import EditTripPage from './components/EditTripPage'
import RewardsPage from './components/RewardsPage'

function App() {

  const currentUserId = Number(useUser()?.id)
  console.log("Current user: " + JSON.stringify(currentUserId))

  return (
    <div className='App'>
        <Header />

        <Routes>          
          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home userId={currentUserId} />} />
          <Route path='/trips' element={<TripsList userId={currentUserId} />} />
          <Route path='/trips/:id' element={<TripPage userId={currentUserId} />} />
          <Route path='/add-trip'element={<AddTripPage userId={currentUserId} />} />
          <Route path='/edit-trip/:id' element={<EditTripPage userId={currentUserId} />} />
          <Route path='/rewards' element={<RewardsPage userId={currentUserId} />} />
        </Routes>
    </div>
  )
}

export default App