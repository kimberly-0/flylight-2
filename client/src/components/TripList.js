import { useAsync } from '../hooks/useAsync'
import { Link } from 'react-router-dom'
import { getTrips } from '../services/userTrips'
import TripPreview from './TripPreview'

export default function TripList({ userId }) {
    const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])

    if (loading) return <h1>Loading</h1>

    if (error) return <h1 className="error-msg">{error}</h1>

    // console.log("Trips: " + JSON.stringify(trips))

    return (
        <>
            {trips?.length > 0 ? (
                <div className='trip-list'>
                    {trips.map(trip => {
                        return (

                            <div key={trip.id}>
                                <TripPreview trip={trip} />
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="my-trips__items__empty">
                    <p>You don't have any trips yet, <br/>
                    click here to add a new trip!</p>
                    <div className="my-trips__items__empty__arrow-container">
                    {/* <Arrow /> */}
                    </div>
                </div>
            )}
        </>
    )
}