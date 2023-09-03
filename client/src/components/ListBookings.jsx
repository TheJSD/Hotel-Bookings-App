import React from 'react'

const ListBookings = ({bookings, setBookings}) => {
  
  
  const bookingsList = bookings.map((booking) => {
    
    return (
      <ul>
        <li>Name: {booking.name}</li>
        <li>Email: {booking.email}</li>
        <li>Checked In: 
        <input type='checkbox' checked={booking.checkedin}/></li>
      </ul>
    )
  })
  return (
    <div>{bookingsList}</div>
  )
}

export default ListBookings