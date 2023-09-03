import React, { useEffect, useState } from 'react'
import GuestForm from '../components/GuestForm'
import ListBookings from '../components/ListBookings'
import {getBookings} from "../service/BookingsService"

const HotelContainer = () => {


  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((dbBookings) => {
      setBookings(dbBookings);
    })
  
  }, [])
  

  return (
    <>
    <nav>Hotel</nav>
    <hr/>
    <GuestForm/>
    <ListBookings bookings={bookings}/>
    </>
  )
}

export default HotelContainer