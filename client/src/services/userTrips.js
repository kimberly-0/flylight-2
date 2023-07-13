import { makeRequest } from './makeRequest'

export function getTrips({ userId }) {
    return makeRequest(`/users/${userId}/trips`)
}

export function getTrip({ userId, tripId }) {
    return makeRequest(`/users/${userId}/trips/${tripId}`)
}