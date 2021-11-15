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
  }
};
