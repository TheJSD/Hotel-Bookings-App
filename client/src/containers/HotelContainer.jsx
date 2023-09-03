import React, { useEffect, useState } from 'react'
import GuestForm from '../components/GuestForm'
import ListBookings from '../components/ListBookings'
import {getBookings, deleteBooking} from "../service/BookingsService"

const HotelContainer = () => {


  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((dbBookings) => {
      setBookings(dbBookings);
    })
  
  }, [])

  const addBooking = (booking) => {
    const bookingsCopy = bookings.map(booking => booking);
    bookingsCopy.push(booking);
    setBookings(bookingsCopy)
  }
  
  const removeBooking = (id) => {
    deleteBooking(id)
    .then(() => {
      const bookingsCopy = bookings.map(booking => booking)
      const bookingToDelete = bookings.map(booking => booking._id).indexOf(id);
      bookingsCopy.splice(bookingToDelete, 1);
      setBookings(bookingsCopy)
    })
    
  }

  return (
    <>
    <nav>Hotel</nav>
    <hr/>
    <GuestForm addBooking={addBooking}/>
    <ListBookings bookings={bookings} removeBooking={removeBooking}/>
    </>
  )
}

export default HotelContainer