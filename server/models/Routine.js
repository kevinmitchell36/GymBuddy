const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    type: String
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

const Routine = mongoose.model('Routine', RoutineSchema);

module.exports = Routine;