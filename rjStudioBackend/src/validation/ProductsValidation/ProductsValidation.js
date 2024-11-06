// ProductValidation.js

const Joi = require('joi');

module.exports.productValidation = Joi.object({
  name: Joi.string().required(),  
  motif_id: Joi.string().required(), 
  frame_id: Joi.string().required(), 
  user_id: Joi.string().required(), 
  created_at: Joi.date().iso().required(), 
  updated_at: Joi.date().iso().required() 
}).options({ stripUnknown: true });
