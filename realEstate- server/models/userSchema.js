const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

});

const userModal = new mongoose.model('user',userSchema);
module.exports = userModal;