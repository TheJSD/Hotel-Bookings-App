const bookingsURL = 'http://localhost:9000/api/bookings'

export const getBookings = () => {
  return fetch(bookingsURL).then(res => res.json())
};