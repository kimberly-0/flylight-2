import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useUser } from './hooks/useUser'
import Start from './components/StartPage'
import Home from './components/HomePage'

import TripList from './components/TripList'

function App() {

  const currentUserId = Number(useUser().id)
  console.log("Current user: " + JSON.stringify(currentUserId))

  return (
    <div className='App'>
        <Routes>
          {/* <Route path='/' element={<TripList currentUser={currentUser} />} /> */}

          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home userId={currentUserId} />} />

          {/* <Route path='/add-trip'element={<AddTrip user={currentUser} />} />
          <Route path='/my-trips-summary' element={<Trips user={currentUser} />} />
          <Route path='/trips/:id' element={<MyTrip user={currentUser} />} />
          <Route path='/edit-trip/:id' element={<EditMyTrip user={currentUser} />} />
          <Route path='/my-rewards' element={<MyRewards user={currentUser} />} /> */}
        </Routes>
    </div>
  );
}

export default App;