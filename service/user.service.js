const { User } = require('../model');

module.exports = {
  createUser: (body) => User.create(body),

  findUsers: (query) => User.find(query),

  findUserById: (userId) => User.findById(userId), // optional

  findUserByUsername: (username) => User.findOne(username), // optional

  findUser: (requestBodyField) => User.findOne(requestBodyField), // for dynamic middleware

  deleteUserById: (userId) => User.findByIdAndDelete(userId),

  updateOneUser: (userId, updatingObj) => User.findByIdAndUpdate(userId, updatingObj),
};
