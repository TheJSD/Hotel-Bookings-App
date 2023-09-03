const express = require ('express');
const cors = require ('cors');

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

const app = express();
app.use(cors());
app.use(express.json());



MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');
    const bookingsCollection = db.collection('hotel_bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.err);


app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
