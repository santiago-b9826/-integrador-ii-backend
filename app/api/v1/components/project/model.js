const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user.js')

const project = new Schema({
  name: String,
  creationDate: { type: Date, default: Date.now },
  modificationDate: { type: Date, default: Date.now },
  description: String,
  state: String,
  city: String,
  neighborhood: String,
  address: String,
  // owner: User,
  // admin: [ User ],
  // audit: [ User ]
})

module.exports = mongoose.model("Projects", project);