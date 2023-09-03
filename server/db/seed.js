use Hotel;
db.dropDatabase();

db.hotel_bookings.insertMany([
  {
    name: 'Feldspar',
    email: 'fledspar@outerwildsventures.com',
    checkedin: false
  },
  {
    name: 'V1',
    email: 'v1@gmail.com',
    checkedin: false
  },
  {
    name: 'Adam Smasher',
    email: 'adamsmasher@arasakacorp.com',
    checkedin: true
  },
  {
    name: 'John Marston',
    email: 'johnmasrton@gmail.com',
    checkedin: false
  }
]);