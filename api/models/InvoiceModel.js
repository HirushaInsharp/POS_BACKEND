const mongoose = require('mongoose');

const { Schema } = mongoose;

const InvoiceSchema = new Schema({
  option: {
    type: String,
  },
  customerName: {
    type: String,
  },
  invoiceNo: {
    type: String,
  },
  discount: {
    type: Number,
  },
  total: {
    type: Number,
  },
  grns: {
    type: Array,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
