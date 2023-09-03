const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // router.put('/:id', (req, res) => {
  //   const _id = req.params;
  //   const updatedData = req.body;
  //   collection
  //   .updateOne({_id: ObjectID(_id)}, {$set: updatedData})
  //   .then((doc) => {
  //     res.json(doc);
  //   })
  //   .catch(
  //     (err) => {
  //       console.log("Ran into an error:", err);
  //       res.status({status: 500, error: err})
  //     }
  //   )
  // })

  return router
};

module.exports = createRouter;
