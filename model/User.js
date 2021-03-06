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

userScheme.virtual('full_name').get(function() {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = model(USER, userScheme);
