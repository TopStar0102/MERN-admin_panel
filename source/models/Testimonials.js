const mongoose = require('mongoose');

const testimonialsSchema = new mongoose.Schema({
  __v: {
    type: Number,
    select: false
  },
  header: {
    type: String,
    max: 255
  },
  introduce: {
    type: String,
    max: 255
  },
  goal: {
    type: String,
    max: 255
  },
  proficeincy: {
    type: String,
    max: 255
  },
  areas: {
    type: String,
    max: 255
  },
  content: {
    type: String,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Testimonials', testimonialsSchema);
