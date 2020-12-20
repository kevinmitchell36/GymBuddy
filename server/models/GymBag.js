const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GymBagSchema = new mongoose.Schema({
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  time: {
    type: Number
  },
  notes: {
    type: String
  },
  parentId: {
    type: String
  },
  routine: {
    type: Schema.Types.ObjectId,
    ref: "Routine"
  },
  userId: {
    type: String
  },
  createdAt: {
    type: Date
  },
  bagId: {
    type: Number
  } 
});

/*
const RoutineSchema = new mongoose.Schema({
  name: {
    type: String
    // required: true
  },
  wtype: {
    type: String
    // required: true
  },
  categories: {
    type: Array
    // default: undefined
    // required: true
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  time: {
    type: Number
  },
  notes: {
    type: String
  },
  userId: {
    type: String
  }   
});
*/
// const Routine = mongoose.model('Routine', RoutineSchema);
const GymBag = mongoose.model('GymBag', GymBagSchema);

module.exports = GymBag
