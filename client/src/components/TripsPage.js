import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as PlusIcon} from '../assets/Plus_icon.svg'
import Header from './Header'
import TripsList from './TripsList'

export default function TripsPage({ userId }) {
  return (
    <div className="my-trips">
        <Header/>

        <div className="my-trips__header">
          <h2 className="my-trips__title">My trips</h2>
          <Link to="/add-trip" className="my-trips__button--add-trip button-grey"><PlusIcon /></Link>
        </div>

        <div className="my-trips__items">
          <TripsList userId={userId} shortList={false} />
        </div>
      </div>
  )
}
