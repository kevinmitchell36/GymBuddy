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
  setId: {
    type: Number
  },
  routineId: {
    type: Number
  },
  userId: {
    type: Number
  },
  createdAt: {
    type: String
  }
})

const GymBag = mongoose.model('GymBag', GymBagSchema);

module.exports = GymBag;