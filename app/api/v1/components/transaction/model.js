const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaction = new Schema({
  id: String,
  projectId: String,
  creationDate: { type: Date, default: Date.now },
  description: String,
  income: Boolean,
  type: String,
  value: Number,
  walletId: String,
  products: [{
    description: String,
    amount: Number,
    unitValue: Number
  }]
})


module.exports = mongoose.model("Transactions", transaction);