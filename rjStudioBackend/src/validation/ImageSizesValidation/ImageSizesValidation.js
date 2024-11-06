// ImageSizeValidation.js

const Joi = require('joi');

module.exports.imageSizeValidation = Joi.object({
  ImageSize: Joi.string().required(),  
  created_at: Joi.date().iso().required(),  
  updated_at: Joi.date().iso().required(),
}).options({ stripUnknown: true });
