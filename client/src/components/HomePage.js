import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAsync, useAsyncFn } from '../hooks/useAsync'
import { getTrips } from '../services/userTrips'

import Header from './Header'
import TripList from './TripList'
// import Weather from './Weather'
// import TripPreview from './TripPreview'
// import RewardLevel from './RewardLevel'
import { ReactComponent as PlusIcon } from '../assets/Plus_icon.svg'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'

import { TripsProvider } from '../contexts/TripsContext'


export default function HomePage({ userId }) {

    console.log("User ID: " + userId)

    // const { loading, error, value: trips } = useAsync(getTrips)

    // const getTripsFn = useAsyncFn(getTrips)

    // function onGetTrips(userId) {
    //   return getTripsFn.execute({ userId })
    //   .then(trips => {
    //     console.log("Trips: " + trips)
    //   })
    //   .catch(error => {
    //     console.log("Error: " + error)
    //   })
    // }

    // useEffect(() => {
    //     onGetTrips(userId)
    // }, [userId])

    // if (loading) return <h1>Loading</h1>

    // if (error) return <h1 className="error-msg">{error}</h1>

    return (
        <div className="home">
            <Header />

            {/* <div className="home__weather">
            <h2 className="home__weather__title">Weather for my next trip</h2>
            <div className="home__weather__items">
            <Weather />
            <Weather />
            <Weather />
            <Weather />
            <Weather />
            </div>
            </div> */}

            <div className="home__my-trips">

                <div className="home__my-trips__header">
                    <h2 className="home__my-trips__title">My trips</h2>
                    <div className="home__my-trips__buttons">
                        <Link to="/my-trips-summary" className="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</Link>
                        <Link to="/add-trip" className="home__my-trips__button--add-trip button-grey"><PlusIcon /></Link>
                    </div>
                </div>

                <div className="home__my-trips__items">
                    <TripList userId={userId} />
                </div>

            </div>

            <div className="home__my-rewards">
                <div className="home__my-rewards__header">
                    <h2 className="home__my-rewards__title">My rewards</h2>
                    <Link to="/my-rewards" className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</Link>
                </div>
                <div className="home__my-rewards__items">
                    {/* {user && (
                    <RewardLevel user={user} />
                    )} */}
                </div>
            </div>
        </div>
    )
}
