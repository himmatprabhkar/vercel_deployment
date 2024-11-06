// MotifBorderValidation.js

const Joi = require('joi');

module.exports.motifBorderValidation = Joi.object({
  motif_size: Joi.string().required(),  
  size: Joi.string().required(),  
  created_at: Joi.date().iso().required(),   
  updated_at: Joi.date().iso().required()  
}).options({ stripUnknown: true });

