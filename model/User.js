const { model, Schema } = require('mongoose');
const { userTypesEnum } = require('../constant');
const { USER } = require('../constant/dbCollections.enum');

const userScheme = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false
  },
  user_type: {
    type: String,
    default: userTypesEnum.CUSTOMER,
    enum: Object.values(userTypesEnum)
  },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

module.exports = model(USER, userScheme);

// -i d
// - username (unique)
// - first_name
// - last_name
// - email (valid email address.)
// - password (min length 8. at least one number and one letter )
// - user_type ("Admin", "Driver')
