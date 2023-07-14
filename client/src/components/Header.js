import React from 'react'
import backIcon from '../assets/Back-icon.svg'
import ECOSwitch from './ECOSwitch'
import { useLocation, useNavigate } from "react-router-dom"

// const NAV_TARGETS = {
//     start: '/',
//     home: '/home',
//     trips: '/trips',
//     // trip: '/trips/:id',
//     // addTrip: '/add-trip',
//     // editTrip: '/edit-trip/:id',
//     rewards: '/rewards'
// }

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()

    // function handleNavigation() {
    //     const navBackTarget = location.state?.navBackTarget || null
    //     if (navBackTarget && Object.values(NAV_TARGETS).includes(navBackTarget)) {
    //         console.log("Navigate to target")
    //         navigate(navBackTarget)
    //     } else {
    //         console.log("Navigate to -1")
    //         navigate(-1)
    //     }
    // }

    return (
        <div className='header-container'>
            <button className='back-btn' onClick={() => navigate(-1)}>
                <img src={backIcon} alt="back button" />
            </button>

            <div className='switch-container'>
                <p className='eco-mode'>ECO</p>
                <ECOSwitch />
            </div>
        </div>
    )
}
