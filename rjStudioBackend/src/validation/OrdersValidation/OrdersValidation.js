const Joi = require('joi');

module.exports.orderValidation = Joi.object({
  user_id: Joi.string().required(),
  total_price: Joi.number().required(),
  image_url: Joi.string().uri().optional(),
  status: Joi.string().valid('pending', 'completed', 'cancelled').required(),
  productId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  totalAmount: Joi.number().required(),
  stripePaymentId: Joi.string().optional(),
  created_at: Joi.date().default(Date.now),
  updated_at: Joi.date().default(Date.now),
});
