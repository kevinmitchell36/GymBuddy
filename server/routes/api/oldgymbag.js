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
  let dataTable = null
  console.log("Intial query")
  console.log(req.query)
  if(req.query && req.query.set === 'true') {
    dataTable = req.body
    console.log("if true")
    console.log(dataTable)
  } else {
    const id = req.body.routine
    // let routine = null
    // Pull from routine 
    await Routine.findById(id, (err, result) => {
      if (err) {
        res.send(err)
      } else {
        dataTable = result
        console.log("findById")
        console.log(dataTable)
      }
    })
  }
  // parentId is different depending on if/else path
  const newGymBag = new GymBag({
    sets: dataTable.sets,
    reps: dataTable.reps,
    time: dataTable.time,
    notes: dataTable.notes,
    parentId: 0, // ?,
    routine: routine._id,
    userId: dataTable.useId,
    createdAt: dataTable.createdAt,
    bagId: null,
  })
  newGymBag.save()
  .then((gymbag) => {
    res.send(gymbag)
  })
})

async getRecord(dataTable, res) {
  let record 
  await Routine.findById(id, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      record = result
      console.log("findById")
      console.log(record)
    }
  })
  const newGymBag = new GymBag({
    sets: dataTable.sets,
    reps: dataTable.reps,
    time: dataTable.time,
    notes: dataTable.notes,
    parentId: 0, // ?,
    routine: routine._id,
    userId: dataTable.useId,
    createdAt: dataTable.createdAt,
    bagId: null,
  })
  newGymBag.save()
  .then((gymbag) => {
    res.send(gymbag)
  })
}

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