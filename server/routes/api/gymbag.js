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
  getRecord(req, res)
  // parentId is different depending on if/else path
})

let getRecord = async function( req, res) {
  let dataTable = null
  console.log("Intial query")
  console.log(req.body)
  if(req.query && req.query.set === 'true') {
    dataTable = req.body
    console.log("if true")
    saveGymBagAndRespond(res, dataTable, dataTable.routine._id, dataTable._id)
  } else {
    await Routine.findById(req.body.routine, (err, result) => {
      if (err) {
        res.send(err)
      } else {
        dataTable = result
        console.log("findById")
      }
    }).then((dataTable) => {saveGymBagAndRespond(res, dataTable, null, dataTable._id)})
  }
}

let saveGymBagAndRespond = function (res, dataTable, parentId, routineId) {
  console.log("setting new gymbag...")
  console.log(dataTable)
  const newGymBag = new GymBag({
    sets: dataTable.sets,
    reps: dataTable.reps,
    time: dataTable.time,
    notes: dataTable.notes,
    parentId: parentId,
    routine: routineId,
    userId: dataTable.userId,
    createdAt: dataTable.createdAt,
    bagId: null,
  })
  console.log("complete new gymbag")
  console.log(newGymBag)
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