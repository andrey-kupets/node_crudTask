const Joi = require('joi');
const { regExpEnum, userTypesEnum } = require('../../constant');

module.exports = Joi.object({
  username: Joi.string()
    // .alphanum() // can't use non-english
    .min(2).max(30)
    .required(),
  first_name: Joi.string()
    .min(2).max(30)
    .required(),
  last_name: Joi.string()
    .min(2).max(30)
    .required(),
  email: Joi.string()
    .regex(regExpEnum.EMAIL_REGEXP)
    .required(),
  password: Joi.string()
    .regex(regExpEnum.PASSWORD_REGEXP)
    .required(),
  user_type: Joi.string()
    .default(userTypesEnum.CUSTOMER),
});

// -i d
// - username (unique)
// - first_name
// - last_name
// - email (valid email address.)
// - password (min length 8. at least one number and one letter )
// - user_type ("Admin", "Driver')
