const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
  address: {
    type: String,
  },
  company: {
    type: String,
  },
  status: {
    type: String,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
