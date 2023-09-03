const bookingsURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
  return fetch(bookingsURL).then(res => res.json())
};

export const postBooking = (payload) => {
  return fetch(bookingsURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'Application/json'}
  })
  .then(res => res.json())
}

// export const updateBooking = (id, payload) => {
//   return fetch(bookingsURL + id, {
//     method: "PUT",
//     body: JSON.stringify(payload),
//     headers: { 'Content-Type': 'application/json'}
//   })
// }