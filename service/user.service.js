const { User } = require('../model');

module.exports = {
  createUser: (body) => User.create(body),

  findUsers: (query) => User.find(query),

  deleteUserById: (userId) => User.findByIdAndDelete(userId),

  updateOneUser: (userId, updatingObj) => User.findByIdAndUpdate(userId, updatingObj),
};
