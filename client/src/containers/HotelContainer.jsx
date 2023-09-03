import React, { useEffect, useState } from 'react'
import GuestForm from '../components/GuestForm'
import ListBookings from '../components/ListBookings'
import {getBookings, deleteBooking, updateBooking} from "../service/BookingsService"

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

  const checkInToggle = (id, newCheckInStatus) => {
    const checkInUpdate = { checkedin: newCheckInStatus };
    updateBooking(id, checkInUpdate)
    .then(() => {
      const bookingsCopy = bookings.map(booking => booking)
      const bookingToUpdate = bookings.map(booking => booking._id).indexOf(id);
      bookingsCopy[bookingToUpdate].checkedin = newCheckInStatus;
      setBookings(bookingsCopy)
    })
  }

  return (
    <>
    <nav><h1>HotelCodeClan_</h1></nav>
    <hr/>
    <GuestForm addBooking={addBooking}/>
    <ListBookings bookings={bookings} removeBooking={removeBooking} checkInToggle={checkInToggle}/>
    </>
  )
}

export default HotelContainer