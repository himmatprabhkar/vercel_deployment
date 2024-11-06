// UserValidation.js

const Joi = require('joi');

module.exports.userValidation = Joi.object({
  username: Joi.string().required(), 
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  created_at: Joi.date().iso().required(),
  updated_at: Joi.date().iso().required()
}).options({ stripUnknown: true });
