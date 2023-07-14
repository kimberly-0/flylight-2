import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import TripsList from './TripsList'
import WeatherItem from './WeatherItem'
import RewardStatus from './RewardStatus'
import { ReactComponent as PlusIcon } from '../assets/Plus_icon.svg'

export default function HomePage({ userId }) {
    return (
        <div className="home">
            <Header />

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

            <div className="home__my-trips">

                <div className="home__my-trips__header">
                    <h2 className="home__my-trips__title">My trips</h2>
                    <div className="home__my-trips__buttons">
                        <Link to="/trips" className="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</Link>
                        <Link to="/add-trip" className="home__my-trips__button--add-trip button-grey"><PlusIcon /></Link>
                    </div>
                </div>

                <div className="home__my-trips__items">
                    <TripsList userId={userId} shortList={true} />
                </div>

            </div>

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
