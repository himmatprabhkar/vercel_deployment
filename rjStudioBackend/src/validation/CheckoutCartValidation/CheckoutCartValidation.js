const Joi = require('joi');

module.exports.checkoutCartValidation = Joi.object({
  cart_id: Joi.string().required()
});
