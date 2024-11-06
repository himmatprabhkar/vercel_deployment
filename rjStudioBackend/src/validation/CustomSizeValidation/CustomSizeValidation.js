const Joi = require('joi');

module.exports.customSizeValidation = Joi.object({
  ImageCustomSize: Joi.string().required(),
  created_at: Joi.date().iso().required(),
  updated_at: Joi.date().iso().required()
}).options({ stripUnknown: true });

