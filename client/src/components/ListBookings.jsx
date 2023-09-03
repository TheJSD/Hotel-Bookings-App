import React from 'react'
// import { updateBooking } from '../service/BookingsService'

const ListBookings = ({bookings, removeBooking, checkInToggle}) => {
  
  // const checkInToggle = (evt, booking) => {
  //   const checkInStatus = evt.target.checked
  //   const updatedCheckIn = { 'checkedin': checkInStatus}
  //   updateBooking(booking._id, updatedCheckIn)

  // }
  
  const bookingsList = bookings.map((booking) => {
    
    return (
      <ul>
        <li>Name: {booking.name}</li>
        <li>Email: {booking.email}</li>
        <li>Checked In: 
        <input type='checkbox' checked={booking.checkedin} onClick={(evt) => checkInToggle(booking._id, evt.target.checked)}/></li>
        <button onClick={() => removeBooking(booking._id)}>DELETE</button>
      </ul>
    )
  })
  return (
    <div>{bookingsList}</div>
  )
}

export default ListBookings