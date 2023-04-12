const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Roles', roleSchema);
