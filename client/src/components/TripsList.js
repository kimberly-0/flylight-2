import { useAsync } from '../hooks/useAsync'
import { getTrips } from '../services/userTrips'
import TripPreview from './TripPreview'
import { ReactComponent as Arrow } from '../assets/Arrow.svg'

export default function TripsList({ userId, shortList }) {
    const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])

    if (loading) return <h1>Loading</h1>

    if (error) return <h1 className="error-msg">{error}</h1>

    const numOfListItems = shortList ? 2 : trips.length

    return (
        <>
            {trips?.length > 0 ? (
                <div className='trip-list'>
                    {trips.slice(0, numOfListItems).map(trip => 
                        <div key={trip.id}>
                            <TripPreview trip={trip} />
                        </div>
                    )}
                </div>
            ) : (
                <div className="my-trips__items__empty">
                    <p>You don't have any trips yet, <br/>
                    click here to add a new trip!</p>
                    <div className="my-trips__items__empty__arrow-container">
                    <Arrow />
                    </div>
                </div>
            )}
        </>
    )
}