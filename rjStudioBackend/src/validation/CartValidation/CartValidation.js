const Joi = require('joi');

module.exports.CartValidationValidation = Joi.object({
  user_id: Joi.string().required(),
  products: Joi.array().items(Joi.string()),
  image_url: Joi.string(),
  quantity: Joi.number().integer().min(0),
  isCheckout: Joi.boolean(),
  created_at: Joi.date().iso(),
  updated_at: Joi.date().iso()
}).options({ stripUnknown: true });

