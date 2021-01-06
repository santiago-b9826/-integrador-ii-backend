const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    password: String,
    role: String,
    name: String,
    mail: String
});

module.exports = mongoose.model("Users", user);