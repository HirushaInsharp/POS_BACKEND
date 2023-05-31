const mongoose = require('mongoose');

const { Schema } = mongoose;

const GRNSchema = new Schema({
  option: {
    type: String,
  },
  code: {
    type: String,
  },
  partNo: {
    type: String,
  },
  qty: {
    type: Number,
  },
  salesPrice: {
    type: Number,
  },
  quality: {
    type: String,
  },
  supName: {
    type: String,
  },
  description: {
    type: String,
  },
  feedDate: {
    type: Date,
    default: Date.now,
  },
  grnNo: {
    type: Number,
  },
  totInvAmt: {
    type: Number,
  },
  supInvNo: {
    type: Number,
  },
  invDate: {
    type: Date,
    default: Date.now,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GRN', GRNSchema);
