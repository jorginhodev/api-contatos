const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
