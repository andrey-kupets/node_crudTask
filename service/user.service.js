const { User } = require('../model');

module.exports = {
  createUser: (body) => User.create(body),
};
