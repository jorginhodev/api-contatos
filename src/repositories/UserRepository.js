const mongoose = require("mongoose");
const User = require("../models/User");

exports.listUsers = async () => {
  const res = await User.find({}, "name email phone company role type subject");
  return res;
};

exports.createUser = async data => {
  const user = new User(data);
  await user.save();
};

exports.updateUser = async (id, data) => {
  await User.findByIdAndUpdate(id, {
    $set: data
  });
};

exports.deleteUser = async id => {
  await User.findOneAndRemove(id);
};
