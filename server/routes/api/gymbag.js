const express = require('express');
const router = express.Router();
const GymBag = require('../../models/GymBag');
// const checkJwt = require('../../index')


router.get("/", (req, res) => {
  console.log("hello world")
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id)
  GymBag.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result)
    }
  }); 
});

module.exports = router