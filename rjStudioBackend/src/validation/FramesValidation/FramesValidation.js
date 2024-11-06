// FrameValidation.js

const Joi = require('joi');

module.exports.frameValidation = Joi.object({
  size: Joi.string().required(),
  type: Joi.string().required(),
  frame_url: Joi.string().required(),
  quantity: Joi.number().integer().min(0).required(),
  created_at: Joi.date().iso().required(),
  updated_at: Joi.date().iso().required()
}).options({ stripUnknown: true });
