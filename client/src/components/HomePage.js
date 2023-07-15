import React from 'react'
import TripsList from './TripsList'
import WeatherList from './WeatherList'
import RewardStatusList from './RewardStatusList'

export default function HomePage({ userId }) {
    return (
        <div className="home">

            <WeatherList userId={userId} />

            <TripsList userId={userId} shortList={true} />

            <RewardStatusList userId={userId} isRewardPage={false} />

        </div>
    )
}
