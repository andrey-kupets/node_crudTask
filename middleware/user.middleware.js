const { userService } = require('../service');
const { mutualValidators, userValidators } = require('../validator');
const { responseCodesEnum } = require('../constant');
const { errorMsg, ErrorHandler } = require('../error');

module.exports = {
  isUserValid: (req, res, next) => {
    try {
      const { email, name, password } = req.body;

      if (name === '' || email === '' || password === '') { // optional additionally, besides JOI-validation
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.EMPTY.customCode
        );
      }

      const { error } = userValidators.userCreationValidator.validate(req.body);

      if (error) { // Joi error
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.JOI_VALIDATION.customCode,
          error.details[0].message // Joi error
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  isUserIdValid: async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await userService.findUserById(userId);

      const { error } = mutualValidators.mongoIdValidator.validate(userId);

      if (error) { // Joi error
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.JOI_VALIDATION.customCode,
          error.details[0].message
        );
      }

      if (!user) {
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.INCORRECT_USER.customCode
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  doesUserAlreadyExist: async (req, res, next) => {
    try {
      const { username } = req.body;
      const user = await userService.findUserByUsername({ username });

      if (user) {
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.USER_ALREADY_EXISTS.customCode
        );
      }

      next();
    } catch (e) {
      next(e);
    }
  },

  // for possible future using
  checkUserExistenceByDynamicParams: (paramName, searchIn = 'body', dbField = paramName) => async (req, res, next) => {
    try {
      const value = req[searchIn][paramName];

      const userByParams = await userService.findUser({ [dbField]: value });

      if (!userByParams) {
        throw new ErrorHandler(
          responseCodesEnum.BAD_REQUEST,
          errorMsg.NO_USER.customCode
        );
      }

      req.user = userByParams;

      next();
    } catch (e) {
      next(e);
    }
  },
};
