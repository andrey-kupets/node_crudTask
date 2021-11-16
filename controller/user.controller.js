const { messagesEnum, responseCodesEnum } = require('../constant');
const { passwordHelper } = require('../helper');
const { userService } = require('../service');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      const { password } = req.body;

      const hashPassword = await passwordHelper.hash(password);

      await userService.createUser({ ...req.body, password: hashPassword });

      res.status(responseCodesEnum.CREATED)
        .json(messagesEnum.USER_CREATED);
      // .json({ user }); if needed
    } catch (e) {
      next(e);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await userService.findUsers(req.query);

      res.status(responseCodesEnum.OK)
        .json(users);
    } catch (e) {
      next(e);
    }
  },

  removeUserById: async (req, res, next) => {
    try {
      const { userId } = req.params;

      await userService.deleteUserById(userId);

      res.json(messagesEnum.USER_DELETED)
        .status(responseCodesEnum.NO_CONTENT);
    } catch (e) {
      next(e);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const { params: { userId }, body } = req;

      await userService.updateOneUser(userId, body);

      res.status(responseCodesEnum.OK)
        .json(messagesEnum.USER_UPDATED);
    } catch (e) {
      next(e);
    }
  }
};
