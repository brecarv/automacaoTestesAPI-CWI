const Joi = require("joi");

const couponWoCommerceSchema = Joi.object({
  id: Joi.number().required(),
  code: Joi.string().uuid().required(),
  amount: Joi.string().required(),
  status: Joi.string().required(),
  date_created: Joi.date().required(),
  date_created_gmt: Joi.date().required(),
  date_modified: Joi.date().required(),
  date_modified_gmt: Joi.date().required(),
  discount_type: Joi.string().required(),
  description: Joi.string().allow("").required(),
  date_expires: Joi.allow().required(),
  date_expires_gmt: Joi.allow().required(),
  usage_count: Joi.number().required(),
  individual_use: Joi.boolean().required(),
  product_ids: Joi.array().required(),
  excluded_product_ids: Joi.array().required(),
  usage_limit: Joi.any().allow(null).required(),
  usage_limit_per_user: Joi.any().allow(null).required(),
  usage_limit_to_x_items: Joi.any().allow(null).required(),
  free_shipping: Joi.boolean().required(),
  product_category: Joi.array().required(),
  excluded_product_category: Joi.array().required(),
  excluded_sale_items: Joi.boolean().required(),
  minimum_amount: Joi.string().required(),
  maximum_amount: Joi.string().required(),
  email_restrictions: Joi.array().required(),
  used_by: Joi.array().required(),
  meta_data: Joi.array().required(),
  _links: Joi.object({
    self: Joi.array().items(Joi.object({})),
    collection: Joi.array().items(Joi.object({})),
  }),
}).required();

export default couponWoCommerceSchema;
