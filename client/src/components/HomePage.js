import React from 'react'
import { Link } from 'react-router-dom'
import { useAsync } from '../hooks/useAsync'
import { getTrips } from '../services/userTrips'
import TripsList from './TripsList'
import WeatherItem from './WeatherItem'
import RewardStatus from './RewardStatus'

export default function HomePage({ userId }) {

    const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])

    if (loading) return <h1>Loading</h1>

    if (error) return <h1 className="error-msg">{error}</h1>

    // console.log("Trips: " + JSON.stringify(trips))

    return (
        <div className="home">

            <div className="home__weather">
                <h2 className="home__weather__title">Weather for my next trip</h2>
                <div className="home__weather__items">
                    <WeatherItem />
                    <WeatherItem />
                    <WeatherItem />
                    <WeatherItem />
                    <WeatherItem />
                </div>
            </div>

            <TripsList userId={userId} shortList={true} />

            <div className="home__my-rewards">
                <div className="home__my-rewards__header">
                    <h2 className="home__my-rewards__title">My rewards</h2>
                    <Link to="/rewards" className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</Link>
                </div>
                <div className="home__my-rewards__items">
                    <RewardStatus userId={userId} />
                </div>
            </div>

        </div>
    )
}
