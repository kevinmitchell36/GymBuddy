const express = require('express');
const router = express.Router();
const GymBag = require('../../models/GymBag');
const Routine = require('../../models/Routine');



router.get("/", (req, res) => {
  GymBag.find({})
  .populate('routine')
  .exec(function (err, gymbag) {
    if (err) return handleError(err);
   res.send(gymbag);
  });
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

router.post('/', (req, res) => {
  console.log(req)
  const id = req.body.routine
  let routine = null
  Routine.findById(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      routine = result
      const newGymBag = new GymBag({
        sets: routine.sets,
        reps: routine.reps,
        time: routine.time,
        notes: routine.notes,
        setId: 1, // ?
        routine: routine._id
      })
      newGymBag.save()
      .then((gymbag) => {
        res.send(gymbag)
      })
    }
  });
})

router.patch('/:id', (req, res) => {
  GymBag.findOne({
    _id: req.params.id
  }).then(gymbag => {
    gymbag.sets = req.body.sets || gymbag.sets
    gymbag.reps = req.body.reps || gymbag.reps
    gymbag.time = req.body.time || gymbag.time
    gymbag.notes = req.body.notes || gymbag.notes
    gymbag.setId = req.body.setId || gymbag.setId
    gymbag.routine = req.body.routine || gymbag.routine
    gymbag.save()
    console.log(gymbag)
  }).then(gymbag => {
    res.send("Patched")
  })
  .catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
  GymBag.deleteOne({_id: req.params.id})
    .then((gymbag) => {
      res.send(gymbag)
    })
})

module.exports = router